const address='https://nicolenkoe.github.io/enduro-club-downloads/';
const status=document.querySelector('#status');
document.querySelector('#copy-link').onclick=async()=>{try{await navigator.clipboard.writeText(address);status.textContent='Ссылка скопирована';}catch{status.textContent=address;}};
document.querySelector('#share-page').onclick=async()=>{try{if(navigator.share)await navigator.share({title:'Enduro Club Ленинградская',text:'Твоя трасса, твои правила',url:address});else document.querySelector('#copy-link').click();}catch(e){if(e.name!=='AbortError')status.textContent=address;}};
document.querySelector('#share-qr').onclick=async()=>{try{const response=await fetch('./download-qr.png');if(!response.ok)throw Error();const file=new File([await response.blob()],'Enduro-Club-QR.png',{type:'image/png'});if(navigator.canShare?.({files:[file]}))await navigator.share({files:[file],title:'Enduro Club'});else{const a=document.createElement('a');a.href='./download-qr.png';a.download='Enduro-Club-QR.png';a.click();}}catch(e){if(e.name!=='AbortError')status.textContent='Ссылка на игру: '+address;}};
const cards=[...document.querySelectorAll('[data-shot]')],dialog=document.querySelector('#screenshot-dialog');let index=0;
function show(n){index=(n+cards.length)%cards.length;const source=cards[index].querySelector('img');document.querySelector('#shot-full').src=source.src;document.querySelector('#shot-full').alt=source.alt;document.querySelector('#shot-caption').textContent=cards[index].querySelector('b').textContent;document.querySelector('#shot-count').textContent=(index+1)+' / '+cards.length;}
cards.forEach((card,n)=>card.onclick=()=>{show(n);dialog.showModal();});
document.querySelector('#shot-close').onclick=()=>dialog.close();document.querySelector('#shot-prev').onclick=()=>show(index-1);document.querySelector('#shot-next').onclick=()=>show(index+1);
dialog.onkeydown=e=>{if(e.key==='ArrowRight')show(index+1);if(e.key==='ArrowLeft')show(index-1);};
document.querySelectorAll('[data-gallery-step]').forEach(button=>button.onclick=()=>document.querySelector('.screenshot-gallery').scrollBy({left:Number(button.dataset.galleryStep)*(cards[0].getBoundingClientRect().width+20),behavior:'smooth'}));

const guideVideo=document.querySelector('#guide-video'),guideToggle=document.querySelector('#guide-play-toggle'),guideStatus=document.querySelector('#guide-autoplay-status');
if(guideVideo&&guideToggle){
 let autoplayTried=false;
 const showToggle=()=>{guideToggle.hidden=false;guideToggle.querySelector('b').textContent=guideVideo.ended?'Смотреть ещё раз':guideVideo.currentTime>0?'Продолжить со звуком':'Смотреть инструкцию со звуком';};
 async function playGuide(){autoplayTried=true;guideVideo.muted=false;if(guideVideo.ended)guideVideo.currentTime=0;try{await guideVideo.play();guideStatus.textContent='';}catch{showToggle();guideStatus.textContent='Нажми кнопку по центру, чтобы смотреть со звуком.';}}
 guideToggle.onclick=playGuide;
 guideVideo.addEventListener('playing',()=>{guideToggle.hidden=true;guideStatus.textContent='';});
 guideVideo.addEventListener('pause',showToggle);guideVideo.addEventListener('ended',()=>{guideToggle.hidden=false;guideToggle.querySelector('b').textContent='Смотреть ещё раз';});
 guideVideo.addEventListener('error',()=>{showToggle();guideStatus.textContent='Не удалось загрузить видео. Попробуй открыть его по ссылке ниже.';});
 for(const link of document.querySelectorAll('a[href="#guide"]'))link.addEventListener('click',playGuide);
 if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{if(!autoplayTried&&entries.some(entry=>entry.isIntersecting)&&document.visibilityState==='visible')playGuide();},{threshold:.35});observer.observe(guideVideo);}
}

const versionFilter=document.querySelector('#version-filter');versionFilter?.addEventListener('change',()=>{let count=0;for(const card of document.querySelectorAll('[data-release-status]')){card.hidden=versionFilter.value!=='all'&&card.dataset.releaseStatus!==versionFilter.value;if(!card.hidden)count++;}document.querySelector('#versions-empty').hidden=count>0;});
fetch('./releases.json',{cache:'no-store'}).then(response=>{if(!response.ok)throw Error();return response.json();}).then(data=>{const labels={stable:'Стабильная',testing:'Тестовая',unstable:'Нестабильная'};for(const card of document.querySelectorAll('[data-release-status]')){const release=data.releases.find(item=>item.version===card.querySelector('h3').textContent.trim());if(!release||!Object.hasOwn(labels,release.status))continue;card.dataset.releaseStatus=release.status;const badge=card.querySelector('.version-status');badge.className='version-status '+release.status;badge.textContent=labels[release.status];}versionFilter?.dispatchEvent(new Event('change'));}).catch(()=>{});
