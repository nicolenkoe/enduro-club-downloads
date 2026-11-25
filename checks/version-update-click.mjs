const {chromium}=await import(process.env.PLAYWRIGHT_PACKAGE||'/tmp/enduro-npm-cache/_npx/420ff84f11983ee5/node_modules/playwright/index.mjs');import assert from'node:assert/strict';
const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||undefined,args:['--no-sandbox']});
try{
 for(const native of [false,true]){
 const page=await browser.newPage();await page.addInitScript(()=>localStorage.setItem('enduro-player-profile-v1',JSON.stringify({firstName:'Тест',age:30,gender:'male'})));
 if(native)await page.addInitScript(()=>{window.updateCalls=0;window.EnduroOrientation={setLocked(){},checkForUpdates(){window.updateCalls++}};});
 await page.goto(process.env.GAME_TEST_URL||'http://127.0.0.1:5282/enduro-club-downloads/play/');const badge=page.getByRole('button',{name:/Версия 0.15.72/});await badge.waitFor();
 if(native){await badge.click();assert.equal(await page.evaluate(()=>window.updateCalls),1);await badge.focus();await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>window.updateCalls),2);await page.evaluate(()=>document.body.classList.add('riding'));await badge.evaluate(el=>el.click());assert.equal(await page.evaluate(()=>window.updateCalls),2);console.log('PASS APK bridge click + keyboard, no checks during race');}
 else{
 let latest='0.15.72',fail=false,requests=0;
 await page.route('**/latest-release.json*',route=>{requests++;return fail?route.abort():route.fulfill({json:{version:latest}})});
 let dialog=page.waitForEvent('dialog');await badge.click();let d=await dialog;assert.equal(d.type(),'alert');assert.match(d.message(),/актуальная.*0.15.72/);await d.dismiss();await page.waitForFunction(()=>!document.querySelector('#running-version').disabled);
 latest='0.15.100';dialog=page.waitForEvent('dialog');await badge.click();d=await dialog;assert.equal(d.type(),'confirm');assert.match(d.message(),/0.15.100/);await d.dismiss();await page.waitForFunction(()=>!document.querySelector('#running-version').disabled);assert.equal(await badge.textContent(),'Веб · 0.15.72');
 fail=true;dialog=page.waitForEvent('dialog');await badge.click();d=await dialog;assert.match(d.message(),/Не удалось проверить/);await d.dismiss();await page.waitForFunction(()=>!document.querySelector('#running-version').disabled);
 fail=false;latest='0.15.73';dialog=page.waitForEvent('dialog');await badge.click();d=await dialog;await d.accept();await page.waitForURL(url=>url.searchParams.get('build')==='0.15.73');assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('enduro-player-profile-v1')).firstName),'Тест');assert.equal(await page.locator('#running-version').textContent(),'Веб · 0.15.72');assert.equal(requests,4);console.log('PASS WEB current/newer numeric version, later, offline/retry, cache-busted navigation and profile preservation');
 }
 await page.close();
 }
}finally{await browser.close();}
