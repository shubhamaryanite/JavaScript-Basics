
const button=document.querySelector('button');
const popup=document.querySelector('.popup-wrapper');

button.addEventListener('click',()=>{
    popup.style.display='block';
});

const close=document.querySelector('.popup-close');

close.addEventListener('click',()=>{
    popup.style.display='none';
});

popup.addEventListener('click',()=>{
    popup.style.display='none';
});