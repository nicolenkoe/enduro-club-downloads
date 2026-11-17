"""Publish only the pet-camera subtree, preserving the exact last live Pages artifact."""
import pathlib,subprocess,json,os,hashlib,zipfile,tarfile,shutil,urllib.request,urllib.error,tempfile,re,time,sys,datetime
root=pathlib.Path(__file__).resolve().parent
PUBLIC='https://nicolenkoe.github.io/enduro-club-downloads/'
def api(path):return json.loads(subprocess.check_output(['gh','api',path]))
def public(path):
 request=urllib.request.Request(PUBLIC+path,headers={'User-Agent':'Hvost-Pages-integrity-check','Accept-Encoding':'identity'})
 with urllib.request.urlopen(request,timeout=45) as response:return response.read()
def latest_live_run(repo):
 for deployment in api(f'repos/{repo}/deployments?environment=github-pages&per_page=30'):
  statuses=api(f'repos/{repo}/deployments/{deployment["id"]}/statuses')
  if statuses and statuses[0]['state']=='success':
   match=re.search(r'/actions/runs/(\d+)',statuses[0].get('log_url',''))
   if match:return int(match.group(1))
 raise RuntimeError('No successful published deployment; refusing to replace unrelated pages')
def build():
 repo=os.environ['GH_REPO'];run=latest_live_run(repo)
 artifacts=api(f'repos/{repo}/actions/runs/{run}/artifacts')['artifacts']
 base=next(a for a in artifacts if a['name']=='github-pages' and not a['expired'])
 out=root/'_site'
 if out.exists():shutil.rmtree(out)
 out.mkdir()
 with tempfile.TemporaryDirectory() as tmp:
  archive=pathlib.Path(tmp)/'pages.zip'
  with archive.open('wb') as destination:subprocess.run(['gh','api',f'repos/{repo}/actions/artifacts/{base["id"]}/zip'],stdout=destination,check=True)
  with zipfile.ZipFile(archive) as z:
   name=next(n for n in z.namelist() if n.endswith('artifact.tar'))
   tar=pathlib.Path(tmp)/'pages.tar'
   with z.open(name) as source,tar.open('wb') as destination:shutil.copyfileobj(source,destination)
  with tarfile.open(tar) as archive:
   for entry in archive.getmembers():
    p=pathlib.PurePosixPath(entry.name)
    if p.is_absolute() or '..' in p.parts or entry.issym() or entry.islnk():raise RuntimeError('Unsafe Pages artifact')
   archive.extractall(out,filter='data')
 # A stale snapshot must never roll another application's current page back.
 for name in ['index.html','latest-release.json','play/index.html']:
  if (out/name).is_file():assert (out/name).read_bytes()==public(name),f'Published page changed: {name}'
 own=out/'hvost-pod-kontrolem'
 if own.exists():shutil.rmtree(own)
 shutil.copytree(root/'hvost-pod-kontrolem',own)
 catalog=json.loads((own/'versions.json').read_text());latest=json.loads((own/'release.json').read_text());feed=json.loads((own/'update.json').read_text())
 assert feed['versionCode']==latest['versionCode']==catalog['latest']
 assert feed['sha256']==latest['sha256'] and feed['bytes']==latest['bytes']
 assert feed['parts']==[{'url':latest['fileName'],'size':latest['bytes']}]
 for info in catalog['releases']:
  name=info['fileName'];assert pathlib.Path(name).name==name and name.endswith('.apk')
  target=own/name;count=(info['bytes']+40*1024*1024-1)//(40*1024*1024)
  with target.open('wb') as destination:
   for i in range(count):
    with (root/'hvost-apk-parts'/f'{name}.part{i}').open('rb') as source:shutil.copyfileobj(source,destination)
  assert target.stat().st_size==info['bytes']
  with target.open('rb') as source:assert hashlib.file_digest(source,'sha256').hexdigest()==info['sha256']
 print(f'Preserved live artifact from run{run}; verified both Hvost APKs and feed')
def verify():
 own=root/'hvost-pod-kontrolem';latest=json.loads((own/'release.json').read_text());base='hvost-pod-kontrolem/'
 for attempt in range(15):
  try:
   feed=json.loads(public(base+'update.json?t='+str(time.time_ns())))
   if feed['versionCode']==latest['versionCode']:break
  except (urllib.error.URLError,ValueError):pass
  time.sleep(2)
 else:raise RuntimeError('New update feed is not publicly available')
 for path in ['','testing/','versions/']:
  page=public(base+path).decode('utf8');assert 'Хвост' in page
 assert json.loads(public(base+'versions.json'))['latest']==latest['versionCode']
 digest=hashlib.sha256();count=0
 request=urllib.request.Request(PUBLIC+base+latest['fileName'],headers={'Accept-Encoding':'identity'})
 with urllib.request.urlopen(request,timeout=90) as response:
  while block:=response.read(1024*1024):digest.update(block);count+=len(block)
 assert count==latest['bytes'] and digest.hexdigest()==latest['sha256']
 voice=json.loads(public(base+'assets/voice-info.json'));assert voice['female'] and voice['version']==latest['version']
 for ext in ['mp4','mp3','vtt']:
  name=f'assets/guide-{latest["version"]}.{ext}';assert public(base+name)==(own/name).read_bytes()
 report={'version':latest['version'],'channel':feed['channel'],'apkBytes':count,'apkSha256':digest.hexdigest(),'pageUrl':PUBLIC+base,'versionsUrl':PUBLIC+base+'versions/','checkedUtc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'voice':voice,'basePreserved':True}
 (root/'hvost-verification.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
 print('Verified public feed, website, catalog, female guide and complete APK without authentication')
if __name__=='__main__':build() if sys.argv[1]=='build' else verify()
