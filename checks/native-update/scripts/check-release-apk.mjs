import {readFile,readdir,access} from 'node:fs/promises';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import assert from 'node:assert/strict';
const file=process.argv[2];if(!file)throw Error('Provide the APK from the production container');
const release=JSON.parse(await readFile(new URL('../public/latest-release.json',import.meta.url),'utf8'));
const bytes=await readFile(file);assert.equal(bytes.length,release.apkBytes,'APK size');assert.equal(createHash('sha256').update(bytes).digest('hex'),release.apkSha256,'APK SHA-256');
let tools;
const sdk=process.env.ANDROID_HOME||process.env.ANDROID_SDK_ROOT;
if(sdk){const dirs=(await readdir(join(sdk,'build-tools'))).sort((a,b)=>b.localeCompare(a,undefined,{numeric:true}));for(const d of dirs){const p=join(sdk,'build-tools',d);try{await access(join(p,'apksigner'));await access(join(p,'aapt2'));tools={signer:join(p,'apksigner'),aapt:join(p,'aapt2')};break;}catch{}}}
if(!tools){const root=process.env.ENDURO_ANDROID_TOOLS||'/workspace/toolchains/enduro-android';tools={java:join(root,'java/jdk-21.0.8/bin/java'),jar:join(root,'build-tools/android-15/lib/apksigner.jar'),aapt:join(root,'build-tools/android-15/aapt2')};}
function run(command,args){const result=spawnSync(command,args,{encoding:'utf8'});assert.equal(result.status,0,result.error?.message||result.stderr||'Android verification tool failed');return result.stdout;}
const signed=tools.signer?run(tools.signer,['verify','--print-certs',file]):run(tools.java,['-jar',tools.jar,'verify','--print-certs',file]);
const fingerprint=signed.match(/Signer #1 certificate SHA-256 digest: ([a-f\d]+)/i)?.[1]?.toLowerCase();assert.ok(fingerprint,'APK signer fingerprint');
const links=JSON.parse(await readFile(new URL('../public/.well-known/assetlinks.json',import.meta.url),'utf8'));
const approved=links.filter(x=>x.target?.package_name==='com.enduromoto.game').flatMap(x=>x.target.sha256_cert_fingerprints||[]).map(x=>x.replaceAll(':','').toLowerCase());assert.ok(approved.includes(fingerprint),'APK uses the existing approved signing certificate');
const manifest=run(tools.aapt,['dump','badging',file]);assert.ok(manifest.includes("package: name='com.enduromoto.game'"));assert.ok(manifest.includes("versionCode='"+release.versionCode+"'"));assert.ok(manifest.includes("versionName='"+release.version+"'"));
console.log('PASS Android release: checksum, size, signature, approved certificate, package and version');
