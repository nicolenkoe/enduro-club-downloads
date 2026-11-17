import pathlib,json,hashlib,shutil
root=pathlib.Path(__file__).resolve().parent
out=root/'_site'
if out.exists():shutil.rmtree(out)
out.mkdir()
for name in ['index.html','checks-0.15.69.mp4','guide.mp4','latest-release.json','releases.json','previous-release.json','voice-info.json','page.js','download-green.css','club-logo-download.png','download-qr.png','download-arrow.svg','download-media','fonts']:
 p=root/'site'/name
 if p.is_dir():shutil.copytree(p,out/name)
 else:shutil.copy2(p,out/name)
shutil.copy2(out/'guide.mp4',out/'guide-irina.mp4')
shutil.copy2(out/'guide.mp4',out/'guide-player-irina.mp4')
shutil.copytree(root/'browser-game',out/'play')
r=json.loads((out/'latest-release.json').read_text());apk=out/'Enduro-0.15.69.apk'
with apk.open('wb') as f:
 for i in range(2):f.write((root/'apk-parts'/f'Enduro-Club-0.15.69.apk.part{i}').read_bytes())
previous=json.loads((out/'previous-release.json').read_text())
previous_apk=out/'Enduro-0.15.68.apk'
with previous_apk.open('wb') as target:
 for i in range(2):target.write((root/'apk-parts'/f'Enduro-Club-0.15.68.apk.part{i}').read_bytes())
assert previous_apk.stat().st_size==previous['apkBytes']
with previous_apk.open('rb') as file:assert hashlib.file_digest(file,'sha256').hexdigest()==previous['apkSha256']
assert apk.stat().st_size==r['apkBytes'],'Incorrect APK size'
assert hashlib.file_digest(apk.open('rb'),'sha256').hexdigest()==r['apkSha256'],'Incorrect APK checksum'
r['apkUrl']='./Enduro-0.15.69.apk';r.pop('webZipUrl',None)
(out/'latest-release.json').write_text(json.dumps(r,ensure_ascii=False,indent=2))
print('Verified APK bytes and checksum. Only _site is published.')

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
