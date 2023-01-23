let luz = document.getElementById('luz');
let reflector = document.getElementById('reflector');
let l1 = document.getElementById('l1');
let l2 = document.getElementById('l2');
let l3 = document.getElementById('l3');
let l4 = document.getElementById('l4');
let l5 = document.getElementById('l5');

addEventListener('click', (e)=>{
  reflector.style.animationDelay = '1s';
  reflector.style.animationName = 'active';
  reflector.style.animationDuration = '3s';
  reflector.style.animationFillMode = 'forwards';
  setTimeout(()=>{
    luz.style.animationName = 'encender';
    luz.style.animationDuration = '1s';
    luz.style.animationFillMode = "forwards"
    l1.style.animationName = 'encender';
    l1.style.animationDuration = '1s';
    l1.style.animationFillMode = 'forwards';
    l2.style.animationName = 'encender';
    l2.style.animationDuration = '1s';
    l2.style.animationFillMode = 'forwards';
    l3.style.animationName = 'encender';
    l3.style.animationDuration = '1s';
    l3.style.animationFillMode = 'forwards';
    l4.style.animationName = 'encender';
    l4.style.animationDuration = '1s';
    l4.style.animationFillMode = 'forwards';
    l5.style.animationName = 'encender';
    l5.style.animationDuration = '1s';
    l5.style.animationFillMode = 'forwards';
  },4200)
 })