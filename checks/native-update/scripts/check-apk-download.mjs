import {mkdtemp,readFile,rm,writeFile} from 'node:fs/promises';
import {join} from 'node:path';import {tmpdir} from 'node:os';import {createHash} from 'node:crypto';import {spawnSync} from 'node:child_process';
const url=new URL(process.argv[2]||'invalid');
if(url.protocol!=='https:'||url.username||url.password)throw Error('An anonymous external HTTPS APK URL is required');
const release=JSON.parse(await readFile(new URL('../public/latest-release.json',import.meta.url),'utf8'));
let directory;
try{
 const response=await fetch(url,{redirect:'follow',headers:{Accept:'application/vnd.android.package-archive'},signal:AbortSignal.timeout(300000)});
 if(response.status!==200)throw Error('Full GET returned HTTP '+response.status);
 if(new URL(response.url).protocol!=='https:')throw Error('Insecure redirect');
 const mime=(response.headers.get('content-type')||'').split(';')[0].trim();
 if(!['application/vnd.android.package-archive','application/octet-stream','application/zip'].includes(mime))throw Error('Unexpected APK MIME: '+mime);
 const parts=[];let size=0;const sha=createHash('sha256');
 for await(const part of response.body){size+=part.length;if(size>release.apkBytes)throw Error('Download larger than approved APK');parts.push(part);sha.update(part);}
 const hash=sha.digest('hex');if(size!==release.apkBytes||hash!==release.apkSha256)throw Error('Downloaded size or SHA-256 differs from approved APK');
 directory=await mkdtemp(join(tmpdir(),'enduro-delivery-'));const path=join(directory,'download.apk');await writeFile(path,Buffer.concat(parts));
 const result=spawnSync(process.execPath,[new URL('check-release-apk.mjs',import.meta.url).pathname,path],{stdio:'inherit'});if(result.status!==0)throw Error('Downloaded APK identity/signature validation failed');
 console.log(JSON.stringify({delivery:'PASS',requestedUrl:url.href,finalUrl:response.url,bytes:size,sha256:hash,version:release.version,checkedAt:new Date().toISOString(),phoneTested:false},null,2));
}catch(error){console.error('DELIVERY BLOCKED: '+error.message);process.exitCode=1;}finally{if(directory)await rm(directory,{recursive:true,force:true});}
