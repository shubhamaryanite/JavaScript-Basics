//3 steps
//getting the event
const button= document.querySelector('button');
// performing onclick function
// button.addEventListener('click', ()=>{
//     console.log('you clicked me !');
// });

// const items=document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click',()=>{
//         console.log('item clicked');
//     });
// });


//const items=document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click',e=>{
//         //console.log('item clicked');
//         //console.log(e);
//         console.log(e.target);
//         console.log(item);
//         e.target.style.textDecoration = 'line-through'; 
//     });
// });


//to remove the whole list
const ul=document.querySelector('ul');
//ul.remove();

//to remove any element on clicking on it 
// const items=document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', e=>{
//         //e.target.style.textDecoration='line-through';
//         e.target.remove();
//     });
// });


//add new li element
// button.addEventListener('click', ()=>{
//     ul.innerHTML+='<li>add something new</li>';
// });

//another methid to add but at the bottom of the text
// button.addEventListener('click', ()=>{
//     //ul.innerHTML+='<li>add something new</li>';
//     const li=document.createElement('li');
//     li.textContent='something new to do';
//     ul.append(li);
// });

//another methid to add but at the top of the text
button.addEventListener('click', ()=>{
    //ul.innerHTML+='<li>add something new</li>';
    const li=document.createElement('li');
    li.textContent='something new to do';
    ul.prepend(li);
});


/////////bubbling up/////////////

// const items=document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', e=>{
//         //e.target.style.textDecoration='line-through';
//         //e.target.remove();
//         console.log('event in LI');
//         e.stopPropagation();
//     });
// });
ul.addEventListener('click',e=>{
    //console.log('event in UL');
    console.log(e.target);
    console.log(e);
    if(e.target.tagName == 'LI')
    {
        e.target.remove();
    }
});

const copy=document.querySelector('.copy-me');
copy.addEventListener('copy',()=>{
    console.log('Oye! my content iss copyright');
});

const box=document.querySelector('.box');
box.addEventListener('mousemove', e=>{
    //console.log(e);
    //console.log(e.offsetX,e.offsetY);
    box.textContent=`x pos -${e.offsetX} y pos -${e.offsetY}`;
});

document.addEventListener('wheel', e=>{
    console.log(e.pageX, e.pageY);
});