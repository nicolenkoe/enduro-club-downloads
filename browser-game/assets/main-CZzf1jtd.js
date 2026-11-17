const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./evolution-player-aHPQ6gN0.js","./yarik-rider-mobile-BWi8zch8.js","./track-preparation-Cv7ffVxw.js","./index-CIiGZCSm.js","./custom-track-editor-DufalnyU.js","./race-routes-sySCX39I.js","./race-routes-Cul4sm1L.css","./custom-track-editor-DKge4VD8.css","./stadium-VKh_VQ4w.js","./stadium-C7qfPpxd.css"])))=>i.map(i=>d[i]);
import{_ as So}from"./index-CIiGZCSm.js";function _h(i="92"){return`<svg class="fuel-canister-icon" viewBox="0 0 32 36" aria-hidden="true"><path d="M7 9V4h12l4 5h3v23H5V12z" fill="${{92:"#d9a52b",95:"#56a76c",100:"#dc684d"}[i]||"#d9a52b"}" stroke="#17291c" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 8V6h7l2 2M7 11h7M10 17l11 10M21 17L10 27" fill="none" stroke="#fff3ce" stroke-width="2.2" stroke-linecap="round"/><path d="M4 9l4-4 3 4-4 4z" fill="#444d42"/><path d="M5 30h21" stroke="#17291c" stroke-width="1.5"/></svg>`}const Dr=[{id:"92",name:"АИ-92",price:0,litres:1/0,power:1},{id:"95",name:"АИ-95",price:199,litres:20,power:1.1},{id:"100",name:"АИ-100",price:299,litres:20,power:1.2}],bo=i=>Dr.find(e=>e.id===String(i))||Dr[0],vf=6;function xf(i){return String(i)==="95"?125/120:String(i)==="100"?132/120:1}function Tc(i){const e={92:0,95:.5,100:1}[String(i)]||0;return{tone:1+.008*e,brightness:1+.06*e,noise:1-.12*e,wobble:1-.18*e}}function yf(i={}){const e={95:Math.max(0,Number(i[95])||0),100:Math.max(0,Number(i[100])||0)};let t="92";return{trial(n){return n=String(n),n!=="95"&&n!=="100"?!1:(e[n]=20,t=n,!0)},get grade(){return t},remaining(n=t){return n==="92"?1/0:e[n]||0},select(n){return n=String(n),!Dr.some(r=>r.id===n)||n!=="92"&&!this.remaining(n)?!1:(t=n,!0)},update(n,r,{active:s=!0,throttle:a=0,distanceMetres:o=null}={}){return s&&t!=="92"&&!n.crashed&&(Math.abs(n.speed)>.3||a>0)&&(e[t]=Math.max(0,e[t]-Math.max(0,Number.isFinite(o)?o:Math.abs(n.speed||0)*Math.max(0,r))*vf/1e5),e[t]<=1e-8&&(t="92")),n.fuelGrade=t,t!=="92"&&(n.fuelRecordGrade=String(Math.max(Number(n.fuelRecordGrade)||92,Number(t)))),n.fuelPowerMultiplier=bo(t).power,t}}}const ur=yf();function Ea(i,{onBack:e,onContinue:t}){i.innerHTML=`<button class="back" id="fuel-back">← Назад</button><div class="intro"><h1>Заправка</h1></div><div class="difficulty-grid">${Dr.map(r=>`<article class="card fuel-card" data-fuel-card="${r.id}"><div class="card-body"><h2 class="fuel-grade-title">${_h(r.id)}${r.name}</h2><p>${r.price?`Тяга +${Math.round((r.power-1)*100)}% · канистра 20 л`:"Бесплатно · без ограничений"}</p><button data-fuel="${r.id}" >${r.price?"Пробные 20 л · бесплатно":"Заправить бесплатно"}</button></div></article>`).join("")}</div><p>Тестовая заправка бесплатна, деньги не списываются. Расход — 6 л/100 км. Канистра 20 л — примерно 333 км. После окончания — бесплатный АИ-92. Итоговые разгон и скорость зависят от мотоцикла, установленного тюнинга и топлива.</p><div class="selection-bar"><p id="fuel-selected">Топливо: ${bo(ur.grade).name}</p><button id="fuel-next">Продолжить ↗</button></div>`,i.querySelector("#fuel-back").onclick=e,i.querySelector("#fuel-next").onclick=t;const n=()=>{i.querySelector("#fuel-selected").textContent="Топливо: "+bo(ur.grade).name;for(const r of Dr){const s=i.querySelector('[data-fuel-card="'+r.id+'"]'),a=s.querySelector("[data-fuel]"),o=ur.grade===r.id;s.classList.toggle("is-selected",o),a.setAttribute("aria-pressed",String(o)),a.textContent=o?"✓ Выбрано":r.price?"Пробные 20 л · бесплатно":"Заправить бесплатно",s.onclick=c=>{c.target.closest("button")||a.click()}}};i.querySelectorAll("[data-fuel]").forEach(r=>r.onclick=()=>{r.dataset.fuel==="92"?ur.select("92"):ur.trial(r.dataset.fuel),n()}),n()}const Ft=(i,e,t)=>({cycle:i,idle:i==="4Т"?1400:1800,maxRpm:i==="4Т"?8500:11e3,limits:e.map(n=>n*Math.min(1,120/3.6/e.at(-1))),power:t}),Ac={"pit-125":Ft("4Т",[3,5.5,9,55/3.6],.8),"pit-140":Ft("4Т",[3.2,6,10,65/3.6],.95),"yamaha-cross":Ft("4Т",[4.1,7.3,12,19,120/3.6],1.45),"orange-cross":Ft("4Т",[4.1,7.3,12,19,120/3.6],1.45),"tripo-300":Ft("4Т",[4.1,7.3,12,19,120/3.6],1.45),169:Ft("4Т",[3.6,6.5,11,70/3.6],1.2),172:Ft("4Т",[3.8,7,12,76/3.6],1.25),174:Ft("4Т",[4,8,13.5,85/3.6],1.35),"evgeniy-300":Ft("4Т",[4.1,7.3,12,19,120/3.6],1.45),"demo-300":Ft("2Т",[4.1,7.3,12,19,120/3.6],1.45),"kef-lanza":Ft("2Т",[4.5,8.5,14,21,110/3.6],1.6),lanza:Ft("2Т",[4.5,8.5,14,21,110/3.6],1.6),nb300:Ft("4Т",[4.3,8.3,14,21,105/3.6],1.5),kaishan:Ft("4Т",[4.6,9,15,23,115/3.6],1.7),beta:Ft("2Т",[4.5,8.2,13,19,27,130/3.6],2),ktm:Ft("4Т",[4.6,8.8,14,21,29,140/3.6],2.2),husqvarna:Ft("4Т",[4.6,8.8,14,21,29,140/3.6],2.2)};function vh(i="demo-300"){return Ac[i]||Ac["demo-300"]}function zS(i,e,t){const n=vh(i.bikeId),r=xf(i.fuelGrade),s=n.limits.length;if(i.gear=Math.max(1,Math.min(s,i.gear||1)),i.shiftTime=Math.max(0,(i.shiftTime||0)-t),i.shiftCooldown=Math.max(0,(i.shiftCooldown||0)-t),i.shiftCooldown===0){const o=Math.abs(i.speed);let c=i.gear;o>n.limits[i.gear-1]*r*.93&&i.gear<s?c++:i.gear>1&&o<n.limits[i.gear-2]*r*.65&&c--,c!==i.gear&&(i.gear=c,i.shiftTime=.16,i.shiftCooldown=.45,i.shiftCount=(i.shiftCount||0)+1)}const a=Math.min(1,Math.abs(i.speed)/(n.limits[i.gear-1]*r)*.93+Math.max(0,Number(e.throttle)||0)*.07);return i.rpm=n.idle+(n.maxRpm-n.idle)*a,{maxSpeed:n.limits[s-1]*r,drive:n.power*[1.25,1.12,1.02,.96,.92,.9][i.gear-1]*(1+.45*Math.min(1,Math.max(0,(Math.abs(i.speed)-18)/9)))*(i.shiftTime>0?.18:1)}}const fi=[{id:"demo-300",name:"Enduro 350 2Т",engine:"350 см³ · 2Т",badge:"ЖЁЛТО-СЕРЫЙ · КАК У ЯРИКА",paintAccent:"#f5dc08",paintBody:"#929b94",available:!0,model:"imported",modelVariant:"tripo",capacity:"350",cycle:"2Т"},{id:"evgeniy-300",name:"Эндуро 300 4Т",engine:"300 см³ · 4Т",badge:"ЧЁРНЫЙ · 4Т",paintAccent:"#343b40",paintBody:"#15191c",available:!0,model:"imported",modelVariant:"tripo",capacity:"300",cycle:"4Т"},{id:"pit-125",name:"Питбайк 125",engine:"125 см³ · 4Т",paintAccent:"#ef3427",paintBody:"#e9e7e3",available:!0,category:"pitbike",visualScale:.78,model:"imported",modelVariant:"tripo",capacity:"125",cycle:"4Т"},{id:"pit-140",name:"Питбайк 140",engine:"140 см³ · 4Т",paintAccent:"#f17b15",paintBody:"#ecece3",available:!0,category:"pitbike",visualScale:.82,model:"imported",modelVariant:"tripo",capacity:"140",cycle:"4Т"},{id:"tripo-300",name:"Мотокросс Tripo",engine:"300 см³ · 4Т · тест",badge:"НОВАЯ 3D-МОДЕЛЬ · TRIPO",available:!0,model:"imported",modelVariant:"tripo",paintAccent:"#ef3427",paintBody:"#e9e7e3",capacity:"300",cycle:"4Т"},{id:"yamaha-cross",name:"Кроссовый · синий",engine:"300 см³ · 4Т · тест",badge:"ЗАГРУЖЕННАЯ МОДЕЛЬ · YAMAHA",available:!0,model:"imported",modelVariant:"yamaha",paintAccent:"#2679ed",paintBody:"#ecece3",capacity:"300",cycle:"4Т"},{id:"orange-cross",name:"Кроссовый · оранжевый",engine:"300 см³ · 4Т · тест",badge:"ЗАГРУЖЕННАЯ 3D-МОДЕЛЬ",available:!0,model:"imported",modelVariant:"orange",paintAccent:"#f17b15",paintBody:"#ecece3",capacity:"300",cycle:"4Т"},{id:"169",name:"Эндуро 169 · зелёный",engine:"169",paintAccent:"#39ad42",paintBody:"#e5e8df",level:1,available:!0,model:"imported",modelVariant:"tripo",capacity:"169",cycle:"4Т"},{id:"172",name:"Эндуро 172",engine:"172",level:2},{id:"174",name:"Эндуро 174",engine:"174 · 300 см³",level:3},{id:"kef-lanza",name:"KEF Lanza",engine:"Lanza · 2Т",level:4},{id:"lanza",name:"Lanza",engine:"Lanza · 2Т",level:5},{id:"nb300",name:"Эндуро NB300",engine:"NB300",level:6},{id:"kaishan",name:"Kaishan 320",engine:"320 см³",level:7},{id:"beta",name:"Beta",engine:"Модель уточняется",level:8},{id:"ktm",name:"KTM",engine:"Модель уточняется",level:9},{id:"husqvarna",name:"Husqvarna",engine:"Модель уточняется",level:10}];for(const i of fi){const e=vh(i.id);i.gears=e.limits.length,i.topSpeed=Math.round(e.limits[e.limits.length-1]*3.6),i.cycle=i.cycle||e.cycle}function Dn(i="demo-300"){return fi.find(e=>e.id===i&&e.available)||fi.find(e=>e.id==="demo-300")}function Mf(i){return{accent:i.paintAccent||"#ef3427",body:i.paintBody||"#e9e7e3"}}const ea={x:-100,z:-120},ss={minX:-400,maxX:1300,minZ:-500,maxZ:800},HS=(i,e)=>({x:i+ea.x,z:e+ea.z}),xh=(i,e)=>({x:i-ea.x,z:e-ea.z});function GS(i=globalThis.localStorage){try{const e=Number(i.getItem("enduro-custom-active-slot")||0);return Number.isInteger(e)&&e>=0&&e<3?e:0}catch{return 0}}const Sf=1e3,bf=[{id:"tyre",name:"Покрышка лёжа"},{id:"upright-tyre",name:"Покрышка стоя"},{id:"log",name:"Бревно"},{id:"plank",name:"Доска"},{id:"sleeper",name:"Шпала"},{id:"rock",name:"Камень"},{id:"ramp",name:"Трамплин"},{id:"pit",name:"Яма"},{id:"mound",name:"Бугор"},{id:"checkpoint",name:"Чекпойнт"}],Ef=new Set(bf.map(i=>i.id)),as=i=>Number.isFinite(i),Tf=()=>globalThis.crypto.randomUUID();function wc(i="Моя трасса"){return{schema:1,id:Tf(),name:i,revision:0,start:{x:0,z:-42,yaw:0},finish:{x:0,z:42,yaw:0},objects:[]}}function Ji(i){if(!i||i.schema!==1||typeof i.id!="string"||!i.id||i.id.length>64||typeof i.name!="string"||i.name.length>60||!Number.isSafeInteger(i.revision)||i.revision<0||!Array.isArray(i.objects)||i.objects.length>Sf)throw Error("Неверный формат трассы");const e=n=>n&&[n.x,n.z,n.yaw].every(as)&&n.x>=ss.minX&&n.x<=ss.maxX&&n.z>=ss.minZ&&n.z<=ss.maxZ;if(!e(i.start)||!e(i.finish))throw Error("Старт или финиш вне площадки");const t=new Set;for(const n of i.objects){if(!n||typeof n.id!="string"||!n.id||n.id.length>64||t.has(n.id)||!Ef.has(n.kind)||!e(n)||!as(n.scale)||n.scale<.5||n.scale>2.5||!as(n.elevation)||n.elevation<0||n.elevation>3||!as(n.depth)||n.depth<.2||n.depth>3)throw Error("Неверное препятствие");t.add(n.id)}return JSON.parse(JSON.stringify(i))}function VS(i,e){const t=Ji(i);if(e.revision!==void 0&&e.revision!==t.revision)throw Error("Трасса уже изменилась");if(e.type==="upsert"){const n=t.objects.findIndex(r=>r.id===e.object.id);n<0?t.objects.push(e.object):t.objects[n]=e.object}else if(e.type==="remove")t.objects=t.objects.filter(n=>n.id!==e.id);else if(e.type==="start"||e.type==="finish")t[e.type]=e.point;else if(e.type==="rename")t.name=String(e.name).trim().slice(0,60)||"Моя трасса";else throw Error("Неизвестное изменение");return t.revision++,Ji(t)}function Eo(i,e,t){let n=0;for(const r of i.objects){if(!["pit","mound"].includes(r.kind))continue;const s=4*r.scale,a=Math.hypot(e-r.x,t-r.z)/s;a<1&&(n+=(r.kind==="pit"?-1:1)*r.depth*(1+Math.cos(a*Math.PI))/2)}return Math.max(-4,Math.min(4,n))}function Af(i,e,t,n=null){let r=n?n(e,t):Eo(i,e,t);for(const s of i.objects){if(["pit","mound","checkpoint"].includes(s.kind))continue;const a=Math.cos(s.yaw),o=Math.sin(s.yaw),c=e-s.x,l=t-s.z,u=(c*a-l*o)/s.scale,h=(c*o+l*a)/s.scale;let d=null;if(s.kind==="tyre"){const f=Math.hypot(u,h),g=.16**2-(f-.48)**2;g>=0&&(d=.16+Math.sqrt(g))}else if(s.kind==="upright-tyre"){if(Math.abs(h)<=.16){const f=.48+Math.sqrt(.0256-h*h),g=f*f-u*u;g>=0&&(d=.64+Math.sqrt(g))}}else if(s.kind==="log"&&Math.abs(u)<=1.5&&Math.abs(h)<=.3)d=.3+Math.sqrt(.09-h*h);else if(s.kind==="plank"&&Math.abs(u)<=1.5&&Math.abs(h)<=.3)d=.12;else if(s.kind==="sleeper"&&Math.abs(u)<=1.5&&Math.abs(h)<=.16)d=.24;else if(s.kind==="rock"){const f=1-u*u-(h/.8)**2;f>=0&&(d=.4+.4*Math.sqrt(f))}else s.kind==="ramp"&&Math.abs(u)<=1.5&&Math.abs(h)<=3&&(d=(h+3)/6*1.2);d!==null&&(r=Math.max(r,(n?n(s.x,s.z):Eo(i,s.x,s.z))+s.elevation+d*s.scale))}return r}function WS(i,e=5){return{...i,frame:{x:i.x,z:i.z,dx:Math.sin(i.yaw),dz:Math.cos(i.yaw),width:e,left:{x:i.x-Math.cos(i.yaw)*e/2,z:i.z+Math.sin(i.yaw)*e/2},right:{x:i.x+Math.cos(i.yaw)*e/2,z:i.z-Math.sin(i.yaw)*e/2}}}}function yh(i,e=globalThis.localStorage){try{const t=e.getItem("enduro-custom-track-"+i);return t?Ji(JSON.parse(t)):wc("Моя трасса "+(i+1))}catch{return wc("Моя трасса "+(i+1))}}function qS(i,e,t=globalThis.localStorage){t.setItem("enduro-custom-track-"+i,JSON.stringify(Ji(e)))}const Mh="enduro-builder-wallet-v1",pi=[{id:"tyre",name:"Покрышка",price:10,start:1e3},{id:"log",name:"Бревно",price:20,start:1e3},{id:"plank",name:"Доска",price:8,start:1e3},{id:"sleeper",name:"Шпала",price:12,start:1e3},{id:"rock",name:"Камень",price:25,start:1e3},{id:"ramp",name:"Трамплин",price:80,start:1e3}],Sh=i=>i==="upright-tyre"?"tyre":pi.some(e=>e.id===i)?i:null;function bh(i){const e={};for(const t of i.objects){const n=Sh(t.kind);n&&(e[n]=(e[n]||0)+1)}return e}function El(i){return i??globalThis.localStorage}function Mi(i){const e=El(i);let t;try{t=JSON.parse(e.getItem(Mh)||"null")}catch{}if(t?.schema===1&&Number.isSafeInteger(t.balance)&&t.balance>=0&&t.stock&&pi.every(s=>Number.isSafeInteger(t.stock[s.id])&&t.stock[s.id]>=0)&&Array.isArray(t.claimed)&&t.best&&t.routes){for(const s of pi)t.stock[s.id]=Math.max(s.start,t.stock[s.id]);return t}const n=Object.fromEntries(pi.map(s=>[s.id,s.start])),r={};for(let s=0;s<3;s++)for(const[a,o]of Object.entries(bh(yh(s,e))))r[a]=(r[a]||0)+o;for(const[s,a]of Object.entries(r))n[s]=Math.max(n[s]||0,a);return{schema:1,balance:0,stock:n,claimed:[],best:{},routes:{}}}function Tl(i,e){return El(e).setItem(Mh,JSON.stringify(i)),globalThis.dispatchEvent?.(new Event("enduro-wallet-change")),i}function XS(i,e=1,t){const n=pi.find(a=>a.id===i);if(!n||!Number.isInteger(e)||e<1||e>20)throw Error("Неверная покупка");const r=Mi(t),s=n.price*e;if(r.balance<s)throw Error("Не хватает игровых долларов. Зарабатывай их в заездах.");return r.balance-=s,r.stock[i]+=e,Tl(r,t)}function wf(i,e,t){const n=El(t),r=Mi(n),s={};for(let a=0;a<3;a++)for(const[o,c]of Object.entries(bh(a===e?i:yh(a,n))))s[o]=(s[o]||0)+c;return Object.fromEntries(pi.map(a=>[a.id,r.stock[a.id]-(s[a.id]||0)]))}function $S(i,e,t){const n=wf(i,e,t),r=pi.find(s=>n[s.id]<0);if(r)throw Error("Не хватает материала: "+r.name+". Купи в магазине или убери элемент с другой сохранённой трассы.");return i}function YS({id:i,mode:e,route:t,difficulty:n,seconds:r,won:s=!1,eligible:a=!0},o){if(!i||!["bot","online"].includes(e)||!a||!Number.isFinite(r)||r<15||r>14400)return{amount:0,reason:"За этот заезд награда не начисляется."};const c={iron:0,bronze:1,silver:2,gold:3}[n];if(c===void 0)return{amount:0};const l=Mi(o);if(l.claimed.includes(i))return{amount:0,reason:"Награда уже получена."};const u=t+"|"+n,h=[5,10,15,20][c],d=s?[15,25,40,60][c]:0,f=l.routes[u]?0:20,g=l.best[u]&&r<l.best[u]*.99?10:0,v=h+d+f+g;return l.routes[u]=!0,l.best[u]=Math.min(l.best[u]??1/0,r),l.balance+=v,l.claimed=[...l.claimed,i].slice(-500),Tl(l,o),{amount:v,balance:l.balance,finish:h,win:d,first:f,record:g}}function ZS(i){return Sh(i)}function Rf(i,e,t){var r;if(!/^[a-zA-Z0-9-]{1,40}$/.test(i)||!e?.id||!Number.isSafeInteger(e.price)||e.price<=0)throw Error("Тюнинг пока недоступен");const n=Mi(t);if(n.tuning??(n.tuning={}),(r=n.tuning)[i]??(r[i]={}),n.tuning[i][e.id])throw Error("Уже установлено");if(n.balance<e.price)throw Error("Не хватает монет. Зарабатывай их в заездах.");return n.balance-=e.price,n.tuning[i][e.id]=!0,Tl(n,t),n}function Ta(i){try{return Mi(i).balance}catch{return 0}}const Eh=[{id:"engine",name:"Настройка двигателя",price:180,description:"Разгон +8%",effect:"acceleration",factor:1.08},{id:"gearing",name:"Скоростная передача",price:160,description:"Предел скорости +5%",effect:"speed",factor:1.05},{id:"brakes",name:"Усиленные тормоза",price:120,description:"Тормозное усилие +10%",effect:"braking",factor:1.1},{id:"tyres",name:"Спортивные покрышки",price:140,description:"Отклик на поворот руля +6%",effect:"steering",factor:1.06},{id:"suspension",name:"Настройка подвески",price:null,description:"Устойчивость на неровностях · готовится",effect:null,factor:1}];function Cf(i,e){const t=i.tuning?.[e]||{};return Object.fromEntries(Eh.filter(n=>n.effect).map(n=>[n.effect,t[n.id]===!0?n.factor:1]))}function JS(i){try{return Cf(Mi(),i)}catch{return{}}}function To(i,{bikeId:e,onBack:t}){const n=Mi(),r=Dn(e);i.innerHTML='<section class="settings-screen tuning-screen"><button class="back" type="button">← Назад</button><h1>Тюнинг мотоцикла</h1><p class="tuning-bike"></p><p class="tuning-wallet" role="status"></p><p>Покупки за игровые монеты. Улучшения устанавливаются на выбранный мотоцикл и действуют со следующего заезда.</p><div class="tuning-list"></div><p class="tuning-status" role="status"></p></section>',i.querySelector(".back").onclick=t,i.querySelector(".tuning-bike").textContent=r.name,i.querySelector(".tuning-wallet").textContent="Монеты: "+n.balance.toLocaleString("ru-RU");const s=i.querySelector(".tuning-list");for(const a of Eh){const o=n.tuning?.[e]?.[a.id]===!0,c=document.createElement("article"),l=document.createElement("h2"),u=document.createElement("p"),h=document.createElement("button");l.textContent=a.name,u.textContent=a.description,h.type="button",h.textContent=o?"Установлено":a.price===null?"Скоро":"Установить · "+a.price+" монет",h.disabled=o||a.price===null||n.balance<a.price,h.onclick=()=>{try{Rf(e,a),To(i,{bikeId:e,onBack:t}),i.querySelector(".tuning-status").textContent="Установлено: "+a.name}catch(d){i.querySelector(".tuning-status").textContent=d.message}},c.append(l,u,h),s.append(c)}window.scrollTo(0,0)}const Th="https://enduro-club-len-nicolenkoe.msk1.amvera.tech",Pf="wss://enduro-club-len-nicolenkoe.msk1.amvera.tech";function Rc({configured:i="",saved:e="",hosted:t=""}={}){return i||e||t||Pf}function Lf(i){if(!/^\d{2}$/.test(String(i)))throw Error("Неверный номер комнаты");const e=new URL("/join",Th);return e.searchParams.set("room",i),e.href}function If(i){try{const e=new URL(i).searchParams.get("room");return/^\d{2}$/.test(e||"")?e:null}catch{return null}}async function KS(i){const e=Lf(i),t="Присоединяйся к заезду Enduro Club! Комната "+i;if(globalThis.EnduroOrientation?.shareLap)return EnduroOrientation.shareLap(t+`
`+e),"Отправь ссылку другу";if(navigator.share)try{return await navigator.share({title:"Комната "+i+" · Enduro Club",text:t,url:e}),"Приглашение готово"}catch(n){if(n.name==="AbortError")return""}try{return await navigator.clipboard.writeText(t+`
`+e),"Ссылка на комнату скопирована"}catch{return e}}function Nf(){return Th.replace(/\/$/,"")+"/download#feedback"}function Df(){if(globalThis.window?.EnduroOrientation?.openFeedback){window.EnduroOrientation.openFeedback();return}const i=document.createElement("a");i.href=Nf(),i.target="_blank",i.rel="noopener",document.body.append(i),i.click(),i.remove()}const Uf=""+new URL("garage-demo-300-Cn0vPxQG.png",import.meta.url).href,Ff=""+new URL("garage-evgeniy-300-pF_BQc5U.png",import.meta.url).href,Of=""+new URL("garage-pit-125-BniYyOgM.png",import.meta.url).href,Bf=""+new URL("garage-pit-125-BniYyOgM.png",import.meta.url).href,kf=""+new URL("garage-tripo-300-Ba0u8CPN.png",import.meta.url).href,zf=""+new URL("garage-orange-cross-DNC50yQ_.png",import.meta.url).href,Hf=""+new URL("garage-orange-cross-DNC50yQ_.png",import.meta.url).href,Gf=""+new URL("garage-169-D279OnwO.png",import.meta.url).href,Ah="enduro-player-profile-v1",Cc=i=>typeof i=="string"?i.trim().replace(/\s+/g," ").slice(0,60):"";function wh(i){if(!i||typeof i!="object")return null;const e=Cc(i.firstName),t=Cc(i.lastName),n=i.age,r=typeof n=="number"||typeof n=="string"&&n.trim()?Number(n):NaN,s=i.gender;return!e||!Number.isInteger(r)||r<1||r>120||!["male","female"].includes(s)?null:{firstName:e,lastName:t,age:r,gender:s}}function Vf(i){try{return i??(i=globalThis.localStorage),wh(JSON.parse(i.getItem(Ah)))}catch{return null}}function Wf(i,e){const t=wh(i);if(!t)return{profile:null,saved:!1};try{return e??(e=globalThis.localStorage),e.setItem(Ah,JSON.stringify(t)),{profile:t,saved:!0}}catch{return{profile:t,saved:!1}}}function Pc(i){return i.age<14?i.gender==="female"?"child-girl":"child-boy":i.gender==="female"?"woman":"man"}function qf({profile:i=null,onSave:e=()=>{},onClose:t=()=>{},storage:n}={}){const r=document.createElement("dialog");r.className="player-profile-dialog",r.innerHTML=`<form><h2>${i?"Профиль игрока":"Давай познакомимся"}</h2><p>${i?"Здесь можно изменить свои данные.":"Как к тебе обращаться?"}</p><div class="profile-fields"><label>Имя<input name="firstName" autocomplete="given-name" maxlength="60" required></label><label>Фамилия <small>необязательно</small><input name="lastName" autocomplete="family-name" maxlength="60"></label><label>Возраст<input name="age" type="number" inputmode="numeric" min="1" max="120" step="1" required></label><label>Пол<select name="gender" required><option value="" disabled>Выбери</option><option value="male">Мужчина</option><option value="female">Женщина</option></select></label></div><p class="profile-note">До 14 лет доступны только питбайки, с 14 лет — все доступные мотоциклы. Данные сохраняются на этом устройстве. Изменить их можно в настройках — «Профиль игрока».</p><p class="profile-error" role="status"></p><button type="submit">${i?"Сохранить":"Продолжить"}</button></form>`;const s=r.querySelector("form");for(const a of["firstName","lastName","age","gender"])s.elements[a].value=i?.[a]??"";if(i){const a=document.createElement("button");a.type="button",a.className="profile-close",a.textContent="×",a.setAttribute("aria-label","Закрыть профиль"),a.onclick=()=>r.close(),r.prepend(a)}else r.addEventListener("cancel",a=>a.preventDefault());return s.onsubmit=a=>{a.preventDefault();const o=Object.fromEntries(new FormData(s)),c=Wf(o,n);if(!c.profile){r.querySelector(".profile-error").textContent="Укажи имя, целый возраст от 1 до 120 лет и пол.";return}e(c.profile,c.saved),r.close()},r.addEventListener("close",()=>{r.remove(),t()},{once:!0}),document.body.append(r),r.showModal(),{dialog:r}}const Lc=[{id:"man",name:"Мужчина",height:1.8},{id:"woman",name:"Девушка",height:1.75},{id:"child-boy",name:"Ребёнок — мальчик",height:1.38,child:!0},{id:"child-girl",name:"Ребёнок — девочка",height:1.38,child:!0}],QS=i=>Lc.find(e=>e.id===(i==="child"?"child-boy":i))||Lc[0],Ws=(i,e)=>i.slice(),Xf=""+new URL("enduro-300-black-preview-zaE13c_t.png",import.meta.url).href;const Al="187",$f=0,Ic=1,Yf=2,qs=1,Zf=2,Er=3,mi=0,$t=1,vn=2,Wi=0,Cr=1,Nc=2,Dc=3,Uc=4,Jf=5,zi=100,Kf=101,Qf=102,jf=103,ep=104,tp=200,np=201,ip=202,rp=203,Rh=204,Ch=205,sp=206,ap=207,op=208,lp=209,cp=210,up=211,hp=212,dp=213,fp=214,Ao=0,wo=1,Ro=2,Ur=3,Co=4,Po=5,Lo=6,Io=7,wl=0,pp=1,mp=2,kn=0,Ph=1,Lh=2,Ih=3,Nh=4,Dh=5,Uh=6,Fh=7,Fc="attached",gp="detached",Oh=300,Ki=301,Fr=302,Aa=303,wa=304,No=1e3,On=1001,Do=1002,Ot=1003,_p=1004,os=1005,Xt=1006,Ra=1007,ei=1008,Kt=1009,Bh=1010,kh=1011,Or=1012,Rl=1013,En=1014,nn=1015,Tn=1016,Cl=1017,Pl=1018,Qi=1020,zh=35902,Hh=35899,Gh=1021,Vh=1022,ln=1023,ii=1026,ti=1027,Ll=1028,Il=1029,gi=1030,Nl=1031,Dl=1033,Xs=33776,$s=33777,Ys=33778,Zs=33779,Uo=35840,Fo=35841,Oo=35842,Bo=35843,ko=36196,zo=37492,Ho=37496,Go=37488,Vo=37489,ta=37490,Wo=37491,qo=37808,Xo=37809,$o=37810,Yo=37811,Zo=37812,Jo=37813,Ko=37814,Qo=37815,jo=37816,el=37817,tl=37818,nl=37819,il=37820,rl=37821,sl=36492,al=36494,ol=36495,ll=36283,cl=36284,na=36285,ul=36286,vp=2200,xp=2201,yp=2202,ia=2300,hl=2301,Ca=2302,Oc=2303,Hi=2400,Gi=2401,ra=2402,Ul=2500,Mp=2501,jS=0,eb=1,tb=2,Sp=3200,sa=0,bp=1,jn="",Jt="srgb",aa="srgb-linear",oa="linear",lt="srgb",Pa=7680,Ep=519,Tp=512,Ap=513,wp=514,Wh=515,Rp=516,Cp=517,qh=518,Xh=519,$h=35044,nb=35048,Bc="300 es",cn=2e3,Br=2001;function Pp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ip(){const i=kr("canvas");return i.style.display="block",i}const kc={};function la(...i){const e="THREE."+i.shift();console.log(e,...i)}function Yh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Yh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ze(...i){i=Yh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qi(...i){const e=i.join(" ");e in kc||(kc[e]=!0,De(...i))}function Np(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Dp={[Ao]:Ao,[Ro]:Lo,[Co]:Co,[Ur]:Po,[wo]:wo,[Lo]:Ro,[Io]:Io,[Po]:Ur};class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const Pr=Math.PI/180,ji=180/Math.PI;function dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Fl(i,e){return(i%e+e)%e}function Up(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Fp(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function Op(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function Bp(i,e=1){return e-Math.abs(Fl(i,e*2)-e)}function kp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gp(i,e){return i+Math.random()*(e-i)}function Vp(i){return i*(.5-Math.random())}function Wp(i){i!==void 0&&(zc=i);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qp(i){return i*Pr}function Xp(i){return i*ji}function $p(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zp(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ga(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ol(i,e){if(e.constructor===Float32Array)return i;const t=ga(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Bl(i,e){if(e.constructor===Float32Array)return i;const t=ga(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const ib={DEG2RAD:Pr,RAD2DEG:ji,generateUUID:dn,clamp:Ke,euclideanModulo:Fl,mapLinear:Up,inverseLerp:Fp,lerp:Lr,damp:Op,pingpong:Bp,smoothstep:kp,smootherstep:zp,randInt:Hp,randFloat:Gp,randFloatSpread:Vp,seededRandom:Wp,degToRad:qp,radToDeg:Xp,isPowerOfTwo:$p,ceilPowerOfTwo:Yp,floorPowerOfTwo:Zh,setQuaternionFromProperEuler:Zp,normalize:Bl,denormalize:Ol},uc=class uc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uc.prototype.isVector2=!0;let ue=uc;class Mn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(h!==v||c!==d||l!==f||u!==g){let p=c*d+l*f+u*g+h*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){const x=Math.acos(p),b=Math.sin(x);m=Math.sin(m*x)/b,o=Math.sin(o*x)/b,c=c*m+d*o,l=l*m+f*o,u=u*m+g*o,h=h*m+v*o}else{c=c*m+d*o,l=l*m+f*o,u=u*m+g*o,h=h*m+v*o;const x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hc=class hc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hc.prototype.isVector3=!0;let N=hc;const La=new N,Hc=new Mn,dc=class dc{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=r[0],p=r[3],m=r[6],x=r[1],b=r[4],y=r[7],A=r[2],T=r[5],_=r[8];return s[0]=a*v+o*x+c*A,s[3]=a*p+o*b+c*T,s[6]=a*m+o*y+c*_,s[1]=l*v+u*x+h*A,s[4]=l*p+u*b+h*T,s[7]=l*m+u*y+h*_,s[2]=d*v+f*x+g*A,s[5]=d*p+f*b+g*T,s[8]=d*m+f*y+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+n*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dc.prototype.isMatrix3=!0;let Ge=dc;const Ia=new Ge,Gc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){const i={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?oa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[aa]:{primaries:e,whitePoint:n,transfer:oa,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}const it=Jp();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class Kp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=kr("canvas")),Si.width=e.width,Si.height=e.height;const r=Si.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qp=0;class kl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Na(r[a].image)):s.push(Na(r[a]))}else s=Na(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let jp=0;const Da=new N;class Bt extends ri{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=On,r=On,s=Xt,a=ei,o=ln,c=Kt,l=Bt.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=dn(),this.name="",this.source=new kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Da).x}get height(){return this.source.getSize(Da).y}get depth(){return this.source.getSize(Da).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Oh;Bt.DEFAULT_ANISOTROPY=1;const fc=class fc{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],v=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,y=(f+1)/2,A=(m+1)/2,T=(u+d)/4,_=(h+v)/4,M=(g+p)/4;return b>y&&b>A?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=T/n,s=_/n):y>A?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=M/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=_/s,r=M/s),this.set(n,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fc.prototype.isVector4=!0;let ut=fc;class em extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new Bt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new kl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends em{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jh extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tm extends Bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const ma=class ma{constructor(e,t,n,r,s,a,o,c,l,u,h,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,f,g,v,p)}set(e,t,n,r,s,a,o,c,l,u,h,d,f,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ma().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,v=l*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,v=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nm,e,im)}lookAt(e,t,n){const r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Xn.crossVectors(n,Yt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Xn.crossVectors(n,Yt)),Xn.normalize(),ls.crossVectors(Yt,Xn),r[0]=Xn.x,r[4]=ls.x,r[8]=Yt.x,r[1]=Xn.y,r[5]=ls.y,r[9]=Yt.y,r[2]=Xn.z,r[6]=ls.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],x=n[3],b=n[7],y=n[11],A=n[15],T=r[0],_=r[4],M=r[8],C=r[12],R=r[1],I=r[5],D=r[9],B=r[13],P=r[2],z=r[6],Y=r[10],q=r[14],te=r[3],G=r[7],Z=r[11],ne=r[15];return s[0]=a*T+o*R+c*P+l*te,s[4]=a*_+o*I+c*z+l*G,s[8]=a*M+o*D+c*Y+l*Z,s[12]=a*C+o*B+c*q+l*ne,s[1]=u*T+h*R+d*P+f*te,s[5]=u*_+h*I+d*z+f*G,s[9]=u*M+h*D+d*Y+f*Z,s[13]=u*C+h*B+d*q+f*ne,s[2]=g*T+v*R+p*P+m*te,s[6]=g*_+v*I+p*z+m*G,s[10]=g*M+v*D+p*Y+m*Z,s[14]=g*C+v*B+p*q+m*ne,s[3]=x*T+b*R+y*P+A*te,s[7]=x*_+b*I+y*z+A*G,s[11]=x*M+b*D+y*Y+A*Z,s[15]=x*C+b*B+y*q+A*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15],x=c*f-l*d,b=o*f-l*h,y=o*d-c*h,A=a*f-l*u,T=a*d-c*u,_=a*h-o*u;return t*(v*x-p*b+m*y)-n*(g*x-p*A+m*T)+r*(g*b-v*A+m*_)-s*(g*y-v*T+p*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],x=t*o-n*a,b=t*c-r*a,y=t*l-s*a,A=n*c-r*o,T=n*l-s*o,_=r*l-s*c,M=u*v-h*g,C=u*p-d*g,R=u*m-f*g,I=h*p-d*v,D=h*m-f*v,B=d*m-f*p,P=x*B-b*D+y*I+A*R-T*C+_*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=(o*B-c*D+l*I)*z,e[1]=(r*D-n*B-s*I)*z,e[2]=(v*_-p*T+m*A)*z,e[3]=(d*T-h*_-f*A)*z,e[4]=(c*R-a*B-l*C)*z,e[5]=(t*B-r*R+s*C)*z,e[6]=(p*y-g*_-m*b)*z,e[7]=(u*_-d*y+f*b)*z,e[8]=(a*D-o*R+l*M)*z,e[9]=(n*R-t*D-s*M)*z,e[10]=(g*T-v*y+m*x)*z,e[11]=(h*y-u*T-f*x)*z,e[12]=(o*C-a*I-c*M)*z,e[13]=(t*I-n*C+r*M)*z,e[14]=(v*b-g*A-p*x)*z,e[15]=(u*A-h*b+d*x)*z,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,v=a*u,p=a*h,m=o*h,x=c*l,b=c*u,y=c*h,A=n.x,T=n.y,_=n.z;return r[0]=(1-(v+m))*A,r[1]=(f+y)*A,r[2]=(g-b)*A,r[3]=0,r[4]=(f-y)*T,r[5]=(1-(d+m))*T,r[6]=(p+x)*T,r[7]=0,r[8]=(g+b)*_,r[9]=(p-x)*_,r[10]=(1-(d+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=bi.set(r[0],r[1],r[2]).length();const o=bi.set(r[4],r[5],r[6]).length(),c=bi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),sn.copy(this);const l=1/a,u=1/o,h=1/c;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=cn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===cn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Br)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=cn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===cn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Br)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ma.prototype.isMatrix4=!0;let Xe=ma;const bi=new N,sn=new Xe,nm=new N(0,0,0),im=new N(1,1,1),Xn=new N,ls=new N,Yt=new N,Wc=new Xe,qc=new Mn;class hn{constructor(e=0,t=0,n=0,r=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qc.setFromEuler(this),this.setFromQuaternion(qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rm=0;const Xc=new N,Ei=new Mn,Rn=new Xe,cs=new N,hr=new N,sm=new N,am=new Mn,$c=new N(1,0,0),Yc=new N(0,1,0),Zc=new N(0,0,1),Jc={type:"added"},om={type:"removed"},Ti={type:"childadded",child:null},Ua={type:"childremoved",child:null};class xt extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new N,t=new hn,n=new Mn,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ge}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(hr,cs,this.up):Rn.lookAt(cs,hr,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(om),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Ti.child=e,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}xt.DEFAULT_UP=new N(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class us extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new us;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Oa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Fl(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Oa(a,s,e+1/3),this.g=Oa(a,s,e),this.b=Oa(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=Kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return it.workingToColorSpace(Gt.copy(this),e),Math.round(Ke(Gt.r*255,0,255))*65536+Math.round(Ke(Gt.g*255,0,255))*256+Math.round(Ke(Gt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Jt){it.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,r=Gt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(hs);const n=Lr($n.h,hs.h,t),r=Lr($n.s,hs.s,t),s=Lr($n.l,hs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ve;Ve.NAMES=Kh;class Qh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new Qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new jh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rb extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const an=new N,Cn=new N,Ba=new N,Pn=new N,Ai=new N,wi=new N,Kc=new N,ka=new N,za=new N,Ha=new N,Ga=new ut,Va=new ut,Wa=new ut;class tn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){an.subVectors(r,t),Cn.subVectors(n,t),Ba.subVectors(e,t);const a=an.dot(an),o=an.dot(Cn),c=an.dot(Ba),l=Cn.dot(Cn),u=Cn.dot(Ba),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ga.setScalar(0),Va.setScalar(0),Wa.setScalar(0),Ga.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,n),Wa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ga,s.x),a.addScaledVector(Va,s.y),a.addScaledVector(Wa,s.z),a}static isFrontFacing(e,t,n,r){return an.subVectors(n,t),Cn.subVectors(e,t),an.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,n),wi.subVectors(s,n),ka.subVectors(e,n);const c=Ai.dot(ka),l=wi.dot(ka);if(c<=0&&l<=0)return t.copy(n);za.subVectors(e,r);const u=Ai.dot(za),h=wi.dot(za);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),t.copy(n).addScaledVector(Ai,a);Ha.subVectors(e,s);const f=Ai.dot(Ha),g=wi.dot(Ha);if(g>=0&&f<=g)return t.copy(s);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(wi,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Kc.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Kc,o);const m=1/(p+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(Ai,a).addScaledVector(wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),fs.subVectors(this.max,dr),Ri.subVectors(e.a,dr),Ci.subVectors(e.b,dr),Pi.subVectors(e.c,dr),Yn.subVectors(Ci,Ri),Zn.subVectors(Pi,Ci),li.subVectors(Ri,Pi);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-li.z,li.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,li.z,0,-li.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-li.y,li.x,0];return!qa(t,Ri,Ci,Pi,fs)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,Ri,Ci,Pi,fs))?!1:(ps.crossVectors(Yn,Zn),t=[ps.x,ps.y,ps.z],qa(t,Ri,Ci,Pi,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new N,new N,new N,new N,new N,new N,new N,new N],on=new N,ds=new Hn,Ri=new N,Ci=new N,Pi=new N,Yn=new N,Zn=new N,li=new N,dr=new N,fs=new N,ps=new N,ci=new N;function qa(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ci.fromArray(i,s);const o=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const wt=new N,ms=new ue;let cm=0;class un extends ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=nn,this.version=0,this._normalizationScale=e!==void 0?ga(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ol(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bl(e,this.array)}}class ed extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class td extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}const um=new Hn,fr=new N,Xa=new N;class Gn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):um.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(fr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Xa)),this.expandByPoint(fr.copy(e.center).sub(Xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hm=0;const jt=new Xe,$a=new xt,Li=new N,Zt=new Hn,pr=new Hn,Dt=new N;class Mt extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pp(e)?td:ed)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $e(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Zt.min,pr.min),Zt.expandByPoint(Dt),Dt.addVectors(Zt.max,pr.max),Zt.expandByPoint(Dt)):(Zt.expandByPoint(pr.min),Zt.expandByPoint(pr.max))}Zt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Dt.fromBufferAttribute(o,l),c&&(Li.fromBufferAttribute(e,l),Dt.add(Li)),r=Math.max(r,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new N,c[C]=new N;const u=new N,h=new N,d=new N,f=new ue,g=new ue,v=new ue,p=new N,m=new N;function x(C,R,I){l[C]=l[R]=l[I]=1,u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,I),f.fromBufferAttribute(s,C),g.fromBufferAttribute(s,R),v.fromBufferAttribute(s,I),h.sub(u),d.sub(u),g.sub(f),v.sub(f);const D=1/(g.x*v.y-v.x*g.y);isFinite(D)&&(p.copy(h).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(D),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(D),o[C].add(p),o[R].add(p),o[I].add(p),c[C].add(m),c[R].add(m),c[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,R=b.length;C<R;++C){const I=b[C],D=I.start,B=I.count;for(let P=D,z=D+B;P<z;P+=3)x(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new N,A=new N,T=new N,_=new N;function M(C){T.fromBufferAttribute(r,C),_.copy(T);const R=o[C];y.copy(R),y.sub(T.multiplyScalar(T.dot(R))).normalize(),A.crossVectors(_,R);const D=A.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,R=n.count;C<R;++C)l[C]&&M(C);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new un(d,u,h)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Qc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=Qc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Qc(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=dn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const Wt=new N;class ca{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e!==void 0?ga(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ca(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ol(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bl(e,this.data.array)}}const Ya=new N,fm=new N,pm=new Ge;class Kn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ya.subVectors(n,t).cross(fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Ya),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pm.getNormalMatrix(e),r=this.coplanarPoint(Ya).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let mm=0;class Vn extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=Cr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ch,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gm extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ii;const mr=new N,Ni=new N,Di=new N,Ui=new ue,gr=new ue,nd=new Xe,gs=new N,_r=new N,_s=new N,jc=new ue,Za=new ue,eu=new ue;class sb extends xt{constructor(e=new gm){if(super(),this.isSprite=!0,this.type="Sprite",Ii===void 0){Ii=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dm(t,5);Ii.setIndex([0,1,2,0,2,3]),Ii.setAttribute("position",new ca(n,3,0,!1)),Ii.setAttribute("uv",new ca(n,2,3,!1))}this.geometry=Ii,this.material=e,this.center=new ue(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-Di.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;vs(gs.set(-.5,-.5,0),Di,a,Ni,r,s),vs(_r.set(.5,-.5,0),Di,a,Ni,r,s),vs(_s.set(.5,.5,0),Di,a,Ni,r,s),jc.set(0,0),Za.set(1,0),eu.set(1,1);let o=e.ray.intersectTriangle(gs,_r,_s,!1,mr);if(o===null&&(vs(_r.set(-.5,.5,0),Di,a,Ni,r,s),Za.set(0,1),o=e.ray.intersectTriangle(gs,_s,_r,!1,mr),o===null))return;const c=e.ray.origin.distanceTo(mr);c<e.near||c>e.far||t.push({distance:c,point:mr.clone(),uv:tn.getInterpolation(mr,gs,_r,_s,jc,Za,eu,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function vs(i,e,t,n,r,s){Ui.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(gr.x=s*Ui.x-r*Ui.y,gr.y=r*Ui.x+s*Ui.y):gr.copy(Ui),i.copy(e),i.x+=gr.x,i.y+=gr.y,i.applyMatrix4(nd)}const In=new N,Ja=new N,xs=new N,ys=new N;class Yr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ja.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),ys.copy(this.origin).sub(Ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xs),o=ys.dot(this.direction),c=-ys.dot(xs),l=ys.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ja).addScaledVector(xs,d),f}intersectSphere(e,t){if(e.radius<0)return null;In.subVectors(e.center,this.origin);const n=In.dot(this.direction),r=In.dot(In)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,x=n.y-a.y,b=n.z-a.z,y=Math.abs(c),A=Math.abs(l),T=Math.abs(u);let _,M,C,R,I,D,B,P,z,Y,q,te;if(y>=A&&y>=T?(C=c,D=h,z=g,te=m,c>=0?(_=l,M=u,R=d,I=f,B=v,P=p,Y=x,q=b):(_=u,M=l,R=f,I=d,B=p,P=v,Y=b,q=x)):A>=T?(C=l,D=d,z=v,te=x,l>=0?(_=u,M=c,R=f,I=h,B=p,P=g,Y=b,q=m):(_=c,M=u,R=h,I=f,B=g,P=p,Y=m,q=b)):(C=u,D=f,z=p,te=b,u>=0?(_=c,M=l,R=h,I=d,B=g,P=v,Y=m,q=x):(_=l,M=c,R=d,I=h,B=v,P=g,Y=x,q=m)),C===0)return null;const G=_/C,Z=M/C,ne=1/C,be=R-G*D,Ne=I-Z*D,K=B-G*z,_e=P-Z*z,Ee=Y-G*te,pe=q-Z*te,ae=Ee*_e-pe*K,Oe=be*pe-Ne*Ee,ft=K*Ne-_e*be;if(r){if(ae<0||Oe<0||ft<0)return null}else if((ae<0||Oe<0||ft<0)&&(ae>0||Oe>0||ft>0))return null;const Fe=ae+Oe+ft;if(Fe===0)return null;const qe=ne*(ae*D+Oe*z+ft*te);return(Fe>0?qe<0:qe>0)?null:this.at(qe/Fe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _m extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tu=new Xe,ui=new Yr,Ms=new Gn,nu=new N,Ss=new N,bs=new N,Es=new N,Ka=new N,Ts=new N,iu=new N,As=new N;class Qt extends xt{constructor(e=new Mt,t=new _m){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ts.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Ka.fromBufferAttribute(h,e),a?Ts.addScaledVector(Ka,u):Ts.addScaledVector(Ka.sub(t),u))}t.add(Ts)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(s),ui.copy(e.ray).recast(e.near),!(Ms.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Ms,nu)===null||ui.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(s).invert(),ui.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),b=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,A=b;y<A;y+=3){const T=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);r=ws(this,m,e,n,l,u,h,T,_,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const x=o.getX(p),b=o.getX(p+1),y=o.getX(p+2);r=ws(this,a,e,n,l,u,h,x,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),b=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,A=b;y<A;y+=3){const T=y,_=y+1,M=y+2;r=ws(this,m,e,n,l,u,h,T,_,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const x=p,b=p+1,y=p+2;r=ws(this,a,e,n,l,u,h,x,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function vm(i,e,t,n,r,s,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===mi,o),c===null)return null;As.copy(o),As.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(As);return l<t.near||l>t.far?null:{distance:l,point:As.clone(),object:i}}function ws(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ss),i.getVertexPosition(c,bs),i.getVertexPosition(l,Es);const u=vm(i,e,t,n,Ss,bs,Es,iu);if(u){const h=new N;tn.getBarycoord(iu,Ss,bs,Es,h),r&&(u.uv=tn.getInterpolatedAttribute(r,o,c,l,h,new ue)),s&&(u.uv1=tn.getInterpolatedAttribute(s,o,c,l,h,new ue)),a&&(u.normal=tn.getInterpolatedAttribute(a,o,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};tn.getNormal(Ss,bs,Es,d.normal),u.face=d,u.barycoord=h}return u}const vr=new ut,ru=new ut,su=new ut,xm=new ut,au=new Xe,Rs=new N,Qa=new Gn,ou=new Xe,ja=new Yr;class ab extends Qt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fc,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rs),this.boundingBox.expandByPoint(Rs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rs),this.boundingSphere.expandByPoint(Rs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qa.copy(this.boundingSphere),Qa.applyMatrix4(r),e.ray.intersectsSphere(Qa)!==!1&&(ou.copy(r).invert(),ja.copy(e.ray).applyMatrix4(ou),!(this.boundingBox!==null&&ja.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ja)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gp?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;ru.fromBufferAttribute(r.attributes.skinIndex,e),su.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(vr.copy(t),t.set(0,0,0,0)):(vr.set(t.x,t.y,t.z,1),t.set(0,0,0)),vr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=su.getComponent(s);if(a!==0){const o=ru.getComponent(s);au.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xm.copy(vr).applyMatrix4(au),a)}}return t.isVector4&&(t.w=vr.w),t.applyMatrix4(this.bindMatrixInverse)}}class ym extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Hl extends Bt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Ot,u=Ot,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=new Xe,Mm=new Xe;class id{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Mm;lu.multiplyMatrices(o,t[s]),lu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new id(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Hl(t,e,e,ln,nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(De("Skeleton: No bone found with UUID:",s),a=new ym),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class cu extends un{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fi=new Xe,uu=new Xe,Cs=[],hu=new Hn,Sm=new Xe,xr=new Qt,yr=new Gn;class ob extends Qt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Sm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),hu.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(hu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),yr.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Fi),uu.multiplyMatrices(n,Fi),xr.matrixWorld=uu,xr.raycast(e,Cs);for(let a=0,o=Cs.length;a<o;a++){const c=Cs[a];c.instanceId=s,c.object=this,t.push(c)}Cs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new cu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hl(new Float32Array(r*this.count),r,this.count,Ll,nn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const hi=new Gn,bm=new ue(.5,.5),Ps=new N;class zr{constructor(e=new Kn,t=new Kn,n=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],v=s[9],p=s[10],m=s[11],x=s[12],b=s[13],y=s[14],A=s[15];if(r[0].setComponents(l-a,f-u,m-g,A-x).normalize(),r[1].setComponents(l+a,f+u,m+g,A+x).normalize(),r[2].setComponents(l+o,f+h,m+v,A+b).normalize(),r[3].setComponents(l-o,f-h,m-v,A-b).normalize(),n)r[4].setComponents(c,d,p,y).normalize(),r[5].setComponents(l-c,f-d,m-p,A-y).normalize();else if(r[4].setComponents(l-c,f-d,m-p,A-y).normalize(),t===cn)r[5].setComponents(l+c,f+d,m+p,A+y).normalize();else if(t===Br)r[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);const t=bm.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const du=new Xe;class Gl{constructor(){this.coordinateSystem=cn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];du.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new zr),n[r].setFromProjectionMatrix(du,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new zr),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Gl().copy(this)}}class Vl extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ua=new N,ha=new N,fu=new Xe,Mr=new Yr,Ls=new Gn,eo=new N,pu=new N;class rd extends xt{constructor(e=new Mt,t=new Vl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ua.fromBufferAttribute(t,r-1),ha.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ua.distanceTo(ha);e.setAttribute("lineDistance",new $e(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;fu.copy(r).invert(),Mr.copy(e.ray).applyMatrix4(fu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=l){const m=u.getX(v),x=u.getX(v+1),b=Is(this,e,Mr,c,m,x,v);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(f),m=Is(this,e,Mr,c,v,p,g-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=l){const m=Is(this,e,Mr,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Is(this,e,Mr,c,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Is(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(ua.fromBufferAttribute(o,r),ha.fromBufferAttribute(o,s),t.distanceSqToSegment(ua,ha,eo,pu)>n)return;eo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(eo);if(!(l<e.near||l>e.far))return{distance:l,point:pu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const mu=new N,gu=new N;class sd extends rd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)mu.fromBufferAttribute(t,r),gu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+mu.distanceTo(gu);e.setAttribute("lineDistance",new $e(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lb extends rd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Em extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _u=new Xe,dl=new Yr,Ns=new Gn,Ds=new N;class cb extends xt{constructor(e=new Mt,t=new Em){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),Ns.radius+=s,e.ray.intersectsSphere(Ns)===!1)return;_u.copy(r).invert(),dl.copy(e.ray).applyMatrix4(_u);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const p=l.getX(g);Ds.fromBufferAttribute(h,p),vu(Ds,p,c,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Ds.fromBufferAttribute(h,g),vu(Ds,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function vu(i,e,t,n,r,s,a){const o=dl.distanceSqToPoint(i);if(o<t){const c=new N;dl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ad extends Bt{constructor(e=[],t=Ki,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tm extends Bt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class er extends Bt{constructor(e,t,n=En,r,s,a,o=Ot,c=Ot,l,u=ii,h=1){if(u!==ii&&u!==ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class od extends er{constructor(e,t=En,n=Ki,r,s,a=Ot,o=Ot,c,l=ii){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ld extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zr extends Mt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2));function g(v,p,m,x,b,y,A,T,_,M,C){const R=y/_,I=A/M,D=y/2,B=A/2,P=T/2,z=_+1,Y=M+1;let q=0,te=0;const G=new N;for(let Z=0;Z<Y;Z++){const ne=Z*I-B;for(let be=0;be<z;be++){const Ne=be*R-D;G[v]=Ne*x,G[p]=ne*b,G[m]=P,l.push(G.x,G.y,G.z),G[v]=0,G[p]=0,G[m]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(be/_),h.push(1-Z/M),q+=1}}for(let Z=0;Z<M;Z++)for(let ne=0;ne<_;ne++){const be=d+ne+z*Z,Ne=d+ne+z*(Z+1),K=d+(ne+1)+z*(Z+1),_e=d+(ne+1)+z*Z;c.push(be,Ne,_e),c.push(Ne,K,_e),te+=6}o.addGroup(f,te,C),f+=te,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cd extends Mt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+s,v=r+1,p=new N,m=new N;for(let x=0;x<=g;x++){let b=0,y=0,A=0,T=0;if(x<=n){const C=x/n,R=C*Math.PI/2;y=-u-e*Math.cos(R),A=e*Math.sin(R),T=-e*Math.cos(R),b=C*h}else if(x<=n+s){const C=(x-n)/s;y=-u+C*t,A=e,T=0,b=h+C*d}else{const C=(x-n-s)/n,R=C*Math.PI/2;y=u+e*Math.sin(R),A=e*Math.cos(R),T=e*Math.sin(R),b=h+d+C*h}const _=Math.max(0,Math.min(1,b/f));let M=0;x===0?M=.5/r:x===g&&(M=-.5/r);for(let C=0;C<=r;C++){const R=C/r,I=R*Math.PI*2,D=Math.sin(I),B=Math.cos(I);m.x=-A*B,m.y=y,m.z=A*D,o.push(m.x,m.y,m.z),p.set(-A*B,T,A*D),p.normalize(),c.push(p.x,p.y,p.z),l.push(R+M,_)}if(x>0){const C=(x-1)*v;for(let R=0;R<r;R++){const I=C+R,D=C+R+1,B=x*v+R,P=x*v+R+1;a.push(I,D,B),a.push(D,P,B)}}}this.setIndex(a),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ud extends Mt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new N,u=new ue;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(o,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wl extends Mt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function x(){const y=new N,A=new N;let T=0;const _=(t-e)/n;for(let M=0;M<=s;M++){const C=[],R=M/s,I=R*(t-e)+e;for(let D=0;D<=r;D++){const B=D/r,P=B*c+o,z=Math.sin(P),Y=Math.cos(P);A.x=I*z,A.y=-R*n+p,A.z=I*Y,h.push(A.x,A.y,A.z),y.set(z,_,Y).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-R),C.push(g++)}v.push(C)}for(let M=0;M<r;M++)for(let C=0;C<s;C++){const R=v[C][M],I=v[C+1][M],D=v[C+1][M+1],B=v[C][M+1];(e>0||C!==0)&&(u.push(R,I,B),T+=3),(t>0||C!==s-1)&&(u.push(I,D,B),T+=3)}l.addGroup(m,T,0),m+=T}function b(y){const A=g,T=new ue,_=new N;let M=0;const C=y===!0?e:t,R=y===!0?1:-1;for(let D=1;D<=r;D++)h.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),g++;const I=g;for(let D=0;D<=r;D++){const P=D/r*c+o,z=Math.cos(P),Y=Math.sin(P);_.x=C*Y,_.y=p*R,_.z=C*z,h.push(_.x,_.y,_.z),d.push(0,R,0),T.x=z*.5+.5,T.y=Y*.5*R+.5,f.push(T.x,T.y),g++}for(let D=0;D<r;D++){const B=A+D,P=I+D;y===!0?u.push(P,P+1,B):u.push(P+1,P,B),M+=3}l.addGroup(m,M,y===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hd extends Wl{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new hd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ql extends Mt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),u(),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(s.slice(),3)),this.setAttribute("uv",new $e(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const b=new N,y=new N,A=new N;for(let T=0;T<t.length;T+=3)f(t[T+0],b),f(t[T+1],y),f(t[T+2],A),c(b,y,A,x)}function c(x,b,y,A){const T=A+1,_=[];for(let M=0;M<=T;M++){_[M]=[];const C=x.clone().lerp(y,M/T),R=b.clone().lerp(y,M/T),I=T-M;for(let D=0;D<=I;D++)D===0&&M===T?_[M][D]=C:_[M][D]=C.clone().lerp(R,D/I)}for(let M=0;M<T;M++)for(let C=0;C<2*(T-M)-1;C++){const R=Math.floor(C/2);C%2===0?(d(_[M][R+1]),d(_[M+1][R]),d(_[M][R])):(d(_[M][R+1]),d(_[M+1][R+1]),d(_[M+1][R]))}}function l(x){const b=new N;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(x),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function u(){const x=new N;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];const y=p(x)/2/Math.PI+.5,A=m(x)/Math.PI+.5;a.push(y,1-A)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){const b=a[x+0],y=a[x+2],A=a[x+4],T=Math.max(b,y,A),_=Math.min(b,y,A);T>.9&&_<.1&&(b<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,b){const y=x*3;b.x=e[y+0],b.y=e[y+1],b.z=e[y+2]}function g(){const x=new N,b=new N,y=new N,A=new N,T=new ue,_=new ue,M=new ue;for(let C=0,R=0;C<s.length;C+=9,R+=6){x.set(s[C+0],s[C+1],s[C+2]),b.set(s[C+3],s[C+4],s[C+5]),y.set(s[C+6],s[C+7],s[C+8]),T.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),A.copy(x).add(b).add(y).divideScalar(3);const I=p(A);v(T,R+0,x,I),v(_,R+2,b,I),v(M,R+4,y,I)}}function v(x,b,y,A){A<0&&x.x===1&&(a[b]=x.x-1),y.x===0&&y.z===0&&(a[b]=A/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.vertices,e.indices,e.radius,e.detail)}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ue:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,r=[],s=[],a=[],o=new N,c=new Xe;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new N)}s[0]=new N,a[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ke(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Ke(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Xl extends An{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ue){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Am extends Xl{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $l(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,u,h){let d=(a-s)/l-(o-s)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const xu=new N,yu=new N,to=new $l,no=new $l,io=new $l;class dd extends An{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new N){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,u;this.closed||o>0?l=r[(o-1)%s]:(yu.subVectors(r[0],r[1]).add(r[0]),l=yu);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(xu.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=xu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),to.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,p),no.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,p),io.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(to.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),no.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),io.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(to.calc(c),no.calc(c),io.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Mu(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function wm(i,e){const t=1-i;return t*t*e}function Rm(i,e){return 2*(1-i)*i*e}function Cm(i,e){return i*i*e}function Ir(i,e,t,n){return wm(i,e)+Rm(i,t)+Cm(i,n)}function Pm(i,e){const t=1-i;return t*t*t*e}function Lm(i,e){const t=1-i;return 3*t*t*i*e}function Im(i,e){return 3*(1-i)*i*i*e}function Nm(i,e){return i*i*i*e}function Nr(i,e,t,n,r){return Pm(i,e)+Lm(i,t)+Im(i,n)+Nm(i,r)}class fd extends An{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Nr(e,r.x,s.x,a.x,o.x),Nr(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dm extends An{constructor(e=new N,t=new N,n=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Nr(e,r.x,s.x,a.x,o.x),Nr(e,r.y,s.y,a.y,o.y),Nr(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pd extends An{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Um extends An{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class md extends An{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ir(e,r.x,s.x,a.x),Ir(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gd extends An{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ir(e,r.x,s.x,a.x),Ir(e,r.y,s.y,a.y),Ir(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _d extends An{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Mu(o,c.x,l.x,u.x,h.x),Mu(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new ue().fromArray(r))}return this}}var da=Object.freeze({__proto__:null,ArcCurve:Am,CatmullRomCurve3:dd,CubicBezierCurve:fd,CubicBezierCurve3:Dm,EllipseCurve:Xl,LineCurve:pd,LineCurve3:Um,QuadraticBezierCurve:md,QuadraticBezierCurve3:gd,SplineCurve:_d});class Fm extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new da[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new da[r.type]().fromJSON(r))}return this.cacheLengths=null,this}}class Su extends Fm{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pd(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new md(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new fd(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _d(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new Xl(e,t,n,r,s,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Om extends Su{constructor(e){super(e),this.uuid=dn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Su().fromJSON(r))}return this}}function Bm(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=vd(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=Vm(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let u=o,h=c;for(let d=t;d<r;d+=t){const f=i[d],g=i[d+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return Hr(s,a,t,o,c,l,0),a}function vd(i,e,t,n,r){let s;if(r===eg(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=bu(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=bu(a/n|0,i[a],i[a+1],s);return s&&tr(s,s.next)&&(Vr(s),s=s.next),s}function _i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||vt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(i,e,t,n,r,s,a){if(!i)return;!a&&s&&Ym(i,n,r,s);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(s?zm(i,n,r,s):km(i)){e.push(c.i,i.i,l.i),Vr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Hm(_i(i),e),Hr(i,e,t,n,r,s,2)):a===2&&Gm(i,e,t,n,r,s):Hr(_i(i),e,t,n,r,s,1);break}}}function km(i){const e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(r,s,a),h=Math.min(o,c,l),d=Math.max(r,s,a),f=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Tr(r,o,s,c,a,l,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zm(i,e,t,n){const r=i.prev,s=i,a=i.next;if(vt(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,u=r.y,h=s.y,d=a.y,f=Math.min(o,c,l),g=Math.min(u,h,d),v=Math.max(o,c,l),p=Math.max(u,h,d),m=fl(f,g,e,t,n),x=fl(v,p,e,t,n);let b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=x;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=p&&b!==r&&b!==a&&Tr(o,u,c,h,l,d,b.x,b.y)&&vt(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==r&&y!==a&&Tr(o,u,c,h,l,d,y.x,y.y)&&vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=p&&b!==r&&b!==a&&Tr(o,u,c,h,l,d,b.x,b.y)&&vt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=p&&y!==r&&y!==a&&Tr(o,u,c,h,l,d,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Hm(i,e){let t=i;do{const n=t.prev,r=t.next.next;!tr(n,r)&&yd(n,t,t.next,r)&&Gr(n,r)&&Gr(r,n)&&(e.push(n.i,t.i,r.i),Vr(t),Vr(t.next),t=i=r),t=t.next}while(t!==i);return _i(t)}function Gm(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Km(a,o)){let c=Md(a,o);a=_i(a,a.next),c=_i(c,c.next),Hr(a,e,t,n,r,s,0),Hr(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Vm(i,e,t,n){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=vd(i,o,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Jm(l))}r.sort(Wm);for(let s=0;s<r.length;s++)t=qm(r[s],t);return t}function Wm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function qm(i,e){const t=Xm(i,e);if(!t)return e;const n=Md(t,i);return _i(n,n.next),_i(t,t.next)}function Xm(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,a;if(tr(i,t))return t;do{if(tr(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&xd(r<l?n:s,r,c,l,r<l?s:n,r,t.x,t.y)){const h=Math.abs(r-t.y)/(n-t.x);Gr(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&$m(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function $m(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function Ym(i,e,t,n){let r=i;do r.z===0&&(r.z=fl(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Zm(r)}function Zm(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,t*=2}while(e>1);return i}function fl(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xd(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Tr(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&xd(i,e,t,n,r,s,a,o)}function Km(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qm(i,e)&&(Gr(i,e)&&Gr(e,i)&&jm(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||tr(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function tr(i,e){return i.x===e.x&&i.y===e.y}function yd(i,e,t,n){const r=Fs(vt(i,e,t)),s=Fs(vt(i,e,n)),a=Fs(vt(t,n,i)),o=Fs(vt(t,n,e));return!!(r!==s&&a!==o||r===0&&Us(i,t,e)||s===0&&Us(i,n,e)||a===0&&Us(t,i,n)||o===0&&Us(t,e,n))}function Us(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fs(i){return i>0?1:i<0?-1:0}function Qm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Gr(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function jm(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Md(i,e){const t=pl(i.i,i.x,i.y),n=pl(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bu(i,e,t,n){const r=pl(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eg(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class tg{static triangulate(e,t,n=2){return Bm(e,t,n)}}class Vi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Eu(e),Tu(n,e);let a=e.length;t.forEach(Eu);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Tu(n,t[c]);const o=tg.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Eu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Sd extends Mt{constructor(e=new Om([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new $e(r,3)),this.setAttribute("uv",new $e(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:ng;let b,y=!1,A,T,_,M;if(m){b=m.getSpacedPoints(u),y=!0,d=!1;const O=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(u,O),T=new N,_=new N,M=new N}d||(p=0,f=0,g=0,v=0);const C=o.extractPoints(l);let R=C.shape;const I=C.holes;if(!Vi.isClockWise(R)){R=R.reverse();for(let O=0,H=I.length;O<H;O++){const re=I[O];Vi.isClockWise(re)&&(I[O]=re.reverse())}}function B(O){const re=10000000000000001e-36;let se=O[0];for(let oe=1;oe<=O.length;oe++){const Re=oe%O.length,Se=O[Re],je=Se.x-se.x,et=Se.y-se.y,st=je*je+et*et,F=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(se.x),Math.abs(se.y)),Tt=re*F*F;if(st<=Tt){O.splice(Re,1),oe--;continue}se=Se}}B(R),I.forEach(B);const P=I.length,z=R;for(let O=0;O<P;O++){const H=I[O];R=R.concat(H)}function Y(O,H,re){return H||ze("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(H,re)}const q=R.length;function te(O,H,re){let se,oe,Re;const Se=O.x-H.x,je=O.y-H.y,et=re.x-O.x,st=re.y-O.y,F=Se*Se+je*je,Tt=Se*st-je*et;if(Math.abs(Tt)>Number.EPSILON){const Qe=Math.sqrt(F),ht=Math.sqrt(et*et+st*st),xe=H.x-je/Qe,yt=H.y+Se/Qe,ke=re.x-st/ht,He=re.y+et/ht,w=((ke-xe)*st-(He-yt)*et)/(Se*st-je*et);se=xe+Se*w-O.x,oe=yt+je*w-O.y;const S=se*se+oe*oe;if(S<=2)return new ue(se,oe);Re=Math.sqrt(S/2)}else{let Qe=!1;Se>Number.EPSILON?et>Number.EPSILON&&(Qe=!0):Se<-Number.EPSILON?et<-Number.EPSILON&&(Qe=!0):Math.sign(je)===Math.sign(st)&&(Qe=!0),Qe?(se=-je,oe=Se,Re=Math.sqrt(F)):(se=Se,oe=je,Re=Math.sqrt(F/2))}return new ue(se/Re,oe/Re)}const G=[];for(let O=0,H=z.length,re=H-1,se=O+1;O<H;O++,re++,se++)re===H&&(re=0),se===H&&(se=0),G[O]=te(z[O],z[re],z[se]);const Z=[];let ne,be=G.concat();for(let O=0,H=P;O<H;O++){const re=I[O];ne=[];for(let se=0,oe=re.length,Re=oe-1,Se=se+1;se<oe;se++,Re++,Se++)Re===oe&&(Re=0),Se===oe&&(Se=0),ne[se]=te(re[se],re[Re],re[Se]);Z.push(ne),be=be.concat(ne)}let Ne;if(p===0)Ne=Vi.triangulateShape(z,I);else{const O=[],H=[];for(let re=0;re<p;re++){const se=re/p,oe=f*Math.cos(se*Math.PI/2),Re=g*Math.sin(se*Math.PI/2)+v;for(let Se=0,je=z.length;Se<je;Se++){const et=Y(z[Se],G[Se],Re);Oe(et.x,et.y,-oe),se===0&&O.push(et)}for(let Se=0,je=P;Se<je;Se++){const et=I[Se];ne=Z[Se];const st=[];for(let F=0,Tt=et.length;F<Tt;F++){const Qe=Y(et[F],ne[F],Re);Oe(Qe.x,Qe.y,-oe),se===0&&st.push(Qe)}se===0&&H.push(st)}}Ne=Vi.triangulateShape(O,H)}const K=Ne.length,_e=g+v;for(let O=0;O<q;O++){const H=d?Y(R[O],be[O],_e):R[O];y?(_.copy(A.normals[0]).multiplyScalar(H.x),T.copy(A.binormals[0]).multiplyScalar(H.y),M.copy(b[0]).add(_).add(T),Oe(M.x,M.y,M.z)):Oe(H.x,H.y,0)}for(let O=1;O<=u;O++)for(let H=0;H<q;H++){const re=d?Y(R[H],be[H],_e):R[H];y?(_.copy(A.normals[O]).multiplyScalar(re.x),T.copy(A.binormals[O]).multiplyScalar(re.y),M.copy(b[O]).add(_).add(T),Oe(M.x,M.y,M.z)):Oe(re.x,re.y,h/u*O)}for(let O=p-1;O>=0;O--){const H=O/p,re=f*Math.cos(H*Math.PI/2),se=g*Math.sin(H*Math.PI/2)+v;for(let oe=0,Re=z.length;oe<Re;oe++){const Se=Y(z[oe],G[oe],se);Oe(Se.x,Se.y,h+re)}for(let oe=0,Re=I.length;oe<Re;oe++){const Se=I[oe];ne=Z[oe];for(let je=0,et=Se.length;je<et;je++){const st=Y(Se[je],ne[je],se);y?Oe(st.x,st.y+b[u-1].y,b[u-1].x+re):Oe(st.x,st.y,h+re)}}}Ee(),pe();function Ee(){const O=r.length/3;if(d){let H=0,re=q*H;for(let se=0;se<K;se++){const oe=Ne[se];ft(oe[2]+re,oe[1]+re,oe[0]+re)}H=u+p*2,re=q*H;for(let se=0;se<K;se++){const oe=Ne[se];ft(oe[0]+re,oe[1]+re,oe[2]+re)}}else{for(let H=0;H<K;H++){const re=Ne[H];ft(re[2],re[1],re[0])}for(let H=0;H<K;H++){const re=Ne[H];ft(re[0]+q*u,re[1]+q*u,re[2]+q*u)}}n.addGroup(O,r.length/3-O,0)}function pe(){const O=r.length/3;let H=0;ae(z,H),H+=z.length;for(let re=0,se=I.length;re<se;re++){const oe=I[re];ae(oe,H),H+=oe.length}n.addGroup(O,r.length/3-O,1)}function ae(O,H){let re=O.length;for(;--re>=0;){const se=re;let oe=re-1;oe<0&&(oe=O.length-1);for(let Re=0,Se=u+p*2;Re<Se;Re++){const je=q*Re,et=q*(Re+1),st=H+se+je,F=H+oe+je,Tt=H+oe+et,Qe=H+se+et;Fe(st,F,Tt,Qe)}}}function Oe(O,H,re){c.push(O),c.push(H),c.push(re)}function ft(O,H,re){qe(O),qe(H),qe(re);const se=r.length/3,oe=x.generateTopUV(n,r,se-3,se-2,se-1);X(oe[0]),X(oe[1]),X(oe[2])}function Fe(O,H,re,se){qe(O),qe(H),qe(se),qe(H),qe(re),qe(se);const oe=r.length/3,Re=x.generateSideWallUV(n,r,oe-6,oe-3,oe-2,oe-1);X(Re[0]),X(Re[1]),X(Re[3]),X(Re[1]),X(Re[2]),X(Re[3])}function qe(O){r.push(c[O*3+0]),r.push(c[O*3+1]),r.push(c[O*3+2])}function X(O){s.push(O.x),s.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ig(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new da[r.type]().fromJSON(r)),new Sd(n,e.options)}}const ng={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],u=e[r*3+1];return[new ue(s,a),new ue(o,c),new ue(l,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ue(a,1-c),new ue(l,1-h),new ue(d,1-g),new ue(v,1-m)]:[new ue(o,1-c),new ue(u,1-h),new ue(f,1-g),new ue(p,1-m)]}};function ig(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class bd extends ql{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bd(e.radius,e.detail)}}class Jr extends Mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const x=m*d-a;for(let b=0;b<l;b++){const y=b*h-s;g.push(y,-x,0),v.push(0,0,1),p.push(b/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){const b=x+l*m,y=x+l*(m+1),A=x+1+l*(m+1),T=x+1+l*m;f.push(b,y,T),f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ed extends Mt{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/r,f=new N,g=new ue;for(let v=0;v<=r;v++){for(let p=0;p<=n;p++){const m=s+p/n*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<r;v++){const p=v*(n+1);for(let m=0;m<n;m++){const x=m+p,b=x,y=x+n+1,A=x+n+2,T=x+1;o.push(b,y,T),o.push(y,A,T)}}this.setIndex(o),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Td extends Mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new N,d=new N,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const x=[],b=m/n,y=a+b*o,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A);let _=0;m===0&&a===0?_=.5/t:m===n&&c===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){const C=M/t,R=r+C*s;h.x=-T*Math.cos(R),h.y=A,h.z=T*Math.sin(R),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(C+_,1-b),x.push(l++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const b=u[m][x+1],y=u[m][x],A=u[m+1][x],T=u[m+1][x+1];(m!==0||a>0)&&f.push(b,y,T),(m!==n-1||c<Math.PI)&&f.push(y,A,T)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ad extends Mt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],u=[],h=[],d=new N,f=new N,g=new N;for(let v=0;v<=n;v++){const p=a+v/n*o;for(let m=0;m<=r;m++){const x=m/r*s;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),h.push(m/r),h.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=r;p++){const m=(r+1)*v+p-1,x=(r+1)*(v-1)+p-1,b=(r+1)*(v-1)+p,y=(r+1)*v+p;c.push(m,x,y),c.push(x,b,y)}this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ad(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class wd extends Mt{constructor(e=new gd(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new N,c=new N,l=new ue;let u=new N;const h=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function v(){for(let b=0;b<t;b++)p(b);p(s===!1?t:0),x(),m()}function p(b){u=e.getPointAt(b/t,u);const y=a.normals[b],A=a.binormals[b];for(let T=0;T<=r;T++){const _=T/r*Math.PI*2,M=Math.sin(_),C=-Math.cos(_);c.x=C*y.x+M*A.x,c.y=C*y.y+M*A.y,c.z=C*y.z+M*A.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=t;b++)for(let y=1;y<=r;y++){const A=(r+1)*(b-1)+(y-1),T=(r+1)*b+(y-1),_=(r+1)*b+y,M=(r+1)*(b-1)+y;g.push(A,T,M),g.push(T,_,M)}}function x(){for(let b=0;b<=t;b++)for(let y=0;y<=r;y++)l.x=b/t,l.y=y/r,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new wd(new da[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function nr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Au(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Au(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=nr(i[t]);for(const r in n)e[r]=n[r]}return e}function Au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const sg={clone:nr,merge:qt};var ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=rg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(r.value);break;case"v2":this.uniforms[n].value=new ue().fromArray(r.value);break;case"v3":this.uniforms[n].value=new N().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lg extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cd extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ub extends Cd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){qi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hb extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sa,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cg extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ug extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qn(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ar(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function hg(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function wu(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function dg(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Kr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class fg extends Kr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hi,endingEnd:Hi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gi:s=e,o=2*t-n;break;case ra:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gi:a=e,c=2*n-t;break;case ra:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(r-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,x=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*v+.5*g,y=f*p-f*v;for(let A=0;A!==o;++A)s[A]=m*a[u+A]+x*a[l+A]+b*a[c+A]+y*a[h+A];return s}}class Pd extends Kr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}}class pg extends Kr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class mg extends Kr{interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){const g=(n-t)/(r-t),v=1-g;for(let p=0;p!==o;++p)s[p]=a[l+p]*v+a[c+p]*g;return s}const d=o*2,f=e-1;for(let g=0;g!==o;++g){const v=a[l+g],p=a[c+g],m=f*d+g*2,x=h[m],b=h[m+1],y=e*d+g*2,A=u[y],T=u[y+1],_=_g(n,t,x,A,r);s[g]=Ld(_,v,b,T,p)}return s}}function Ld(i,e,t,n,r){const s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function gg(i,e,t,n,r){const s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function _g(i,e,t,n,r){let s=(i-e)/(r-e);for(let a=0;a<8;a++){const o=Ld(s,e,t,n,r)-i;if(Math.abs(o)<1e-10)break;const c=gg(s,e,t,n,r);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}class fn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qn(t,this.TimeBufferType),this.values=Qn(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qn(e.times,Array),values:Qn(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Ar(e.settings)&&(n.settings={inTangents:Qn(e.settings.inTangents,Array),outTangents:Qn(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new mg(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break;case Oc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ar(this.settings)&&(Ru(this.settings.inTangents,e),Ru(this.settings.outTangents,e))}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ar(this.settings)&&(Cu(this.settings.inTangents,e),Cu(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Lp(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ca,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ar(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}}function Ru(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Cu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=hl;class sr extends fn{constructor(e,t,n){super(e,t,n)}}sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=ia;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Id extends fn{constructor(e,t,n,r){super(e,t,n,r)}}Id.prototype.ValueTypeName="color";class Yl extends fn{constructor(e,t,n,r){super(e,t,n,r)}}Yl.prototype.ValueTypeName="number";class vg extends Kr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Mn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Zl extends fn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new vg(this.times,this.values,this.getValueSize(),e)}}Zl.prototype.ValueTypeName="quaternion";Zl.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends fn{constructor(e,t,n){super(e,t,n)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=ia;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class Nd extends fn{constructor(e,t,n,r){super(e,t,n,r)}}Nd.prototype.ValueTypeName="vector";class Pu{constructor(e="",t=-1,n=[],r=Ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=dn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(yg(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(fn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=hg(c);c=wu(c,1,u),l=wu(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Yl(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yl;case"vector":case"vector2":case"vector3":case"vector4":return Nd;case"color":return Id;case"quaternion":return Zl;case"bool":case"boolean":return sr;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function yg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xg(i.type);if(i.times===void 0){const n=[],r=[];dg(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ar(i.settings)&&(t.settings={inTangents:Qn(i.settings.inTangents,Float32Array),outTangents:Qn(i.settings.outTangents,Float32Array)}),t}const Bn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Lu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Lu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Mg{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Sg=new Mg;class Qr{constructor(e){this.manager=e!==void 0?e:Sg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class bg extends Error{constructor(e,t){super(e),this.response=t}}class db extends Qr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:r});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Nn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){x();function x(){h.read().then(({done:b,value:y})=>{if(b)m.close();else{v+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,_=u.length;T<_;T++){const M=u[T];M.onProgress&&M.onProgress(A)}m.enqueue(y),x()}},b=>{m.error(b)})}}});return new Response(p)}else throw new bg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Bn.add(`file:${e}`,l);const u=Nn[e];delete Nn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=Nn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Oi=new WeakMap;class Eg extends Qr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Oi.get(a);h===void 0&&(h=[],Oi.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=kr("img");function c(){u(),t&&t(this);const h=Oi.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Oi.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),Bn.remove(`image:${e}`);const d=Oi.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Oi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bn.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class fb extends Qr{constructor(e){super(e)}load(e,t,n,r){const s=new Bt,a=new Eg(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class _a extends xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class pb extends _a{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ro=new Xe,Iu=new N,Nu=new N;class Jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Iu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Iu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ro,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Br||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Os=new N,Bs=new Mn,pn=new N;class Dd extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Os,Bs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Os,Bs,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,Bs,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new N,Du=new ue,Uu=new ue;class en extends Dd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Uu),t.subVectors(Uu,Du)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Tg extends Jl{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ji*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class mb extends _a{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Tg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Ag extends Jl{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}}class gb extends _a{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Ag}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ud extends Dd{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wg extends Jl{constructor(){super(new Ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _b extends _a{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new wg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vb{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const so=new WeakMap;class xb extends Qr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{so.has(a)===!0?(r&&r(so.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Bn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),so.set(c,l),Bn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Bn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Bi=-90,ki=1;class ml extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Bi,ki,e,t);r.layers=this.layers,this.add(r);const s=new en(Bi,ki,e,t);s.layers=this.layers,this.add(s);const a=new en(Bi,ki,e,t);a.layers=this.layers,this.add(a);const o=new en(Bi,ki,e,t);o.layers=this.layers,this.add(o);const c=new en(Bi,ki,e,t);c.layers=this.layers,this.add(c);const l=new en(Bi,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rg extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class Cg{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Mn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;Mn.multiplyQuaternionsFlat(e,a,e,t,e,n),Mn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const Kl="\\[\\]\\.:\\/",Pg=new RegExp("["+Kl+"]","g"),Ql="[^"+Kl+"]",Lg="[^"+Kl.replace("\\.","")+"]",Ig=/((?:WC+[\/:])*)/.source.replace("WC",Ql),Ng=/(WCOD+)?/.source.replace("WCOD",Lg),Dg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),Ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),Fg=new RegExp("^"+Ig+Ng+Dg+Ug+"$"),Og=["material","materials","bones","map"];class Bg{constructor(e,t,n){const r=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pg,"")}static parseTrackName(e){const t=Fg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Og.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=Bg;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class kg{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Hi,endingEnd:Hi};for(let l=0;l!==a;++l){const u=s[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=xp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Mp:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Ul:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===yp;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===vp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Gi,r.endingEnd=Gi):(e?r.endingStart=this.zeroSlopeAtStart?Gi:Hi:r.endingStart=ra,t?r.endingEnd=this.zeroSlopeAtEnd?Gi:Hi:r.endingEnd=ra)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const zg=new Float32Array(1);class yb extends ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const d=r[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;g=new Cg(ct.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Pd(new Float32Array(2),new Float32Array(2),1,zg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Pu.findByName(r,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ul),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new kg(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Pu.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(r,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Fu=new Xe;class Mb{constructor(e,t,n=0,r=1/0){this.ray=new Yr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fu),this}intersectObject(e,t=!0,n=[]){return gl(e,this,n,t),n.sort(Ou),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)gl(e[r],this,n,t);return n.sort(Ou),n}}function Ou(i,e){return i.distance-e.distance}function gl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)gl(s[a],e,t,!0)}}class Sb extends sd{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ve(n),r=new Ve(r);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);const v=d===s?n:r;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const u=new Mt;u.setAttribute("position",new $e(c,3)),u.setAttribute("color",new $e(l,3));const h=new Vl({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const ks=new Hn;class bb extends sd{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),s=new Mt;s.setIndex(new un(n,1)),s.setAttribute("position",new un(r,3)),super(s,new Vl({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&ks.setFromObject(this.object),ks.isEmpty())return;const e=ks.min,t=ks.max,n=this.geometry.attributes.position,r=n.array;r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=e.x,r[4]=t.y,r[5]=t.z,r[6]=e.x,r[7]=e.y,r[8]=t.z,r[9]=t.x,r[10]=e.y,r[11]=t.z,r[12]=t.x,r[13]=t.y,r[14]=e.z,r[15]=e.x,r[16]=t.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=t.x,r[22]=e.y,r[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Bu(i,e,t,n){const r=Hg(n);switch(t){case Gh:return i*e;case Ll:return i*e/r.components*r.byteLength;case Il:return i*e/r.components*r.byteLength;case gi:return i*e*2/r.components*r.byteLength;case Nl:return i*e*2/r.components*r.byteLength;case Vh:return i*e*3/r.components*r.byteLength;case ln:return i*e*4/r.components*r.byteLength;case Dl:return i*e*4/r.components*r.byteLength;case Xs:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fo:case Bo:return Math.max(i,16)*Math.max(e,8)/4;case Uo:case Oo:return Math.max(i,8)*Math.max(e,8)/2;case ko:case zo:case Go:case Vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ho:case ta:case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sl:case al:case ol:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ll:case cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case na:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hg(i){switch(i){case Kt:case Bh:return{byteLength:1,components:1};case Or:case kh:case Tn:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case En:case Rl:case nn:return{byteLength:4,components:1};case zh:case Hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);function Fd(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gg(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,n0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,i0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,D0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,J0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,h_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,__=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,v_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Z_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ov=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Vg,alphahash_pars_fragment:Wg,alphamap_fragment:qg,alphamap_pars_fragment:Xg,alphatest_fragment:$g,alphatest_pars_fragment:Yg,aomap_fragment:Zg,aomap_pars_fragment:Jg,batching_pars_vertex:Kg,batching_vertex:Qg,begin_vertex:jg,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:a0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:u0,color_vertex:h0,common:d0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:y0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:D0,envmap_vertex:E0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:w0,fog_pars_fragment:R0,gradientmap_pars_fragment:C0,lightmap_pars_fragment:P0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:I0,lights_pars_begin:N0,lights_toon_fragment:U0,lights_toon_pars_fragment:F0,lights_phong_fragment:O0,lights_phong_pars_fragment:B0,lights_physical_fragment:k0,lights_physical_pars_fragment:z0,lights_fragment_begin:H0,lights_fragment_maps:G0,lights_fragment_end:V0,lightprobes_pars_fragment:W0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:Y0,map_fragment:Z0,map_pars_fragment:J0,map_particle_fragment:K0,map_particle_pars_fragment:Q0,metalnessmap_fragment:j0,metalnessmap_pars_fragment:e_,morphinstance_vertex:t_,morphcolor_vertex:n_,morphnormal_vertex:i_,morphtarget_pars_vertex:r_,morphtarget_vertex:s_,normal_fragment_begin:a_,normal_fragment_maps:o_,normal_pars_fragment:l_,normal_pars_vertex:c_,normal_vertex:u_,normalmap_pars_fragment:h_,clearcoat_normal_fragment_begin:d_,clearcoat_normal_fragment_maps:f_,clearcoat_pars_fragment:p_,iridescence_pars_fragment:m_,opaque_fragment:g_,packing:__,premultiplied_alpha_fragment:v_,project_vertex:x_,dithering_fragment:y_,dithering_pars_fragment:M_,roughnessmap_fragment:S_,roughnessmap_pars_fragment:b_,shadowmap_pars_fragment:E_,shadowmap_pars_vertex:T_,shadowmap_vertex:A_,shadowmask_pars_fragment:w_,skinbase_vertex:R_,skinning_pars_vertex:C_,skinning_vertex:P_,skinnormal_vertex:L_,specularmap_fragment:I_,specularmap_pars_fragment:N_,tonemapping_fragment:D_,tonemapping_pars_fragment:U_,transmission_fragment:F_,transmission_pars_fragment:O_,uv_pars_fragment:B_,uv_pars_vertex:k_,uv_vertex:z_,worldpos_vertex:H_,background_vert:G_,background_frag:V_,backgroundCube_vert:W_,backgroundCube_frag:q_,cube_vert:X_,cube_frag:$_,depth_vert:Y_,depth_frag:Z_,distance_vert:J_,distance_frag:K_,equirect_vert:Q_,equirect_frag:j_,linedashed_vert:ev,linedashed_frag:tv,meshbasic_vert:nv,meshbasic_frag:iv,meshlambert_vert:rv,meshlambert_frag:sv,meshmatcap_vert:av,meshmatcap_frag:ov,meshnormal_vert:lv,meshnormal_frag:cv,meshphong_vert:uv,meshphong_frag:hv,meshphysical_vert:dv,meshphysical_frag:fv,meshtoon_vert:pv,meshtoon_frag:mv,points_vert:gv,points_frag:_v,shadow_vert:vv,shadow_frag:xv,sprite_vert:yv,sprite_frag:Mv},Ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},_n={basic:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:qt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:qt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:qt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:qt([Ae.points,Ae.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:qt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:qt([Ae.common,Ae.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:qt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:qt([Ae.sprite,Ae.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:qt([Ae.common,Ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:qt([Ae.lights,Ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};_n.physical={uniforms:qt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const zs={r:0,b:0,g:0},Sv=new Xe,Od=new Ge;Od.set(-1,0,0,0,1,0,0,0,1);function bv(i,e,t,n,r,s){const a=new Ve(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function f(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const y=x.backgroundBlurriness>0;b=e.get(b,y)}return b}function g(x){let b=!1;const y=f(x);y===null?p(a,o):y&&y.isColor&&(p(y,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,b){const y=f(b);y&&y.isCubeTexture?(l===void 0&&(l=new Qt(new Zr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:nr(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Od),l.material.toneMapped=it.getTransfer(y.colorSpace)!==lt,(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Qt(new Jr(2,2),new vi({name:"BackgroundMaterial",uniforms:nr(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,b){x.getRGB(zs,Rd(i)),t.buffers.color.setClear(zs.r,zs.g,zs.b,b,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:g,addToRenderList:v,dispose:m}}function Ev(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(I,D,B,P,z){let Y=!1;const q=h(I,P,B,D);s!==q&&(s=q,l(s.object)),Y=f(I,P,B,z),Y&&g(I,P,B,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(I,D,B,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,D,B,P){const z=P.wireframe===!0;let Y=n[D.id];Y===void 0&&(Y={},n[D.id]=Y);const q=I.isInstancedMesh===!0?I.id:0;let te=Y[q];te===void 0&&(te={},Y[q]=te);let G=te[B.id];G===void 0&&(G={},te[B.id]=G);let Z=G[z];return Z===void 0&&(Z=d(c()),G[z]=Z),Z}function d(I){const D=[],B=[],P=[];for(let z=0;z<t;z++)D[z]=0,B[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,D,B,P){const z=s.attributes,Y=D.attributes;let q=0;const te=B.getAttributes();for(const G in te)if(te[G].location>=0){const ne=z[G];let be=Y[G];if(be===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),ne===void 0||ne.attribute!==be||be&&ne.data!==be.data)return!0;q++}return s.attributesNum!==q||s.index!==P}function g(I,D,B,P){const z={},Y=D.attributes;let q=0;const te=B.getAttributes();for(const G in te)if(te[G].location>=0){let ne=Y[G];ne===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const be={};be.attribute=ne,ne&&ne.data&&(be.data=ne.data),z[G]=be,q++}s.attributes=z,s.attributesNum=q,s.index=P}function v(){const I=s.newAttributes;for(let D=0,B=I.length;D<B;D++)I[D]=0}function p(I){m(I,0)}function m(I,D){const B=s.newAttributes,P=s.enabledAttributes,z=s.attributeDivisors;B[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),z[I]!==D&&(i.vertexAttribDivisor(I,D),z[I]=D)}function x(){const I=s.newAttributes,D=s.enabledAttributes;for(let B=0,P=D.length;B<P;B++)D[B]!==I[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function b(I,D,B,P,z,Y,q){q===!0?i.vertexAttribIPointer(I,D,B,z,Y):i.vertexAttribPointer(I,D,B,P,z,Y)}function y(I,D,B,P){v();const z=P.attributes,Y=B.getAttributes(),q=D.defaultAttributeValues;for(const te in Y){const G=Y[te];if(G.location>=0){let Z=z[te];if(Z===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const ne=Z.normalized,be=Z.itemSize,Ne=e.get(Z);if(Ne===void 0)continue;const K=Ne.buffer,_e=Ne.type,Ee=Ne.bytesPerElement,pe=_e===i.INT||_e===i.UNSIGNED_INT||Z.gpuType===Rl;if(Z.isInterleavedBufferAttribute){const ae=Z.data,Oe=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,ft=Z.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let Fe=0;Fe<G.locationSize;Fe++)m(G.location+Fe,ae.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<G.locationSize;Fe++)p(G.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Fe=0;Fe<G.locationSize;Fe++)b(G.location+Fe,be/G.locationSize,_e,ne,Oe*Ee,(ft+be/G.locationSize*Fe)*Ee,pe)}else{if(Z.isInstancedBufferAttribute){for(let ae=0;ae<G.locationSize;ae++)m(G.location+ae,Z.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ae=0;ae<G.locationSize;ae++)p(G.location+ae);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ae=0;ae<G.locationSize;ae++)b(G.location+ae,be/G.locationSize,_e,ne,be*Ee,be/G.locationSize*ae*Ee,pe)}}else if(q!==void 0){const ne=q[te];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(G.location,ne);break;case 3:i.vertexAttrib3fv(G.location,ne);break;case 4:i.vertexAttrib4fv(G.location,ne);break;default:i.vertexAttrib1fv(G.location,ne)}}}}x()}function A(){C();for(const I in n){const D=n[I];for(const B in D){const P=D[B];for(const z in P){const Y=P[z];for(const q in Y)u(Y[q].object),delete Y[q];delete P[z]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const D=n[I.id];for(const B in D){const P=D[B];for(const z in P){const Y=P[z];for(const q in Y)u(Y[q].object),delete Y[q];delete P[z]}}delete n[I.id]}function _(I){for(const D in n){const B=n[D];for(const P in B){const z=B[P];if(z[I.id]===void 0)continue;const Y=z[I.id];for(const q in Y)u(Y[q].object),delete Y[q];delete z[I.id]}}}function M(I){for(const D in n){const B=n[D],P=I.isInstancedMesh===!0?I.id:0,z=B[P];if(z!==void 0){for(const Y in z){const q=z[Y];for(const te in q)u(q[te].object),delete q[te];delete z[Y]}delete B[P],Object.keys(B).length===0&&delete n[D]}}}function C(){R(),a=!0,s!==r&&(s=r,l(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function Tv(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Av(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==ln&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const M=_===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Kt&&_!==nn&&!M&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(De("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&De("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:T}}function wv(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Kn,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,m=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const x=s?0:n,b=x*4;let y=m.clippingState||null;c.value=y,y=u(g,d,b,f);for(let A=0;A!==b;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const m=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,y=f;b!==v;++b,y+=4)a.copy(h[b]).applyMatrix4(x,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class jl extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ad(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zr(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Wi});s.uniforms.tEquirect.value=t;const a=new Qt(r,s),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=Xt),new ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ku=256,Rv=3,Cv=20,Bd=256,kd=16,Pv=3,Lv=new N,Iv=new Ve;class fa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ml(1,10,null),this._boxMesh=new Qt(new Zr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Lv}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const h=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Iv));const p=new ml(n,r,u);return p.position.copy(o),p.update(c,e),c.autoClear=h,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ku,Zh(e))}_fromTexture(e,t){e.mapping===Ki||e.mapping===Fr?this._setSize(e.image.length===0?ku:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=zu(e,!1,!1),n=Math.log2(e)-Rv;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ki||e.mapping===Fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Nv(),this._integrationMaterial=Dv());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/kd);for(let a=0;a<=n;a++){const o=fa.lodToRoughness(a,n);if(a>n-Pv)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(Bd*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Uv());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function zu(i,e,t){return new jl(i,{minFilter:ei,generateMipmaps:e,type:Tn,colorSpace:aa,depthBuffer:t})}function jr(i,e,t){return new vi({name:i,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:$t,blending:Wi,depthTest:!1,depthWrite:!1})}function Nv(){return jr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dv(){return jr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Uv(){return jr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Cv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Hu(){return jr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Gu(){return jr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Fv(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Aa||f===wa)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new jl(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===Aa||f===wa,v=f===Ki||f===Fr;if(g||v){let p=t.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new fa(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const x=d.image;return g&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new fa(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===Aa?d.mapping=Ki:f===wa&&(d.mapping=Fr),d}function c(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Ov(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&qi("WebGLRenderer: "+n+" extension not supported."),r}}}function Bv(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const v=s.get(g);v&&(e.remove(v),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(g){const v=g.attributes;for(const p in v)e.update(v[p],i.ARRAY_BUFFER)}function h(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const x=v!==null?v.array.length:p.array.length/3-1,b=p.count>=65535?td:ed,y=new b(Math.ceil(x/3)*6,1),A=y.array;if(v!==null){const _=v.array;m=v.version;for(let M=0,C=0;M<x;M+=3){const R=_[M+0],I=_[M+1],D=_[M+2];A[C++]=R,A[C++]=I,A[C++]=I,A[C++]=D,A[C++]=D,A[C++]=R}}else{m=p.version;for(let _=0,M=0;_<x;_+=3){const C=_+0,R=_+1,I=_+2;A[M++]=C,A[M++]=R,A[M++]=R,A[M++]=I,A[M++]=I,A[M++]=C}}y.version=m;const T=s.get(g);T&&e.remove(T),s.set(g,y)}function d(g){const v=s.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&h(g)}else h(g);return s.get(g)}function f(){for(const g in r){const v=r[g].deref();v!==void 0&&c(v)}}return{get:l,update:u,getWireframeAttribute:d,dispose:f}}function kv(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,s,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];t.update(v,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function zv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Hv(i,e,t){const n=new WeakMap,r=new ut;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let y=o.attributes.position.count*b,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*A*4*h),_=new Jh(T,y,A,h);_.type=nn,_.needsUpdate=!0;const M=b*4;for(let R=0;R<h;R++){const I=p[R],D=m[R],B=x[R],P=y*A*4*R;for(let z=0;z<I.count;z++){const Y=z*M;f===!0&&(r.fromBufferAttribute(I,z),T[P+Y+0]=r.x,T[P+Y+1]=r.y,T[P+Y+2]=r.z,T[P+Y+3]=0),g===!0&&(r.fromBufferAttribute(D,z),T[P+Y+4]=r.x,T[P+Y+5]=r.y,T[P+Y+6]=r.z,T[P+Y+7]=0),v===!0&&(r.fromBufferAttribute(B,z),T[P+Y+8]=r.x,T[P+Y+9]=r.y,T[P+Y+10]=r.z,T[P+Y+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new ue(y,A)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Gv(i,e,t,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Vv={[Ph]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Ih]:"CINEON_TONE_MAPPING",[Nh]:"ACES_FILMIC_TONE_MAPPING",[Uh]:"AGX_TONE_MAPPING",[Fh]:"NEUTRAL_TONE_MAPPING",[Dh]:"CUSTOM_TONE_MAPPING"};function Wv(i,e,t,n,r,s){const a=new Sn(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Mt;u.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new $e([0,2,0,0,2,0],2));const h=new lg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Qt(u,h),f=new Ud(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,x=null,b=[],y=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),c!==null&&c.setSize(A,T);for(let _=0;_<b.length;_++){const M=b[_];M.setSize&&M.setSize(A,T)}},this.setEffects=function(A){b=A,y=b.length>0&&b[0].isRenderPass===!0;const T=a.width,_=a.height;b.length>0&&o===null&&(o=new Sn(T,_,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new Sn(T,_,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&b.some(C=>C.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new er(T,_),s===!0&&(l.format=ti,l.type=Qi)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let C=0;C<b.length;C++){const R=b[C];R.setSize&&R.setSize(T,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(A,T){if(p||A.toneMapping===kn&&b.length===0)return!1;if(x=T,T!==null){const _=T.width,M=T.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=kn,!0},this.hasRenderPass=function(){return y},this.end=function(A,T){A.toneMapping=m,p=!0;let _=a,M=o;for(let C=0;C<b.length;C++){const R=b[C];R.enabled!==!1&&(R.render(A,M,_,T),R.needsSwap!==!1&&(_=M,M=M===o?c:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,h.defines={},it.getTransfer(g)===lt&&(h.defines.SRGB_TRANSFER="");const C=Vv[v];C&&(h.defines[C]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(d,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const zd=new Bt,Hd=new er(1,1),Gd=new od(1),Vd=new Jh,Wd=new tm,qd=new ad,Vu=[],Wu=[],qu=new Float32Array(16),Xu=new Float32Array(9),$u=new Float32Array(4);function or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Vu[r];if(s===void 0&&(s=new Float32Array(r),Vu[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function va(i,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function $v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Yv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function Zv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),Lt(t,n)}}function Jv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Xu.set(n),i.uniformMatrix3fv(this.addr,!1,Xu),Lt(t,n)}}function Kv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),Lt(t,n)}}function Qv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function rx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function xa(i){return i.version===0&&(i.compareFunction=Xh,i.needsUpdate=!0),i}function ax(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=xa(Hd):s=zd,t.setTexture2D(e||s,r)}function ox(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wd,r)}function lx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=xa(Gd):s=qd,t.setTextureCube(e||s,r)}function cx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Vd,r)}function ux(i){switch(i){case 5126:return qv;case 35664:return Xv;case 35665:return $v;case 35666:return Yv;case 35674:return Zv;case 35675:return Jv;case 35676:return Kv;case 5124:case 35670:return Qv;case 35667:case 35671:return jv;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return rx;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function hx(i,e){i.uniform1fv(this.addr,e)}function dx(i,e){const t=or(e,this.size,2);i.uniform2fv(this.addr,t)}function fx(i,e){const t=or(e,this.size,3);i.uniform3fv(this.addr,t)}function px(i,e){const t=or(e,this.size,4);i.uniform4fv(this.addr,t)}function mx(i,e){const t=or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gx(i,e){const t=or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _x(i,e){const t=or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vx(i,e){i.uniform1iv(this.addr,e)}function xx(i,e){i.uniform2iv(this.addr,e)}function yx(i,e){i.uniform3iv(this.addr,e)}function Mx(i,e){i.uniform4iv(this.addr,e)}function Sx(i,e){i.uniform1uiv(this.addr,e)}function bx(i,e){i.uniform2uiv(this.addr,e)}function Ex(i,e){i.uniform3uiv(this.addr,e)}function Tx(i,e){i.uniform4uiv(this.addr,e)}function Ax(i,e,t){const n=this.cache,r=e.length,s=va(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=xa(Hd):a=zd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function wx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Wd,s[a])}function Rx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=xa(Gd):a=qd;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function Cx(i,e,t){const n=this.cache,r=e.length,s=va(t,r);Pt(n,s)||(i.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Vd,s[a])}function Px(i){switch(i){case 5126:return hx;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return _x;case 5124:case 35670:return vx;case 35667:case 35671:return xx;case 35668:case 35672:return yx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return bx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}class Lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}}class Ix{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Px(t.type)}}class Nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ao=/(\w+)(\])?(\[|\.)?/g;function Yu(i,e){i.seq.push(e),i.map[e.id]=e}function Dx(i,e,t){const n=i.name,r=n.length;for(ao.lastIndex=0;;){const s=ao.exec(n),a=ao.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Yu(t,l===void 0?new Lx(o,i,e):new Ix(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Nx(o),Yu(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Dx(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Zu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ux=37297;let Fx=0;function Ox(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ju=new Ge;function Bx(i){it._getMatrix(Ju,it.workingColorSpace,i);const e=`mat3( ${Ju.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case oa:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ku(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ox(i.getShaderSource(e),o)}else return s}function kx(i,e){const t=Bx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const zx={[Ph]:"Linear",[Lh]:"Reinhard",[Ih]:"Cineon",[Nh]:"ACESFilmic",[Uh]:"AgX",[Fh]:"Neutral",[Dh]:"Custom"};function Hx(i,e){const t=zx[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new N;function Gx(){it.getLuminanceCoefficients(Hs);const i=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function Wx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wr(i){return i!==""}function Qu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ju(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(Xx,$x)}function $x(i,e){const t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _l(t)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(Yx,Zx)}function Zx(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function th(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Jx={[qs]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function Kx(i){return Jx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qx={[Fr]:"ENVMAP_MODE_REFRACTION"};function jx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Qx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ey={[wl]:"ENVMAP_BLENDING_MULTIPLY",[pp]:"ENVMAP_BLENDING_MIX",[mp]:"ENVMAP_BLENDING_ADD"};function ty(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ey[i.combine]||"ENVMAP_BLENDING_NONE"}function ny(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Kx(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=jx(t),h=ty(t),d=Vx(t),f=Wx(s),g=r.createProgram();let v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(v=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Je.tonemapping_pars_fragment:"",t.toneMapping!==kn?Hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),Gx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=_l(a),a=Qu(a,t),a=ju(a,t),o=_l(o),o=Qu(o,t),o=ju(o,t),a=eh(a),o=eh(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=m+v+a,b=m+p+o,y=Zu(r,r.VERTEX_SHADER,x),A=Zu(r,r.FRAGMENT_SHADER,b);r.attachShader(g,y),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(g)||"",D=r.getShaderInfoLog(y)||"",B=r.getShaderInfoLog(A)||"",P=I.trim(),z=D.trim(),Y=B.trim();let q=!0,te=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,y,A);else{const G=Ku(r,y,"vertex"),Z=Ku(r,A,"fragment");ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+G+`
`+Z)}else P!==""?De("WebGLProgram: Program Info Log:",P):(z===""||Y==="")&&(te=!1);te&&(R.diagnostics={runnable:q,programLog:P,vertexShader:{log:z,prefix:v},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(y),r.deleteShader(A),_=new Js(r,g),M=qx(r,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(g,Ux)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}let iy=0;class ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sy(e),t.set(e,n)),n}}class sy{constructor(e){this.id=iy++,this.code=e,this.usedTimes=0}}function ay(i){return i===gi||i===ta||i===na}function oy(i,e,t,n,r,s){const a=new zl,o=new ry,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,C,R,I,D){const B=R.fog,P=I.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,q=e.get(_.envMap||z,Y),te=d[_.type];let G=n.precision;_.precision!==null&&(G=n.getMaxPrecision(_.precision),G!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",G,"instead."));const Z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ne=Z!==void 0?Z.length:0;let be=0;P.morphAttributes.position!==void 0&&(be=1),P.morphAttributes.normal!==void 0&&(be=2),P.morphAttributes.color!==void 0&&(be=3);let Ne,K,_e,Ee;if(te){const Te=_n[te];Ne=Te.vertexShader,K=Te.fragmentShader}else{Ne=_.vertexShader,K=_.fragmentShader;const Te=o.getVertexShaderStage(_),ot=o.getFragmentShaderStage(_);o.update(_,Te,ot),_e=Te.id,Ee=ot.id}const pe=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Oe=I.isInstancedMesh===!0,ft=I.isBatchedMesh===!0,Fe=!!_.map,qe=!!_.matcap,X=!!q,O=X&&q.isPMREMTexture===!0,H=!!_.aoMap,re=!!_.lightMap,se=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,Re=!!_.displacementMap,Se=!!_.emissiveMap,je=!!_.metalnessMap,et=!!_.roughnessMap,st=_.anisotropy>0,F=_.clearcoat>0,Tt=_.diffuseRoughness>0,Qe=_.dispersion>0,ht=_.retroreflectivity>0,xe=_.iridescence>0,yt=_.sheen>0,ke=_.transmission>0,He=st&&!!_.anisotropyMap,w=F&&!!_.clearcoatMap,S=F&&!!_.clearcoatNormalMap,V=F&&!!_.clearcoatRoughnessMap,le=Tt&&!!_.diffuseRoughnessMap,ie=xe&&!!_.iridescenceMap,de=xe&&!!_.iridescenceThicknessMap,ye=yt&&!!_.sheenColorMap,Q=yt&&!!_.sheenRoughnessMap,j=!!_.specularMap,me=!!_.specularColorMap,L=!!_.specularIntensityMap,ee=ke&&!!_.transmissionMap,J=ke&&!!_.thicknessMap,ge=!!_.gradientMap,he=!!_.alphaMap,fe=_.alphaTest>0,Ue=!!_.alphaHash,Ze=!!_.extensions;let ce=kn;_.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ce=i.toneMapping);const Be=O?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,Ye={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Ne,fragmentShader:K,defines:_.defines,customVertexShaderID:_e,customFragmentShaderID:Ee,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:G,batching:ft,batchingColor:ft&&I._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&I.instanceColor!==null,instancingMorph:Oe&&I.morphTexture!==null,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:qe,envMap:X,envMapMode:X&&q.mapping,envMapPMREM:O,envMapMaxLod:O?Be.length-1:null,envMapSize:O?Be[0].width:null,aoMap:H,lightMap:re,bumpMap:se,normalMap:oe,displacementMap:Re,emissiveMap:Se,normalMapObjectSpace:oe&&_.normalMapType===bp,normalMapTangentSpace:oe&&_.normalMapType===sa,packedNormalMap:oe&&_.normalMapType===sa&&ay(_.normalMap.format),metalnessMap:je,roughnessMap:et,anisotropy:st,anisotropyMap:He,clearcoat:F,clearcoatMap:w,clearcoatNormalMap:S,clearcoatRoughnessMap:V,diffuseRoughness:Tt,diffuseRoughnessMap:le,dispersion:Qe,retroreflection:ht,iridescence:xe,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:yt,sheenColorMap:ye,sheenRoughnessMap:Q,specularMap:j,specularColorMap:me,specularIntensityMap:L,transmission:ke,transmissionMap:ee,thicknessMap:J,gradientMap:ge,opaque:_.transparent===!1&&_.blending===Cr&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:fe,alphaHash:Ue,combine:_.combine,mapUv:Fe&&f(_.map.channel),aoMapUv:H&&f(_.aoMap.channel),lightMapUv:re&&f(_.lightMap.channel),bumpMapUv:se&&f(_.bumpMap.channel),normalMapUv:oe&&f(_.normalMap.channel),displacementMapUv:Re&&f(_.displacementMap.channel),emissiveMapUv:Se&&f(_.emissiveMap.channel),metalnessMapUv:je&&f(_.metalnessMap.channel),roughnessMapUv:et&&f(_.roughnessMap.channel),anisotropyMapUv:He&&f(_.anisotropyMap.channel),clearcoatMapUv:w&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:me&&f(_.specularColorMap.channel),specularIntensityMapUv:L&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:J&&f(_.thicknessMap.channel),alphaMapUv:he&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(oe||st),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(Fe||he),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:be,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(Te=>Te.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&it.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Se&&_.emissiveMap.isVideoTexture===!0&&it.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===vn,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ze&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&_.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function v(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)M.push(C),M.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const M=d[_.type];let C;if(M){const R=_n[M];C=sg.clone(R.uniforms)}else C=_.uniforms;return C}function b(_,M){let C=u.get(M);return C!==void 0?++C.usedTimes:(C=new ny(i,M,_,r),l.push(C),u.set(M,C)),C}function y(_){if(--_.usedTimes===0){const M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:x,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:l,dispose:T}}function ly(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function cy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ih(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,p,m){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.materialVariant=a(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=p,x.group=m),e++,x}function c(d,f,g,v,p,m,x){x.reversedDepth===!0&&(p=-p);const b=o(d,f,g,v,p,m);g.transmission>0?n.push(b):g.transparent===!0?r.push(b):t.push(b)}function l(d,f,g,v,p,m){const x=o(d,f,g,v,p,m);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):t.unshift(x)}function u(d,f){t.length>1&&t.sort(d||cy),n.length>1&&n.sort(f||nh),r.length>1&&r.sort(f||nh)}function h(){for(let d=e,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function uy(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new ih,i.set(n,[a])):r>=s.length?(a=new ih,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function hy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ve};break;case"SpotLight":t={position:new N,direction:new N,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function dy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fy=0;function py(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function my(i){const e=new hy,t=dy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const r=new N,s=new Xe,a=new Xe;function o(l){let u=0,h=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,x=0,b=0,y=0,A=0,T=0,_=0,M=0,C=0,R=0;l.sort(py);for(let D=0,B=l.length;D<B;D++){const P=l[D],z=P.color,Y=P.intensity,q=P.distance;let te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===gi?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=z.r*Y,h+=z.g*Y,d+=z.b*Y;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],Y);R++}else if(P.isSunLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,ne=t.get(P);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[g]=ne,n.sunShadowMap[g]=te;const be=Z.getViewportCount();for(let Ne=0;Ne<be;Ne++)n.sunShadowMatrix[v+Ne]=Z.getMatrix(Ne),n.sunShadowCascade[v+Ne]=Z._cascadeData[Ne];v+=be,g++}n.sun[f]=G,f++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,ne=t.get(P);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(Y),G.distance=q,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[x]=G;const Z=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,Z.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=Z.matrix,P.castShadow){const ne=t.get(P);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=te,_++}x++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(z).multiplyScalar(Y),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=G,b++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Z=P.shadow,ne=t.get(P);ne.shadowIntensity=Z.intensity,ne.shadowBias=Z.bias,ne.shadowNormalBias=Z.normalBias,ne.shadowRadius=Z.radius,ne.shadowMapSize=Z.mapSize,ne.shadowCameraNear=Z.camera.near,ne.shadowCameraFar=Z.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=G,m++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(Y),G.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[y]=G,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==x||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==g||I.numDirectionalShadows!==A||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==M||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=x,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=x,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=g,I.numDirectionalShadows=A,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=M,I.numLightProbes=R,n.version=fy++)}function c(l,u){let h=0,d=0,f=0,g=0,v=0,p=0;const m=u.matrixWorldInverse;for(let x=0,b=l.length;x<b;x++){const y=l[x];if(y.isSunLight){const A=n.sun[h];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),h++}else if(y.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),d++}else if(y.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const A=n.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const A=n.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function rh(i){const e=new my(i),t=[],n=[],r=[];function s(h){u.camera=h,t.length=0,n.length=0,r.length=0}function a(h){h.isLightProbeGrid?r.push(h):t.push(h)}function o(h){n.push(h)}function c(){e.setup(t),r.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function gy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new rh(i),e.set(r,[o])):s>=a.length?(o=new rh(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xy=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],yy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],sh=new Xe,Sr=new N,oo=new N;function My(i,e,t){let n=new zr;const r=new ue,s=new ue,a=new ut,o=new cg,c=new ug,l={},u=t.maxTextureSize,h={[mi]:$t,[$t]:mi,[vn]:vn},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:_y,fragmentShader:vy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let m=this.type;this.render=function(T,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Zf&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qs);const C=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=m!==this.type;B&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=T.length;P<z;P++){const Y=T[P],q=Y.shadow;if(q===void 0){De("WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const te=q.getFrameExtents();r.multiply(te),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,q.mapSize.y=s.y));const G=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=G,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Er){if(Y.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Sn(r.x,r.y,{format:gi,type:Tn,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),q.map.texture.name=Y.name+".shadowMap",q.map.depthTexture=new er(r.x,r.y,nn),q.map.depthTexture.name=Y.name+".shadowMapDepth",q.map.depthTexture.format=ii,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ot,q.map.depthTexture.magFilter=Ot}else Y.isPointLight?(q.map=new jl(r.x),q.map.depthTexture=new od(r.x,En)):(q.map=new Sn(r.x,r.y),q.map.depthTexture=new er(r.x,r.y,En)),q.map.depthTexture.name=Y.name+".shadowMap",q.map.depthTexture.format=ii,this.type===qs?(q.map.depthTexture.compareFunction=G?qh:Wh,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ot,q.map.depthTexture.magFilter=Ot);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const Z=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Y.isPointLight!==!0&&q.updateMatrices(Y,M);const ne=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:M.layers;for(let be=0;be<Z;be++){const Ne=q.getCamera(be);if(Y.isPointLight){const K=q.camera,_e=q.matrix,Ee=Y.distance||K.far;Ee!==K.far&&(K.far=Ee,K.updateProjectionMatrix()),Sr.setFromMatrixPosition(Y.matrixWorld),K.position.copy(Sr),oo.copy(K.position),oo.add(xy[be]),K.up.copy(yy[be]),K.lookAt(oo),K.updateMatrixWorld(),_e.makeTranslation(-Sr.x,-Sr.y,-Sr.z),sh.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),q._frustum.setFromProjectionMatrix(sh,K.coordinateSystem,K.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,be),i.clear();else{be===0&&(i.setRenderTarget(q.map),i.clear());const K=q.getViewport(be);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),D.viewport(a)}n=q.getFrustum(be),y(_,M,Ne,Y,ne,this.type)}q.isPointLightShadow!==!0&&this.type===Er&&x(q,M),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(C,R,I)};function x(T,_){const M=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Sn(r.x,r.y,{format:gi,type:Tn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,M,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,M,f,v,null)}function b(T,_,M,C){let R=null;const I=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)R=I;else if(R=M.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const D=R.uuid,B=_.uuid;let P=l[D];P===void 0&&(P={},l[D]=P);let z=P[B];z===void 0&&(z=R.clone(),P[B]=z,_.addEventListener("dispose",A)),R=z}if(R.visible=_.visible,R.wireframe=_.wireframe,C===Er?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:h[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=i.properties.get(R);D.light=M}return R}function y(T,_,M,C,R,I){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Er)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const P=e.update(T),z=T.material;if(Array.isArray(z)){const Y=P.groups;for(let q=0,te=Y.length;q<te;q++){const G=Y[q],Z=z[G.materialIndex];if(Z&&Z.visible){const ne=b(T,Z,C,I);T.onBeforeShadow(i,T,_,M,P,ne,G),i.renderBufferDirect(M,null,P,ne,T,G),T.onAfterShadow(i,T,_,M,P,ne,G)}}}else if(z.visible){const Y=b(T,z,C,I);T.onBeforeShadow(i,T,_,M,P,Y,null),i.renderBufferDirect(M,null,P,Y,T,null),T.onAfterShadow(i,T,_,M,P,Y,null)}}const B=T.children;for(let P=0,z=B.length;P<z;P++)y(B[P],_,M,C,R,I)}function A(T){T.target.removeEventListener("dispose",A);for(const M in l){const C=l[M],R=T.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Sy(i,e){function t(){let L=!1;const ee=new ut;let J=null;const ge=new ut(0,0,0,0);return{setMask:function(he){J!==he&&!L&&(i.colorMask(he,he,he,he),J=he)},setLocked:function(he){L=he},setClear:function(he,fe,Ue,Ze,ce){ce===!0&&(he*=Ze,fe*=Ze,Ue*=Ze),ee.set(he,fe,Ue,Ze),ge.equals(ee)===!1&&(i.clearColor(he,fe,Ue,Ze),ge.copy(ee))},reset:function(){L=!1,J=null,ge.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,J=null,ge=null,he=null;return{setReversed:function(fe){if(ee!==fe){const Ue=e.get("EXT_clip_control");fe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ee=fe;const Ze=he;he=null,this.setClear(Ze)}},getReversed:function(){return ee},setTest:function(fe){fe?ae(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(fe){J!==fe&&!L&&(i.depthMask(fe),J=fe)},setFunc:function(fe){if(ee&&(fe=Dp[fe]),ge!==fe){switch(fe){case Ao:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Ro:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case Co:i.depthFunc(i.EQUAL);break;case Po:i.depthFunc(i.GEQUAL);break;case Lo:i.depthFunc(i.GREATER);break;case Io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=fe}},setLocked:function(fe){L=fe},setClear:function(fe){he!==fe&&(he=fe,ee&&(fe=1-fe),i.clearDepth(fe))},reset:function(){L=!1,J=null,ge=null,he=null,ee=!1}}}function r(){let L=!1,ee=null,J=null,ge=null,he=null,fe=null,Ue=null,Ze=null,ce=null;return{setTest:function(Be){L||(Be?ae(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(Be){ee!==Be&&!L&&(i.stencilMask(Be),ee=Be)},setFunc:function(Be,Ye,Te){(J!==Be||ge!==Ye||he!==Te)&&(i.stencilFunc(Be,Ye,Te),J=Be,ge=Ye,he=Te)},setOp:function(Be,Ye,Te){(fe!==Be||Ue!==Ye||Ze!==Te)&&(i.stencilOp(Be,Ye,Te),fe=Be,Ue=Ye,Ze=Te)},setLocked:function(Be){L=Be},setClear:function(Be){ce!==Be&&(i.clearStencil(Be),ce=Be)},reset:function(){L=!1,ee=null,J=null,ge=null,he=null,fe=null,Ue=null,Ze=null,ce=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,x=null,b=null,y=null,A=null,T=null,_=null,M=new Ve(0,0,0),C=0,R=!1,I=null,D=null,B=null,P=null,z=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=te>=2);let Z=null,ne={};const be=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),K=new ut().fromArray(be),_e=new ut().fromArray(Ne);function Ee(L,ee,J,ge){const he=new Uint8Array(4),fe=i.createTexture();i.bindTexture(L,fe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<J;Ue++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ee+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return fe}const pe={};pe[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Ur),se(!1),oe(Ic),ae(i.CULL_FACE),H(Wi);function ae(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Oe(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function ft(L,ee){return d[L]!==ee?(i.bindFramebuffer(L,ee),d[L]=ee,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ee),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Fe(L,ee){let J=g,ge=!1;if(L){J=f.get(ee),J===void 0&&(J=[],f.set(ee,J));const he=L.textures;if(J.length!==he.length||J[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,Ue=he.length;fe<Ue;fe++)J[fe]=i.COLOR_ATTACHMENT0+fe;J.length=he.length,ge=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ge=!0);ge&&i.drawBuffers(J)}function qe(L){return v!==L?(i.useProgram(L),v=L,!0):!1}const X={[zi]:i.FUNC_ADD,[Kf]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};X[jf]=i.MIN,X[ep]=i.MAX;const O={[tp]:i.ZERO,[np]:i.ONE,[ip]:i.SRC_COLOR,[Rh]:i.SRC_ALPHA,[cp]:i.SRC_ALPHA_SATURATE,[op]:i.DST_COLOR,[sp]:i.DST_ALPHA,[rp]:i.ONE_MINUS_SRC_COLOR,[Ch]:i.ONE_MINUS_SRC_ALPHA,[lp]:i.ONE_MINUS_DST_COLOR,[ap]:i.ONE_MINUS_DST_ALPHA,[up]:i.CONSTANT_COLOR,[hp]:i.ONE_MINUS_CONSTANT_COLOR,[dp]:i.CONSTANT_ALPHA,[fp]:i.ONE_MINUS_CONSTANT_ALPHA};function H(L,ee,J,ge,he,fe,Ue,Ze,ce,Be){if(L===Wi){p===!0&&(Oe(i.BLEND),p=!1);return}if(p===!1&&(ae(i.BLEND),p=!0),L!==Jf){if(L!==m||Be!==R){if((x!==zi||A!==zi)&&(i.blendEquation(i.FUNC_ADD),x=zi,A=zi),Be)switch(L){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",L);break}else switch(L){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dc:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",L);break}b=null,y=null,T=null,_=null,M.set(0,0,0),C=0,m=L,R=Be}return}he=he||ee,fe=fe||J,Ue=Ue||ge,(ee!==x||he!==A)&&(i.blendEquationSeparate(X[ee],X[he]),x=ee,A=he),(J!==b||ge!==y||fe!==T||Ue!==_)&&(i.blendFuncSeparate(O[J],O[ge],O[fe],O[Ue]),b=J,y=ge,T=fe,_=Ue),(Ze.equals(M)===!1||ce!==C)&&(i.blendColor(Ze.r,Ze.g,Ze.b,ce),M.copy(Ze),C=ce),m=L,R=!1}function re(L,ee){L.side===vn?Oe(i.CULL_FACE):ae(i.CULL_FACE);let J=L.side===$t;ee&&(J=!J),se(J),L.blending===Cr&&L.transparent===!1?H(Wi):H(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(L){I!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),I=L)}function oe(L){L!==$f?(ae(i.CULL_FACE),L!==D&&(L===Ic?i.cullFace(i.BACK):L===Yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),D=L}function Re(L){L!==B&&(q&&i.lineWidth(L),B=L)}function Se(L,ee,J){L?(ae(i.POLYGON_OFFSET_FILL),(P!==ee||z!==J)&&(P=ee,z=J,a.getReversed()&&(ee=-ee,J=-J),i.polygonOffset(ee,J))):Oe(i.POLYGON_OFFSET_FILL)}function je(L){L?ae(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function et(L){L===void 0&&(L=i.TEXTURE0+Y-1),Z!==L&&(i.activeTexture(L),Z=L)}function st(L,ee,J){J===void 0&&(Z===null?J=i.TEXTURE0+Y-1:J=Z);let ge=ne[J];ge===void 0&&(ge={type:void 0,texture:void 0},ne[J]=ge),(ge.type!==L||ge.texture!==ee)&&(Z!==J&&(i.activeTexture(J),Z=J),i.bindTexture(L,ee||pe[L]),ge.type=L,ge.texture=ee)}function F(){const L=ne[Z];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Tt(){try{i.compressedTexImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function Qe(){try{i.compressedTexImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function ht(){try{i.texSubImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function xe(){try{i.texSubImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function yt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function ke(){try{i.compressedTexSubImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function He(){try{i.texStorage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function w(){try{i.texStorage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function S(){try{i.texImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function V(){try{i.texImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function le(L){return h[L]!==void 0?h[L]:i.getParameter(L)}function ie(L,ee){h[L]!==ee&&(i.pixelStorei(L,ee),h[L]=ee)}function de(L){K.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function ye(L){_e.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function Q(L,ee){let J=l.get(ee);J===void 0&&(J=new WeakMap,l.set(ee,J));let ge=J.get(L);ge===void 0&&(ge=i.getUniformBlockIndex(ee,L.name),i.uniformBlockBinding(ee,ge,ge),J.set(L,ge))}function j(L,ee,J){const he=l.get(ee).get(L);c[he]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,he,J),c[he]=J)}function me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},Z=null,ne={},d={},c={},f=new WeakMap,g=[],v=null,p=!1,m=null,x=null,b=null,y=null,A=null,T=null,_=null,M=new Ve(0,0,0),C=0,R=!1,I=null,D=null,B=null,P=null,z=null,K.set(0,0,i.canvas.width,i.canvas.height),_e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Oe,bindFramebuffer:ft,drawBuffers:Fe,useProgram:qe,setBlending:H,setMaterial:re,setFlipSided:se,setCullFace:oe,setLineWidth:Re,setPolygonOffset:Se,setScissorTest:je,activeTexture:et,bindTexture:st,unbindTexture:F,compressedTexImage2D:Tt,compressedTexImage3D:Qe,texImage2D:S,texImage3D:V,pixelStorei:ie,getParameter:le,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:He,texStorage3D:w,texSubImage2D:ht,texSubImage3D:xe,compressedTexSubImage2D:yt,compressedTexSubImage3D:ke,scissor:de,viewport:ye,reset:me}}function by(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,u=new WeakMap,h=new Set;let d;const f=new WeakMap,g=new Set,v=new FinalizationRegistry(w=>g.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,S){return p?new OffscreenCanvas(w,S):kr("canvas")}function x(w,S,V){let le=1;const ie=He(w);if((ie.width>V||ie.height>V)&&(le=V/Math.max(ie.width,ie.height)),le<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const de=Math.floor(le*ie.width),ye=Math.floor(le*ie.height);d===void 0&&(d=m(de,ye));const Q=S?m(de,ye):d;return Q.width=de,Q.height=ye,Q.getContext("2d").drawImage(w,0,0,de,ye),De("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+de+"x"+ye+")."),Q}else return"data"in w&&De("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),w;return w}function b(w){return w.generateMipmaps}function y(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,S,V,le,ie,de=!1){if(w!==null){if(i[w]!==void 0)return i[w];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ye;le&&(ye=e.get("EXT_texture_norm16"),ye||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=S;if(S===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8),V===i.UNSIGNED_SHORT&&ye&&(Q=ye.R16_EXT),V===i.SHORT&&ye&&(Q=ye.R16_SNORM_EXT)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),S===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8),V===i.UNSIGNED_SHORT&&ye&&(Q=ye.RG16_EXT),V===i.SHORT&&ye&&(Q=ye.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),V===i.UNSIGNED_INT&&(Q=i.RGB32UI),V===i.BYTE&&(Q=i.RGB8I),V===i.SHORT&&(Q=i.RGB16I),V===i.INT&&(Q=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),V===i.UNSIGNED_INT&&(Q=i.RGBA32UI),V===i.BYTE&&(Q=i.RGBA8I),V===i.SHORT&&(Q=i.RGBA16I),V===i.INT&&(Q=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_SHORT&&ye&&(Q=ye.RGB16_EXT),V===i.SHORT&&ye&&(Q=ye.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),S===i.RGBA){const j=de?oa:it.getTransfer(ie);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=j===lt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ye&&(Q=ye.RGBA16_EXT),V===i.SHORT&&ye&&(Q=ye.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(w,S){let V;return w?S===null||S===En||S===Qi?V=i.DEPTH24_STENCIL8:S===nn?V=i.DEPTH32F_STENCIL8:S===Or&&(V=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===En||S===Qi?V=i.DEPTH_COMPONENT24:S===nn?V=i.DEPTH_COMPONENT32F:S===Or&&(V=i.DEPTH_COMPONENT16),V}function M(w,S){return b(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==Xt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function C(w){const S=new WeakRef(w);n.get(w).__ref=S,g.add(S),v.register(w,S,S)}function R(w){const S=n.get(w).__ref;S!==void 0&&(g.delete(S),v.unregister(S))}function I(w){B(w.target)}function D(w){P(w.target)}function B(w){w.removeEventListener("dispose",I),R(w),Y(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function P(w){w.removeEventListener("dispose",D),R(w),te(w)}function z(){for(const w of g){const S=w.deref();S!==void 0&&(S.isRenderTarget===!0?P(S):B(S))}g.clear(),h.clear()}function Y(w){const S=n.get(w);if(S.__webglInit===void 0)return;const V=w.source,le=f.get(V);if(le){const ie=le[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&q(w),Object.keys(le).length===0&&f.delete(V)}n.remove(w)}function q(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const V=w.source,le=f.get(V);delete le[S.__cacheKey],a.memory.textures--}function te(w){const S=n.get(w);S.__depthDisposeCallback&&S.__depthDisposeCallback();const V=w.depthTexture;if(V&&V.renderTarget===w&&B(V),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let de=0;de<S.__webglFramebuffer[ie].length;de++)i.deleteFramebuffer(S.__webglFramebuffer[ie][de]);else i.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[ie]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const le=w.textures;for(let ie=0,de=le.length;ie<de;ie++){const ye=n.get(le[ie]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(le[ie])}n.remove(w)}let G=0;function Z(){G=0}function ne(){return G}function be(w){G=w}function Ne(){const w=G;return w>=r.maxTextures&&De("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),G+=1,w}function K(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.mipmapsAutoUpdate),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function _e(w,S){const V=n.get(w);if(w.isVideoTexture&&yt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&V.__version!==w.version){const le=w.image;if(le===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{re(V,w,S);return}}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function Ee(w,S){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){re(V,w,S);return}else w.isExternalTexture&&(V.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function pe(w,S){const V=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){re(V,w,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function ae(w,S){const V=n.get(w);if(w.version>0&&V.__version!==w.version){se(V,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const Oe={[No]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[Do]:i.MIRRORED_REPEAT},ft={[Ot]:i.NEAREST,[_p]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Ra]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},Fe={[Tp]:i.NEVER,[Xh]:i.ALWAYS,[Ap]:i.LESS,[Wh]:i.LEQUAL,[wp]:i.EQUAL,[qh]:i.GEQUAL,[Rp]:i.GREATER,[Cp]:i.NOTEQUAL};function qe(w,S){if(S.type===nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Xt||S.magFilter===Ra||S.magFilter===os||S.magFilter===ei||S.minFilter===Xt||S.minFilter===Ra||S.minFilter===os||S.minFilter===ei)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Oe[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Oe[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Oe[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ft[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ot||S.minFilter!==os&&S.minFilter!==ei||S.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function X(w,S){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",I),C(S));const le=S.source;let ie=f.get(le);ie===void 0&&(ie={},f.set(le,ie));const de=K(S);if(de!==w.__cacheKey){ie[de]===void 0&&(ie[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[de].usedTimes++;const ye=ie[w.__cacheKey];ye!==void 0&&(ie[w.__cacheKey].usedTimes--,ye.usedTimes===0&&q(S)),w.__cacheKey=de,w.__webglTexture=ie[de].texture}return V}function O(w,S,V){return Math.floor(Math.floor(w/V)/S)}function H(w,S,V,le){const de=w.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,le,S.data);else{de.sort((L,ee)=>L.start-ee.start);let ye=0;for(let L=1;L<de.length;L++){const ee=de[ye],J=de[L],ge=ee.start+ee.count,he=O(J.start,S.width,4),fe=O(ee.start,S.width,4);J.start<=ge+1&&he===fe&&O(J.start+J.count-1,S.width,4)===he?ee.count=Math.max(ee.count,J.start+J.count-ee.start):(++ye,de[ye]=J)}de.length=ye+1;const Q=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let L=0,ee=de.length;L<ee;L++){const J=de[L],ge=Math.floor(J.start/4),he=Math.ceil(J.count/4),fe=ge%S.width,Ue=Math.floor(ge/S.width),Ze=he,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(i.TEXTURE_2D,0,fe,Ue,Ze,ce,V,le,S.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function re(w,S,V){let le=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(le=i.TEXTURE_3D);const ie=X(w,S),de=S.source;t.bindTexture(le,w.__webglTexture,i.TEXTURE0+V);const ye=n.get(de);if(de.version!==ye.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ce=it.getPrimaries(it.workingColorSpace),Be=S.colorSpace===jn?null:it.getPrimaries(S.colorSpace),Ye=S.colorSpace===jn||ce===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let j=x(S.image,!1,r.maxTextureSize);j=ke(S,j);const me=s.convert(S.format,S.colorSpace),L=s.convert(S.type);let ee=T(S.internalFormat,me,L,S.normalized,S.colorSpace,S.isVideoTexture);qe(le,S);let J;const ge=S.mipmaps,he=S.isVideoTexture!==!0,fe=ye.__version===void 0||ie===!0,Ue=de.dataReady,Ze=M(S,j);if(S.isDepthTexture)ee=_(S.format===ti,S.type),fe&&(he?t.texStorage2D(i.TEXTURE_2D,1,ee,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,me,L,null));else if(S.isDataTexture)if(ge.length>0){he&&fe&&t.texStorage2D(i.TEXTURE_2D,Ze,ee,ge[0].width,ge[0].height);for(let ce=0,Be=ge.length;ce<Be;ce++)J=ge[ce],he?Ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,J.width,J.height,me,L,J.data):t.texImage2D(i.TEXTURE_2D,ce,ee,J.width,J.height,0,me,L,J.data);S.generateMipmaps=!1}else he?(fe&&t.texStorage2D(i.TEXTURE_2D,Ze,ee,j.width,j.height),Ue&&H(S,j,me,L)):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,me,L,j.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){he&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,ee,ge[0].width,ge[0].height,j.depth);for(let ce=0,Be=ge.length;ce<Be;ce++)if(J=ge[ce],S.format!==ln)if(me!==null)if(he){if(Ue)if(S.layerUpdates.size>0){const Ye=Bu(J.width,J.height,S.format,S.type);for(const Te of S.layerUpdates){const ot=J.data.subarray(Te*Ye/J.data.BYTES_PER_ELEMENT,(Te+1)*Ye/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Te,J.width,J.height,1,me,ot)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,j.depth,me,J.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,ee,J.width,J.height,j.depth,0,J.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,J.width,J.height,j.depth,me,L,J.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,ee,J.width,J.height,j.depth,0,me,L,J.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{he&&fe&&t.texStorage2D(i.TEXTURE_2D,Ze,ee,ge[0].width,ge[0].height);for(let ce=0,Be=ge.length;ce<Be;ce++)J=ge[ce],S.format!==ln?me!==null?he?Ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,J.width,J.height,me,J.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,ee,J.width,J.height,0,J.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,J.width,J.height,me,L,J.data):t.texImage2D(i.TEXTURE_2D,ce,ee,J.width,J.height,0,me,L,J.data)}else if(S.isDataArrayTexture)if(he){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ze,ee,j.width,j.height,j.depth),Ue)if(S.layerUpdates.size>0){const ce=Bu(j.width,j.height,S.format,S.type);for(const Be of S.layerUpdates){const Ye=j.data.subarray(Be*ce/j.data.BYTES_PER_ELEMENT,(Be+1)*ce/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,j.width,j.height,1,me,L,Ye)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,me,L,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,j.width,j.height,j.depth,0,me,L,j.data);else if(S.isData3DTexture)he?(fe&&t.texStorage3D(i.TEXTURE_3D,Ze,ee,j.width,j.height,j.depth),Ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,me,L,j.data)):t.texImage3D(i.TEXTURE_3D,0,ee,j.width,j.height,j.depth,0,me,L,j.data);else if(S.isFramebufferTexture){if(fe)if(he)t.texStorage2D(i.TEXTURE_2D,Ze,ee,j.width,j.height);else{let ce=j.width,Be=j.height;for(let Ye=0;Ye<Ze;Ye++)t.texImage2D(i.TEXTURE_2D,Ye,ee,ce,Be,0,me,L,null),ce>>=1,Be>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),j.parentNode!==ce){ce.appendChild(j),h.add(S),ce.onpaint=Be=>{const Ye=Be.changedElements;for(const Te of h)Ye.includes(Te.image)&&(Te.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const Ye=i.RGBA,Te=i.RGBA,ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ye,Te,ot,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(he&&fe){const ce=He(ge[0]);t.texStorage2D(i.TEXTURE_2D,Ze,ee,ce.width,ce.height)}for(let ce=0,Be=ge.length;ce<Be;ce++)J=ge[ce],he?Ue&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,me,L,J):t.texImage2D(i.TEXTURE_2D,ce,ee,me,L,J);S.generateMipmaps=!1}else if(he){if(fe){const ce=He(j);t.texStorage2D(i.TEXTURE_2D,Ze,ee,ce.width,ce.height)}Ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,L,j)}else t.texImage2D(i.TEXTURE_2D,0,ee,me,L,j);b(S)&&S.mipmapsAutoUpdate===!0&&y(le),ye.__version=de.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function se(w,S,V){if(S.image.length!==6)return;const le=X(w,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const de=n.get(ie);if(ie.version!==de.__version||le===!0){t.activeTexture(i.TEXTURE0+V);const ye=it.getPrimaries(it.workingColorSpace),Q=S.colorSpace===jn?null:it.getPrimaries(S.colorSpace),j=S.colorSpace===jn||ye===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const me=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,ee=[];for(let Te=0;Te<6;Te++)!me&&!L?ee[Te]=x(S.image[Te],!0,r.maxCubemapSize):ee[Te]=L?S.image[Te].image:S.image[Te],ee[Te]=ke(S,ee[Te]);const J=ee[0],ge=s.convert(S.format,S.colorSpace),he=s.convert(S.type);let fe=T(S.internalFormat,ge,he,S.normalized,S.colorSpace);const Ue=S.isVideoTexture!==!0,Ze=de.__version===void 0||le===!0,ce=ie.dataReady;let Be=M(S,J);qe(i.TEXTURE_CUBE_MAP,S);let Ye;if(S.isDepthTexture){if(fe=_(S.format===ti,S.type),Ze)if(Ue)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,fe,J.width,J.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,J.width,J.height,0,ge,he,null)}else if(me){Ue&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,fe,J.width,J.height);for(let Te=0;Te<6;Te++){Ye=ee[Te].mipmaps;for(let ot=0;ot<Ye.length;ot++){const It=Ye[ot];S.format!==ln?ge!==null?Ue?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,0,0,It.width,It.height,ge,It.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,fe,It.width,It.height,0,It.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,0,0,It.width,It.height,ge,he,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot,fe,It.width,It.height,0,ge,he,It.data)}}}else{if(Ye=S.mipmaps,Ue&&Ze){Ye.length>0&&Be++;const Te=He(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,fe,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(L){Ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ee[Te].width,ee[Te].height,ge,he,ee[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,ee[Te].width,ee[Te].height,0,ge,he,ee[Te].data);for(let ot=0;ot<Ye.length;ot++){const Wn=Ye[ot].image[Te].image;Ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,0,0,Wn.width,Wn.height,ge,he,Wn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,fe,Wn.width,Wn.height,0,ge,he,Wn.data)}}else{Ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ge,he,ee[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,fe,ge,he,ee[Te]);for(let ot=0;ot<Ye.length;ot++){const It=Ye[ot];Ue?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,0,0,ge,he,It.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ot+1,fe,ge,he,It.image[Te])}}}b(S)&&S.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),de.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function oe(w,S,V,le,ie,de){const ye=s.convert(V.format,V.colorSpace),Q=s.convert(V.type),j=T(V.internalFormat,ye,Q,V.normalized,V.colorSpace),me=n.get(S),L=n.get(V);if(L.__renderTarget=S,!me.__hasExternalTextures){const ee=Math.max(1,S.width>>de),J=Math.max(1,S.height>>de);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,de,j,ee,J,S.depth,0,ye,Q,null):t.texImage2D(ie,de,j,ee,J,0,ye,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ie,L.__webglTexture,0,ht(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ie,L.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(w,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const le=S.depthTexture,ie=le&&le.isDepthTexture?le.type:null,de=_(S.stencilBuffer,ie),ye=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(S),de,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(S),de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,w)}else{const le=S.textures;for(let ie=0;ie<le.length;ie++){const de=le[ie],ye=s.convert(de.format,de.colorSpace),Q=s.convert(de.type),j=T(de.internalFormat,ye,Q,de.normalized,de.colorSpace);xe(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(S),j,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(S),j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(w,S,V){const le=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=n.get(S.depthTexture);ie.__renderTarget=S;const de=le?S.depthTexture.image[0]:S.depthTexture.image;(!ie.__webglTexture||de.width!==S.width||de.height!==S.height)&&(de.width=S.width,de.height=S.height,S.depthTexture.needsUpdate=!0),le?ae(S.depthTexture,0):_e(S.depthTexture,0);const ye=ie.__webglTexture,Q=ht(S),j=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,me=S.depthTexture.format===ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ii)xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,j,ye,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,me,j,ye,0);else if(S.depthTexture.format===ti)xe(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,j,ye,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,me,j,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(w){const S=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const le=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),le){const ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,le.removeEventListener("dispose",ie)};le.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=le}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let le=0;le<6;le++)Se(S.__webglFramebuffer[le],w,le);else w.texture.mipmaps.length>0?Se(S.__webglFramebuffer[0],w,0):Se(S.__webglFramebuffer,w,0);else if(V){S.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[le]),S.__webglDepthbuffer[le]===void 0)S.__webglDepthbuffer[le]=i.createRenderbuffer(),Re(S.__webglDepthbuffer[le],w,!1);else{const ie=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,de)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Re(S.__webglDepthbuffer,w,!1);else{const ie=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(w,S,V){const le=n.get(w);S!==void 0&&oe(le.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&je(w)}function st(w){const S=w.texture,V=n.get(w),le=n.get(S);w.addEventListener("dispose",D),C(w);const ie=w.textures,de=w.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=S.version,a.memory.textures++),de){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let j=0;j<S.mipmaps.length;j++)V.__webglFramebuffer[Q][j]=i.createFramebuffer()}else V.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)V.__webglFramebuffer[Q]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ye)for(let Q=0,j=ie.length;Q<j;Q++){const me=n.get(ie[Q]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&xe(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<ie.length;Q++){const j=ie[Q];V.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);const me=s.convert(j.format,j.colorSpace),L=s.convert(j.type),ee=T(j.internalFormat,me,L,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),J=ht(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),qe(i.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)oe(V.__webglFramebuffer[Q][j],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else oe(V.__webglFramebuffer[Q],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);b(S)?y(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let Q=0,j=ie.length;Q<j;Q++){const me=ie[Q],L=n.get(me);let ee=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,L.__webglTexture),qe(ee,me),oe(V.__webglFramebuffer,w,me,i.COLOR_ATTACHMENT0+Q,ee,0),b(me)&&y(ee)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,le.__webglTexture),qe(Q,S),S.mipmaps.length>0)for(let j=0;j<S.mipmaps.length;j++)oe(V.__webglFramebuffer[j],w,S,i.COLOR_ATTACHMENT0,Q,j);else oe(V.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,Q,0);b(S)?y(Q):S.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&je(w)}function F(w){const S=w.textures;for(let V=0,le=S.length;V<le;V++){const ie=S[V];if(b(ie)&&ie.mipmapsAutoUpdate===!0){const de=A(w),ye=n.get(ie).__webglTexture;t.bindTexture(de,ye),y(de),t.unbindTexture()}}}const Tt=[];function Qe(w){if(w.samples>0){if(xe(w)===!1){const S=w.textures,V=w.width,le=w.height;let ie=i.COLOR_BUFFER_BIT;const de=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(w),Q=S.length>1;if(Q)for(let me=0;me<S.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<S.length;me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const L=n.get(S[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,V,le,0,0,V,le,ie,i.NEAREST),c===!0&&(Tt.length=0,Tt.push(i.COLOR_ATTACHMENT0+me),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Tt.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let me=0;me<S.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const L=n.get(S[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ht(w){return Math.min(r.maxSamples,w.samples)}function xe(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function yt(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function ke(w,S){const V=w.colorSpace,le=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==aa&&V!==jn&&(it.getTransfer(V)===lt?(le!==ln||ie!==Kt)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",V)),S}function He(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Ne,this.resetTextureUnits=Z,this.getTextureUnits=ne,this.setTextureUnits=be,this.setTexture2D=_e,this.setTexture2DArray=Ee,this.setTexture3D=pe,this.setTextureCube=ae,this.rebindTextures=et,this.setupRenderTarget=st,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=xe,this.dispose=z}function Ey(i,e){function t(n,r=jn){let s;const a=it.getTransfer(r);if(n===Kt)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bh)return i.BYTE;if(n===kh)return i.SHORT;if(n===Or)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===ln)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===ti)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===gi)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===Xs||n===$s||n===Ys||n===Zs)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uo||n===Fo||n===Oo||n===Bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Uo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===zo||n===Ho||n===Go||n===Vo||n===ta||n===Wo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ko||n===zo)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ho)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Go)return s.COMPRESSED_R11_EAC;if(n===Vo)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return s.COMPRESSED_RG11_EAC;if(n===Wo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qo||n===Xo||n===$o||n===Yo||n===Zo||n===Jo||n===Ko||n===Qo||n===jo||n===el||n===tl||n===nl||n===il||n===rl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jo)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===el)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===il)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===al||n===ol)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===sl)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ll||n===cl||n===na||n===ul)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ay=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ld(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:Ty,fragmentShader:Ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qt(new Jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ry extends ri{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new wy,m={},x=t.getContextAttributes();let b=null,y=null;const A=[],T=[],_=new ue;let M=null,C=null;const R=new en;R.viewport=new ut;const I=new en;I.viewport=new ut;const D=[R,I],B=new Rg;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let _e=A[K];return _e===void 0&&(_e=new Fa,A[K]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(K){let _e=A[K];return _e===void 0&&(_e=new Fa,A[K]=_e),_e.getGripSpace()},this.getHand=function(K){let _e=A[K];return _e===void 0&&(_e=new Fa,A[K]=_e),_e.getHandSpace()};function Y(K){const _e=T.indexOf(K.inputSource);if(_e===-1)return;const Ee=A[_e];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,l||a),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",te);for(let K=0;K<A.length;K++){const _e=T[K];_e!==null&&(T[K]=null,A[K].disconnect(_e))}P=null,z=null,p.reset();for(const K in m)delete m[K];if(e.setRenderTarget(b),f=null,d=null,h=null,r=null,y=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),C!==null){const K=C.camera;K.fov=C.fov,K.zoom=C.zoom,K.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",q),r.addEventListener("inputsourceschange",te),x.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,pe=null,ae=null;x.depth&&(ae=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=x.stencil?ti:ii,pe=x.stencil?Qi:En);const Oe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sn(d.textureWidth,d.textureHeight,{format:ln,type:Kt,depthTexture:new er(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Ee={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Sn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ne.setContext(r),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(K){for(let _e=0;_e<K.removed.length;_e++){const Ee=K.removed[_e],pe=T.indexOf(Ee);pe>=0&&(T[pe]=null,A[pe].disconnect(Ee))}for(let _e=0;_e<K.added.length;_e++){const Ee=K.added[_e];let pe=T.indexOf(Ee);if(pe===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=T.length){T.push(Ee),pe=Oe;break}else if(T[Oe]===null){T[Oe]=Ee,pe=Oe;break}if(pe===-1)break}const ae=A[pe];ae&&ae.connect(Ee)}}function G(K,_e){_e===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(_e.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let _e=K.near,Ee=K.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(Ee=p.depthFar)),B.near=I.near=R.near=_e,B.far=I.far=R.far=Ee,(P!==B.near||z!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,z=B.far),B.layers.mask=K.layers.mask|6,R.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;const pe=K.parent,ae=B.cameras;G(B,pe);for(let Oe=0;Oe<ae.length;Oe++)G(ae[Oe],pe);B.projectionMatrix.copy(R.projectionMatrix),B.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&K.isPerspectiveCamera&&(C={camera:K,fov:K.fov,zoom:K.zoom}),Z(K,B,pe)};function Z(K,_e,Ee){Ee===null?K.matrix.copy(_e.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(_e.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(_e.projectionMatrix),K.projectionMatrixInverse.copy(_e.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ji*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(K){return m[K]};let ne=null;function be(K,_e){if(u=_e.getViewerPose(l||a),g=_e,u!==null){const Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let pe=!1;Ee.length!==B.cameras.length&&(B.cameras.length=0,pe=!0);for(let Fe=0;Fe<Ee.length;Fe++){const qe=Ee[Fe];let X=null;if(f!==null)X=f.getViewport(qe);else{const H=h.getViewSubImage(d,qe);X=H.viewport,Fe===0&&(e.setRenderTargetTextures(y,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(y))}let O=D[Fe];O===void 0&&(O=new en,O.layers.enable(Fe),O.viewport=new ut,D[Fe]=O),O.matrix.fromArray(qe.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(qe.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(X.x,X.y,X.width,X.height),Fe===0&&(B.matrix.copy(O.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),pe===!0&&B.cameras.push(O)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();const Fe=h.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&p.init(Fe,r.renderState)}if(ae&&ae.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let Fe=0;Fe<Ee.length;Fe++){const qe=Ee[Fe].camera;if(qe){let X=m[qe];X||(X=new ld,m[qe]=X);const O=h.getCameraImage(qe);X.sourceTexture=O}}}}for(let Ee=0;Ee<A.length;Ee++){const pe=T[Ee],ae=A[Ee];pe!==null&&ae!==void 0&&ae.update(pe,_e,l||a)}ne&&ne(K,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),g=null}const Ne=new Fd;Ne.setAnimationLoop(be),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}}const Cy=new Xe,Xd=new Ge;Xd.set(-1,0,0,0,1,0,0,0,1);function Py(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Rd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,x,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===$t&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===$t&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),b=x.envMap,y=x.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Xd),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$t&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ly(i,e,t,n){let r={},s={};function a(x,b){const y=b.program;n.uniformBlockBinding(x,y,r[x.id])}function o(x,b){let y=r[x.id];y===void 0&&(g(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",p));const A=b.program;n.updateUBOMapping(x,A);const T=e.render.frame;s[x.id]!==T&&(l(x),s[x.id]=T)}function c(x){const b=i.createBuffer(),y=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,A),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function l(x){const b=r[x.id],y=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,_=y.length;T<_;T++){const M=y[T];if(Array.isArray(M))for(let C=0,R=M.length;C<R;C++)u(M[C],T,C,A);else u(M,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,b,y,A){if(d(x,b,y,A)===!0){const T=x.__offset,_=x.value;if(Array.isArray(_)){let M=0;for(let C=0;C<_.length;C++){const R=_[C],I=v(R,!0);h(R,x.__data,M),M+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,x.__data)}}function h(x,b,y){typeof x=="number"||typeof x=="boolean"?b[y]=x:x.isMatrix3?(b[y]=x.elements[0],b[y+1]=x.elements[1],b[y+2]=x.elements[2],b[y+3]=0,b[y+4]=x.elements[3],b[y+5]=x.elements[4],b[y+6]=x.elements[5],b[y+7]=0,b[y+8]=x.elements[6],b[y+9]=x.elements[7],b[y+10]=x.elements[8],b[y+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-y),y):x.toArray(b,y)}function d(x,b,y,A){const T=x.value,_=b+"_"+y;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);const M=A[_];let C=!1;for(let R=0;R<T.length;R++)f(T[R],M,R)===!0&&(C=!0);return C}return f(T,A,_)}function f(x,b,y){if(b[y]===void 0)return typeof x=="number"||typeof x=="boolean"?b[y]=x:ArrayBuffer.isView(x)?b[y]=x.slice():b[y]=x.clone(),!0;{const A=b[y];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return b[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function g(x){const b=x.uniforms;let y=0;const A=16;for(let _=0,M=b.length;_<M;_++){const C=Array.isArray(b[_])?b[_]:[b[_]];for(let R=0,I=C.length;R<I;R++){const D=C[R],B=Array.isArray(D.value)?D.value:[D.value],P=Array.isArray(b[_])||Array.isArray(D.value);let z=y;for(let q=0,te=B.length;q<te;q++){const G=B[q],Z=v(G,P),ne=y%A,be=ne%Z.boundary,Ne=ne+be;y+=be,Ne!==0&&A-Ne<Z.storage&&(y+=A-Ne),q===0&&(z=y),y+=Z.storage}const Y=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new Y((y-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}const T=y%A;return T>0&&(y+=A-T),x.__size=y,x.__cache={},this}function v(x,b){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):De("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(x){const b=x.target;b.removeEventListener("dispose",p),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);r={},s={}}return{bind:a,update:o,dispose:m}}const Iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function Ny(){return mn===null&&(mn=new Hl(Iy,16,16,gi,Tn),mn.name="DFG_LUT",mn.minFilter=Xt,mn.magFilter=Xt,mn.wrapS=On,mn.wrapT=On,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class Eb{constructor(e={}){const{canvas:t=Ip(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Kt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const v=f,p=new Set([Dl,Nl,Il]),m=new Set([Kt,En,Or,Qi,Cl,Pl]),x=new Uint32Array(4),b=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const _=[],M=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,D=null,B=null,P=null,z=null;this._outputColorSpace=Jt;let Y=0,q=0,te=null,G=-1,Z=null;const ne=new ut,be=new ut;let Ne=null;const K=new Ve(0);let _e=0,Ee=t.width,pe=t.height,ae=1,Oe=null,ft=null;const Fe=new ut(0,0,Ee,pe),qe=new ut(0,0,Ee,pe);let X=!1;const O=new zr,H=new Gl;let re=!1,se=!1;const oe=new Xe,Re=new N,Se=new ut,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function st(){return te===null?ae:1}let F=n;function Tt(E,U){return t.getContext(E,U)}let Qe,ht,xe,yt,ke,He,w,S,V,le,ie,de,ye,Q,j,me,L,ee,J,ge,he,fe,Ue;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Al}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",Te,!1),F===null){const U="webgl2";if(F=Tt(U,E),F===null)throw Tt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(E){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),ze("WebGLRenderer: "+E.message),E}function Ze(){Qe=new Ov(F),Qe.init(),he=new Ey(F,Qe),ht=new Av(F,Qe,e,he),xe=new Sy(F,Qe),ht.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),B=F.createFramebuffer(),P=F.createFramebuffer(),z=F.createFramebuffer(),yt=new zv(F),ke=new ly,He=new by(F,Qe,xe,ke,ht,he,yt),w=new Fv(R),S=new Gg(F),fe=new Ev(F,S),V=new Bv(F,S,yt,fe),le=new Gv(F,V,S,fe,yt),ee=new Hv(F,ht,He),j=new wv(ke),ie=new oy(R,w,Qe,ht,fe,j),de=new Py(R,ke),ye=new uy,Q=new gy(Qe),L=new bv(R,w,xe,le,g,c),me=new My(R,le,ht),Ue=new Ly(F,yt,ht,xe),J=new Tv(F,Qe,yt),ge=new kv(F,Qe,yt),yt.programs=ie.programs,R.capabilities=ht,R.extensions=Qe,R.properties=ke,R.renderLists=ye,R.shadowMap=me,R.state=xe,R.info=yt}v!==Kt&&(C=new Wv(v,t.width,t.height,o,r,s));const ce=new Ry(R,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Qe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(Ee,pe,!1))},this.getSize=function(E){return E.set(Ee,pe)},this.setSize=function(E,U,$=!0){if(ce.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=E,pe=U,t.width=Math.floor(E*ae),t.height=Math.floor(U*ae),$===!0&&(t.style.width=E+"px",t.style.height=U+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Ee*ae,pe*ae).floor()},this.setDrawingBufferSize=function(E,U,$){Ee=E,pe=U,ae=$,t.width=Math.floor(E*$),t.height=Math.floor(U*$),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(v===Kt){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(Fe)},this.setViewport=function(E,U,$,k){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,U,$,k),xe.viewport(ne.copy(Fe).multiplyScalar(st()).round())},this.getScissor=function(E){return E.copy(qe)},this.setScissor=function(E,U,$,k){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,U,$,k),xe.scissor(be.copy(qe).multiplyScalar(st()).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(E){xe.setScissorTest(X=E)},this.setOpaqueSort=function(E){Oe=E},this.setTransparentSort=function(E){ft=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,$=!0){let k=0;if(E){let W=!1;if(te!==null){const Me=te.texture.format;W=p.has(Me)}if(W){const Me=te.texture.type,Ce=m.has(Me),ve=L.getClearColor(),we=L.getClearAlpha(),Ie=ve.r,We=ve.g,tt=ve.b;Ce?(x[0]=Ie,x[1]=We,x[2]=tt,x[3]=we,F.clearBufferuiv(F.COLOR,0,x)):(b[0]=Ie,b[1]=We,b[2]=tt,b[3]=we,F.clearBufferiv(F.COLOR,0,b))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),L.dispose(),ye.dispose(),Q.dispose(),He.dispose(),ke.dispose(),w.dispose(),le.dispose(),V.dispose(),fe.dispose(),Ue.dispose(),ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",mc),ce.removeEventListener("sessionend",gc),si.stop()};function Be(E){E.preventDefault(),la("WebGLRenderer: Context Lost."),I=!0}function Ye(){la("WebGLRenderer: Context Restored."),I=!1;const E=yt.autoReset,U=me.enabled,$=me.autoUpdate,k=me.needsUpdate,W=me.type;Ze(),yt.autoReset=E,me.enabled=U,me.autoUpdate=$,me.needsUpdate=k,me.type=W}function Te(E){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ot(E){const U=E.target;U.removeEventListener("dispose",ot),It(U)}function It(E){Wn(E),ke.remove(E)}function Wn(E){const U=ke.get(E).programs;U!==void 0&&(U.forEach(function($){ie.releaseProgram($)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,$,k,W,Me){U===null&&(U=je);const Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,ve=mf(E,U,$,k,W);xe.setMaterial(k,Ce);let we=$.index,Ie=1;if(k.wireframe===!0){if(we=V.getWireframeAttribute($),we===void 0)return;Ie=2}const We=$.drawRange,tt=$.attributes.position;let Pe=We.start*Ie,nt=(We.start+We.count)*Ie;Me!==null&&(Pe=Math.max(Pe,Me.start*Ie),nt=Math.min(nt,(Me.start+Me.count)*Ie)),we!==null?(Pe=Math.max(Pe,0),nt=Math.min(nt,we.count)):tt!=null&&(Pe=Math.max(Pe,0),nt=Math.min(nt,tt.count));const At=nt-Pe;if(At<0||At===1/0)return;fe.setup(W,k,ve,$,we);let pt,dt=J;if(we!==null&&(pt=S.get(we),dt=ge,dt.setIndex(pt)),W.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*st()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(W.isLine){let kt=k.linewidth;kt===void 0&&(kt=1),xe.setLineWidth(kt*st()),W.isLineSegments?dt.setMode(F.LINES):W.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else W.isPoints?dt.setMode(F.POINTS):W.isSprite&&dt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const kt=W._multiDrawStarts,Le=W._multiDrawCounts,Vt=W._multiDrawCount,at=we?S.get(we).bytesPerElement:1,ai=ke.get(k).currentProgram.getUniforms();for(let zt=0;zt<Vt;zt++)ai.setValue(F,"_gl_DrawID",zt),dt.render(kt[zt]/at,Le[zt])}else if(W.isInstancedMesh)dt.renderInstances(Pe,At,W.count);else if($.isInstancedBufferGeometry){const kt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Le=Math.min($.instanceCount,kt);dt.renderInstances(Pe,At,Le)}else dt.render(Pe,At)};function pc(E,U,$,k){D!==null&&E.isNodeMaterial&&D.setObject(k,E),re===!0&&j.setState(E,$,!1),E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=$t,E.needsUpdate=!0,cr(E,U,k),E.side=mi,E.needsUpdate=!0,cr(E,U,k),E.side=vn):cr(E,U,k)}this.compile=function(E,U,$=null){$===null&&($=E),D!==null&&D.renderStart(E,U,$),T=Q.get($),T.init(U),M.push(T),$.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==$&&E.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),se=this.localClippingEnabled,re=j.init(this.clippingPlanes,se),re===!0&&j.setGlobalState(this.clippingPlanes,U),D!==null&&me.render(T.state.shadowsArray,$,U);const k=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Me=W.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const ve=Me[Ce];pc(ve,$,U,W),k.add(ve)}else pc(Me,$,U,W),k.add(Me)}),T=M.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(E,U,$=null){const k=this.compile(E,U,$);return new Promise(W=>{function Me(){if(k.forEach(function(Ce){const we=ke.get(Ce).currentProgram;(we===void 0||we.isReady())&&k.delete(Ce)}),k.size===0){W(E);return}setTimeout(Me,10)}Qe.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Sa=null;function ff(E){Sa&&Sa(E)}function mc(){si.stop()}function gc(){si.start()}const si=new Fd;si.setAnimationLoop(ff),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(E){Sa=E,ce.setAnimationLoop(E),E===null?si.stop():si.start()},ce.addEventListener("sessionstart",mc),ce.addEventListener("sessionend",gc),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(E,U);const $=ce.enabled===!0&&ce.isPresenting===!0,k=C!==null&&(te===null||$)&&C.begin(R,te);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,te),T=Q.get(E,M.length),T.init(U),T.state.textureUnits=He.getTextureUnits(),M.push(T),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?H.setFromArrayCamera(U):O.setFromProjectionMatrix(oe,cn,U.reversedDepth),se=this.localClippingEnabled,re=j.init(this.clippingPlanes,se),A=ye.get(E,_.length),A.init(),_.push(A),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&ba(Ce,U,-1/0,R.sortObjects)}ba(E,U,0,R.sortObjects),A.finish(),D!==null&&D.updateLights(T.state.lightsArray),R.sortObjects===!0&&A.sort(Oe,ft),et=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,et&&L.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),re===!0&&j.beginShadows();const W=T.state.shadowsArray;if(me.render(W,E,U),re===!0&&j.endShadows(),(k&&C.hasRenderPass())===!1){const Ce=A.opaque,ve=A.transmissive;if(T.setupLights(),U.isArrayCamera){const we=U.cameras;if(ve.length>0)for(let Ie=0,We=we.length;Ie<We;Ie++){const tt=we[Ie];vc(Ce,ve,E,tt)}et&&L.render(E);for(let Ie=0,We=we.length;Ie<We;Ie++){const tt=we[Ie];_c(A,E,tt,tt.viewport)}}else ve.length>0&&vc(Ce,ve,E,U),et&&L.render(E),_c(A,E,U)}te!==null&&q===0&&(He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te)),k&&C.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),fe.resetDefaultState(),G=-1,Z=null,M.pop(),M.length>0?(T=M[M.length-1],He.setTextureUnits(T.state.textureUnits),re===!0&&j.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,D!==null&&D.renderEnd()};function ba(E,U,$,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){const Ce=U.isArrayCamera?H:O;if(!E.frustumCulled||E.intersectsFrustum(Ce)){k&&Se.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const ve=le.update(E),we=E.material;we.visible&&A.push(E,ve,we,$,Se.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){const Ce=U.isArrayCamera?H:O;if(!E.frustumCulled||E.intersectsFrustum(Ce)){const ve=le.update(E),we=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Se.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Se.copy(ve.boundingSphere.center)),Se.applyMatrix4(E.matrixWorld).applyMatrix4(oe)),Array.isArray(we)){const Ie=ve.groups;for(let We=0,tt=Ie.length;We<tt;We++){const Pe=Ie[We],nt=we[Pe.materialIndex];nt&&nt.visible&&A.push(E,ve,nt,$,Se.z,Pe,U)}}else we.visible&&A.push(E,ve,we,$,Se.z,null,U)}}}const Me=E.children;for(let Ce=0,ve=Me.length;Ce<ve;Ce++)ba(Me[Ce],U,$,k)}function _c(E,U,$,k){const{opaque:W,transmissive:Me,transparent:Ce}=E;T.setupLightsView($),re===!0&&j.setGlobalState(R.clippingPlanes,$),k&&xe.viewport(ne.copy(k)),W.length>0&&is(W,U,$),Me.length>0&&is(Me,U,$),Ce.length>0&&is(Ce,U,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function vc(E,U,$,k){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const Pe=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new Sn(1,1,{generateMipmaps:!0,type:Pe?Tn:Kt,minFilter:ei,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Me=T.state.transmissionRenderTarget[k.id],Ce=k.viewport||ne;Me.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const ve=R.getRenderTarget(),we=R.getActiveCubeFace(),Ie=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(K),_e=R.getClearAlpha(),_e<1&&R.setClearColor(16777215,.5),R.clear(),et&&L.render($);const We=R.toneMapping;R.toneMapping=kn;const tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),re===!0&&j.setGlobalState(R.clippingPlanes,k),is(E,$,k),He.updateMultisampleRenderTarget(Me),He.updateRenderTargetMipmap(Me),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let nt=0,At=U.length;nt<At;nt++){const pt=U[nt],{object:dt,geometry:kt,material:Le,group:Vt}=pt;if(Le.side===vn&&dt.layers.test(k.layers)){const at=Le.side;Le.side=$t,Le.needsUpdate=!0,xc(dt,$,k,kt,Le,Vt),Le.side=at,Le.needsUpdate=!0,Pe=!0}}Pe===!0&&(He.updateMultisampleRenderTarget(Me),He.updateRenderTargetMipmap(Me))}R.setRenderTarget(ve,we,Ie),R.setClearColor(K,_e),tt!==void 0&&(k.viewport=tt),R.toneMapping=We}function is(E,U,$){const k=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Me=E.length;W<Me;W++){const Ce=E[W],{object:ve,geometry:we,group:Ie}=Ce;let We=Ce.material;We.allowOverride===!0&&k!==null&&(We=k),ve.layers.test($.layers)&&xc(ve,U,$,we,We,Ie)}}function xc(E,U,$,k,W,Me){D!==null&&W.isNodeMaterial&&D.setObject(E,W),E.onBeforeRender(R,U,$,k,W,Me),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,U,$,k,E,Me),W.transparent===!0&&W.side===vn&&W.forceSinglePass===!1?(W.side=$t,W.needsUpdate=!0,R.renderBufferDirect($,U,k,W,E,Me),W.side=mi,W.needsUpdate=!0,R.renderBufferDirect($,U,k,W,E,Me),W.side=vn):R.renderBufferDirect($,U,k,W,E,Me),E.onAfterRender(R,U,$,k,W,Me)}function yc(E){let U=0;for(const $ of E)$.texture!==null&&U++;return U}function cr(E,U,$){U.isScene!==!0&&(U=je);const k=ke.get(E),W=T.state.lights,Me=T.state.shadowsArray,Ce=W.state.version,ve=ie.getParameters(E,W.state,Me,U,$,T.state.lightProbeGridArray),we=ie.getProgramCacheKey(ve);let Ie=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;const We=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=w.get(E.envMap||k.environment,We),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",ot),Ie=new Map,k.programs=Ie,k.programVariants=new Map);let tt=Ie.get(we);if(tt!==void 0){if(k.currentProgram===tt&&k.lightsStateVersion===Ce)return Sc(E,ve),tt}else ve.uniforms=ie.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,$,ve),E.onBeforeCompile(ve,R),tt=ie.acquireProgram(ve,we),Ie.set(we,tt),k.uniforms=ve.uniforms;const Pe=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=j.uniform),Sc(E,ve),k.needsLights=_f(E),k.lightsStateVersion=Ce,k.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),k.numLightProbeGrids=yc(T.state.lightProbeGridArray),k.currentProgram=tt,k.uniformsList=null,tt}function pf(E,U,$,k,W){const Me=ke.get(E),Ce=Me.currentProgram.id+","+k+","+W;let ve=Me.programVariants.get(Ce);return ve===void 0?(ve=cr(E,U,$),Me.programVariants.set(Ce,ve)):(Me.currentProgram=ve,Me.uniformsList=null,Me.outputColorSpace=k,Me.toneMapping=W),ve}function Mc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Js.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Sc(E,U){const $=ke.get(E);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function mf(E,U,$,k,W){U.isScene!==!0&&(U=je),He.resetTextureUnits();const Me=U.fog,Ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,ve=te===null?R.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:it.workingColorSpace,we=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ie=w.get(k.envMap||Ce,we),We=k.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,tt=!!$.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pe=!!$.morphAttributes.position,nt=!!$.morphAttributes.normal,At=!!$.morphAttributes.color;let pt=kn;k.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(pt=R.toneMapping);const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,kt=dt!==void 0?dt.length:0,Le=ke.get(k),Vt=T.state.lights;if(re===!0&&(se===!0||E!==Z)){const _t=E===Z&&k.id===G;j.setState(k,E,_t)}let at=!1,ai=!1;k.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==Vt.state.version||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Ie||k.fog===!0&&Le.fog!==Me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==j.numPlanes||Le.numIntersection!==j.numIntersection)||Le.vertexAlphas!==We||Le.vertexTangents!==tt||Le.morphTargets!==Pe||Le.morphNormals!==nt||Le.morphColors!==At||Le.morphTargetsCount!==kt||Le.numLightProbeGrids!==yc(T.state.lightProbeGridArray)?at=!0:(Le.outputColorSpace!==ve||Le.toneMapping!==pt)&&(ai=!0):(at=!0,Le.__version=k.version);let zt=Le.currentProgram;(at===!0||ai===!0)&&(zt=ai===!0?pf(k,U,W,ve,pt):cr(k,U,W),D&&k.isNodeMaterial&&D.onUpdateProgram(k,zt,Le));let rs=!1,qn=!1,oi=!1;const rt=zt.getUniforms(),Ut=Le.uniforms;if(xe.useProgram(zt.program)&&(rs=!0,qn=!0,oi=!0),k.id!==G&&(G=k.id,qn=!0),rs||Z!==E){xe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),rt.setValue(F,"projectionMatrix",E.projectionMatrix),rt.setValue(F,"viewMatrix",E.matrixWorldInverse);const Nt=rt.map.cameraPosition;Nt!==void 0&&Nt.setValue(F,Re.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&rt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,qn=!0,oi=!0)}if(Le.needsLights&&(Vt.state.sunShadowMap.length>0&&rt.setValue(F,"sunShadowMap",Vt.state.sunShadowMap,He),Vt.state.directionalShadowMap.length>0&&rt.setValue(F,"directionalShadowMap",Vt.state.directionalShadowMap,He),Vt.state.spotShadowMap.length>0&&rt.setValue(F,"spotShadowMap",Vt.state.spotShadowMap,He),Vt.state.pointShadowMap.length>0&&rt.setValue(F,"pointShadowMap",Vt.state.pointShadowMap,He)),W.isSkinnedMesh){rt.setOptional(F,W,"bindMatrix"),rt.setOptional(F,W,"bindMatrixInverse");const _t=W.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),rt.setValue(F,"boneTexture",_t.boneTexture,He))}W.isBatchedMesh&&(rt.setOptional(F,W,"batchingTexture"),rt.setValue(F,"batchingTexture",W._matricesTexture,He),rt.setOptional(F,W,"batchingIdTexture"),rt.setValue(F,"batchingIdTexture",W._indirectTexture,He),rt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&rt.setValue(F,"batchingColorTexture",W._colorsTexture,He));const rn=$.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&ee.update(W,$,zt),(qn||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,rt.setValue(F,"receiveShadow",W.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Ut.envMapIntensity.value=U.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=Ny()),qn){if(rt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Le.needsLights&&gf(Ut,oi),Me&&k.fog===!0&&de.refreshFogUniforms(Ut,Me),de.refreshMaterialUniforms(Ut,k,ae,pe,T.state.transmissionRenderTarget[E.id]),Le.needsLights&&Le.numLightProbeGrids>0){const _t=y;let Nt=0;for(const wn of T.state.lightProbeGridArray)wn.texture!==null&&(_t.textures[Nt]=wn.texture,_t.min[Nt]=wn.boundingBox.min,_t.max[Nt]=wn.boundingBox.max,_t.resolution[Nt]=wn.resolution,Nt++);for(const wn in _t)_t[wn].length=Nt;Ut.probesSH.value=_t.textures,Ut.probesMin.value=_t.min,Ut.probesMax.value=_t.max,Ut.probesResolution.value=_t.resolution}Js.upload(F,Mc(Le),Ut,He)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Js.upload(F,Mc(Le),Ut,He),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rt.setValue(F,"center",W.center),rt.setValue(F,"modelViewMatrix",W.modelViewMatrix),rt.setValue(F,"normalMatrix",W.normalMatrix),rt.setValue(F,"modelMatrix",W.matrixWorld),k.uniformsGroups!==void 0){const _t=k.uniformsGroups;for(let Nt=0,wn=_t.length;Nt<wn;Nt++){const Ec=_t[Nt];Ue.update(Ec,zt),Ue.bind(Ec,zt)}}return zt}function gf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function _f(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(E,U,$){const k=ke.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),ke.get(E.texture).__webglTexture=U,ke.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:$,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const $=ke.get(E);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,$=0){te=E,Y=U,q=$;let k=null,W=!1,Me=!1;if(E){const ve=ke.get(E);if(ve.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),ne.copy(E.viewport),be.copy(E.scissor),Ne=E.scissorTest,xe.viewport(ne),xe.scissor(be),xe.setScissorTest(Ne),G=-1;return}else if(ve.__webglFramebuffer===void 0)He.setupRenderTarget(E);else if(ve.__hasExternalTextures)He.rebindTextures(E,ke.get(E.texture).__webglTexture,ke.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const We=E.depthTexture;if(ve.__boundDepthTexture!==We){if(We!==null&&ke.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(E)}}const we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const Ie=ke.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?k=Ie[U][$]:k=Ie[U],W=!0):E.samples>0&&He.useMultisampledRTT(E)===!1?k=ke.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[$]:k=Ie,ne.copy(E.viewport),be.copy(E.scissor),Ne=E.scissorTest}else ne.copy(Fe).multiplyScalar(ae).floor(),be.copy(qe).multiplyScalar(ae).floor(),Ne=X;if($!==0&&(k=B),xe.bindFramebuffer(F.FRAMEBUFFER,k)&&xe.drawBuffers(E,k),xe.viewport(ne),xe.scissor(be),xe.setScissorTest(Ne),W){const ve=ke.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,$)}else if(Me){const ve=U;for(let we=0;we<E.textures.length;we++){const Ie=ke.get(E.textures[we]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+we,Ie.__webglTexture,$,ve)}}else if(E!==null&&$!==0){const ve=ke.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,$)}G=-1};function bc(E){const U=ke.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=ht.textureFormatReadable(E.format),U.__typeReadable=ht.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,$,k,W,Me,Ce,ve=0){if(!(E&&E.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we){xe.bindFramebuffer(F.FRAMEBUFFER,we);try{const Ie=E.textures[ve],We=Ie.format,tt=Ie.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);const Pe=bc(Ie);if(Pe.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&$>=0&&$<=E.height-W&&F.readPixels(U,$,k,W,he.convert(We),he.convert(tt),Me)}finally{const Ie=te!==null?ke.get(te).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,U,$,k,W,Me,Ce,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=ke.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(we=we[Ce],Array.isArray(we)&&(we=we[0])),we)if(U>=0&&U<=E.width-k&&$>=0&&$<=E.height-W){xe.bindFramebuffer(F.FRAMEBUFFER,we);const Ie=E.textures[ve],We=Ie.format,tt=Ie.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ve);const Pe=bc(Ie);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(U,$,k,W,he.convert(We),he.convert(tt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const At=te!==null?ke.get(te).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,At);const pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Np(F,pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(nt),F.deleteSync(pt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,$=0){const k=Math.pow(2,-$),W=Math.floor(E.image.width*k),Me=Math.floor(E.image.height*k),Ce=U!==null?U.x:0,ve=U!==null?U.y:0;He.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Ce,ve,W,Me),xe.unbindTexture()},this.copyTextureToTexture=function(E,U,$=null,k=null,W=0,Me=0){let Ce,ve,we,Ie,We,tt,Pe,nt,At;const pt=E.isCompressedTexture?E.mipmaps[Me]:E.image;if($!==null)Ce=$.max.x-$.min.x,ve=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Ie=$.min.x,We=$.min.y,tt=$.isBox3?$.min.z:0;else{const rt=Math.pow(2,-W);Ce=Math.floor(pt.width*rt),ve=Math.floor(pt.height*rt),E.isDataArrayTexture?we=pt.depth:E.isData3DTexture?we=Math.floor(pt.depth*rt):we=1,Ie=0,We=0,tt=0}k!==null?(Pe=k.x,nt=k.y,At=k.z):(Pe=0,nt=0,At=0);const dt=he.convert(U.format),kt=he.convert(U.type);let Le;U.isData3DTexture?(He.setTexture3D(U,0),Le=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),Le=F.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),Le=F.TEXTURE_2D),xe.activeTexture(F.TEXTURE0),xe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),xe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),xe.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const Vt=xe.getParameter(F.UNPACK_ROW_LENGTH),at=xe.getParameter(F.UNPACK_IMAGE_HEIGHT),ai=xe.getParameter(F.UNPACK_SKIP_PIXELS),zt=xe.getParameter(F.UNPACK_SKIP_ROWS),rs=xe.getParameter(F.UNPACK_SKIP_IMAGES);xe.pixelStorei(F.UNPACK_ROW_LENGTH,pt.width),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt.height),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),xe.pixelStorei(F.UNPACK_SKIP_ROWS,We),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,tt);const qn=E.isDataArrayTexture||E.isData3DTexture,oi=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const rt=ke.get(E),Ut=ke.get(U),rn=ke.get(rt.__renderTarget),_t=ke.get(Ut.__renderTarget);xe.bindFramebuffer(F.READ_FRAMEBUFFER,rn.__webglFramebuffer),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Nt=0;Nt<we;Nt++)qn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(E).__webglTexture,W,tt+Nt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ke.get(U).__webglTexture,Me,At+Nt)),F.blitFramebuffer(Ie,We,Ie+Ce,We+ve,Pe,nt,Pe+Ce,nt+ve,F.DEPTH_BUFFER_BIT,F.NEAREST);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||ke.has(E)){const rt=ke.get(E),Ut=ke.get(U);xe.bindFramebuffer(F.READ_FRAMEBUFFER,P),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let rn=0;rn<we;rn++)qn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,rt.__webglTexture,W,tt+rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,rt.__webglTexture,W),oi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ut.__webglTexture,Me,At+rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ut.__webglTexture,Me),W!==0?F.blitFramebuffer(Ie,We,Ie+Ce,We+ve,Pe,nt,Pe+Ce,nt+ve,F.COLOR_BUFFER_BIT,F.NEAREST):oi?F.copyTexSubImage3D(Le,Me,Pe,nt,At+rn,Ie,We,Ce,ve):F.copyTexSubImage2D(Le,Me,Pe,nt,Ie,We,Ce,ve);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oi?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Le,Me,Pe,nt,At,Ce,ve,we,dt,kt,pt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Le,Me,Pe,nt,At,Ce,ve,we,dt,pt.data):F.texSubImage3D(Le,Me,Pe,nt,At,Ce,ve,we,dt,kt,pt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,Pe,nt,Ce,ve,dt,kt,pt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,Pe,nt,pt.width,pt.height,dt,pt.data):F.texSubImage2D(F.TEXTURE_2D,Me,Pe,nt,Ce,ve,dt,kt,pt);xe.pixelStorei(F.UNPACK_ROW_LENGTH,Vt),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,at),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,ai),xe.pixelStorei(F.UNPACK_SKIP_ROWS,zt),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,rs),Me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Le),xe.unbindTexture()},this.initRenderTarget=function(E){ke.get(E).__webglFramebuffer===void 0&&He.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?He.setTextureCube(E,0):E.isData3DTexture?He.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?He.setTexture2DArray(E,0):He.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){Y=0,q=0,te=null,xe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const bt=(i,e,t,n,r,s,a,o,c={})=>({id:i,name:e,x:t,z:n,width:r,length:s,heading:a,time:o,...c}),Gs={minX:-6,maxX:45,minZ:-91,maxZ:23},$d=[bt("start-drop","Спрыг · 60 см",0,-29,1.3,4.2,0,[0,1],{height:.6}),bt("car","Волга · настил 1 м",0,-21,1.8,7.2,0,[2,7],{height:1.35,deckWidth:1}),bt("buried-reels","Две катушки · проезд между бортами",0,-10.5,3.68,3,0,[8,9],{diameter:3,coreDiameter:1.6,burial:.325,barrelLength:1.6,flangeThickness:.12,flangeOffset:.86,centers:[-.92,.92],axis:"x"}),bt("bank","Широкий деревянный разворот",5,0,15,15,0,[10,15],{radius:5,trackWidth:4.8,height:1.8,earthWidth:3.1,fromAngle:Math.PI,toAngle:0}),bt("arch","Подъём по разным шинам",10,-7,2,7,Math.PI,[16,17]),bt("descent","Спуск по меньшей шине и R15",10,-12.7,2,4.4,Math.PI,[18,19]),bt("rocks","Каменная секция",10,-20,4,7,Math.PI,[19,22]),bt("steps","Три перекрывающиеся ступени",10,-27.5,3.3,2.1,Math.PI,[23,25]),bt("suv","Кузов на белых шинах",15,-29,4.4,3,Math.PI/2,[26,29],{height:1.7}),bt("hill","Широкий шинный разворот",15,-31.5,15,15,Math.PI,[26,27],{radius:5,trackWidth:4.8,height:1.65,earthWidth:3.1,fromAngle:0,toAngle:Math.PI,baseHeight:.84,entryLength:2.5}),bt("exit-drop","32 шины R13–R14 перед ямой",20,-25,2.56,5.12,0,[28,29],{height:.2,columns:4,rows:8,tyreRadius:.32}),bt("pit","Крутая яма · 2 м × 7 м",20,-17.5,5,7,0,[30,33],{depth:2,rampLength:1.25}),bt("rim-row","Связка десяти шин R15",20,-11.9,2.8,.4,0,[34,35],{count:10,radius:.34}),bt("reels","Две лежачие катушки рядом",20,-8.5,4.8,4.2,0,[38,40],{centers:[-1.2,1.2],radius:1.2,height:.82}),bt("sleepers","Веер из семи шпал",25,-3,15,15,0,[41,48],{radius:5,trackWidth:3,height:.26,fromAngle:Math.PI,toAngle:0,count:7,sleeperWidth:.28,centreTyreRadius:1.3,centreTyreThickness:.48,centreTyreCount:2,outerTyreRadius:.58,outerTyreThickness:.28,outerTyreArcRadius:7.05,outerTyreCount:19}),bt("logs","Десять кривых брёвен",30,-14.4,7,7.4,Math.PI,[49,55]),bt("logs-second","Вторая куча кривых брёвен",30,-26,7,7.4,Math.PI,[55,56]),bt("wave-out","Первый щит и семь шин",30,-36.2,3.2,7.2,Math.PI,[56,58],{count:7,height:1.45}),bt("wave-back","Второй щит и семь шин",30,-44.5,3.2,7.2,Math.PI,[59,61],{count:7,height:1.45}),bt("final-ramp","Последний деревянный трамплин",30,-51.2,3.2,4.8,Math.PI,[62,65],{height:1.25})],Et=i=>$d.find(e=>e.id===i);function es(i,e,t){const n=e-i.x,r=t-i.z,s=Math.cos(i.heading),a=Math.sin(i.heading);return{x:n*s-r*a,z:n*a+r*s}}function Dy(i,e,t){const n=Math.cos(i.heading),r=Math.sin(i.heading);return{x:i.x+e*n+t*r,z:i.z-e*r+t*n}}function Yd(i,e,t=i.radius){return Dy(i,Math.cos(e)*t,Math.sin(e)*t)}function ec(i,e,t,n=!1){const r=Math.hypot(e,t),s=Math.atan2(t,e),a=i.radius-i.trackWidth/2,o=i.radius+i.trackWidth/2;if(s<0||s>Math.PI||r<a||r>o+(n&&i.earthWidth||0))return 0;const c=i.id==="hill"?Math.min(1,s/.2):Math.min(1,s/.2,(Math.PI-s)/.2),l=r<=o?(r-a)/(o-a):1-(r-o)/i.earthWidth;return Math.max(0,l)*i.height*c}function Zd(i,e){const t=Et("pit"),n=es(t,i,e),r=t.width/2,s=r*.56;if(Math.abs(n.z)>t.length/2||Math.abs(n.x)>r)return null;const a=Math.max(0,1-Math.max(0,Math.abs(n.x)-s)/(r-s)),o=t.length/2-Math.abs(n.z),c=Math.min(1,o/t.rampLength);return-t.depth*(.5-.5*Math.cos(c*Math.PI))*a}const Uy=Array.from({length:28},(i,e)=>({x:(e%4-1.5)*.64,z:-1.92+Math.floor(e/4)*.64,radius:.32,height:.2}));function Fy(i,e){const t=Et("pit");let n=-1/0;for(const r of Uy){const s=i-t.x-r.x,a=e-t.z-r.z,o=(Math.hypot(s,a)-r.radius*.74)/(r.radius*.26);Math.abs(o)<=1&&(n=Math.max(n,Zd(t.x+r.x,t.z+r.z)+r.height/2+r.height/2*Math.sqrt(1-o*o)))}return n}function tc(i,e,t){if(t<-i.entryLength)return 0;const n=i.radius+i.trackWidth/2,r=t<0?Math.abs(e):Math.hypot(e,t);return i.baseHeight*Math.max(0,Math.min(1,(n+i.earthWidth-r)/i.earthWidth))}const Oy=Array.from({length:13},(i,e)=>({x:(e-6)*1.14,z:-29,radius:.57,layers:2,thickness:.3,red:e%2===0}));function By(i,e){return Oy.some(t=>Math.hypot(i-t.x,e-t.z)<=t.radius)?.6:0}const ky={left:-7,right:8.05,frontZ:-29,backZ:-39,flatBackZ:-35,height:.6,blendStart:5};function zy(i,e){const t=ky;if(i<t.left-1.2||i>t.right||e>t.frontZ||e<t.backZ)return 0;const n=Math.max(0,Math.min(1,(i-t.left+1.2)/1.2)),r=Math.min(1,(e-t.backZ)/(t.flatBackZ-t.backZ)),s=Et("hill"),a=es(s,i,e),o=tc(s,a.x,a.z)+ec(s,a.x,a.z,!0),c=Math.max(0,Math.min(1,(i-t.blendStart)/(t.right-t.blendStart)));return n*r*(t.height*(1-c)+o*c)}function Hy(i,e){const t=Zd(i,e);if(t!==null)return t;let n=zy(i,e);for(const r of["bank","hill"]){const s=Et(r),a=es(s,i,e);n=Math.max(n,ec(s,a.x,a.z,!0)+(r==="hill"?tc(s,a.x,a.z):0))}return n>0?n:null}const Gy=[{z:-2.7,r:.32},{z:-1.7,r:.45},{z:-.5,r:.58},{z:.9,r:.72},{z:2.5,r:.85}],Vy=[{z:-.552,x:0,layers:1},{z:0,x:0,layers:2},{z:.552,x:0,layers:3}],Tb=[8.05,11.95,13.15,14.35,15.55,16.75,17.95,21.95].map(i=>({x:i,z:-29,layers:4})),Wy=Array.from({length:10},(i,e)=>({x:(e*7%11-5)*.36,z:-2.9+e*.64,angle:[-.85,.45,1.1,-.3,.75,-1.05,.15,.9,-.6,.3][e],length:3,radius:.14+e%4*.025,y:.16+e%3*.045})),qy=Array.from({length:48},(i,e)=>{const t=Math.floor(e/6);return{x:-1.58+e%6*.62+t%2*.11,z:-2.8+t*.79,rx:.27+e*7%9*.017,rz:.28+e*3%7*.02,height:.18+e*13%11*.024}});function lo(i,e,t,n){const r=Math.abs(i);return r>=e/2?0:r<=t/2?n:n*(e/2-r)/((e-t)/2)}function Xy(i=Et("sleepers")){return Array.from({length:i.outerTyreCount},(e,t)=>{const n=t/(i.outerTyreCount-1)*Math.PI;return{angle:n,x:Math.cos(n)*i.outerTyreArcRadius,z:Math.sin(n)*i.outerTyreArcRadius}})}function $y(i,e,t){const n=Math.hypot(e,t),r=Math.atan2(t,e);let s=0;const a=(n-i.centreTyreRadius*.74)/(i.centreTyreRadius*.26);if(Math.abs(a)<=1&&(s=(i.centreTyreCount-.5)*i.centreTyreThickness+i.centreTyreThickness/2*Math.sqrt(1-a*a)),n>=i.radius-i.trackWidth/2&&n<=i.radius+i.trackWidth/2&&r>=0&&r<=Math.PI){const o=Math.round(r/Math.PI*(i.count-1))*Math.PI/(i.count-1);Math.abs(Math.sin(r-o)*n)<i.sleeperWidth/2&&(s=Math.max(s,i.height))}for(const o of Xy(i)){const c=e-o.x,l=t-o.z,u=c*Math.cos(o.angle)+l*Math.sin(o.angle),h=-c*Math.sin(o.angle)+l*Math.cos(o.angle);if(Math.abs(u)>i.outerTyreThickness/2)continue;const d=i.outerTyreRadius*(.74+.26*Math.sqrt(Math.max(0,1-(u/(i.outerTyreThickness/2))**2)));Math.abs(h)<d&&(s=Math.max(s,i.outerTyreRadius+Math.sqrt(d*d-h*h)))}return s}function Yy(i,e,t){const{x:n,z:r}=es(i,e,t);if(i.id==="bank"||i.id==="hill")return ec(i,n,r)+(i.id==="hill"?tc(i,n,r):0);if(i.id==="sleepers")return $y(i,n,r);if(Math.abs(n)>i.width/2||Math.abs(r)>i.length/2)return 0;switch(i.id){case"start-drop":return Math.hypot(n,r)<=.57?.6:0;case"car":return Math.abs(n)<=.5?lo(r,7.2,2.7,1.35):Math.abs(r)<2.35?Math.abs(r)<1?1.3:.68:0;case"buried-reels":{let s=0;const a=i.diameter*(.5-i.burial);for(const o of i.centers){const c=Math.abs(n-o);c<=i.barrelLength/2&&Math.abs(r)<i.coreDiameter/2&&(s=Math.max(s,a+Math.sqrt((i.coreDiameter/2)**2-r*r))),Math.abs(c-i.flangeOffset)<=i.flangeThickness/2+1e-8&&Math.abs(r)<i.diameter/2&&(s=Math.max(s,a+Math.sqrt((i.diameter/2)**2-r*r)))}return s}case"arch":{let s=0;for(const a of Gy)Math.abs(r-a.z)<a.r&&(s=Math.max(s,a.r-.1+Math.sqrt(a.r**2-(r-a.z)**2)));return s}case"descent":{let s=0;Math.abs(n)<.25&&Math.abs(r+1.6)<.55&&(s=.45+Math.sqrt(.55**2-(r+1.6)**2));for(const[a,o]of[[-.4,3],[.45,2],[1.3,1]])for(const c of[-.66,0,.66])Math.hypot(n-c,r-a)<.32&&(s=Math.max(s,o*.2));return s}case"rocks":{let s=0;for(const a of qy){const o=((n-a.x)/a.rx)**2+((r-a.z)/a.rz)**2;o<1&&(s=Math.max(s,a.height*Math.sqrt(1-o)))}return s}case"steps":{let s=0;for(const a of Vy)for(const o of[-.9,0,.9])Math.hypot(n-a.x-o,r-a.z)<.46&&(s=Math.max(s,a.layers*.28));return s}case"suv":return 0;case"exit-drop":{for(let s=0;s<i.rows;s++)for(let a=0;a<i.columns;a++){const o=(a-(i.columns-1)/2)*i.tyreRadius*2,c=(s-(i.rows-1)/2)*i.tyreRadius*2;if(Math.hypot(n-o,r-c)<i.tyreRadius)return i.height}return 0}case"pit":return 0;case"rim-row":return Math.abs(r)<.14?.34+Math.sqrt(Math.max(0,.34**2-r*r)):0;case"reels":{let s=0;for(const a of i.centers)Math.hypot(n-a,r)<=i.radius&&(s=Math.max(s,i.height)),Math.abs(n-a)<.525&&(s=Math.max(s,lo(r,i.length,2*i.radius,i.height)));return s}case"logs":case"logs-second":{let s=0;for(const a of Wy){const o=n-a.x,c=r-a.z,l=o*Math.cos(a.angle)+c*Math.sin(a.angle),u=-o*Math.sin(a.angle)+c*Math.cos(a.angle);Math.abs(l)<=1.5&&Math.abs(u)<a.radius&&(s=Math.max(s,a.y+Math.sqrt(a.radius**2-u**2)))}return s}case"wave-out":case"wave-back":return lo(r,7.2,1.2,1.45);case"final-ramp":return r<1.8?i.height*Math.max(0,(r+2.4)/4.2):i.height;default:return 0}}function Ab(i,e){const t=By(i,e);let n=Math.max(t>0?t:-1/0,Fy(i,e));for(const r of $d){const s=Yy(r,i,e);s>0&&(n=Math.max(n,s))}return n}function wb(i,e){return["pit","final-ramp"].some(t=>{const n=Et(t),r=es(n,i,e);return Math.abs(r.x)<n.width/2+1&&Math.abs(r.z)<n.length/2+2})}const co=(i,e,t)=>({...i,...Yd(i,e),id:i.id+"-"+t,name:i.name+" · "+{entry:"вход",middle:"дуга",exit:"выход"}[t],triggerRadius:2.6}),uo=i=>{const e=Et(i);return[co(e,e.fromAngle,"entry"),co(e,Math.PI/2,"middle"),co(e,e.toAngle,"exit")]},vl=[{...Et("start-drop"),z:-27.2,triggerRadius:2.5,requireLanding:!0},Et("car"),{...Et("buried-reels"),x:Et("buried-reels").centers[1]},...uo("bank"),...["arch","descent","rocks","steps"].map(Et),...uo("hill"),...["exit-drop","pit","rim-row","reels"].map(i=>{const e=Et(i);return i==="reels"?{...e,x:e.x+e.centers[1]}:e}),...uo("sleepers"),...["logs","logs-second","wave-out","wave-back","final-ramp"].map(Et),{...bt("finish","Финиш · последний трамплин",30,-53.3,3.2,.3,Math.PI,[65,66]),finishLine:!0}],ho=i=>{const e=Et(i);return Array.from({length:25},(t,n)=>{const r=Yd(e,e.fromAngle+(e.toAngle-e.fromAngle)*n/24);return[r.x,r.z]})},Jd=[[0,-29.4],[0,-27.2],[0,-21],[Et("buried-reels").centers[1],-10.5],...ho("bank"),[10,-7],[10,-12.7],[10,-20],[10,-27.5],...ho("hill"),[20,-25],[20,-17.5],[20,Et("rim-row").z],[20+Et("reels").centers[1],-8.5],...ho("sleepers"),[30,-14.4],[30,-26],[30,-36.2],[30,-44.5],[30,-51.2],[30,-53.3]],$i=[[30,-53.3],[27,-57],[20,-59],[10,-59],[3,-55],[0,-43],[0,-29.4]],Zy=[...Jd,...$i.slice(1)];function Rb(i,e,t=0){const n=3+Math.max(0,t);for(let r=1;r<$i.length;r++){const[s,a]=$i[r-1],[o,c]=$i[r],l=o-s,u=c-a,h=Math.max(0,Math.min(1,((i-s)*l+(e-a)*u)/(l*l+u*u)));if(Math.hypot(i-s-l*h,e-a-u*h)<n)return!0}return!1}const Jy={backFenceZ:-92,rightFenceX:46,leftFenceX:-7,cornerRadius:8,landingStartZ:Et("final-ramp").z-Et("final-ramp").length/2};function Cb(){const i=Jy,e=i.cornerRadius,t=i.backFenceZ+e,n=i.leftFenceX+e,r=i.rightFenceX-e,s=[{length:12-t,at:l=>({x:i.leftFenceX,z:12+(t-12)*l,tx:0,tz:-1})},{length:e*Math.PI/2,at:l=>{const u=Math.PI+l*Math.PI/2;return{x:n+e*Math.cos(u),z:t+e*Math.sin(u),tx:-Math.sin(u),tz:Math.cos(u)}}},{length:r-n,at:l=>({x:n+(r-n)*l,z:i.backFenceZ,tx:1,tz:0})},{length:e*Math.PI/2,at:l=>{const u=Math.PI*1.5+l*Math.PI/2;return{x:r+e*Math.cos(u),z:t+e*Math.sin(u),tx:-Math.sin(u),tz:Math.cos(u)}}},{length:12-t,at:l=>({x:i.rightFenceX,z:t+(12-t)*l,tx:0,tz:1})}],a=s.reduce((l,u)=>l+u.length,0),o=Math.ceil(a/1.22),c=[];for(let l=0;l<=o;l++){let u=l/o*a,h;for(const d of s){if(u<=d.length){h=d.at(u/d.length);break}u-=d.length}h||(h=s[s.length-1].at(1)),!(h.z>5&&h.z<10)&&c.push({...h,index:l,yaw:Math.atan2(h.tz,-h.tx)})}return c}function ah(i,e,t){const n=Math.max(0,Math.min(1,(-i.z-40)/2),i.x<3?Math.min(1,(-i.z-31.5)/3):0),r=1.65+1.85*n;let s=i.x+e.z*r*t,a=i.z-e.x*r*t;const o=Et("buried-reels"),c=Math.abs(i.z-o.z);if(Math.abs(i.x-o.x)<3&&c<5.5){const l=Math.min(1,(5.5-c)/2),u=l*l*(3-2*l),h=e.z*t>0,d=h?o.x+3:o.x-2.3;s+=(h?Math.max(s,d)-s:Math.min(s,d)-s)*u}return{x:s,z:a}}const xl=new dd(Zy.slice(0,-1).map(([i,e])=>new N(i,0,e)),!0,"centripetal");xl.arcLengthDivisions=1800;const Ky=xl.getSpacedPoints(Math.ceil(xl.getLength()*4));let Un=null;function Pb(i){const e=Un;let t=i?Ji(i):null;return Un=t,{set(n){t=Ji(n),Un=t},dispose(){Un===t&&(Un=e)}}}function Qy(i,e){if(!Un)return 0;const t=xh(i,e);return Eo(Un,t.x,t.z)}function Lb(i,e,t){if(!Un)return t(i,e);const n=xh(i,e);return Af(Un,n.x,n.z,(r,s)=>t(r+i-n.x,s+e-n.z))}const xn={x:665,z:270,radiusX:28,radiusZ:133,waterLevel:.12};function Kd(i,e){const t=(i-xn.x)/xn.radiusX,n=(e-xn.z)/xn.radiusZ,r=Math.atan2(n,t),s=1+.035*Math.sin(r*3)+.022*Math.sin(r*7+.6);return Math.hypot(t,n)/s}function jy(i,e){const t=Kd(i,e);if(t>=1.25)return null;const n=o=>(o=Math.max(0,Math.min(1,o)),o*o*(3-2*o));if(t<=1)return-3.2+3.31*n((t-.5)/.5);const r=(t-1)/.25,s=.035*Math.sin(i*.8)*Math.cos(e*.6)+.018*Math.sin(i*2.3+e*1.7);return(.11+.14*Math.sin(r*Math.PI))*(1-n((r-.55)/.45))+s*n((r-.55)/.45)}function Ib(i,e,t=0){return Kd(i,e)<1+t/28}function Nb(i,e=1){const t=1+.035*Math.sin(i*3)+.022*Math.sin(i*7+.6);return{x:xn.x+Math.cos(i)*xn.radiusX*t*e,z:xn.z+Math.sin(i)*xn.radiusZ*t*e}}function Db(i,e,t=0){return((i-665)/(19+t))**2+((e-119)/(17+t))**2<1}function Qd(i,e){const t=Math.hypot((i-xn.x)/95,(e-xn.z)/185);if(!Number.isFinite(t)||t>=1.4)return 1;const n=Math.max(0,Math.min(1,(t-.85)/.55));return .2+.8*n*n*(3-2*n)}const Wr=(i,e,t)=>Math.max(e,Math.min(t,i)),ya=[[57,-23,0],[57,20,0],[57,60,0],[57,80,0],[57,100,0],[57,120,0],[57,140,0],[57,160,0],[57,200,0],[80,235,0],[125,250,0],[170,235,0],[190,210,0],[190,200,0],[190,190,0],[190,180,0],[190,170,0],[190,160,0],[190,150,0],[190,140,0],[215,115,0],[250,135,0],[265,165,0],[265,180,0],[265,200,0],[265,220,0],[265,240,0],[265,260,0],[290,275,0],[330,290,0],[375,275,0],[395,250,0],[395,240,0],[395,230,0],[395,220,0],[395,210,0],[395,200,0],[395,190,0],[395,170,0],[420,145,0],[460,155,0],[480,200,0],[480,220,0],[480,240,0],[480,270,0],[510,305,0],[550,290,0],[565,260,0],[565,240,0],[565,220,0],[565,200,0],[565,180,0],[565,160,0],[565,140,0],[585,110,0],[620,120,0],[620,160,0],[620,200,0],[620,240,0],[620,280,0],[620,320,0],[620,360,0],[620,400,0],[640,440,0],[675,455,0],[710,440,0],[710,400,0],[710,360,0],[710,320,0],[710,280,0],[710,240,0],[710,200,0],[710,160,0],[710,120,0],[710,80,0],[735,45,0],[775,45,0],[800,80,0],[800,120,0],[800,160,0],[800,200,0],[800,240,0],[800,280,0],[800,320,0],[825,355,0],[865,350,0],[890,315,0],[890,280,0],[890,240,0],[890,200,0],[890,160,0],[890,120,0],[890,80,0],[890,40,0],[890,0,0],[880,-55,0],[850,-95,0],[820,-110,0],[780,-110,0],[740,-110,0],[700,-110,0],[660,-110,0],[620,-110,0],[580,-110,0],[540,-130,0],[500,-160,0],[460,-130,0],[420,-110,0],[380,-150,0],[340,-180,0],[300,-150,0],[260,-120,0],[220,-160,0],[180,-185,0],[140,-150,0],[100,-130,0],[65,-95,0],[57,-60,0]],nc=[[-65,105,0],[-65,125,3],[-72,148,12],[-90,167,23],[-108,190,34],[-90,210,43],[-64,230,54],[-80,258,65],[-115,270,68],[-146,260,60],[-165,236,50],[-145,212,40],[-163,188,28],[-150,157,18],[-120,135,10],[-90,115,2]],eM=[[-52,27,0],[-60,24,1],[-65,13,3.5],[-78,7,6],[-83,-5,8],[-72,-18,4],[-83,-29,2],[-99,-22,5],[-104,-7,7],[-96,5,3],[-111,20,5.5],[-103,34,2],[-87,39,6],[-82,53,8],[-66,61,4],[-55,49,1.5],[-52,36,.5]];function ic(i,e=16){const t=[];for(let n=0;n<i.length;n++)for(let r=0;r<e;r++){const s=r/e,a=s*s,o=a*s,c=i[(n-1+i.length)%i.length],l=i[n],u=i[(n+1)%i.length],h=i[(n+2)%i.length],d=l.map((f,g)=>.5*(2*l[g]+(-c[g]+u[g])*s+(2*c[g]-5*l[g]+4*u[g]-h[g])*a+(-c[g]+3*l[g]-3*u[g]+h[g])*o));t.push({x:d[0],z:d[1],height:Math.max(0,d[2])})}return t.push({...t[0]}),t}const Ct=ic(ya),yn=ic(eM),Ma=ic(nc),ni={minX:-205,maxX:-30,minZ:85,maxZ:305},fo=new WeakMap;function tM(i){if(fo.has(i))return fo.get(i);let e=0;const t=i.slice(0,-1).map((s,a)=>{const o=i[a+1],c=o.x-s.x,l=o.z-s.z,u=Math.hypot(c,l),h={a:s,b:o,dx:c,dz:l,length:u,index:a,along:e,minX:Math.min(s.x,o.x),maxX:Math.max(s.x,o.x),minZ:Math.min(s.z,o.z),maxZ:Math.max(s.z,o.z)};return e+=u,h});function n(s){const a={minX:Math.min(...s.map(o=>o.minX)),maxX:Math.max(...s.map(o=>o.maxX)),minZ:Math.min(...s.map(o=>o.minZ)),maxZ:Math.max(...s.map(o=>o.maxZ))};if(s.length<=12)a.segments=s;else{const o=a.maxX-a.minX>a.maxZ-a.minZ?"X":"Z";s.sort((l,u)=>l["min"+o]+l["max"+o]-u["min"+o]-u["max"+o]);const c=s.length>>1;a.left=n(s.slice(0,c)),a.right=n(s.slice(c))}return a}const r=t.length?n(t):null;return fo.set(i,r),r}function bn(i,e,t){let n={distance:1/0,height:0,x:0,z:0,dx:0,dz:1,index:0,side:0,distanceAlong:0};const r=a=>Math.max(a.minX-e,0,e-a.maxX)**2+Math.max(a.minZ-t,0,t-a.maxZ)**2;function s(a){if(!(!a||r(a)>n.distance))if(a.segments)for(const o of a.segments){const{a:c,dx:l,dz:u,length:h}=o,d=Wr(((e-c.x)*l+(t-c.z)*u)/(h*h||1),0,1),f=c.x+d*l,g=c.z+d*u,v=(e-f)**2+(t-g)**2;(v<n.distance||v===n.distance&&o.index<n.index)&&(n={distance:v,height:(c.height||0)+((o.b.height||0)-(c.height||0))*d,x:f,z:g,dx:l/(h||1),dz:u/(h||1),index:o.index,side:((e-f)*u-(t-g)*l)/(h||1),distanceAlong:o.along+d*h})}else{const o=r(a.left)<=r(a.right)?a.left:a.right;s(o),s(o===a.left?a.right:a.left)}}return s(tM(i)),n.distance=Math.sqrt(n.distance),n}function nM(i,e){return .035*Math.sin(i*.8)*Math.cos(e*.6)+.018*Math.sin(i*2.3+e*1.7)}const rc=[{x:57,z:120,dx:0,dz:1,height:3,length:48,width:8,takeoff:10,table:20,name:"Первый длинный стол"},{x:265,z:200,dx:0,dz:1,height:2.8,length:42,width:8,takeoff:9,table:17,name:"Стол после связки поворотов"},{x:565,z:215,dx:0,dz:-1,height:3.2,length:46,width:8,takeoff:10,table:18,name:"Дальний большой стол"},{x:480,z:230,dx:0,dz:1,height:3,length:46,width:8,takeoff:10,table:18,name:"Возвратный длинный стол"},{x:620,z:260,dx:0,dz:1,height:4,length:88,width:9,takeoff:12,table:22,name:"Новый высокий стол · длинное приземление"},{x:710,z:260,dx:0,dz:-1,height:3.5,length:76,width:9,takeoff:14,table:20,name:"Пологий скоростной стол"},{x:800,z:200,dx:0,dz:1,height:4.5,length:84,width:9,takeoff:12,table:26,name:"Большое плато · 4,5 м"},{x:890,z:170,dx:0,dz:-1,height:3.8,length:92,width:9,takeoff:16,table:24,name:"Затяжной спуск для приземления"},{x:700,z:-110,dx:-1,dz:0,height:4.2,length:90,width:9,takeoff:14,table:20,name:"Финальный длинный прыжок"}],sc=[{x:190,z:175,dx:0,dz:-1,height:.38,length:40,width:8,waves:10,name:"Гребёнка · десять волн"},{x:395,z:220,dx:0,dz:-1,height:.48,length:40,width:8,waves:10,name:"Жёсткая гребёнка"}];function iM(i,e,t){const n=e-i.x,r=t-i.z,s=n*i.dx+r*i.dz+i.length/2,a=Math.abs(n*i.dz-r*i.dx);return s<=0||s>=i.length||a>i.width/2+5?0:i.height*Math.sin(Math.PI*s/(i.length/i.waves))**2*(1-Yi((a-i.width/2)/5))}const rM=ya.findIndex(i=>i[0]===420&&i[1]===-110)*16,sM=ya.findIndex(i=>i[0]===260&&i[1]===-120)*16,Ks=Ct.slice(rM,sM+1),oh=Ks.slice(1).reduce((i,e,t)=>i+Math.hypot(e.x-Ks[t].x,e.z-Ks[t].z),0);function aM(i,e){const t=bn(Ks,i,e);if(t.distance>9||t.distanceAlong<.01||t.distanceAlong>oh-.01)return 0;const n=Yi(t.distanceAlong/8)*Yi((oh-t.distanceAlong)/8),r=1-Yi((t.distance-3.5)/5);return .34*Math.sin(Math.PI*t.distanceAlong/3.8)**2*n*r}Ct.slice(1).reduce((i,e,t)=>i+Math.hypot(e.x-Ct[t].x,e.z-Ct[t].z),0);const Vs={minX:45,maxX:Math.max(...Ct.map(i=>i.x))+15,minZ:Math.min(...Ct.map(i=>i.z))-15,maxZ:Math.max(...Ct.map(i=>i.z))+15};function ac(i,e,t=0){return i>Vs.minX-t&&i<=Vs.maxX+t&&e>=Vs.minZ-t&&e<=Vs.maxZ+t}const oM=Ct.map((i,e)=>{const t=Ct[Math.max(0,e-6)],n=Ct[e],r=Ct[Math.min(Ct.length-1,e+6)],s=Math.atan2(n.x-t.x,n.z-t.z),a=Math.atan2(r.x-n.x,r.z-n.z);return Math.atan2(Math.sin(a-s),Math.cos(a-s))});function Yi(i){return i=Wr(i,0,1),i*i*(3-2*i)}function lM(i,e,t){const n=e-i.x,r=t-i.z,s=n*i.dx+r*i.dz,a=Math.abs(n*i.dz-r*i.dx),o=s+i.length/2;if(o<0||o>i.length||a>i.width/2+12)return 0;const c=i.length-i.takeoff-i.table,l=o<i.takeoff?o/i.takeoff:o<i.takeoff+i.table?1:(i.length-o)/c;return i.height*Math.max(0,l)*(1-Yi((a-i.width/2)/12))}function jd(i){const e=oM[i.index]||0,t=Math.sign(e),n=Wr((Math.abs(e)-.025)*4,0,1),r=s=>2.8*Qd(i.x,i.z)*n*Math.pow(Wr((-t*s-.2)/4.2,0,1),1.35);return{height:r(i.side),roll:-Math.atan2(r(i.side-.5)-r(i.side+.5),1),grip:1+n*.35*Math.min(1,Math.max(0,-t*i.side)/2)}}function Ub(i,e,t=0){return ac(i,e,7+Math.max(0,t))&&bn(Ct,i,e).distance<7+Math.max(0,t)}function Fb(i,e,t){const n=bn(Ct,i,e),r=jd(n);if(!Number.isFinite(t))return r;const s=Math.sin(t)*n.dx+Math.cos(t)*n.dz;return{...r,roll:Math.atan(Math.tan(r.roll)*s)}}const cM=yn.filter((i,e)=>e>12&&e<yn.length-10&&e%13===0).map((i,e)=>{const t=yn[Math.min((e+1)*13+1,yn.length-1)]||i;return{x:i.x,z:i.z,angle:Math.atan2(t.x-i.x,t.z-i.z)}});for(const i of cM){const e=bn(yn,i.x,i.z);i.dx=e.dx,i.dz=e.dz,i.angle=Math.atan2(e.dx,e.dz)}function uM(i,e){let t=nM(i,e);if(i>ni.minX&&i<ni.maxX&&e>ni.minZ&&e<ni.maxZ){const s=bn(Ma,i,e),a=Math.max(0,Math.min(1,(e-85)/20,(305-e)/20,(i+205)/20,(-30-i)/20)),o=65*Math.exp(-((i+110)**2+(e-245)**2)/7e3)*a,c=Math.max(0,1-(s.distance/12)**2);t+=o*(1-c)+s.height*c}else if(ac(i,e,22)){const s=bn(Ct,i,e);if(s.distance<18){const a=Math.pow(Wr((s.distance-1.5)/3.5,0,1),2)*.8*Qd(i,e),o=jd(s).height,c=1-Yi((s.distance-4.9)/12);t+=Math.max(a,o)*c}for(const a of rc)t=Math.max(t,lM(a,i,e));for(const a of sc)t=Math.max(t,iM(a,i,e));t=Math.max(t,aM(i,e))}else if(i<-45){const s=bn(yn,i,e);if(s.distance<9){const a=Math.max(0,1-Math.pow(s.distance/9,2));t+=s.height*a+Math.max(0,1-s.distance/4)*.16}}const n=jy(i,e);n!==null&&(t=n);const r=Hy(i,e);return r===null?t:r}function Ob(i,e){return uM(i,e)+Qy(i,e)}let po=7342;const br=()=>(po=po*1664525+1013904223>>>0,po/4294967296),ef=[];for(let i=-120;i<=-46;i+=4.5)for(let e=-38;e<=76;e+=4.5){const t=i+(br()-.5)*3,n=e+(br()-.5)*3;bn(yn,t,n).distance<8||t>-56&&n>21&&n<33||ef.push({x:t,z:n,height:4+br()*4.5,radius:.22+br()*.16,variant:Math.floor(br()*3)})}function Bb(i,e=0){return i>ni.minX&&i<ni.maxX&&e>ni.minZ&&e<ni.maxZ?"mountains":ac(i,e)?"motocross":i<-45&&i>=-125&&e>=-43&&e<=80?"forest":Math.abs(i)<=35&&Math.abs(e)<=40||i>=Gs.minX&&i<=Gs.maxX&&e>=Gs.minZ&&e<=Gs.maxZ?"stadium":"field"}function kb(i,e){return Number.isFinite(i)&&Number.isFinite(e)}const pa=new Map;function zb(i){const e={},t=new Map;for(const n of i){const r=Math.floor(n.x/8)+","+Math.floor(n.z/8);t.has(r)||t.set(r,[]),t.get(r).push(n)}return pa.set(e,t),()=>pa.delete(e)}function Hb(i,e){if(!pa.size&&i<-45&&ef.some(r=>(i-r.x)**2+(e-r.z)**2<(r.radius+.32)**2))return!0;const t=Math.floor(i/8),n=Math.floor(e/8);for(const r of pa.values())for(let s=-1;s<=1;s++)for(let a=-1;a<=1;a++)if((r.get(t+s+","+(n+a))||[]).some(o=>(i-o.x)**2+(e-o.z)**2<(o.radius+.32)**2))return!0;return!1}function oc(i,e){const t=e.map((n,r)=>({...i[n],name:`Сектор ${r+1}`}));return[...t,{...t[0],name:"Финиш круга"}]}const hM=[...new Set([0,...ya.flatMap((i,e)=>e%2===0?[e*16]:[]),...[...rc,...sc].map(i=>bn(Ct,i.x,i.z).index)])].sort((i,e)=>i-e),yl=oc(Ct,hM),tf=oc(Ma,nc.map((i,e)=>e*16));tf.forEach((i,e)=>i.name=e===nc.length?"Финиш горного круга":e<8?"Подъём "+(e+1)+" · "+Math.round(i.height)+" м":"Серпантин · спуск");const nf=oc(yn,[0,32,64,96,128,160,192,224,256]),Gb={mountains:"Горы · подъёмы",stadium:"Эндуро-стадион",motocross:"Кантри-кросс",forest:"Посадка · старая железная дорога",field:"Поле · свободная езда"},dM=["Въезд в посадку","Подъём по насыпи","Гребень","Левый спуск","Подъём со шпалами","Крутой правый","Лесной подъём","Северный поворот","Обратно к стадиону","Финиш круга"];yl.forEach((i,e)=>{const t=[...rc,...sc].find(n=>Math.hypot(i.x-n.x,i.z-n.z)<6);i.name=e===0?"Стартовая прямая":e===yl.length-1?"Финиш круга":t?.name||`Сектор ${e+1} · повороты и прямая`});nf.forEach((i,e)=>i.name=dM[e]);const mo=new WeakMap;function rf(i,e="stadium"){if(i.frame)return i.frame;if(mo.has(i))return mo.get(i);const t=e==="stadium"?Ky:e==="motocross"?Ct:e==="mountains"?Ma:yn,n=bn(t,i.x,i.z),r={x:n.dx,z:n.dz};let s,a;if(e==="stadium")s=ah(n,r,-1),a=ah(n,r,1);else{const h=e==="motocross"?4.15:e==="mountains"?2.8:1.85;s={x:n.x-n.dz*h,z:n.z+n.dx*h},a={x:n.x+n.dz*h,z:n.z-n.dx*h}}const o=a.x-s.x,c=a.z-s.z,l=Math.hypot(o,c),u={x:(s.x+a.x)/2,z:(s.z+a.z)/2,dx:n.dx,dz:n.dz,width:l,left:s,right:a};return mo.set(i,u),u}function lh(i,e,t,n="stadium"){const r=rf(t,n),s=(i.x-r.x)*r.dx+(i.z-r.z)*r.dz,a=(e.x-r.x)*r.dx+(e.z-r.z)*r.dz;if(s>.12||a<-.12||a<s-1e-6)return!1;const o=Math.abs(a-s)<1e-8?1:Math.max(0,Math.min(1,-s/(a-s))),c=i.x+(e.x-i.x)*o,l=i.z+(e.z-i.z)*o,u=(r.right.x-r.left.x)/r.width,h=(r.right.z-r.left.z)/r.width;return Math.abs((c-r.x)*u+(l-r.z)*h)<=r.width/2+.03}const fM=5;function pM(i,e,t,n){const r=t[n];if(!r)return{next:n,missed:[]};if(lh(i,e,r,r.region))return{next:n+1,missed:[]};for(let c=1;c<=2&&n+c<t.length;c++)if(lh(i,e,t[n+c],t[n+c].region))return{next:n+c+1,missed:Array.from({length:c},(l,u)=>n+u)};if(n===t.length-1)return{next:n,missed:[]};const s=rf(r,r.region),a=(i.x-s.x)*s.dx+(i.z-s.z)*s.dz,o=(e.x-s.x)*s.dx+(e.z-s.z)*s.dz;if(a<=0&&o>0&&o>a){const c=-a/(o-a),l=i.x+(e.x-i.x)*c,u=i.z+(e.z-i.z)*c,h=Math.abs((l-s.x)*s.dz-(u-s.z)*s.dx);if(h>s.width/2+.03&&h<Math.max(18,s.width*2))return{next:n+1,missed:[n]}}return{next:n,missed:[]}}const Ml={mountains:"Горы · подъёмы",stadium:"Стадион",motocross:"Кантри-кросс",forest:"Посадка"},mM=[["mountains"],["stadium"],["motocross"],["forest"],["stadium","motocross"],["stadium","motocross","forest"],["stadium","forest"],["motocross","forest"],["stadium","motocross","mountains","forest"]],qr=mM.map(i=>({id:i.join("+"),regions:i,name:i.map(e=>Ml[e]).join(" + ")})),go={mountains:Ma,stadium:Jd.map(([i,e])=>({x:i,z:e})),motocross:Ct,forest:yn},ch={mountains:tf,stadium:vl,motocross:yl,forest:nf},_o=new Map;function Qs(i){return qr.find(e=>e.id===i)||qr.find(e=>e.id==="stadium")}function vo(i,e){return({"stadium+motocross":[[30,-73],[40,-84],[74,-84],[84,-72],[84,-56],[74,-45],[57,-45],[57,-29]],"stadium+forest":[[30,-73],[18,-84],[-25,-84],[-40,-70],[-40,8],[-36,27],[-47,27]],"motocross+mountains":[[57,12],[43,40],[4,65],[-30,80],[-50,90],[-65,99]],"mountains+forest":[[-48,96],[-35,78],[-30,52],[-36,35],[-47,27]],"motocross+forest":[[57,12],[48,27],[20,35],[-20,35],[-36,27],[-47,27]],"motocross+stadium":[[57,8],[48,20],[34,27],[12,27],[-12,27],[-12,-20],[-5,-38],[0,-38],[0,-33]],"forest+stadium":[[-54,18],[-43,8],[-20,-6],[-17,-20],[-17,-49],[-6,-48],[0,-38],[0,-33]],"forest+motocross":[[-52,4],[-40,-12],[-35,-66],[0,-86],[40,-86],[75,-80],[80,-62],[72,-45],[57,-45],[57,-29]]}[i+"+"+e]||[]).map(([n,r])=>({x:n,z:r}))}function gM(i){const e=[[48,28],[48,-25],[42,-38],[36,-44],[30,-48],[30,-51.2],[30,-53.3]];return(i==="motocross"?[[57,-34],[50,-40],[42,-44],[36,-46],[30,-48],[30,-51.2],[30,-53.3]]:[...i==="forest"?[[-43,30],[-35,45],[0,50],[40,45]]:i==="mountains"?[[-40,85],[-20,65],[10,50],[40,45]]:[],...e]).map(([n,r])=>({x:n,z:r}))}function uh(i,e,t,n,r=6){const s=Math.hypot(i.x-e.x,i.z-e.z),a=(i.x-e.x)/(s||1),o=(i.z-e.z)/(s||1);return{...i,id:t,name:n,region:"field",frame:{...i,dx:a,dz:o,width:r,left:{x:i.x-o*r/2,z:i.z+a*r/2},right:{x:i.x+o*r/2,z:i.z-a*r/2}}}}function lc(i){const e=Qs(i);if(_o.has(e.id))return _o.get(e.id);const t=[],n=[],r=[],s=[];for(let c=0;c<e.regions.length;c++){const l=e.regions[c];if(c){const h=vo(e.regions[c-1],l),d=n.length,f=[t.at(-1),...h,go[l][0]];let g=t.at(-1);for(const v of h){const p=Math.hypot(v.x-g.x,v.z-g.z);if(p<.2)continue;const m=(v.x-g.x)/p,x=(v.z-g.z)/p,b={x:v.x-x*3,z:v.z+m*3},y={x:v.x+x*3,z:v.z-m*3};n.push({...v,id:"link-"+c+"-"+n.length,name:"Переезд · "+Ml[l],region:"field",frame:{...v,dx:m,dz:x,width:6,left:b,right:y}}),t.push({...v,routeRegion:"field"}),g=v}s.push({from:e.regions[c-1],to:l,startGate:d,endGate:n.length-1,points:f})}const u=n.length;t.push(...go[l].map(h=>({...h,routeRegion:l}))),n.push(...ch[l].map((h,d)=>({...h,region:l,name:e.regions.length>1&&d===ch[l].length-1?"Сектор пройден · далее "+(c===e.regions.length-1?"финиш на стадионе":Ml[e.regions[c+1]]):h.name}))),r.push({region:l,index:c,startGate:u,endGate:n.length-1,points:go[l]})}const a=e.regions.length>1;if(a){const c=e.regions.at(-1),l=gM(c),u=n.length,h=[t.at(-1),...l];let d=t.at(-1);for(let f=0;f<l.length;f++){const g=l[f];n.push(f===l.length-1?{...vl.at(-1),region:"stadium",name:"ФИНИШ МАРШРУТА · стадион",frame:uh(g,d,"finish","",vl.at(-1).width).frame}:uh(g,d,"finish-link-"+f,"Возвращение к финишу · стадион")),t.push({...g,routeRegion:"field"}),d=g}s.push({from:c,to:"stadium",startGate:u,endGate:n.length-1,points:h})}const o={...e,path:t,gates:n,stages:r,links:s,returnPath:a?[...$i.map(([c,l])=>({x:c,z:l})),...e.regions[0]==="stadium"?[]:vo("stadium",e.regions[0])]:e.id==="stadium"?$i.map(([c,l])=>({x:c,z:l})):vo(e.regions.at(-1),e.regions[0])};return _o.set(e.id,o),o}function Vb(i,e,t=1){const n=lc(e);return i.raceLaps=Math.max(1,Number(t)||1),i.routeId=n.id,i.routeProgress=0,i.routePenaltyTotal=0,i.routeMissedCount=0,i.routeMissedIndices=[],i.routeLaps=0,i.routeCompleted=!1,i}function Wb(i,e){if(!i.routeId)return;const t=lc(i.routeId);if(i.routeCompleted){const r=t.gates[0];if(Math.hypot(i.x-r.x,i.z-r.z)<4&&i.speed>0){i.routeCompleted=!1;const s=t.gates.at(-1);i.routeProgress=Math.hypot(r.x-s.x,r.z-s.z)<.1?1:0}else return}const n=pM(e,i,t.gates,i.routeProgress);i.routeProgress=n.next,n.missed.length&&(i.routeMissedIndices=[...i.routeMissedIndices||[],...n.missed],i.routePenaltyTotal=(i.routePenaltyTotal||0)+n.missed.length*fM,i.routeMissedCount=(i.routeMissedCount||0)+n.missed.length),i.routeProgress===t.gates.length&&(i.routeLaps++,i.routeCompleted=!0)}function qb(i,e,t=0){return qr.some(n=>n.regions.length>1&&_M(n.id,i,e,t))}function _M(i,e,t,n=0){const r=lc(i);if(r.regions.length<2)return!1;const s=[...r.links.map(a=>a.points),[r.path.at(-1),...r.returnPath]];for(const a of s)for(let o=1;o<a.length;o++){const c=a[o-1],l=a[o],u=l.x-c.x,h=l.z-c.z,d=Math.max(0,Math.min(1,((e-c.x)*u+(t-c.z)*h)/(u*u+h*h||1)));if(Math.hypot(e-c.x-u*d,t-c.z-h*d)<4+n)return!0}return!1}const hh={iron:1.5,bronze:3.5,silver:4,gold:4.5};function sf(i){const e=hh[i]??hh.bronze;return{value:e,min:Math.round(e*.4*100)/100,max:Math.round(({silver:4.5,gold:6}[i]??e)*1.6*100)/100,step:.05}}function vM(i,e){const t=sf(i);try{e??(e=globalThis.localStorage);const n=e.getItem("enduro-bot-rate-"+i);if(n==null)return t.value;const r=Number(n);return Number.isFinite(r)?Math.max(t.min,Math.min(t.max,r)):t.value}catch{return t.value}}const af="enduro-tree-collisions-v1";function xM(i){try{return i??(i=globalThis.localStorage),{treeCollisions:i.getItem(af)==="true",openMapOnMiss:i.getItem("enduro-open-map-on-miss-v1")==="true"}}catch{return{treeCollisions:!1,openMapOnMiss:!1}}}function yM(){const i=xM(),e=["iron","bronze","silver","gold"].every(t=>vM(t)===sf(t).value);return`<fieldset class="graphics-settings"><legend>Препятствия</legend><label><input type="checkbox" data-tree-collisions ${i.treeCollisions?"checked":""}> Столкновения с деревьями</label><small>Выключено — можно проезжать сквозь деревья. Включено — стволы становятся препятствиями. Изменение применяется сразу.</small><label><input type="checkbox" data-open-map-on-miss ${i.openMapOnMiss?"checked":""}> Открывать карту при пропуске чекпойнта</label><small>Пропущенный — красный, следующий — жёлтый. После начисления штрафа можно продолжать маршрут.</small><label><input type="checkbox" data-bot-speed-default ${e?"checked":""}> Скорость бота по умолчанию</label><small>Возвращает базовую скорость для каждой сложности. Ползунком можно настроить её заново.</small></fieldset>`}function MM(i){const e=i.querySelector("[data-bot-speed-default]");e&&(e.onchange=()=>{if(e.checked){for(const r of["iron","bronze","silver","gold"])try{localStorage.removeItem("enduro-bot-rate-"+r)}catch{}window.dispatchEvent(new Event("enduro-bot-speed-reset"))}});const t=i.querySelector("[data-open-map-on-miss]");t&&(t.onchange=()=>{try{localStorage.setItem("enduro-open-map-on-miss-v1",String(t.checked))}catch{}window.dispatchEvent(new CustomEvent("enduro-gameplay-change"))});const n=i.querySelector("[data-tree-collisions]");n&&(n.onchange=()=>{try{localStorage.setItem(af,String(n.checked))}catch{}window.dispatchEvent(new CustomEvent("enduro-gameplay-change",{detail:{treeCollisions:n.checked}}))})}const of="enduro-performance-v1",lf={manual:!1,adaptive:!0,resolution:85,rider:3,bike:3,grass:60,distance:450,textures:1024,shadows:!1,trees:!1,simpleLighting:!0};function SM(i){let e={};try{e=JSON.parse((i??globalThis.localStorage).getItem(of)||"{}")||{}}catch{}const t={...lf};for(const n of["manual","adaptive","shadows","trees","simpleLighting"])typeof e[n]=="boolean"&&(t[n]=e[n]);for(const[n,r,s,a]of[["resolution",35,150,5],["rider",0,4,1],["bike",0,3,1],["grass",0,100,10],["distance",100,1500,50],["textures",256,2048,256]])Number.isFinite(e[n])&&(t[n]=Math.max(r,Math.min(s,Math.round(e[n]/a)*a)));return t}const bM=[["resolution","Чёткость всей картинки",35,150,5,"100% — один пиксель на экранный CSS-пиксель. Главный источник размытия. Выше — чётче препятствия, но больше нагрузка на видеокарту."],["rider","Треугольники райдера",0,4,1,"Влияет на силуэт и нагрузку анимации. Скелет и движения сохраняются. У классического райдера минимум ≈3 400; у Ярика — 996."],["bike","Треугольники мотоцикла",0,3,1,"Меньше — проще колёса и мелкие детали. Число зависит от модели."],["grass","Количество травы",0,100,10,"Меньше травы — меньше геометрии и прозрачных слоёв перед камерой."],["distance","Дальность мелких объектов",100,1500,50,"Влияет на число объектов в кадре. Ближние препятствия сохраняются."],["textures","Чёткость текстур моделей",256,2048,256,"Влияет прежде всего на видеопамять и детали окраски райдера и мотоцикла."]];function cf(i,e){return i==="rider"?["≈1 000","≈5 000","≈15 000","≈30 000","Полная модель"][e]:i==="bike"?["≈4 000","≈8–12 тыс.","≈15–16 тыс.","Полная модель"][e]:i==="distance"?e+" м":i==="textures"?e+" px":e+"%"}function EM(){const i=SM();return`<details class="performance-settings"><summary>Производительность · настроить отдельно</summary><p data-performance-measurement></p><p>Сравнивай FPS на одном месте и с одной камерой. Влияние зависит от устройства; проценты прироста заранее неизвестны.</p><label><input type="checkbox" data-performance="manual" ${i.manual?"checked":""}> Ручные настройки</label><label><input type="checkbox" data-performance="adaptive" ${i.adaptive?"checked":""}> Автоматически снижать качество при FPS ниже 25</label><small>Для сравнения ползунков выключи автоматику. Изменения применятся при возвращении в игру; позиция сохраняется.</small>${bM.map(([e,t,n,r,s,a])=>`<label class="performance-slider"><span>${t} <output data-performance-output="${e}">${cf(e,i[e])}</output></span><input aria-label="${t}" type="range" data-performance="${e}" min="${n}" max="${r}" step="${s}" value="${i[e]}"><small>${a}</small></label>`).join("")}<label><input type="checkbox" data-performance="trees" ${i.trees?"checked":""}> Деревья и кустарники</label><small>Включает растительность. Проверка столкновений с деревьями задаётся отдельно в разделе «Препятствия».</small><label><input type="checkbox" data-performance="simpleLighting" ${i.simpleLighting?"checked":""}> Упрощённое освещение</label><small>Проще блики и материалы; текстуры препятствий сохраняются.</small><label><input type="checkbox" data-performance="shadows" ${i.shadows?"checked":""}> Динамические тени</label><small>Тени требуют повторной отрисовки объектов и часто заметно снижают FPS.</small><button type="button" data-performance-restore-bikes>Вернуть полное качество мотоциклов</button><button type="button" data-performance-reset>Сбросить ручные настройки</button><p data-performance-status role="status"></p></details>`}function TM(i){const e=[...i.querySelectorAll("[data-performance]")];if(!e.length)return;i.querySelector(".performance-settings").addEventListener("toggle",()=>{const n=window.enduroDiagnostics||{};i.querySelector("[data-performance-measurement]").textContent=n.fps!=null?"Последний замер: "+n.fps+" FPS · райдер "+(n.riderTriangles??"—")+" · мотоцикл "+(n.motorcycleTriangles??"—")+" треугольников":""});const t=()=>{const n={};for(const r of e)n[r.dataset.performance]=r.type==="checkbox"?r.checked:Number(r.value);try{localStorage.setItem(of,JSON.stringify(n))}catch{}window.dispatchEvent(new Event("enduro-graphics-change")),i.querySelector("[data-performance-status]").textContent="Сохранено. Вернись в заезд для применения."};for(const n of e)n.oninput=()=>{const r=n.dataset.performance,s=i.querySelector(`[data-performance-output="${r}"]`);s&&(s.textContent=cf(r,Number(n.value)))},n.onchange=()=>{["manual","adaptive"].includes(n.dataset.performance)||(i.querySelector('[data-performance="manual"]').checked=!0),t()};i.querySelector("[data-performance-restore-bikes]").onclick=()=>{for(const[n,r]of Object.entries({manual:!0,adaptive:!1,bike:3,textures:2048,simpleLighting:!1,resolution:100})){const s=i.querySelector('[data-performance="'+n+'"]');s.type==="checkbox"?s.checked=r:(s.value=r,s.oninput())}t(),i.querySelector("[data-performance-status]").textContent="Полная модель, чёткие текстуры и материалы восстановлены. Вернись в заезд."},i.querySelector("[data-performance-reset]").onclick=()=>{for(const n of e){const r=lf[n.dataset.performance];n.type==="checkbox"?n.checked=r:n.value=r,n.oninput()}t()}}const AM="0.15.68",wM={version:AM},cc=wM.version,Sl="enduro-graphics-quality-v1",uf="enduro-show-fps-v1",RM=["auto","low","medium","high"];function hf(i){try{i??(i=globalThis.localStorage);const e=i.getItem(Sl);return{quality:RM.includes(e)?e:"auto",showFps:i.getItem(uf)!=="false"}}catch{return{quality:"auto",showFps:!0}}}function Xb({quality:i="auto",mobile:e=!1,memory:t,cores:n,software:r=!1}={}){return i==="auto"&&(r||t>0&&t<=4||n>0&&n<=4?i="low":i=e?"medium":"high"),{quality:i,low:i==="low",mobile:i!=="high"}}function $b(i){return/swiftshader|llvmpipe|software|basic render|softpipe/i.test(i||"")}function CM(){const i=hf();return`<fieldset class="graphics-settings"><legend>Графика и производительность</legend><label>Качество<select data-graphics-quality>${[["auto","Авто"],["low","Низкое · слабые устройства"],["medium","Среднее"],["high","Высокое"]].map(([e,t])=>`<option value="${e}" ${i.quality===e?"selected":""}>${t}</option>`).join("")}</select></label><label><input type="checkbox" data-show-fps ${i.showFps?"checked":""}> Показывать FPS и пинг</label><small>Качество применяется при возвращении в заезд. При повышении возможна короткая подготовка графики; позиция и прогресс сохраняются.</small>${EM()}<button type="button" data-quality-preset>Красивое качество</button><button type="button" data-check-update>Проверить обновления</button><button type="button" data-copy-diagnostics>Скопировать диагностику</button><p data-graphics-status role="status"></p><textarea data-graphics-report readonly hidden aria-label="Диагностика производительности"></textarea></fieldset>`}function PM(i){TM(i);const e=i.querySelector("[data-graphics-quality]"),t=i.querySelector("[data-show-fps]");if(!e)return;i.querySelector("[data-check-update]").onclick=()=>{window.EnduroOrientation?.checkForUpdates?window.EnduroOrientation.checkForUpdates():window.open("https://enduro-club-len-nicolenkoe.msk1.amvera.tech/download","_blank","noopener")};const n=()=>{try{localStorage.setItem(Sl,e.value),localStorage.setItem(uf,String(t.checked))}catch{}window.dispatchEvent(new Event("enduro-graphics-change"))};i.querySelector("[data-quality-preset]").onclick=()=>{e.value="high";try{localStorage.setItem(Sl,"high")}catch{}for(const[r,s]of Object.entries({manual:!0,adaptive:!1,resolution:100,rider:3,bike:3,grass:60,distance:700,textures:2048,trees:!0,simpleLighting:!1,shadows:!1})){const a=i.querySelector('[data-performance="'+r+'"]');a.type==="checkbox"?a.checked=s:(a.value=s,a.oninput())}i.querySelector('[data-performance="trees"]').onchange(),n(),i.querySelector("[data-performance-status]").textContent="Полные мотоциклы, чёткая картинка, деревья и подробные материалы. Вернись в заезд."},e.onchange=n,t.onchange=n,i.querySelector("[data-copy-diagnostics]").onclick=async()=>{const r={version:cc,preferences:hf(),browser:navigator.userAgent,memoryGB:navigator.deviceMemory,logicalCores:navigator.hardwareConcurrency,...window.enduroDiagnostics},s=JSON.stringify(r,null,2),a=i.querySelector("[data-graphics-status]");try{await navigator.clipboard.writeText(s),a.textContent="Диагностика скопирована — её можно прислать для проверки."}catch{const o=i.querySelector("[data-graphics-report]");o.hidden=!1,o.value=s,o.focus(),o.select(),a.textContent="Скопируй выделенный текст диагностики."}}}const mt={controlFontWeight:600,controlTextColor:"#000000",controlOutlineColor:"#454545",buttonBlur:0,separateControlLayers:!0,outlineTransparency:20,textTransparency:0,rightTransparency:85,arrowTransparency:95,trickTransparency:85,swapPedals:!0,invertSteering:!0,lockGyroOrientation:!0,buttonsSensitivity:100,gyroSensitivity:100,stickSensitivity:100,stickDeadZone:15,gyroSpeedSteering:100,stickSpeedSteering:50,buttonsSpeedSteering:100},gt={controlFontWeight:"enduro-control-font-weight",controlTextColor:"enduro-control-text-color",controlOutlineColor:"enduro-control-outline-color",buttonBlur:"enduro-button-blur",separateControlLayers:"enduro-separate-control-layers",outlineTransparency:"enduro-outline-transparency",textTransparency:"enduro-text-transparency",rightTransparency:"enduro-right-transparency",arrowTransparency:"enduro-arrow-transparency",trickTransparency:"enduro-trick-transparency",buttonsSensitivity:"enduro-arrow-sensitivity-v2",stickDeadZone:"enduro-stick-dead-zone",stickSpeedSteering:"enduro-stick-speed-steering",buttonsSpeedSteering:"enduro-arrow-speed-steering-v2",gyroSpeedSteering:"enduro-gyro-speed-steering",swapPedals:"enduro-swap-pedals",invertSteering:"enduro-invert-steering",lockGyroOrientation:"enduro-lock-gyro-orientation",gyroSensitivity:"enduro-gyro-sensitivity",stickSensitivity:"enduro-stick-sensitivity"};function ts(i){const e=Number(i);return Number.isFinite(e)&&e>=400?Math.max(400,Math.min(700,Math.round(e/100)*100)):600}function lr(i){return/^#[0-9a-f]{6}$/i.test(String(i))?String(i).toLowerCase():mt.controlTextColor}function Yb(i){const e=lr(i),t=[1,3,5].map(n=>parseInt(e.slice(n,n+2),16)/255).map(n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4);return .2126*t[0]+.7152*t[1]+.0722*t[2]>.179?"#000000":"#ffffff"}function ns(i){return/^#[0-9a-f]{6}$/i.test(String(i))?String(i).toLowerCase():mt.controlOutlineColor}function Xr(i){const e=Number(i);return Number.isFinite(e)?Math.max(0,Math.min(20,Math.round(e))):0}function Fn(i,e=100){if(i==null||i==="")return e;const t=Number(i);return Number.isFinite(t)?Math.max(0,Math.min(100,Math.round(t))):e}function xi(i){if(i==null||i==="")return 100;const e=Number(i);return Number.isFinite(e)?Math.max(0,Math.min(500,Math.round(e))):100}function LM(i){return xi(i)/100*.75}function IM(i){const e=i.getItem(gt.buttonsSensitivity);if(e!=null)return xi(e);const t=i.getItem("enduro-buttons-sensitivity");return t!=null&&t!==""&&Number.isFinite(Number(t))?xi(Number(t)/2.5):100}function yi(i,e=100,t=250){if(i==null||i==="")return e;const n=Number(i);return Number.isFinite(n)?Math.max(50,Math.min(t,Math.round(n/10)*10)):e}function $r(i){if(i==null||i==="")return 15;const e=Number(i);return Number.isFinite(e)?Math.max(0,Math.min(90,Math.round(e))):15}function ir(i){if(i==null||i==="")return 100;const e=Number(i);return Number.isFinite(e)?Math.max(0,Math.min(500,Math.round(e/10)*10)):100}function NM(i,e){const t=Math.min(1,Math.abs(i)*3.6/60),n=t*t*(3-2*t);return 1+ir(e)/100*n}function rr(i){if(i==null||i==="")return 100;const e=Number(i);return Number.isFinite(e)?Math.max(0,Math.min(300,Math.round(e/10)*10)):100}function DM(i,e){const t=Math.min(1,Math.abs(i)*3.6/60),n=t*t*(3-2*t);return 1+(rr(e)/100-1)*n}function UM(i){const e=i.getItem(gt.buttonsSpeedSteering);if(e!=null)return rr(e);const t=i.getItem("enduro-buttons-speed-steering");return t!=null&&t!==""&&Number.isFinite(Number(t))?rr(Number(t)+100):100}function Zb(i,e,t,n=!1){return n||i==="buttons"?LM(t.buttonsSensitivity)*DM(e,t.buttonsSpeedSteering):NM(e,t[i==="gyro"?"gyroSpeedSteering":"stickSpeedSteering"])}function FM(i){try{return i??(i=globalThis.localStorage),{controlFontWeight:ts(i.getItem(gt.controlFontWeight)),controlTextColor:lr(i.getItem(gt.controlTextColor)??mt.controlTextColor),controlOutlineColor:ns(i.getItem(gt.controlOutlineColor)??mt.controlOutlineColor),buttonBlur:Xr(i.getItem(gt.buttonBlur)??mt.buttonBlur),separateControlLayers:(i.getItem(gt.separateControlLayers)??mt.separateControlLayers)!=="false",outlineTransparency:Fn(i.getItem(gt.outlineTransparency)??mt.outlineTransparency,mt.outlineTransparency),textTransparency:Fn(i.getItem(gt.textTransparency)??mt.textTransparency,mt.textTransparency),rightTransparency:Fn(i.getItem(gt.rightTransparency)??mt.rightTransparency),arrowTransparency:Fn(i.getItem(gt.arrowTransparency)??mt.arrowTransparency),trickTransparency:Fn(i.getItem(gt.trickTransparency)??mt.trickTransparency),buttonsSensitivity:IM(i),stickDeadZone:$r(i.getItem(gt.stickDeadZone)??mt.stickDeadZone),stickSpeedSteering:ir(i.getItem(gt.stickSpeedSteering)??mt.stickSpeedSteering),buttonsSpeedSteering:UM(i),gyroSpeedSteering:ir(i.getItem(gt.gyroSpeedSteering)??mt.gyroSpeedSteering),swapPedals:(i.getItem(gt.swapPedals)??mt.swapPedals)!=="false",invertSteering:(i.getItem(gt.invertSteering)??mt.invertSteering)!=="false",lockGyroOrientation:(i.getItem(gt.lockGyroOrientation)??mt.lockGyroOrientation)!=="false",gyroSensitivity:yi(i.getItem(gt.gyroSensitivity)??mt.gyroSensitivity,100),stickSensitivity:yi(i.getItem(gt.stickSensitivity)??mt.stickSensitivity,100,600)}}catch{return{...mt}}}function Rr(i,e){if(gt[i])try{localStorage.setItem(gt[i],String(i==="controlFontWeight"?ts(e):i==="controlTextColor"?lr(e):i==="controlOutlineColor"?ns(e):i==="buttonBlur"?Xr(e):i.endsWith("Transparency")?Fn(e):i==="stickDeadZone"?$r(e):i==="buttonsSpeedSteering"?rr(e):i.endsWith("SpeedSteering")?ir(e):i==="buttonsSensitivity"?xi(e):i.endsWith("Sensitivity")?yi(e,mt[i],i==="stickSensitivity"?600:250):!!e))}catch{}}function OM(i){const e=(a,o,c=250)=>a==="buttonsSensitivity"?`<label class="control-sensitivity"><span>Чувствительность руля <output>${xi(i[a])}%</output></span><input type="range" min="0" max="500" step="1" value="${xi(i[a])}" data-sensitivity="${a}" aria-label="Чувствительность руля ${o}"></label>`:`<label class="control-sensitivity"><span>Чувствительность руля <output>${yi(i[a],100,c)}%</output></span><input type="range" min="50" max="${c}" step="10" value="${yi(i[a],100,c)}" data-sensitivity="${a}" aria-label="Чувствительность руля ${o}"></label>`,t=(a,o)=>{const c=a==="buttonsSpeedSteering"?rr(i[a]):ir(i[a]);return`<label class="control-sensitivity"><span>Усиление поворота на скорости <output>${c}%</output></span><input type="range" min="0" max="${a==="buttonsSpeedSteering"?300:500}" step="10" value="${c}" data-speed-steering="${a}" aria-label="Усиление поворота на скорости ${o}"></label>`},n=`<label class="control-sensitivity"><span>Мёртвая зона <output>${$r(i.stickDeadZone)}°</output></span><input type="range" min="0" max="90" step="1" value="${$r(i.stickDeadZone)}" data-stick-dead-zone aria-label="Мёртвая зона стика"><small>Угол прямого движения влево и вправо; газ регулируется.</small></label>`,r=(a,o)=>`<label class="control-sensitivity"><span>${o} <output>${Fn(i[a])}%</output></span><input type="range" min="0" max="100" step="5" value="${Fn(i[a])}" data-transparency="${a}" aria-label="Прозрачность ${o}"></label>`,s=(a,o,c)=>`<label class="control-preference"><input type="checkbox" data-preference="${a}" ${i[a]?"checked":""}><span>${o}<small>${c}</small></span></label>`;return'<div class="control-common">'+s("swapPedals","Газ сверху, тормоз снизу","Газ остаётся большим, тормоз — маленьким.")+s("invertSteering","Инвертировать руль","Направление поворота во всех режимах.")+s("lockGyroOrientation","Фиксировать экран в «Гиро»","Сохраняет альбомный или книжный вид.")+`</div><div class="control-mode-blocks"><fieldset class="control-mode-block"><legend>Кнопки руля</legend>${e("buttonsSensitivity","Кнопки руля")}${t("buttonsSpeedSteering","Кнопки руля")}</fieldset><fieldset class="control-mode-block"><legend>Стик</legend>${e("stickSensitivity","Стик",600)}${t("stickSpeedSteering","Стик")}${n}</fieldset><fieldset class="control-mode-block"><legend>Гиро</legend>${e("gyroSensitivity","Гиро")}${t("gyroSpeedSteering","Гиро")}</fieldset></div><div class="control-transparency"><h3>Прозрачность фона</h3>${r("rightTransparency","Газ / стик")}${r("arrowTransparency","Лево–право")}${r("trickTransparency","Вилли и действия")}${s("separateControlLayers","Контур и надписи отдельно","")}${r("outlineTransparency","Окантовка")}${r("textTransparency","Надписи")}<label class="control-sensitivity"><span>Жирность надписей</span><select data-font-weight aria-label="Жирность надписей управления">${[[400,"Обычный"],[500,"Средний"],[600,"Полужирный"],[700,"Жирный"]].map(([a,o])=>`<option value="${a}" ${ts(i.controlFontWeight)===a?"selected":""}>${o}</option>`).join("")}</select></label><label class="control-sensitivity"><span>Размытие фона кнопок <output>${Xr(i.buttonBlur)} px</output></span><input type="range" min="0" max="20" step="1" value="${Xr(i.buttonBlur)}" data-control-blur aria-label="Размытие фона кнопок"></label><label class="control-sensitivity"><span>Цвет окантовки</span><input type="color" value="${ns(i.controlOutlineColor)}" data-outline-color aria-label="Цвет окантовки кнопок"></label><label class="control-sensitivity"><span>Цвет надписей</span><input type="color" value="${lr(i.controlTextColor)}" data-text-color aria-label="Цвет надписей кнопок"></label></div><div class="control-settings-footer"><button type="button" data-reset-controls>По умолчанию</button><button type="button" data-layout-controls>Расставить кнопки</button></div>`}function BM(i,e=null,t=()=>{}){for(const n of i.querySelectorAll("[data-font-weight]"))n.onchange=()=>{const r=ts(n.value);e&&(e.controlFontWeight=r),Rr("controlFontWeight",r),t()};for(const n of i.querySelectorAll("[data-text-color]"))n.oninput=()=>{const r=lr(n.value);n.value=r,e&&(e.controlTextColor=r),Rr("controlTextColor",r),t()};for(const n of i.querySelectorAll("[data-outline-color]"))n.oninput=()=>{const r=ns(n.value);n.value=r,e&&(e.controlOutlineColor=r),Rr("controlOutlineColor",r),t()};for(const n of i.querySelectorAll("[data-sensitivity],[data-speed-steering],[data-stick-dead-zone],[data-transparency],[data-control-blur]"))n.oninput=()=>{const r=n.hasAttribute("data-control-blur")?"buttonBlur":n.hasAttribute("data-transparency")?n.dataset.transparency:n.hasAttribute("data-stick-dead-zone")?"stickDeadZone":n.hasAttribute("data-speed-steering")?n.dataset.speedSteering:n.dataset.sensitivity,s=r==="buttonBlur"?Xr(n.value):r.endsWith("Transparency")?Fn(n.value):r==="stickDeadZone"?$r(n.value):r==="buttonsSpeedSteering"?rr(n.value):r.endsWith("SpeedSteering")?ir(n.value):r==="buttonsSensitivity"?xi(n.value):yi(n.value,mt[r],r==="stickSensitivity"?600:250);n.value=s,n.closest("label").querySelector("output").textContent=s+(r==="buttonBlur"?" px":r==="stickDeadZone"?"°":"%"),e&&(e[r]=s),Rr(r,s),t()}}function Jb(i,e){return{...i,steer:Math.max(-1,Math.min(1,i.steer*yi(e,100,600)/100))}}function kM(i,e){return Math.max(-1,Math.min(1,i))*(e?-1:1)}function Kb(i,e,t,n){return kM(i||e?Number(e)-Number(i):t,n)}function zM(i){try{i??(i=globalThis.localStorage);for(const[e,t]of Object.entries(mt))i.setItem(gt[e],String(t));i.setItem("enduro-control-mode","stick")}catch{}return{...mt}}function HM(i,e){for(const t of i.querySelectorAll("[data-font-weight]"))t.value=ts(e.controlFontWeight);for(const t of i.querySelectorAll("[data-text-color]"))t.value=lr(e.controlTextColor);for(const t of i.querySelectorAll("[data-outline-color]"))t.value=ns(e.controlOutlineColor);for(const t of i.querySelectorAll("[data-preference]"))t.checked=!!e[t.dataset.preference];for(const t of i.querySelectorAll("[data-sensitivity],[data-speed-steering],[data-stick-dead-zone],[data-transparency],[data-control-blur]"))t.value=e[t.hasAttribute("data-control-blur")?"buttonBlur":t.hasAttribute("data-transparency")?t.dataset.transparency:t.hasAttribute("data-stick-dead-zone")?"stickDeadZone":t.hasAttribute("data-speed-steering")?t.dataset.speedSteering:t.dataset.sensitivity],t.closest("label").querySelector("output").textContent=t.value+(t.hasAttribute("data-control-blur")?" px":t.hasAttribute("data-stick-dead-zone")?"°":"%")}function Qb(i,e=globalThis.localStorage){const t={...i},n={controlTextColor:"#f4f3e8",controlOutlineColor:"#d9e5cb",rightTransparency:45,arrowTransparency:45,trickTransparency:45};for(const[r,s]of Object.entries(n))try{e?.getItem(gt[r])==null&&(t[r]=s)}catch{t[r]=s}return t}function GM(i,{onBack:e,onProfile:t}){i.innerHTML=`<section class="settings-screen"><button class="back" id="settings-back">← В меню</button><div class="intro"><div><h1>Настройки <em>игры</em></h1><p>Настрой управление для удобного заезда.</p></div></div><button type="button" id="player-profile-open">Профиль игрока</button><section class="menu-control-settings">${yM()}${CM()}${OM(FM())}</section><p class="settings-hint">Телефон можно держать вертикально или горизонтально. На Fold компоновка меняется при повороте и раскрытии экрана.</p><p id="settings-saved" role="status"></p></section>`,i.querySelector("#player-profile-open").onclick=()=>t?.(),i.querySelector("[data-reset-controls]").onclick=()=>{HM(i,zM()),i.querySelector("#settings-saved").textContent="Восстановлены стандартные настройки управления."},BM(i),PM(i),MM(i);for(const n of i.querySelectorAll("[data-preference]"))n.onchange=()=>Rr(n.dataset.preference,n.checked);i.querySelector("#settings-back").onclick=e,window.scrollTo(0,0)}const VM={id:"black-300",name:"Эндуро 300 4Т · чёрный",accent:"#343b40",body:"#15191c",number:"300",personal:!0,cycle:"4Т",bikeId:"evgeniy-300"};function dh(i,e){return Math.abs(i)>=48&&Math.abs(i)>Math.abs(e)*1.4?i<0?1:-1:0}function WM(i,e){let t=null,n=0;function r(u){u.isPrimary===!1||u.button>0||(t={id:u.pointerId,x:u.clientX,y:u.clientY})}function s(u){!t||t.id!==u.pointerId||dh(u.clientX-t.x,u.clientY-t.y)&&(i.setPointerCapture?.(u.pointerId),u.preventDefault())}function a(u){if(!t||t.id!==u.pointerId)return;const h=dh(u.clientX-t.x,u.clientY-t.y);t=null,h&&(n=performance.now()+400,setTimeout(()=>{n=0},0),u.preventDefault(),e(h))}function o(){t=null}function c(u){performance.now()<n&&(u.preventDefault(),u.stopImmediatePropagation())}function l(u){u.preventDefault()}return i.style.touchAction="pan-y",i.style.userSelect="none",i.addEventListener("dragstart",l),i.addEventListener("pointerdown",r),i.addEventListener("pointermove",s,{passive:!1}),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",o),i.addEventListener("click",c,!0),()=>{i.removeEventListener("dragstart",l),i.removeEventListener("pointerdown",r),i.removeEventListener("pointermove",s),i.removeEventListener("pointerup",a),i.removeEventListener("pointercancel",o),i.removeEventListener("click",c,!0)}}let gn=0,xo=()=>{};function Rt(i){if(xo(),xo=()=>{},document.body.classList.toggle("setup-screen",!!i),document.body.dataset.setupStage=i||"",!i)return;const e=document.querySelector("main");if(e){if(i==="location")for(const[t,n]of[["evolution-open","Эволюция"],["store-open","Наклейки"],["online-open","С друзьями"],["quick-ride","Заезд"],["settings-open","Настройки"]]){const r=e.querySelector("#"+t);r&&(r.textContent=n)}if(i==="bikes"){let c=function(u,h=!1){const d=gn;if(gn=Math.max(0,Math.min(r-1,u)),t.forEach((f,g)=>{f.hidden=Math.floor(g/n)!==gn}),s.querySelector("span").textContent=`Мотоциклы · ${gn+1} / ${r}`,a.disabled=gn===0,o.disabled=gn===r-1,h&&gn!==d){const f=t.find(g=>!g.hidden&&g.querySelector("input:enabled"))?.querySelector("input:enabled");f&&(f.checked=!0,f.dispatchEvent(new Event("change",{bubbles:!0})))}};const t=[...e.querySelectorAll(".bike-card")],n=innerHeight>innerWidth?1:innerWidth<900?2:3,r=Math.ceil(t.length/n),s=document.createElement("div");s.className="setup-pager",s.innerHTML='<button type="button" aria-label="Предыдущие мотоциклы">←</button><span aria-live="polite"></span><button type="button" aria-label="Следующие мотоциклы">→</button>',e.querySelector(".selection-bar").before(s);const[a,o]=s.querySelectorAll("button");a.onclick=()=>c(gn-1,!0),o.onclick=()=>c(gn+1,!0),xo=WM(e.querySelector(".bikes"),u=>c(gn+u,!0));const l=t.findIndex(u=>u.querySelector("input:checked"));c(Math.floor(Math.max(0,l)/n))}if(i==="style"&&!e.querySelector(".compact-designs")){const t=document.createElement("div");t.className="compact-designs";const n=[...e.querySelectorAll(".design-section")];n[0].before(t),n.forEach(r=>t.append(r))}window.scrollTo(0,0)}}const qM=""+new URL("v0.15.51-MTWE-Q6T.png",import.meta.url).href,XM=""+new URL("v0.15.50-Bd8RolXb.png",import.meta.url).href,$M=""+new URL("v0.15.49-Dgmcxt9u.png",import.meta.url).href,YM=""+new URL("v0.15.48-DSzL3nej.png",import.meta.url).href,ZM=""+new URL("v0.15.47-C_jlSGNp.png",import.meta.url).href,JM=""+new URL("v0.15.46-BXqsDvEj.png",import.meta.url).href,KM=""+new URL("v0.15.45-0ZUKyiaP.png",import.meta.url).href,QM=""+new URL("v0.15.43-CBUS8tPj.png",import.meta.url).href,jM=""+new URL("v0.15.42-CV9aD0_H.png",import.meta.url).href,eS=""+new URL("v0.15.32-BgPj7zI2.png",import.meta.url).href,tS=""+new URL("v0.15.29-DrcayMzz.png",import.meta.url).href,nS=""+new URL("v0.3-DHEyONaG.jpg",import.meta.url).href,iS=""+new URL("v0.4-BDGnhfJ1.jpg",import.meta.url).href,rS=""+new URL("v0.5-DzZPvwHm.jpg",import.meta.url).href,sS=""+new URL("v0.6-Cr9kOaiO.jpg",import.meta.url).href,aS=""+new URL("v0.7-ANv4NwJL.jpg",import.meta.url).href,oS=""+new URL("v0.8-D0wCpNfM.jpg",import.meta.url).href,lS=""+new URL("v0.9-DPExvxej.jpg",import.meta.url).href,cS=""+new URL("v0.10-DES4MDCf.jpg",import.meta.url).href,uS=""+new URL("v0.11-BLNtwqx4.jpg",import.meta.url).href,hS=""+new URL("v0.12-nUv-gGME.jpg",import.meta.url).href,dS=""+new URL("v0.13.0-C5yJXgBC.jpg",import.meta.url).href,fS=""+new URL("v0.13.1-yADLQTKj.jpg",import.meta.url).href,pS=""+new URL("v0.13.2-DiBg5lrK.jpg",import.meta.url).href,mS=""+new URL("v0.13.3-DDhCIUIV.jpg",import.meta.url).href,gS=""+new URL("v0.13.4-Byfgl5St.jpg",import.meta.url).href,_S=""+new URL("v0.14.0-o3rzgdzX.jpg",import.meta.url).href,vS=""+new URL("v0.14.1-DFv0suAE.jpg",import.meta.url).href,xS=""+new URL("v0.14.2-Dn8IbB4l.jpg",import.meta.url).href,yS=""+new URL("v0.14.3-DVKW3Yvf.jpg",import.meta.url).href,MS=""+new URL("v0.15.0-DuYHHglr.jpg",import.meta.url).href,di=[{version:"0.3",title:"Первые заезды",description:"Ранняя сохранённая сборка и управление на телефоне.",image:nS},{version:"0.4",title:"Окружение стадиона",description:"Парковка и окружение в ранней версии.",image:iS},{version:"0.5",title:"Стадион и новые маршруты",description:"Один из ранних вариантов эндуро-стадиона.",image:rS},{version:"0.6",title:"Подробный мотоцикл",description:"Сохранённый вид модели Enduro 300.",image:sS},{version:"0.7",title:"Открытая территория",description:"Стадион и территория вокруг него.",image:aS},{version:"0.8",title:"Мобильное управление",description:"Расположение кнопок в версии 0.8.",image:oS},{version:"0.9",title:"Маршрут из референса",description:"Сохранённый вид на старте стадиона.",image:lS},{version:"0.10",title:"Общий вид трассы",description:"Стадион в сборке 0.10.",image:cS},{version:"0.11",title:"Камера райдера",description:"Вид от первого лица из версии 0.11.",image:uS},{version:"0.12",title:"Растительность",description:"Сохранённый вид трассы и окружения.",image:hS},{version:"0.13.0",title:"Enduro Club",description:"Игра с клубным оформлением.",image:dS},{version:"0.13.1",title:"Версия для телефона",description:"Снимок проверки мобильного экрана.",image:fS},{version:"0.13.2",title:"Катушки",description:"Уточнение расположения препятствий.",image:pS},{version:"0.13.3",title:"Веер из шпал",description:"Сохранённый вид препятствия «веер».",image:mS},{version:"0.13.4",title:"Звук двигателя",description:"Снимок оригинальной сборки 0.13.4.",image:gS},{version:"0.14.0",title:"Клубные расцветки",description:"Предпросмотр клубного оформления.",image:_S},{version:"0.14.1",title:"Ограждения",description:"Красно-белые шины вокруг стадиона.",image:vS},{version:"0.14.2",title:"Насыпь стадиона",description:"Уточнённый рельеф за рядом шин.",image:xS},{version:"0.14.3",title:"Крупные кнопки руля",description:"Снимок оригинальной сборки 0.14.3.",image:yS},{version:"0.15.0",title:"Передачи и ленты",description:"Автоматические передачи, баланс и обозначение маршрута.",image:MS},{version:"0.15.29",title:"Новый 3D-райдер",description:"Новый райдер со скелетом и 3D-мотоциклы у игрока и бота с разными расцветками.",image:tS},{version:"0.15.32",title:"Новые машины и материалы",description:"Tesla и Tahoe с прицепом, новые материалы земли и вид от первого лица с руками.",image:eS},{version:"0.15.42",title:"Райдеры, питбайки и объединённые маршруты",description:"Выбор райдера и двух питбайков; новые ленты и карта маршрута с ботом; сворачивание панелей; ограничение подъёма камеры у препятствий.",image:jM},{version:"0.15.43",title:"Заправка и пробное топливо",description:"Бесплатная пробная заправка АИ-95 и АИ-100, расход канистры, усиление тяги и лёгкое изменение звука. Реальная оплата пока отключена.",image:QM},{version:"0.15.45",title:"Быстрое меню и руки райдера",description:"Исправлено переключение 2Т/4Т после добавления топлива. Добавлены меню разделов и предплечья в виде от первого лица; мотоцикл ниже в кадре.",image:KM},{version:"0.15.46",title:"Отдельные звуковые профили",description:"Первый взрослый мотоцикл — Enduro 350 2Т, второй — 4Т. Разные предварительные синтезированные тембры мотоциклов и питбайков; сохранено исправление переключателя звука.",image:JM},{version:"0.15.47",title:"Профиль и техника по возрасту",description:"Знакомство один раз: имя, необязательная фамилия, возраст и пол. До 14 лет только питбайки, с 14 лет весь доступный каталог. Отдельный экран выбора райдера убран.",image:ZM},{version:"0.15.48",title:"Сервер без ввода адреса и FPS",description:"Адрес сервера встроен в приложение. Показ FPS и пинга, ручное качество графики, жёлтое выделение топлива и новая иллюстрация подготовки трассы.",image:YM},{version:"0.15.49",title:"Применить и вернуться в игру",description:"Мотоцикл, экипировка, стиль и бензин применяются без повторного прохождения меню; низкое качество включается в текущем заезде.",image:$M},{version:"0.15.50",title:"Карта, финиши и живые настройки",description:"Карта на весь экран; финиш объединённых маршрутов на стадионе; прыжок с поджатием; пропорциональный стоппи; подсказки направления и смена качества без нового заезда.",image:XM},{version:"0.15.51",title:"Новый райдер, подвеска и граница 500 м",description:"Ярик у игрока и бота; прыжок из стойки и телескопическая вилка. Камеры 1–4, компактная карта, границы 500 метров. Перекрут: бронза 3–4 с, серебро 2 с, золото 1 с; железо защищено.",image:qM}];function SS(i,e){let t=0;i.innerHTML=`<section class="evolution"><button class="back" id="evolution-back">← К игре v${cc}</button><div class="intro"><div><span class="eyebrow">ИСТОРИЯ ENDURO CLUB</span><h1>Эволюция <em>игры</em></h1><p>${di.length} сохранённых версий. Выбирай версию и запускай сохранённую игру.</p></div></div><div class="evolution-layout"><nav class="evolution-versions" aria-label="Сохранённые версии игры">${di.map((s,a)=>`<button data-version-index="${a}" aria-pressed="${a===0}"><span>v${s.version}</span><small>${s.title}</small></button>`).join("")}</nav><div class="evolution-view"><figure><img id="evolution-image" alt=""><figcaption><span id="evolution-count"></span><h2 id="evolution-title"></h2><p id="evolution-description"></p><button id="evolution-play">Играть в эту версию</button></figcaption></figure><div class="evolution-paging"><button id="evolution-prev" aria-label="Предыдущая версия">← Назад</button><span id="evolution-version" aria-live="polite"></span><button id="evolution-next" aria-label="Следующая версия">Вперёд →</button></div></div></div><p class="evolution-note">Самая ранняя найденная версия — 0.3. Сборки 0.1 и 0.2 не сохранились в доступном архиве.</p></section>`;function n(s){t=Math.max(0,Math.min(di.length-1,s));const a=di[t],o=i.querySelector("#evolution-image");o.src=a.image,o.alt=`Enduro Club, версия ${a.version}: ${a.title}`,i.querySelector("#evolution-count").textContent=`${t+1} / ${di.length}`,i.querySelector("#evolution-title").textContent=a.title,i.querySelector("#evolution-description").textContent=a.description,i.querySelector("#evolution-version").textContent=`v${a.version}`,i.querySelector("#evolution-prev").disabled=t===0,i.querySelector("#evolution-next").disabled=t===di.length-1,i.querySelectorAll("[data-version-index]").forEach(c=>c.setAttribute("aria-pressed",String(Number(c.dataset.versionIndex)===t)))}i.querySelectorAll("[data-version-index]").forEach(s=>s.onclick=()=>n(Number(s.dataset.versionIndex))),i.querySelector("#evolution-play").onclick=async()=>{const{playEvolutionVersion:s}=await So(()=>import("./evolution-player-aHPQ6gN0.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);s(di[t].version)},i.querySelector("#evolution-prev").onclick=()=>n(t-1),i.querySelector("#evolution-next").onclick=()=>n(t+1),i.querySelector("#evolution-back").onclick=e,n(0),window.scrollTo(0,0);const r=i.querySelector("h1");r.tabIndex=-1,r.focus()}class bS extends Mt{constructor(e=new Qt,t=new N,n=new hn,r=new N(1,1,1)){super();const s=[],a=[],o=[],c=new N,l=new Ge().getNormalMatrix(e.matrixWorld),u=new Xe;u.makeRotationFromEuler(n),u.setPosition(t);const h=new Xe;h.copy(u).invert(),d(),this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(o,2)),a.length>0&&this.setAttribute("normal",new $e(a,3));function d(){let p=[];const m=new N,x=new N,b=e.geometry,y=b.attributes.position,A=b.attributes.normal;if(b.index!==null){const T=b.index;for(let _=0;_<T.count;_++)m.fromBufferAttribute(y,T.getX(_)),A?(x.fromBufferAttribute(A,T.getX(_)),f(p,m,x)):f(p,m)}else{if(y===void 0)return;for(let T=0;T<y.count;T++)m.fromBufferAttribute(y,T),A?(x.fromBufferAttribute(A,T),f(p,m,x)):f(p,m)}p=g(p,c.set(1,0,0)),p=g(p,c.set(-1,0,0)),p=g(p,c.set(0,1,0)),p=g(p,c.set(0,-1,0)),p=g(p,c.set(0,0,1)),p=g(p,c.set(0,0,-1));for(let T=0;T<p.length;T++){const _=p[T];o.push(.5+_.position.x/r.x,.5+_.position.y/r.y),_.position.applyMatrix4(u),s.push(_.position.x,_.position.y,_.position.z),_.normal!==null&&a.push(_.normal.x,_.normal.y,_.normal.z)}}function f(p,m,x=null){m.applyMatrix4(e.matrixWorld),m.applyMatrix4(h),x?(x.applyNormalMatrix(l),p.push(new yo(m.clone(),x.clone()))):p.push(new yo(m.clone()))}function g(p,m){const x=[],b=.5*Math.abs(r.dot(m));for(let y=0;y<p.length;y+=3){let A=0,T,_,M,C;const R=p[y+0].position.dot(m)-b,I=p[y+1].position.dot(m)-b,D=p[y+2].position.dot(m)-b,B=R>0,P=I>0,z=D>0;switch(A=(B?1:0)+(P?1:0)+(z?1:0),A){case 0:{x.push(p[y]),x.push(p[y+1]),x.push(p[y+2]);break}case 1:{if(B&&(T=p[y+1],_=p[y+2],M=v(p[y],T,m,b),C=v(p[y],_,m,b)),P){T=p[y],_=p[y+2],M=v(p[y+1],T,m,b),C=v(p[y+1],_,m,b),x.push(M),x.push(_.clone()),x.push(T.clone()),x.push(_.clone()),x.push(M.clone()),x.push(C);break}z&&(T=p[y],_=p[y+1],M=v(p[y+2],T,m,b),C=v(p[y+2],_,m,b)),x.push(T.clone()),x.push(_.clone()),x.push(M),x.push(C),x.push(M.clone()),x.push(_.clone());break}case 2:{B||(T=p[y].clone(),_=v(T,p[y+1],m,b),M=v(T,p[y+2],m,b),x.push(T),x.push(_),x.push(M)),P||(T=p[y+1].clone(),_=v(T,p[y+2],m,b),M=v(T,p[y],m,b),x.push(T),x.push(_),x.push(M)),z||(T=p[y+2].clone(),_=v(T,p[y],m,b),M=v(T,p[y+1],m,b),x.push(T),x.push(_),x.push(M));break}}}return x}function v(p,m,x,b){const y=p.position.dot(x)-b,A=m.position.dot(x)-b,T=y/(y-A),_=new N(p.position.x+T*(m.position.x-p.position.x),p.position.y+T*(m.position.y-p.position.y),p.position.z+T*(m.position.z-p.position.z));let M=null;return p.normal!==null&&m.normal!==null&&(M=new N(p.normal.x+T*(m.normal.x-p.normal.x),p.normal.y+T*(m.normal.y-p.normal.y),p.normal.z+T*(m.normal.z-p.normal.z))),new yo(_,M)}}}class yo{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}const df=[{id:"club",name:"Поддержать Enduro Club",price:299,accent:"#f5dc08",body:"#737c76",jersey:"#d7c53b",number:"123",description:"Клубные наклейки Enduro Club Leningradskaya, номер 123 и жёлто-серая экипировка."},{id:"ice",name:"Наклейки «Ледник»",price:149,accent:"#70d9ef",body:"#647783",number:"07",description:"Голубые акценты, тёмные боковины и гоночная графика."},{id:"fire",name:"Наклейки «Красная линия»",price:149,accent:"#f56c43",body:"#77726c",number:"27",description:"Оранжево-красные акценты и номерная графика."}];function ES(i){return df.find(e=>e.id===i)||null}function jb(i,e,t=null){if(!e)return;const n=document.createElement("canvas");n.width=1024,n.height=512;const r=n.getContext("2d");r.fillStyle=e.accent,r.fillRect(0,0,1024,512),r.fillStyle="#152019",r.beginPath(),r.moveTo(700,0),r.lineTo(1024,0),r.lineTo(1024,512),r.lineTo(400,512),r.closePath(),r.fill(),r.fillStyle="#f4f5e8",r.font="bold 180px Arial",r.textAlign="right",r.fillText(e.number,980,280),r.textAlign="left",r.fillStyle="#172019",r.font="bold 65px Arial",r.fillText("ENDURO CLUB",30,100),r.font="bold 40px Arial",r.fillText("LENINGRADSKAYA",30,170),r.font="bold 42px Arial",r.fillText("/// ENDURO",30,440);const s=new Tm(n);s.colorSpace=Jt,s.anisotropy=2;for(const a of[-1,1]){const o=new Cd({map:s,roughness:.7,side:vn,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),c=t?.getObjectByName("SM_Enduro_Body_LOD3");let l;if(c){c.updateWorldMatrix(!0,!1);const u=new bS(c,new N(a*.17,.52,-.5),new hn(0,a*Math.PI/2,0),new N(.43,.215,.2));l=new Qt(u,o)}else l=new Qt(new Jr(.43,.215),o),l.position.set(a*.245,.75,-.52),l.rotation.y=a*Math.PI/2;l.name="preview-cosmetic-"+e.id,i.add(l)}}function TS(i,{onBack:e,onPreview:t,onClear:n}){i.innerHTML=`<button class="back" id="store-back">← В меню</button><div class="intro"><div><h1>Наклейки и <em>поддержка клуба</em></h1><p>Игра и заезды с друзьями остаются бесплатными. Наборы меняют только внешний вид.</p></div></div><p class="prototype-note">Сейчас доступна бесплатная примерка. Оплата через RuStore ещё не подключена; цены предварительные.</p><div class="locations store-grid">${df.map(r=>`<article class="card"><div class="store-decal" style="--pack-accent:${r.accent};--pack-body:${r.body}"><b>ENDURO CLUB</b><small>LENINGRADSKAYA</small><strong>${r.number}</strong></div><div class="card-body"><h2>${r.name}</h2><p>${r.description}</p><p>Планируемая цена: ${r.price} ₽</p><button data-preview="${r.id}">Примерить в заезде ↗</button><p class="prototype-note">Покупка станет доступна после подключения RuStore.</p></div></article>`).join("")}</div><button id="store-clear" class="back">Снять примерку</button>`,i.querySelector("#store-back").onclick=e,i.querySelector("#store-clear").onclick=n,i.querySelectorAll("[data-preview]").forEach(r=>r.onclick=()=>t(r.dataset.preview)),i.querySelector("h1").tabIndex=-1,i.querySelector("h1").focus(),window.scrollTo(0,0)}const js="enduro-room-session-v1";function bl(){try{const i=JSON.parse(localStorage.getItem(js));return i?.token&&i?.code&&i?.url?i:null}catch{return null}}function AS(i){const e=new URL(i),t=["localhost","127.0.0.1","[::1]"].includes(e.hostname);if(e.protocol!=="wss:"&&!(e.protocol==="ws:"&&t))throw Error("Для сервера нужен адрес wss://");if(e.username||e.password)throw Error("Адрес сервера не должен содержать пароль");return e.href}function fh({url:i,name:e,bikeId:t,difficulty:n,code:r,region:s="stadium",mode:a="ride",resume:o=null}){return new Promise((c,l)=>{let u=0,h,d=new Set,f=new Set,g=!1,v=!1,p=null,m=0,x=null,b,y=null,A=o?.token,T=o?.code||r;const _=AS(i),M={subscribeVoice(D){return d.add(D),()=>d.delete(D)},id:null,state:null,connected:!1,latencyMs:null,subscribe(D){return f.add(D),this.state&&D(this.state),()=>f.delete(D)},send(D){h.readyState===WebSocket.OPEN&&h.bufferedAmount<32768&&h.send(JSON.stringify(D))},close(){if(v=!0,clearTimeout(y),clearTimeout(b),clearInterval(p),window.removeEventListener("online",I),document.removeEventListener("visibilitychange",I),M.send({type:"leave"}),bl()?.token===A)try{localStorage.removeItem(js)}catch{}h.close()},get serverTime(){return Date.now()+(this.offset||0)}};function C(D){v=!0,clearTimeout(y),clearTimeout(b),clearInterval(p),window.removeEventListener("online",I),document.removeEventListener("visibilitychange",I),l(Error(D))}function R(){v||(u++,h=new WebSocket(_),b=setTimeout(()=>{h.close()},2e4),h.onopen=()=>M.send(A?{type:"resume",code:T,token:A}:{type:r?"join":"create",name:e,bikeId:t,difficulty:n,code:r,region:s,mode:a,resumable:!0}),h.onmessage=D=>{let B;try{B=JSON.parse(D.data)}catch{return}if(B.type==="voice"){for(const P of d)P(B);return}if(B.type==="pong"){x&&B.id===x.id&&(M.latencyMs=Math.max(1,Math.round(performance.now()-x.time)),x=null);return}if(B.type==="error"){if(A&&(v=!0,clearTimeout(y),bl()?.token===A))try{localStorage.removeItem(js)}catch{}g||(C(B.message),h.close());return}if(!(B.type!=="welcome"&&B.type!=="room")){if(M.offset=B.serverNow-Date.now(),M.state=B,M.connected=!0,B.type==="welcome"){if(A=B.resumeToken||A,T=B.code,A)try{localStorage.setItem(js,JSON.stringify({url:_,code:T,token:A,bikeId:t,name:e}))}catch{}g=!0,clearInterval(p),clearTimeout(b),M.id=B.id,p=setInterval(()=>{x&&performance.now()-x.time<6e3||(M.latencyMs=null,x={id:++m,time:performance.now()},M.send({type:"ping",id:x.id}))},3e3),c(M)}for(const P of f)P(B)}},h.onerror=()=>{h.close()},h.onclose=()=>{if(clearTimeout(b),clearInterval(p),M.latencyMs=null,M.connected=!1,!g&&!v){if(u<3){y=setTimeout(R,1500);return}C("Не удалось подключиться после трёх попыток. Проверь адрес сервера и подключение. Если включён VPN, попробуй другую страну или сервер VPN.");return}if(!v){for(const D of f)D({...M.state,disconnected:!0});A&&(clearTimeout(y),y=setTimeout(R,2e3))}})}function I(){!v&&A&&!M.connected&&h?.readyState===WebSocket.CLOSED&&(clearTimeout(y),R())}window.addEventListener("online",I),document.addEventListener("visibilitychange",I),R()})}const Zi=[{id:"iron",name:"Железо",description:"Для знакомства: плавный разгон, скорость до 50 км/ч и защита от перекрута вилли.",acceleration:5,maxSpeed:50/3.6,stepAllowance:.8,impactRetention:.75,wheelieBalance:null},{id:"bronze",name:"Бронза · Lite",description:"Лёгкий заезд: умеренный разгон, скорость до 120 км/ч и помощь на препятствиях. Долгое непрерывное вилли с полным газом приводит к перекруту примерно за 3–4 секунды.",acceleration:6,maxSpeed:120/3.6,stepAllowance:.7,impactRetention:.7,wheelieBalance:{torque:.85,grace:2.3,damping:.65,limit:1.57}},{id:"silver",name:"Серебро",description:"Уступы от 30 см требуют подъёма колеса. Баланс вилли мягче, чем на золоте, но перекрут возможен.",acceleration:7,maxSpeed:120/3.6,stepAllowance:.25,impactRetention:.6,frontStepLimit:.3,wheelieBalance:{torque:1.1,grace:.7,damping:.55,limit:1.52}},{id:"gold",name:"Золото",description:"Уступы от 40 см требуют подъёма колеса. Строгий баланс вилли: вовремя сбрасывай газ или тормози.",acceleration:7,maxSpeed:120/3.6,stepAllowance:.18,impactRetention:.45,frontStepLimit:.4,wheelieBalance:{torque:3.5,grace:.3,damping:.45,limit:1.45}}];function e1(i){return Zi.find(e=>e.id===i)||Zi[2]}function wS(i,{onBack:e,onRide:t,onResume:n=null,profile:r=null,entry:s=null,inviteCode:a=null}){let o="";try{o=localStorage.getItem("enduro-room-server")||""}catch{}const c=document.documentElement.dataset.staticHost!=="true"&&document.querySelector('link[rel="manifest"]')&&location.protocol==="https:"?"wss://"+location.host:"",l=Rc({configured:void 0,hosted:c}),u=Rc({configured:void 0,saved:o,hosted:c});i.innerHTML=`<button class="back" id="online-back">← В меню</button><div class="intro"><div><h1>Заезд <em>с друзьями</em></h1><p>Дуэль на двоих или совместный заезд до четырёх игроков.</p></div></div><div class="online-entry-tabs" role="group" aria-label="Подключение к комнате"><button type="button" data-online-entry="create">Создать комнату</button><button type="button" data-online-entry="join">Подключиться к комнате</button></div><form id="online-form" class="online-form"><label>Режим<select id="online-mode"><option value="ride">Совместный заезд · до 4</option><option value="duel">Дуэль · 2 игрока, первый финиш</option></select></label><label>Маршрут новой комнаты<select id="online-region">${qr.map(v=>`<option value="${v.id}" ${v.id==="stadium"?"selected":""}>${v.name}</option>`).join("")}</select></label><label>Имя в комнате и таблице рекордов<input id="online-name" maxlength="20" required value="Райдер" autocomplete="nickname"></label><label>Мотоцикл<select id="online-bike">${Ws(fi,r?.age??18).filter(v=>v.available).map(v=>`<option value="${v.id}">${v.name}</option>`).join("")}</select></label><label>Сложность новой комнаты<select id="online-level">${Zi.map(v=>`<option value="${v.id}" ${v.id==="bronze"?"selected":""}>${v.name}</option>`).join("")}</select></label><label>Код комнаты друга<input id="online-code" maxlength="6" inputmode="numeric" placeholder="Например, 62" autocapitalize="characters" autocomplete="off"></label><details ><summary>Настроить подключение</summary><label>Адрес сервера<button type="button" id="online-server-reset" class="online-server-reset">Сброс</button><input id="online-server" placeholder="wss://адрес-сервера" required></label><p>Для игры через интернет нужен запущенный сервер комнат. ${c?"Для сайта используется его собственный сервер комнат.":"Адрес сервера уже указан. При необходимости его можно изменить."}</p></details><p id="online-status" role="status"></p><button id="online-connect" type="submit">Войти в заезд ↗</button></form>`;let h=s==="join";const d=["#online-mode","#online-region","#online-level"];function f(v){i.querySelector("#online-form").hidden=!1,h=v;for(const m of d)i.querySelector(m).closest("label").hidden=v;const p=i.querySelector("#online-code");p.closest("label").hidden=!v,p.required=v,i.querySelector("#online-connect").textContent=v?"Подключиться к другу ↗":"Создать комнату ↗";for(const m of i.querySelectorAll("[data-online-entry]"))m.setAttribute("aria-pressed",String(m.dataset.onlineEntry==="join"===v));i.querySelector("#online-status").textContent=v?"Введи номер комнаты, который сообщил друг. Режим и трасса будут как у него.":"Создай комнату и сообщи её номер друзьям."}for(const v of i.querySelectorAll("[data-online-entry]"))v.onclick=()=>f(v.dataset.onlineEntry==="join");s?f(h):i.querySelector("#online-form").hidden=!0;const g=bl();if(g){const v=document.createElement("button");v.type="button",v.className="online-resume",v.textContent="Вернуться в комнату "+g.code,i.querySelector(".online-entry-tabs").before(v),v.onclick=async()=>{if(n){n();return}v.disabled=!0;try{const p=await fh({...g,resume:g});await t(p,g.bikeId)}catch(p){i.querySelector("#online-status").textContent=p.message,i.querySelector("#online-form").hidden=!1,v.disabled=!1}}}i.querySelector("#online-server").value=u,i.querySelector("#online-server-reset").onclick=()=>{i.querySelector("#online-server").value=l;try{localStorage.removeItem("enduro-room-server")}catch{}i.querySelector("#online-status").textContent="Восстановлен исходный адрес сервера."},a&&(f(!0),i.querySelector("#online-code").value=a,i.querySelector("#online-code").closest("label").hidden=!0,i.querySelector("#online-code").required=!1,i.querySelector(".online-entry-tabs").hidden=!0,i.querySelector("#online-status").textContent="Приглашение в комнату "+a+". Выбери мотоцикл и подключайся.",i.querySelector("#online-connect").textContent="Войти в комнату "+a+" ↗"),r?.firstName&&(i.querySelector("#online-name").value=r.firstName.slice(0,20)),i.querySelector("#online-back").onclick=e,i.querySelector("#online-form").onsubmit=async v=>{v.preventDefault();const p=i.querySelector("#online-connect"),m=i.querySelector("#online-status");p.disabled=!0,m.textContent="Подключаемся…";let x;try{const b=i.querySelector("#online-server").value.trim(),y=i.querySelector("#online-bike").value;x=await fh({url:b,region:i.querySelector("#online-region").value,mode:i.querySelector("#online-mode").value,name:i.querySelector("#online-name").value,bikeId:y,difficulty:i.querySelector("#online-level").value,code:h?i.querySelector("#online-code").value.trim().toUpperCase():""});try{localStorage.setItem("enduro-room-server",b)}catch{}await t(x,y)}catch(b){x?.close(),m.textContent=b.message,p.disabled=!1}},i.querySelector("h1").tabIndex=-1,i.querySelector("h1").focus(),window.scrollTo(0,0)}const St=(i,e,t,n,r,s,a,o)=>({id:i,name:e,pulse:t,ring:n,brightness:r,noise:s,wobble:a,exhaust:o}),RS=[St("generic","Общий",1,1,1,1,1,1),St("pit-125","Питбайк 125",.72,1.6,1.35,.8,1.18,.78),St("pit-140","Питбайк 140",.84,1.4,1.2,.86,1.08,.88),St("169","Мотор 169",.94,1.22,1.08,.96,1.04,1.02),St("172","Мотор 172",1.02,1.16,1.03,.93,.98,1.04),St("174","Мотор 174",1.1,.98,.96,.89,.92,1.1),St("175","Мотор 175 · предварительный",1.15,.91,.9,.87,.88,1.13),St("182","Мотор 182 · предварительный",1.23,.84,.84,.84,.84,1.18),St("184","Мотор 184 · предварительный",1.3,.78,.79,.81,.8,1.23),St("demo-300","Enduro 350 2Т",1.01,1.02,1.08,1.06,1.04,1.12),St("evgeniy-300","Enduro 300 4Т",1.12,.94,.92,.9,.9,1.12),St("tripo-300","Кросс 300 · Tripo",.91,1.18,1.16,.94,1.05,1.06),St("yamaha-cross","Кросс · синий",.96,1.13,1.09,.87,1.02,1.1),St("orange-cross","Кросс · оранжевый",.89,1.23,1.18,.92,1.09,1.08),St("ktm","KTM 350 EXC-F · приближение",.92,1.21,1.14,.83,.96,1.16),St("husqvarna","Husqvarna · модель не уточнена",1.04,1.07,1.01,.79,.89,1.12),St("kef-lanza","KEF Lanza 2Т",.86,1.19,1.22,1.13,1.16,.96),St("lanza","Lanza 2Т",1.02,1.04,1.06,1.08,1.03,1.08),St("nb300","NB300",1.14,.96,.93,.94,.93,1.14),St("kaishan","Kaishan 320",1.2,.88,.87,.91,.85,1.18),St("beta","Beta · модель не уточнена",.9,1.14,1.19,1.02,1.13,1.1)],ph=new Map(RS.map(i=>[i.id,Object.freeze(i)])),CS=i=>ph.get(String(i))||ph.get("generic");function PS(i,e="2Т"){const t=/2/.test(e)?"2Т":"4Т",n=[t,t==="2Т"?"4Т":"2Т","off"],r=String(i).replace("T","Т");return n[(n.indexOf(r)+1)%n.length]}function Mo(i,e="generic"){const t=/2/.test(i),n=CS(e);return{cycle:t?"2Т":"4Т",idle:t?1800:1400,maxRpm:t?11e3:8500,firingsPerRevolution:t?1:.5,harmonics:t?32:24,brightness:(t?2400:950)*n.brightness,pulseDecay:(t?.075:.18)*n.pulse,ring:(t?7:1.6)*n.ring,tailRing:(t?13:4)*n.ring,voice:n}}function LS(i,e,t){return i.idle+(i.maxRpm-i.idle)*Math.min(1,Math.max(0,Math.abs(e)/12)*.65+Math.min(1,Math.max(0,t))*.35)}function IS(i){const e=new Float32Array(i.harmonics+1),t=new Float32Array(i.harmonics+1),n=i.cycle==="2Т",r=512;for(let s=1;s<=i.harmonics;s++)for(let a=0;a<r;a++){const o=a/r,c=Math.exp(-o/i.pulseDecay)*(Math.sin(2*Math.PI*o*i.ring)+(n?.4:.25)*Math.sin(2*Math.PI*o*i.tailRing)),l=2*Math.PI*s*o;e[s]+=c*Math.cos(l)*2/r,t[s]+=c*Math.sin(l)*2/r}return{real:e,imag:t}}function mh(i,e="generic"){const t=globalThis.AudioContext||globalThis.webkitAudioContext;if(!t)return null;let n;try{n=new t({latencyHint:"interactive"})}catch{return null}const r=Mo(i).cycle;let s=Mo(i,e);const a=n.createOscillator(),o=n.createBiquadFilter(),c=n.createGain(),l=n.createDynamicsCompressor(),u=new Map;function h(te){if(!u.has(te.cycle)){const{real:G,imag:Z}=IS(te);u.set(te.cycle,n.createPeriodicWave(G,Z))}return u.get(te.cycle)}a.setPeriodicWave(h(s)),a.frequency.value=s.idle/60*s.firingsPerRevolution,o.type="lowpass",o.frequency.value=s.brightness,o.Q.value=.7,l.threshold.value=-16,l.knee.value=20,l.ratio.value=5,l.attack.value=.005,l.release.value=.15,a.connect(o),o.connect(c),c.connect(l),l.connect(n.destination),c.gain.value=0,a.start();const d=n.createBuffer(1,n.sampleRate,n.sampleRate),f=d.getChannelData(0);let g=771;for(let te=0;te<f.length;te++)g=g*1664525+1013904223>>>0,f[te]=g/2147483648-1;const v=n.createBufferSource(),p=n.createBiquadFilter(),m=n.createGain();v.buffer=d,v.loop=!0,p.type="bandpass",p.frequency.value=s.cycle==="2Т"?2e3:500,p.Q.value=.8,m.gain.value=.035,v.connect(p),p.connect(m),m.connect(c),v.start();const x=n.createOscillator(),b=n.createGain(),y=n.createOscillator(),A=n.createGain();x.frequency.value=s.idle/60*s.firingsPerRevolution,b.gain.value=.009,x.connect(b),b.connect(m.gain),x.start(),y.frequency.value=(s.cycle==="2Т"?8.3:5.1)*s.voice.wobble,A.gain.value=.3,y.connect(A),A.connect(a.frequency),y.start();let T="92",_=!1,M=!1,C=s.idle,R=!0,I=!1,D=0;try{_=localStorage.getItem("enduro-engine-muted")==="true"}catch{}function B(){!M&&n.state==="suspended"&&n.resume().catch(()=>{})}function P(){M||c.gain.setTargetAtTime(_||R||document.hidden?0:.18*(.65+D*.35)*(I?.55:1),n.currentTime,.035)}function z(){document.hidden?n.suspend().catch(()=>{}):P()}function Y(){c.gain.cancelScheduledValues(n.currentTime),c.gain.setValueAtTime(0,n.currentTime),n.suspend().catch(()=>{})}document.addEventListener("visibilitychange",z),window.addEventListener("blur",Y),window.addEventListener("pagehide",Y),B();function q(te){if(M)return _?"off":s.cycle;if(_=te==="off",!_){s=Mo(te,e),a.setPeriodicWave(h(s)),C=Math.max(s.idle,Math.min(s.maxRpm,C));const G=Tc(T),Z=n.currentTime;a.frequency.setTargetAtTime(C/60*s.firingsPerRevolution*G.tone,Z,.035),x.frequency.setTargetAtTime(C/60*s.firingsPerRevolution*G.tone,Z,.035),o.frequency.setTargetAtTime(s.brightness,Z,.035),p.frequency.setTargetAtTime(s.cycle==="2Т"?2e3:500,Z,.035),y.frequency.setTargetAtTime((s.cycle==="2Т"?8.3:5.1)*s.voice.wobble,Z,.035)}try{localStorage.setItem("enduro-engine-muted",String(_))}catch{}return B(),P(),_?"off":s.cycle}return{get initialCycle(){return r},get profile(){return s},get mode(){return _?"off":s.cycle},get muted(){return _},resume:B,setMode:q,cycleMode(){return q(PS(_?"off":s.cycle,r))},toggle(){return q(_?s.cycle:"off"),_},update({speed:te=0,throttle:G=0,fuelGrade:Z="92",rpm:ne,shiftTime:be=0,paused:Ne=!1},K){if(M)return;T=Z,R=Ne,I=be>0,D=Math.max(0,Math.min(1,G));const _e=Number.isFinite(ne)?Math.max(s.idle,Math.min(s.maxRpm,ne)):LS(s,te,G);C+=(_e-C)*(1-Math.exp(-Math.max(0,K)*(_e>C?8:18)));const Ee=Tc(T),pe=n.currentTime;a.frequency.setTargetAtTime(C/60*s.firingsPerRevolution*Ee.tone,pe,.035),x.frequency.setTargetAtTime(C/60*s.firingsPerRevolution*Ee.tone,pe,.035),m.gain.setTargetAtTime(((s.cycle==="2Т"?.014:.009)+D*(s.cycle==="2Т"?.05:.027)+(I?.018:0))*Ee.noise*s.voice.noise,pe,.025),b.gain.setTargetAtTime((.006+D*.015)*s.voice.exhaust,pe,.035),A.gain.setTargetAtTime(((1-D)*.5+D*.15)*Ee.wobble,pe,.1),o.frequency.setTargetAtTime((s.brightness+G*(s.cycle==="2Т"?1800:850))*Ee.brightness,pe,.06),P()},dispose(){M||(M=!0,document.removeEventListener("visibilitychange",z),window.removeEventListener("blur",Y),window.removeEventListener("pagehide",Y),a.stop(),v.stop(),x.stop(),y.stop(),n.close().catch(()=>{}))}}}const gh=""+new URL("club-logo-ui-DrAv0134.png",import.meta.url).href;function NS(){const i=(e,t)=>`<g>${Array.from({length:24},(n,r)=>{const s=r/24*Math.PI*2;return`<path d="M${e} 171L${e+Math.cos(s)*(t-9)} ${171+Math.sin(s)*(t-9)}" stroke="#8b989b" stroke-width="1"/><rect x="${e-3}" y="${171-t-2}" width="6" height="5" fill="#252d2a" transform="rotate(${r*15} ${e} 171)"/>`}).join("")}<circle cx="${e}" cy="171" r="${t-5}" fill="none" stroke="#202824" stroke-width="9"/><circle cx="${e}" cy="171" r="${t-13}" fill="none" stroke="#c5ccbb" stroke-width="2"/><circle cx="${e}" cy="171" r="8" fill="#75857f"/><circle cx="${e}" cy="171" r="16" fill="none" stroke="#7d8b82" stroke-width="2"/></g>`;return`<svg viewBox="0 0 400 235" aria-hidden="true" class="motorcycle">${i(91,43)}${i(310,46)}<g fill="none" stroke-linecap="round"><path d="M91 171L169 144 154 95 226 91 205 154 169 144" stroke="#aab5ac" stroke-width="5"/><path d="M93 171L184 153" stroke="#879792" stroke-width="9"/><path d="M94 174L183 163" stroke="#b6a264" stroke-width="2" stroke-dasharray="3 2"/><path d="M154 96L207 155M169 144L226 91" stroke="#425a51" stroke-width="5"/><path d="M263 66L286 119" stroke="#c5af72" stroke-width="7"/><path d="M286 119L310 171" stroke="#bdc9c4" stroke-width="5"/><path d="M270 65L293 116" stroke="#c5af72" stroke-width="5"/><path d="M293 116L316 166" stroke="#bdc9c4" stroke-width="4"/><path d="M171 123Q156 130 169 150T213 155L153 109" stroke="#778682" stroke-width="7"/><path d="M114 106L148 117" stroke="#b5bcb1" stroke-width="13"/><path d="M263 68L252 48 233 50M252 48L277 47" stroke="#b7c4b3" stroke-width="4"/><path d="M254 51Q230 75 242 97" stroke="#364438" stroke-width="2"/></g><path d="M174 114H205L215 145 182 149Z" fill="#64766e"/>${Array.from({length:7},(e,t)=>`<path d="M176 ${116+t*4}H207" stroke="#bac1b5" stroke-width="2"/>`).join("")}<circle cx="184" cy="151" r="14" fill="#7c8c7e" stroke="#a5b4a0" stroke-width="2"/><path d="M72 84L146 77 200 81 214 88 146 89 89 91Z" fill="#232d29"/><path d="M137 90L168 89 161 121 124 121 104 104Z" fill="#e0e6d3"/><path d="M169 90L213 87 244 108 223 124 194 122 185 104Z" fill="var(--bike-accent, #d8f477)"/><path d="M191 102L224 110 207 116 193 113Z" fill="#41593f"/><path d="M61 93L130 83 145 88 98 100Z" fill="var(--bike-accent, #d8f477)"/><path d="M277 109L308 113 337 127 336 132 296 122 278 118Z" fill="#e2e6d7"/><path d="M256 69L271 70 282 93 272 107 258 94Z" fill="#dfe6d7"/><path d="M264 79L273 80 278 92 268 97Z" fill="#a4bcc0"/><path d="M245 47L269 44 287 48 287 53 267 53Z" fill="#dfe6d7"/><text x="125" y="112" fill="#304539" font-family="Arial" font-size="16" font-style="italic" font-weight="bold">169</text><path d="M197 154L215 158M173 151L166 166" stroke="#a7b59a" stroke-width="4"/><path d="M139 84H193" stroke="#687464" stroke-width="1" stroke-dasharray="2 3"/></svg>`}const DS=""+new URL("yamaha-cross-preview-DCbeIyIv.png",import.meta.url).href,US=""+new URL("orange-cross-preview-DclFWHIq.png",import.meta.url).href,FS=""+new URL("tripo-motocross-preview-N-ZnR5v1.png",import.meta.url).href,OS=""+new URL("enduro-300-preview-BKK30-uS.png",import.meta.url).href;function BS(){const i=[{id:"stadium",title:"Эндуро-стадион",type:"ТЕХНИКА И БАЛАНС",description:"Брёвна, камни и покрышки. Оттачивай контроль мотоцикла на полосе препятствий.",tags:["Препятствия","Закрытая площадка"],color:"#b8c99c"},{id:"motocross",title:"Кантри-кросс",type:"СКОРОСТЬ И ПРЫЖКИ",description:"Четыре километра: девять трамплинов, виражи, змейка с волнами и длинный участок вдоль озера.",tags:["Трамплины","Грунтовая трасса"],color:"#d5ac80"},{id:"forest",title:"Посадка",type:"СВОБОДА И МАНЁВРЫ",description:"Старая железнодорожная насыпь: подъёмы, спуски, резкие повороты и оставшиеся шпалы среди деревьев.",tags:["Лесные тропы","Пересечённая местность"],color:"#8caf8c"},{id:"mountains",title:"Горы",type:"ПОДЪЁМЫ И СПУСКИ",description:"Крутые склоны, каменистые тропы и открытые просторы. Покоряй высоту в своём темпе.",tags:["Каменистые тропы","Перепады высот"],color:"#a6b8be"}];function e(X){const O={stadium:'<path d="M0 140 Q200 60 400 140 L400 220H0Z" fill="#4e5946"/><path d="M0 125L65 84H335L400 125M0 140L65 102H335L400 140" fill="none" stroke="#9aa58a" stroke-width="5"/><path d="M35 94V43M365 94V43M20 43H50M350 43H380" stroke="#b6c0aa" stroke-width="4"/><path d="M0 205Q150 100 400 205L400 300H0" fill="#887458"/><path d="M0 257Q190 157 400 255" fill="none" stroke="#b49a72" stroke-width="37"/><g fill="#242c25" stroke="#69725f" stroke-width="5"><circle cx="110" cy="216" r="22"/><circle cx="151" cy="205" r="22"/><circle cx="192" cy="199" r="22"/></g><path d="M232 234L328 210M240 249L336 225" stroke="#514533" stroke-width="14"/>',motocross:'<path d="M0 160L65 106 125 145 203 92 290 140 360 100 400 125V300H0" fill="#746d54"/><path d="M-50 305Q15 148 122 204T260 184T460 205" stroke="#a67e53" stroke-width="95" fill="none"/><path d="M-50 305Q15 148 122 204T260 184T460 205" stroke="#d1a374" stroke-width="50" fill="none"/><path d="M90 198L135 171 179 205M260 192L295 161 329 183" fill="#ba8a59"/><path d="M67 155V121M335 140V106" stroke="#e4d5ae" stroke-width="3"/><path d="M68 121H90L68 137M336 106H358L336 122" fill="#dbe894"/>',forest:`<path d="M0 180Q150 104 400 162V300H0" fill="#526749"/><path d="M180 153Q310 190 183 225T230 310" stroke="#a6966c" stroke-width="42" fill="none"/>${[15,65,110,290,350,395].map((H,re)=>`<path d="M${H} 240V${60+re%3*15}" stroke="#514e37" stroke-width="12"/><path d="M${H-44} 170L${H} ${24+re%3*15}L${H+44} 170Z" fill="${re%2?"#344c39":"#3d5a41"}"/><path d="M${H-35} 120L${H} ${10+re%3*15}L${H+35} 120Z" fill="#49654a"/>`).join("")}`,mountains:'<path d="M0 190L107 44 175 119 252 20 400 179V300H0" fill="#697d7a"/><path d="M68 98L107 44 147 89 124 82 107 67 91 99M205 85L252 20 306 79 271 63 251 43 235 75" fill="#ced5c7"/><path d="M0 240L83 146 177 224 296 128 400 209V300H0" fill="#566756"/><path d="M70 310Q290 250 202 218T280 166" fill="none" stroke="#b2ab8a" stroke-width="22"/><path d="M308 251L338 201 364 248M18 264L45 230 68 270" fill="#8a917b"/>'};return`<svg viewBox="0 0 400 300" aria-hidden="true"><defs><linearGradient id="sky-${X}" x2="0" y2="1"><stop stop-color="#293c37"/><stop offset="1" stop-color="#a7ae8b"/></linearGradient></defs><path fill="url(#sky-${X})" d="M0 0H400V300H0Z"/><circle cx="310" cy="63" r="27" fill="#e0dfb3" opacity=".7"/>${O[X]}</svg>`}document.querySelector("#app").innerHTML=`
  <header><a class="brand" href="./" aria-label="Enduro Club Leningradskaya — главная"><img class="brand-logo" src="${gh}" alt="Логотип Enduro Club Leningradskaya"><span class="brand-name"><b>ENDURO CLUB</b><small>LENINGRADSKAYA</small></span></a><span class="header-label">ТВОЙ МОТОЦИКЛ. ТВОЙ МАРШРУТ.</span><span class="version">v${cc} <i></i></span></header>
  <main><div class="eyebrow"><span></span> ПОЕХАЛИ ЗА ПРИКЛЮЧЕНИЯМИ</div><div class="intro"><div><h1>Куда <em>поедем?</em></h1><p>Выбери локацию. У каждой — свой характер.</p></div><div class="step"><b>01</b><span>ВЫБОР<br>ЛОКАЦИИ</span></div></div>
  <fieldset class="locations"><legend class="sr-only">Выберите локацию</legend>${i.map((X,O)=>`<label class="card" style="--accent:${X.color}"><input type="radio" name="location" value="${X.id}"><div class="art">${e(X.id)}<span class="number">0${O+1}</span><span class="check">✓</span><span class="art-label">${X.type}</span></div><div class="card-body"><h2>${X.title}</h2><p>${X.description}</p><div class="tags">${X.tags.map(H=>`<span>${H}</span>`).join("")}</div></div></label>`).join("")}</fieldset>
  <div class="selection-bar"><div><span class="small-label">ТВОЙ СЛЕДУЮЩИЙ МАРШРУТ</span><p id="selection" aria-live="polite">Выбери место для заезда</p></div><button id="continue" disabled>Продолжить <span>↗</span></button></div>
  <footer><span>ЧЕТЫРЕ ЛОКАЦИИ. БЕЗГРАНИЧНЫЙ ДРАЙВ.</span><span>ENDURO / MOTOCROSS</span></footer></main>
  <dialog><form method="dialog"><span class="eyebrow">ЛОКАЦИЯ ВЫБРАНА</span><h2 id="dialog-title"></h2><p>Маршрут выбран. Следующий этап — настройка мотоцикла и заезда. Сам симулятор пока в разработке.</p><button>Вернуться к локациям <span>↶</span></button></form></dialog>`;let t=null,n,r=Vf(),s="demo-300",a=r?Pc(r):"man",o=!1;function c(X=()=>{}){qf({profile:r,onSave:O=>{r=O,a=Pc(O),o=!1},onClose:X})}const l=document.querySelector("main");l.insertAdjacentHTML("afterbegin",`<div class="prototype-launch"><img class="club-emblem" src="${gh}" alt="Enduro Club Leningradskaya — райдер на заднем колесе"><div><span class="eyebrow">НОВОЕ / ENDURO 350 2Т</span><h2>Enduro Club Leningradskaya</h2><p>Новая подробная модель мотоцикла уже готова к заезду. Стадион, кантри-кросс и лесная посадка соединены дорогами.</p></div><div class="quick-routes"><button id="fuel-open">Заправка</button><button id="settings-open">Настройки</button><button id="feedback-open">Обратная связь</button><button id="evolution-open">Эволюция игры ↗</button><button id="store-open">Наклейки и поддержка ↗</button><button id="duel-open">Дуэль с ботом ↗</button><button id="online-open">С друзьями ↗</button><button id="quick-ride">На стадион <span>↗</span></button><button data-quick="motocross">Кантри-кросс <span>↗</span></button><button data-quick="forest">В посадку <span>↗</span></button></div></div>`);const u=l.innerHTML;function h(X=Dn(s),O="base"){if(X.model!=="imported")return NS();const H={base:"none",sand:"sepia(.35)",ice:"hue-rotate(160deg)",fire:"hue-rotate(-25deg)"};return`<img class="model-preview" src="${{"demo-300":Uf,"evgeniy-300":Ff,"pit-125":Of,"pit-140":Bf,"tripo-300":kf,"yamaha-cross":zf,"orange-cross":Hf,169:Gf}[X.id]||{tripo:FS,yamaha:DS,orange:US}[X.modelVariant]||(X.id==="evgeniy-300"?Xf:OS)}" alt="${X.name}" style="filter:${H[O]||"none"};${X.modelVariant?"object-fit:contain;object-position:center;":""}">`}function d(){const X=Ws(fi,r?.age??18);X.some(H=>H.id===s)||(s=X.find(H=>H.available).id);const O=Dn(s);if(l.innerHTML=`<button class="back" id="back">← К локациям</button><div class="eyebrow"><span></span> ${n.title.toUpperCase()}</div><div class="intro"><div><h1>Выбери <em>мотоцикл</em></h1></div><div class="step"><b>02</b><span>ВЫБОР<br>МОТОЦИКЛА</span></div></div><div class="level-info"><span>ТВОЙ УРОВЕНЬ <b>01</b></span><span>Доступные мотоциклы отмечены ниже</span></div><fieldset class="locations bikes"><legend class="sr-only">Выберите мотоцикл</legend>${X.map(H=>`<label class="card bike-card ${H.available?"":"locked"}"><input type="radio" name="bike" value="${H.id}" ${H.available?s===H.id?"checked":"":"disabled"}><div class="bike-art">${h(H)}<span class="number">${H.available?"ДОСТУПЕН":"ЗАКРЫТО"}</span><span class="check">${H.available?"✓":"◇"}</span></div><div class="card-body"><h2>${H.name}</h2></div></label>`).join("")}</fieldset><div class="selection-bar"><div><span class="small-label">${n.title.toUpperCase()}</span><p id="bike-selection">${O.name}</p></div><button id="prepare">Продолжить <span>↗</span></button></div><footer><span>ОТ ПЕРВОГО ЗАЕЗДА — К НОВЫМ ВЕРШИНАМ.</span><span>ENDURO / MOTOCROSS</span></footer>`,pe){const H=document.createElement("p");H.className="ride-bike-restart-note",H.textContent=pe.mode==="online"?"Выбранный мотоцикл заменит текущий в этой комнате.":"При смене мотоцикла заезд начнётся заново. Нажми «Применить», чтобы пересесть.",l.querySelector(".selection-bar").before(H)}l.querySelectorAll("input[name=bike]:enabled").forEach(H=>H.addEventListener("change",()=>{s!==H.value&&(t=null,D="base"),s=H.value,l.querySelector("#bike-selection").textContent=Dn(s).name})),document.querySelector("#back").onclick=x,document.querySelector("#prepare").addEventListener("click",()=>{o=!0,Ea(l,{onBack:d,onContinue:Y}),Rt("fuel")}),window.scrollTo(0,0),l.querySelector("h1").tabIndex=-1,l.querySelector("h1").focus(),Rt("bikes")}function f(X=null,O=null){Rt(null),ae.hidden=!1,wS(l,{entry:X,inviteCode:O,onResume:pe?.mode==="online"?()=>ae.click():null,profile:r,onBack:()=>{l.innerHTML=u,y()},onRide:async(H,re)=>{n=i.find(se=>se.id===Qs(H.state.region).regions[0])||i[0],Z=H.state.region,s=re,te=H.state.difficulty,await Fe({online:H})}})}function g(){Rt(null),ae.hidden=!1,TS(l,{onBack:()=>{l.innerHTML=u,y()},onPreview:X=>{t=ES(X),n=i[0],Z=n.id,be()},onClear:()=>{t=null,l.innerHTML=u,y()}})}let v=!1;async function p(){if(!v){v=!0,pe&&(pe.dispose(),pe=null),ae.hidden=!0,Rt(null),l.inert=!0;try{const{mountCustomTrackEditor:X}=await So(()=>import("./custom-track-editor-DufalnyU.js"),__vite__mapDeps([4,5,1,6,3,7]),import.meta.url);await X({bikeId:s,riderId:a,gear:Ne().gear,difficulty:te,onExit:()=>{l.inert=!1,x()}})}catch(X){l.inert=!1,x();const O=document.createElement("p");O.className="track-launch-error",O.setAttribute("role","alert"),O.textContent="Не удалось открыть конструктор. "+X.message,l.prepend(O)}finally{v=!1}}}function m(){Rt(null),ae.hidden=!0,l.innerHTML='<section class="settings-screen"><button class="back" id="mode-back">← Главное меню</button><div class="intro"><div><h1>Режим <em>заезда</em></h1><p>Выбери, как продолжить игру.</p></div></div><div class="quick-routes"><button data-choose-mode="solo">Свободный заезд</button><button data-choose-mode="duel">Дуэль с ботом</button><button data-choose-mode="online">С друзьями · онлайн</button><button data-choose-mode="editor">Своя трасса · конструктор</button></div></section>',l.querySelector("#mode-back").onclick=x;for(const X of l.querySelectorAll("[data-choose-mode]"))X.onclick=()=>{X.dataset.chooseMode==="editor"?p():X.dataset.chooseMode==="online"?f():(G=X.dataset.chooseMode,o=!0,be())};z()}function x(){l.innerHTML=u,y(),window.scrollTo(0,0)}function b(){Rt(null),GM(l,{onBack:x,onProfile:()=>c()}),Rt("settings")}function y(){const X=l.querySelector(".quick-routes");if(X&&!l.querySelector("#tuning-open")){const se=document.createElement("button");se.id="tuning-open",se.textContent="Тюнинг мотоцикла",se.onclick=()=>{Rt(null),To(l,{bikeId:s,onBack:x})},X.append(se)}let O=l.querySelector(".main-wallet");O||(O=document.createElement("p"),O.className="main-wallet",O.setAttribute("role","status"),l.querySelector(".prototype-launch").after(O)),O.textContent="Монеты: "+Ta().toLocaleString("ru-RU");const H=l.querySelector(".quick-routes");if(H&&!l.querySelector("#track-editor-open")){const se=document.createElement("button");se.id="track-editor-open",se.textContent="Своя трасса · построить",se.onclick=p,H.append(se)}if(Rt("location"),document.querySelector('link[rel="manifest"]')&&(/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!matchMedia("(display-mode:standalone)").matches&&!navigator.standalone&&!l.querySelector("#ios-install")){const se=document.createElement("button");se.id="ios-install",se.textContent="На экран «Домой»",se.onclick=()=>location.assign(new URL("install.html",location.href).href),l.querySelector(".quick-routes").prepend(se)}const re=l.querySelector("#fuel-open");re&&!re.querySelector("svg")&&re.insertAdjacentHTML("afterbegin",_h()),l.querySelector("#settings-open")?.addEventListener("click",b),l.querySelector("#feedback-open")?.addEventListener("click",Df),l.querySelector("#fuel-open")?.addEventListener("click",()=>{Ea(l,{onBack:x,onContinue:x}),Rt("fuel")}),l.querySelector("#evolution-open")?.addEventListener("click",()=>{Rt(null),ae.hidden=!1,SS(l,()=>{l.innerHTML=u,y(),l.querySelector("#evolution-open").focus()})}),l.querySelector("#store-open")?.addEventListener("click",g),l.querySelector("#online-open")?.addEventListener("click",()=>f()),l.querySelector("#duel-open")?.addEventListener("click",()=>{G="duel",n=i[1],Z=n.id,be()}),l.querySelector("#quick-ride")?.addEventListener("click",()=>{G="duel",n=i[0],Z=n.id,be()}),l.querySelectorAll("[data-quick]").forEach(se=>se.addEventListener("click",()=>{G="duel",n=i.find(oe=>oe.id===se.dataset.quick),Z=n.id,be()})),l.querySelectorAll('input[name="location"]').forEach(se=>se.addEventListener("change",()=>{n=i.find(oe=>oe.id===se.value),Z=n.id,l.querySelector("#selection").textContent=n.title,l.querySelector("#continue").disabled=!1})),l.querySelector("#continue").addEventListener("click",d)}const A=document.createElement("span");A.className="header-wallet",A.setAttribute("aria-label","Баланс монет"),document.querySelector("header").append(A);const T=()=>{A.textContent="Монеты: "+Ta().toLocaleString("ru-RU")};T(),window.addEventListener("enduro-wallet-change",T),y(),window.addEventListener("enduro-wallet-change",()=>{const X=l.querySelector(".main-wallet");X&&(X.textContent="Монеты: "+Ta().toLocaleString("ru-RU"))});const _=[{id:"riderLook",title:"Райдер",options:["Ярик · чёрный с оранжевым","Прежний · фиолетовый"],icon:"jersey"},{id:"boots",title:"Мотоботы",options:["Leatt","Alpinestars","Gaerne"],icon:"boots"},{id:"knees",title:"Защита коленей",options:["Leatt · накладные","Fox · накладные","Alpinestars · накладные","Leatt · брейсы","POD · брейсы"],icon:"knees"},{id:"armor",title:"Черепаха",options:["Leatt","Fox","Alpinestars"],icon:"armor"},{id:"jersey",title:"Джерси",options:["Leatt","Fox","Alpinestars"],icon:"jersey"},{id:"pants",title:"Штаны",options:["Leatt","Fox","Alpinestars"],icon:"pants"},{id:"helmet",title:"Шлем",options:["Leatt","Fox","Alpinestars","Airoh","Bell"],icon:"helmet"},{id:"gloves",title:"Перчатки",options:["Leatt","Fox","Alpinestars"],icon:"gloves"}],M=Object.fromEntries(_.map(X=>[X.id,0]));let C="boots";const R=[{id:"base",name:"Оригинал",color:"#d8f477",second:"#303c28",premium:!1},{id:"sand",name:"Песчаная буря",color:"#dfb780",second:"#624a34",premium:!0},{id:"ice",name:"Ледник",color:"#9bd5ef",second:"#294453",premium:!0},{id:"fire",name:"Красная линия",color:"#f07963",second:"#6c302b",premium:!0}];let I="base",D="base";const B={boots:'<path d="M35 18h25l-3 52 22 12v13H31l-5-13 9-18zM41 30h16M38 43h18M37 57h18M32 77h25"/>',knees:'<path d="M35 15h30l6 28-8 22-3 30H40l-3-30-8-22z"/><path d="M38 39l12-9 12 9v18l-12 8-12-8zM40 75h20M41 84h18"/>',armor:'<path d="M34 15l16 9 16-9 16 14-9 24-8-4v45H35V49l-8 4-9-24zM50 28v58M38 42h24M38 56h24M38 70h24"/>',jersey:'<path d="M34 19l16 8 16-8 24 20-13 19-13-9v44H36V49l-13 9-13-19zM38 37l12 9 12-9M50 46v29"/>',pants:'<path d="M31 17h38l7 77H55l-5-42-5 42H24zM32 30h36M31 62h15M54 62h16"/>',helmet:'<path d="M20 61Q13 21 51 18q32 0 35 36L65 59 54 79l25-5-6 18H30L20 61zM23 48l38-7 33 7-8 8-33-3-18 15M32 29l18 4"/>',gloves:'<path d="M29 86L15 55q-3-10 5-9l13 15-5-35q0-10 7-4l9 31-4-38q2-9 8-1l8 36-1-34q4-10 9-1l4 38 5-24q6-8 10 1l-1 45-12 20zM38 68l26-4"/>'};function P(X){return`<svg viewBox="0 0 100 110" aria-hidden="true" class="gear-icon"><g fill="var(--swatch, #d8f477)" fill-opacity=".12" stroke="var(--swatch, #d8f477)" stroke-width="2.5" stroke-linejoin="round">${B[X]}</g></svg>`}function z(){window.scrollTo(0,0),l.querySelector("h1").tabIndex=-1,l.querySelector("h1").focus()}function Y(){const X=_.find(O=>O.id===C);l.innerHTML=`<button class="back" id="back-bikes">← К мотоциклам</button><div class="eyebrow"><span></span> ${n.title.toUpperCase()} / ${Dn(s).name.toUpperCase()}</div><div class="intro"><div><h1>Твоя <em>экипировка</em></h1><p>Собери комплект для своего первого заезда.</p></div><div class="step"><b>03</b><span>ВЫБОР<br>ЭКИПИРОВКИ</span></div></div><div class="gear-layout"><nav class="gear-nav" aria-label="Категории экипировки">${_.map((O,H)=>`<button data-group="${O.id}" class="gear-tab ${O.id===C?"active":""}" aria-current="${O.id===C?"true":"false"}"><span class="tab-index">0${H+1}</span><span>${O.title}<small>${O.options[M[O.id]]}</small></span><span class="tab-tick">✓</span></button>`).join("")}</nav><section class="gear-options" aria-label="${X.title}"><div class="section-heading"><h2>${X.title}</h2><span>${X.options.length} ВАРИАНТА</span></div><fieldset class="gear-grid"><legend class="sr-only">${X.title}</legend>${X.options.map((O,H)=>`<label class="card gear-card"><input type="radio" name="gear" value="${H}" ${M[X.id]===H?"checked":""}><div class="gear-picture">${P(X.icon)}<span class="check">✓</span></div><div class="card-body"><span class="small-label">${X.title.toUpperCase()}</span><h2>${O}</h2></div></label>`).join("")}</fieldset><p class="prototype-note">Бренды обозначают варианты для прототипа. Конкретные модели и характеристики добавим позже.</p></section></div><div class="selection-bar"><div><span class="small-label">КОМПЛЕКТ СОБРАН</span><p>Экипировка и райдер выбраны</p></div><button id="to-style">Выбрать стиль <span>↗</span></button></div>`,l.querySelector("#back-bikes").addEventListener("click",d),l.querySelectorAll("[data-group]").forEach(O=>O.addEventListener("click",()=>{C=O.dataset.group,Y(),l.querySelector(`[data-group="${C}"]`).focus()})),l.querySelectorAll("input[name=gear]").forEach(O=>O.addEventListener("change",()=>{M[X.id]=Number(O.value),l.querySelector(`[data-group="${X.id}"] small`).textContent=X.options[M[X.id]]})),l.querySelector("#to-style").addEventListener("click",()=>{q(),z()}),Rt("gear"),z()}function q(){const X=R.find(H=>H.id===I),O=R.find(H=>H.id===D);l.innerHTML=`<button class="back" id="back-gear">← К экипировке</button><div class="eyebrow"><span></span> СДЕЛАЙ ЕГО СВОИМ</div><div class="intro"><div><h1>Стиль <em>мотоцикла и райдера</em></h1><p>Отдельно выбери дизайн экипировки райдера и расцветку мотоцикла.</p></div><div class="step"><b>04</b><span>ВЫБОР<br>ДИЗАЙНА</span></div></div><div class="style-preview"><div style="--swatch:${X.color}">${P("jersey")}<span>ЭКИПИРОВКА РАЙДЕРА / ${X.name}</span></div><div style="--bike-accent:${O.color}">${h(Dn(s),D)}<span>ДИЗАЙН МОТОЦИКЛА / ${O.name}</span></div></div>${[{id:"outfit",title:"Дизайн экипировки райдера",value:I},{id:"stickers",title:"Дизайн мотоцикла · расцветка и наклейки",value:D}].map(H=>`<section class="design-section"><h2>${H.title}</h2><fieldset class="design-grid"><legend class="sr-only">${H.title} — предпросмотр</legend>${R.map(re=>`<label class="card design-card"><input type="radio" name="${H.id}" value="${re.id}" ${H.value===re.id?"checked":""}><div class="swatch" style="--tone:${re.color};--second:${re.second}"><span class="check">✓</span></div><div class="card-body"><h2>${re.name}</h2><span class="${re.premium?"premium":"small-label"}">${re.premium?"◇ PREMIUM · ПРЕДПРОСМОТР":"БЕСПЛАТНО"}</span></div></label>`).join("")}</fieldset></section>`).join("")}<p class="prototype-note">${n.id==="mountains"?`Выбрана локация «${n.title}». Заезд для неё ещё в разработке. В этой версии доступны стадион, кантри-кросс и посадка. Кнопка ниже откроет стадион.<br>`:""}Premium — концепция платных дизайнов. Можно посмотреть варианты, но покупка и применение платных дизайнов пока недоступны. Цены ещё не заданы.</p><div class="selection-bar"><div><span class="small-label">${X.premium||O.premium?"ПРЕДПРОСМОТР PREMIUM":"БАЗОВЫЙ ДИЗАЙН"}</span><p>${X.premium||O.premium?"Для заезда будет сохранён бесплатный дизайн":"Готов к новым маршрутам"}</p></div><button id="finish">${n.id!=="mountains"?"Начать заезд":"На эндуро-стадион"} <span>↗</span></button></div>`,l.querySelector("#back-gear").addEventListener("click",Y),l.querySelectorAll("input[name=outfit], input[name=stickers]").forEach(H=>H.addEventListener("change",()=>{const re=window.scrollY;H.name==="outfit"?I=H.value:D=H.value;const se=H.name,oe=H.value;q(),l.querySelector(`input[name="${se}"][value="${oe}"]`).focus({preventScroll:!0}),window.scrollTo(0,re)})),Rt("style"),l.querySelector("#finish").addEventListener("click",()=>{n.id==="mountains"&&(n=i[0]),be()})}let te="bronze",G="duel",Z=null,ne=1;function be(){if(!o)return d();l.innerHTML=`<button class="back" id="difficulty-back">← К настройке</button><div class="intro"><div><h1>Уровень <em>сложности</em></h1><p>Выбери помощь в управлении. Расположение препятствий одинаковое на всех уровнях.</p></div></div><div class="route-setup-grid"><label class="route-picker">Маршрут <select id="setup-route">${qr.map(X=>`<option value="${X.id}" ${X.id===(Z||n.id)?"selected":""}>${X.name}</option>`).join("")}</select></label><label class="route-picker">Круги <select id="setup-laps">${[1,2,3,5,10].map(X=>`<option value="${X}" ${X===ne?"selected":""}>${X}</option>`).join("")}<option value="0" ${G==="duel"?"disabled":""}>Без лимита</option></select></label></div><fieldset class="race-mode-picker"><legend>Режим заезда</legend><label><input type="radio" name="race-mode" value="solo" ${G==="solo"?"checked":""}> Свободный заезд</label><label><input type="radio" name="race-mode" value="duel" ${G==="duel"?"checked":""}> Дуэль с ботом · общий старт</label></fieldset><fieldset class="difficulty-grid"><legend class="sr-only">Уровень сложности</legend>${Zi.map(X=>`<label class="card difficulty-card"><input type="radio" name="difficulty" value="${X.id}" ${te===X.id?"checked":""}><div class="card-body"><h2>${X.name}</h2><p>${X.description}</p></div></label>`).join("")}</fieldset><div class="selection-bar"><div><span class="small-label">${n.title}</span><p id="difficulty-selection">${Zi.find(X=>X.id===te).name}</p></div><button id="difficulty-start">Начать заезд ↗</button></div>`,Rt("difficulty"),l.querySelector("#difficulty-back").addEventListener("click",q),l.querySelectorAll("[name=difficulty]").forEach(X=>X.addEventListener("change",()=>{te=X.value,l.querySelector("#difficulty-selection").textContent=Zi.find(O=>O.id===te).name})),l.querySelector("#setup-laps").value=String(ne),l.querySelector("#setup-laps").onchange=X=>{ne=Number(X.target.value)},l.querySelector("#setup-route").onchange=X=>{Z=X.target.value,n=i.find(O=>O.id===Qs(Z).regions[0])},l.querySelectorAll("[name=race-mode]").forEach(X=>X.onchange=()=>{G=X.value;const O=l.querySelector('#setup-laps option[value="0"]');O.disabled=G==="duel",G==="duel"&&ne===0&&(ne=1,l.querySelector("#setup-laps").value="1")}),l.querySelector("#difficulty-start").addEventListener("click",Fe),z()}function Ne(){const X=Ws(fi,r?.age??18).filter(Re=>Re.available);X.some(Re=>Re.id===s)||(s=X[0].id);const O=R.find(Re=>Re.id===I),H=R.find(Re=>Re.id===D),re={...M};I!=="base"&&(re.previewJersey=O.color);const se=Dn(s);let oe=t||(s==="evgeniy-300"?VM:Mf(se));return D!=="base"&&(oe={...oe||{},id:"preview-"+D,number:oe?.number||"123",accent:H.color,body:H.second}),{bikeId:s,riderId:a,gear:re,cosmetic:oe,difficulty:te,routeId:Z||n?.id||"stadium"}}async function K(X){const O=pe;if(!O)return;const H=l.querySelector("input[name=bike]:checked");H&&H.value!==s&&(s=H.value,t=null,D="base");const re=X.textContent;X.disabled=!0,ae.disabled=!0,l.inert=!0,X.textContent="Применяем…";let se=null;try{if(O.mode&&O.mode!==G){await Fe();return}const oe=Ne();if(O.bikeId!==oe.bikeId&&O.mode!=="online"){await Fe();return}if(O.bikeId!==oe.bikeId&&(se=mh(Dn(oe.bikeId).cycle,oe.bikeId)),await O.applySelection({...oe,engineAudio:se}),O.bikeId!==oe.bikeId)throw Error("Мотоцикл не заменился. Выбери его ещё раз или начни новый заезд.");pe===O&&(O.resume(),pe=null,ae.hidden=!0,Rt(null))}catch(oe){se?.dispose();let Re=l.querySelector(".ride-apply-status");Re||(Re=document.createElement("p"),Re.className="ride-apply-status",Re.setAttribute("role","status"),X.after(Re)),Re.textContent=oe.message||"Не удалось применить выбор. Можно вернуться крестиком."}finally{l.inert=!1,ae.disabled=!1,X.disabled=!1,X.textContent=re}}function _e(){if(!pe||l.querySelector("#return-to-ride"))return;const X=l.querySelector("#fuel-next");if(X){X.id="return-to-ride",X.textContent="Применить и вернуться в игру",X.onclick=()=>K(X);return}const O=document.createElement("button");O.id="return-to-ride",O.type="button",O.textContent="Применить и вернуться в игру",O.onclick=()=>K(O);let H=l.querySelector(".selection-bar");H||(H=document.createElement("div"),H.className="selection-bar ride-return-bar",(l.querySelector(".settings-screen")||l).append(H)),H.dataset.returnable="true",H.append(O)}let Ee=!1,pe=null;const ae=document.createElement("button");ae.id="setup-close",ae.className="setup-close",ae.textContent="×",ae.setAttribute("aria-label","Вернуться в заезд"),ae.hidden=!0,document.body.append(ae),ae.onclick=()=>{pe?(pe.resume(),pe=null,ae.hidden=!0,Rt(null)):(l.innerHTML=u,y(),ae.hidden=!0)},new MutationObserver(()=>{const X=document.body.dataset.setupStage;X&&(ae.hidden=!pe&&X==="location")}).observe(document.body,{attributes:!0,attributeFilter:["data-setup-stage"]}),new MutationObserver(_e).observe(l,{childList:!0,subtree:!0});async function Fe(X={}){const O=X.online||null;O&&(G="online",Z=O.state.region,te=O.state.difficulty,n=i.find(se=>se.id===Qs(O.state.region).regions[0])||i[0]);const H=Ws(fi,r?.age??18).filter(se=>se.available);if(H.some(se=>se.id===s)||(s=H[0].id),Ee)return;Rt(null),pe&&(pe.dispose(),pe=null),ae.hidden=!0,Ee=!0;let re;try{re=mh(Dn(s).cycle,s);const{startStadium:se}=await So(async()=>{const{startStadium:Re}=await import("./stadium-VKh_VQ4w.js");return{startStadium:Re}},__vite__mapDeps([8,5,1,6,2,3,9]),import.meta.url),oe=Ne();await se({riderId:a,gear:oe.gear,bikeId:s,location:n.id,laps:O?1:ne,routeId:Z||n.id,onRouteChange:Re=>{Z=Re},difficulty:te,engineAudio:re,online:O,duel:!O&&G==="duel",cosmetic:oe.cosmetic,onDifficultyChange:Re=>{te=Re},onLocationChange:Re=>{n=i.find(Se=>Se.id===Re)||i[0]},onExit:(Re,Se)=>{if(pe=Re,s=Re?.bikeId||s,ae.hidden=!1,Se==="join-room"){f("join");return}if(["mode-solo","mode-duel","mode-online","mode-editor"].includes(Se)){pe?.dispose(),pe=null,ae.hidden=!0,Se==="mode-editor"?p():Se==="mode-online"?f():(G=Se.slice(5),o=!0,be());return}if(Se==="modes"){pe?.dispose(),pe=null,ae.hidden=!0,Se==="modes"?m():x();return}if(Se==="tuning"){Rt(null),To(l,{bikeId:s,onBack:()=>ae.click()});return}if(Se==="profile"){c(()=>ae.click());return}if(Se==="main"){x();return}if(O&&!["bike","gear","style"].includes(Se)){f();return}Se==="main"?x():Se==="fuel"?(Ea(l,{onBack:()=>ae.click(),onContinue:()=>ae.click()}),Rt("fuel")):Se==="bike"?d():Se==="gear"?Y():q(),z()}})}catch(se){re?.dispose(),O?.close(),document.querySelector(".ride-screen")?.remove(),document.body.classList.remove("riding");const oe=document.querySelector("dialog");document.querySelector("#dialog-title").textContent="Не удалось открыть заезд",document.querySelector("dialog p").textContent="Попробуй обновить страницу и начать заезд ещё раз.",oe.showModal(),console.error(se)}finally{Ee=!1}}window.enduroAppReady?.();const qe=If(location.href);qe?r?f("join",qe):c(()=>f("join",qe)):r||c()}const t1=Object.freeze(Object.defineProperty({__proto__:null,mountApp:BS},Symbol.toStringTag,{value:"Module"}));export{_h as $,Ji as A,Zr as B,Wl as C,_b as D,qS as E,ue as F,us as G,pb as H,Kn as I,Af as J,Dn as K,mh as L,Cd as M,Mf as N,Ud as O,Jr as P,WS as Q,Mb as R,Jt as S,Sf as T,HS as U,N as V,Eb as W,Ma as X,yn as Y,Ct as Z,bn as _,Qt as a,fa as a$,Ta as a0,Mt as a1,Gn as a2,Xe as a3,ob as a4,hb as a5,Db as a6,Ib as a7,Gs as a8,$i as a9,Ad as aA,Vb as aB,vM as aC,sb as aD,gm as aE,sf as aF,YS as aG,nb as aH,KS as aI,Ub as aJ,Rb as aK,qb as aL,ef as aM,zb as aN,nM as aO,wd as aP,jb as aQ,Om as aR,Sd as aS,$t as aT,gb as aU,e1 as aV,cc as aW,xM as aX,$b as aY,Zf as aZ,Nh as a_,qr as aa,lc as ab,vo as ac,bd as ad,xt as ae,Nb as af,fb as ag,Tm as ah,Do as ai,ud as aj,vn as ak,hd as al,cd as am,Td as an,$e as ao,vi as ap,xn as aq,Qh as ar,ut as as,cu as at,rf as au,_m as av,mi as aw,dd as ax,ah as ay,No as az,GS as b,ym as b$,ea as b0,ni as b1,jh as b2,Zy as b3,Zi as b4,JS as b5,Gb as b6,vh as b7,ur as b8,Df as b9,Qr as bA,vb as bB,db as bC,ub as bD,aa as bE,mb as bF,xb as bG,dm as bH,ca as bI,ei as bJ,os as bK,Ra as bL,_p as bM,Xt as bN,Ot as bO,On as bP,Em as bQ,Vn as bR,Vl as bS,ct as bT,ab as bU,sd as bV,rd as bW,lb as bX,cb as bY,id as bZ,Pu as b_,Th as ba,$d as bb,Uy as bc,Zd as bd,Wy as be,Xy as bf,Vy as bg,qy as bh,Gy as bi,Ed as bj,ec as bk,tc as bl,Tb as bm,Oy as bn,Cb as bo,vl as bp,Jd as bq,lo as br,_M as bs,un as bt,Ob as bu,cM as bv,Mn as bw,jS as bx,tb as by,eb as bz,Pb as c,_S as c$,ia as c0,hl as c1,Bt as c2,Nd as c3,Yl as c4,Zl as c5,it as c6,Kr as c7,lh as c8,Ab as c9,Zb as cA,Jb as cB,Yb as cC,Sb as cD,QS as cE,yb as cF,qM as cG,XM as cH,$M as cI,YM as cJ,ZM as cK,JM as cL,KM as cM,QM as cN,jM as cO,gh as cP,eS as cQ,Xf as cR,OS as cS,FS as cT,US as cU,DS as cV,tS as cW,MS as cX,yS as cY,xS as cZ,vS as c_,zS as ca,xf as cb,Fb as cc,wb as cd,Et as ce,Yy as cf,Hb as cg,yl as ch,nf as ci,tf as cj,Wb as ck,Lb as cl,Bb as cm,kb as cn,es as co,Qb as cp,FM as cq,yM as cr,CM as cs,OM as ct,zM as cu,HM as cv,PM as cw,MM as cx,BM as cy,Rr as cz,SM as d,gS as d0,mS as d1,pS as d2,fS as d3,dS as d4,hS as d5,uS as d6,cS as d7,lS as d8,oS as d9,aS as da,sS as db,rS as dc,iS as dd,nS as de,t1 as df,hf as e,rb as f,Xb as g,Ve as h,en as i,bb as j,Hn as k,ss as l,ib as m,wc as n,uM as o,Eo as p,$S as q,yh as r,Kb as s,bf as t,VS as u,Mi as v,wf as w,pi as x,XS as y,ZS as z};
