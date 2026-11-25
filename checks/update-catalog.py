import json,pathlib,hashlib
root=pathlib.Path('_site');catalog=json.loads((root/'releases.json').read_text())['releases'];latest=json.loads((root/'latest-release.json').read_text())
assert max(r['versionCode'] for r in catalog)==latest['versionCode']
assert latest.get('webVersion',latest['version'])==latest['version'],'APK and web release versions must match'
for r in catalog:
 assert r['status'] in ['stable','testing','experimental','unstable']
 assert r['apkUrl'].startswith('./Enduro-') and '/' not in r['apkUrl'][2:]
 file=root/r['apkUrl'][2:]
 assert file.stat().st_size==r['apkBytes']
 with file.open('rb') as f:assert hashlib.file_digest(f,'sha256').hexdigest()==r['apkSha256']
print('PASS published catalogue and complete APK files')
