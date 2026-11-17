import pathlib,json,hashlib,shutil
root=pathlib.Path(__file__).resolve().parent
out=root/'_site'
if out.exists():shutil.rmtree(out)
out.mkdir()
for name in ['index.html','guide.mp4','latest-release.json','voice-info.json','page.js','download-green.css','club-logo-download.png','download-qr.png','download-media','fonts']:
 p=root/'site'/name
 if p.is_dir():shutil.copytree(p,out/name)
 else:shutil.copy2(p,out/name)
r=json.loads((out/'latest-release.json').read_text());apk=out/'Enduro-0.15.68.apk'
with apk.open('wb') as f:
 for i in range(2):f.write((root/'apk-parts'/f'Enduro-Club-0.15.68.apk.part{i}').read_bytes())
assert apk.stat().st_size==r['apkBytes'],'Incorrect APK size'
assert hashlib.file_digest(apk.open('rb'),'sha256').hexdigest()==r['apkSha256'],'Incorrect APK checksum'
r['apkUrl']='./Enduro-0.15.68.apk';r.pop('webZipUrl',None)
(out/'latest-release.json').write_text(json.dumps(r,ensure_ascii=False,indent=2))
print('Verified APK bytes and checksum. Only _site is published.')
