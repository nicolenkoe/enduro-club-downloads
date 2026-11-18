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
