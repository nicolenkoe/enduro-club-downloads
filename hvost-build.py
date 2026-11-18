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
 # The independent site must be live before retiring the old address.
 with urllib.request.urlopen('https://nicolenkoe.github.io/hvost-pod-kontrolem-downloads/update.json',timeout=45) as response:
  assert json.load(response)['versionCode']>=58,'Independent site is not ready'
 def untouched():
  return {str(p.relative_to(out)):hashlib.sha256(p.read_bytes()).hexdigest() for p in out.rglob('*') if p.is_file() and p.relative_to(out).parts[0]!='hvost-pod-kontrolem'}
 before=untouched();own=out/'hvost-pod-kontrolem'
 if own.exists():shutil.rmtree(own)
 assert untouched()==before,'Unrelated published files changed'
 print('Preserved every unrelated published file; removed only old Hvost subtree')
def verify():
 out=root/'_site'
 for name in ['index.html','latest-release.json','play/index.html']:
  if (out/name).is_file():assert public(name)==(out/name).read_bytes(),f'Enduro changed: {name}'
 paths=['hvost-pod-kontrolem/','hvost-pod-kontrolem/update.json','hvost-pod-kontrolem/HvostPodKontrolem-0.57.apk']
 results=[]
 for path in paths:
  for attempt in range(20):
   try:
    request=urllib.request.Request(PUBLIC+path+'?removed='+str(time.time_ns()),method='HEAD',headers={'Cache-Control':'no-cache'})
    with urllib.request.urlopen(request,timeout=30) as response:code=response.status
   except urllib.error.HTTPError as e:code=e.code
   if code==404:break
   time.sleep(2)
  assert code==404,f'Old Hvost still published: {path} ({code})';results.append(path)
 report={'removedProject':'hvost-pod-kontrolem','oldPaths404':results,'enduroRootFilesUnchanged':True,'independentSite':'https://nicolenkoe.github.io/hvost-pod-kontrolem-downloads/','checkedUtc':datetime.datetime.now(datetime.timezone.utc).isoformat()}
 (root/'hvost-verification.json').write_text(json.dumps(report,indent=2)+'\n')
 print('PASS Enduro preserved, old Hvost URLs return404')
if __name__=='__main__':build() if sys.argv[1]=='build' else verify()
