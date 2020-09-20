const clock=document.querySelector('.clock');

const tick = ()=>{
    const now=new Date();
    const h=now.getHours();
    const m=now.getMinutes();
    const s=now.getSeconds();
    //console.log(h, m, s);
    const html=`
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span> :
    `;
    clock.innerHTML=html;
};

//call this functiona after every 1000ms i.e. 1sec
setInterval(tick,1000);