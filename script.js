// Certificate / activity photo viewer (lightbox)
(function(){var lb=document.getElementById('lb'),im=lb.querySelector('img'),p=lb.querySelector('p');
document.querySelectorAll('.cert button').forEach(function(b){b.addEventListener('click',function(){im.src=b.querySelector('img').src;p.textContent=b.dataset.cap;lb.classList.add('on')})});
lb.addEventListener('click',function(){lb.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});})();
