import pathlib,json,hashlib,shutil
root=pathlib.Path(__file__).resolve().parent
out=root/'_site'
if out.exists():shutil.rmtree(out)
out.mkdir()
for name in ['index.html','checks-0.15.70.mp4','guide.mp4','latest-release.json','releases.json','previous-release.json','voice-info.json','page.js','download-green.css','club-logo-download.png','download-qr.png','download-arrow.svg','download-media','fonts']:
 p=root/'site'/name
 if p.is_dir():shutil.copytree(p,out/name)
 else:shutil.copy2(p,out/name)
shutil.copy2(out/'guide.mp4',out/'guide-irina.mp4')
shutil.copy2(out/'guide.mp4',out/'guide-player-irina.mp4')
shutil.copytree(root/'browser-game',out/'play')
catalog=json.loads((out/'releases.json').read_text())
for release in catalog['releases']:
 name='Enduro-'+release['version']+'.apk'
 apk=out/name
 with apk.open('wb') as target:
  for part in sorted((root/'apk-parts').glob('Enduro-Club-'+release['version']+'.apk.part*')):
   with part.open('rb') as source:shutil.copyfileobj(source,target)
 assert apk.stat().st_size==release['apkBytes'],name+' size'
 with apk.open('rb') as file:assert hashlib.file_digest(file,'sha256').hexdigest()==release['apkSha256'],name+' SHA256'
print('All Enduro APKs verified against catalogue.')

# Separate pet-camera website, archive and update feed. Existing Enduro files are unchanged.
hvost=root/'hvost-pod-kontrolem'
if hvost.is_dir():
 shutil.copytree(hvost,out/'hvost-pod-kontrolem')
 catalog=json.loads((hvost/'versions.json').read_text())
 latest=json.loads((hvost/'release.json').read_text())
 feed=json.loads((hvost/'update.json').read_text())
 assert feed['versionCode']==latest['versionCode']==catalog['latest']
 assert feed['sha256']==latest['sha256'] and feed['bytes']==latest['bytes']
 assert feed['parts']==[{'url':latest['fileName'],'size':latest['bytes']}]
 for info in catalog['releases']:
  name=info['fileName']
  assert pathlib.Path(name).name==name and name.endswith('.apk')
  target=out/'hvost-pod-kontrolem'/name
  count=(info['bytes']+40*1024*1024-1)//(40*1024*1024)
  with target.open('wb') as destination:
   for i in range(count):
    with (root/'hvost-apk-parts'/f'{name}.part{i}').open('rb') as part:shutil.copyfileobj(part,destination)
  assert target.stat().st_size==info['bytes'],'Incorrect Hvost APK size'
  with target.open('rb') as uploaded:assert hashlib.file_digest(uploaded,'sha256').hexdigest()==info['sha256'],'Incorrect Hvost APK checksum'
 print('Hvost versions, feed and complete APKs verified; Enduro preserved.')
