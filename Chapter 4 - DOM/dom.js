//searcch from top to bottom
//grabs the first p tag 
//const para = document.querySelector('p');

//selecting any class by its name is done by using . before class name
const para = document.querySelector('.error');
console.log(para);



//function to check special character
function specialChar(s)
{
    var splChars = "*|,\":<>[]{}?`\';()@&$#%";
    for(var i=0; i<s.length;i++)
    {
      	var sp=s[i].charCodeAt(0);
      	if(!((sp >= 65 && sp <= 90) || (sp>=97 && sp<=122) || (sp>=48 && sp<=57) || (s[i] == " ")))
        {
          return false;
        }
        // if( splChars.indexOf(s[i]) != -1 )
        // {
        //     return false;
        // }
    }
    return true;
}

//taking input from the user using windows prompt
var string=prompt();

//stroring the boolean answer being returned from the function specialChar
var a=specialChar(string);

//displaying answer in windows prompt using alert button
if(a === true)
{
  alert("No special characters detected!");
}
else{
  alert("Special characters detected!");
}

//some array methods

var arr=[1,"shubham",2];
console.log(arr);
console.log(arr.reverse());
console.log(arr.toString());
console.log(arr.join("*"));


//for each in array
var arr =[1,4,432,45,53,345,54];

function print(element)
{
  console.log(element);
}
arr.forEach(print);



var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log( index ,item );
}



//function to check special character
function specialCha(s)
{
    var splChars = "*|,\":<>[]{}?`\';()@&$#%";
    for(var i=0; i<s.length;i++)
    {
      	var sp=s[i].charCodeAt(0);
      	if(!((sp >= 65 && sp <= 90) || (sp>=97 && sp<=122) || (sp>=48 && sp<=57) || (s[i] == " ")))
        {
          return false;
        }
        // if( splChars.indexOf(s[i]) != -1 )
        // {
        //     return false;
        // }
    }
    return true;
}

var sec=0;
function check_sp()
{
    //taking input from the user using windows prompt
    var string=prompt();

    //stroring the boolean answer being returned from the function specialChar
    var a=specialCha(string);

    //displaying answer in windows prompt using alert button
    if(a === true)
    {
      alert("No special characters detected!");
    }
    else{
      alert("Special characters detected!");
    }
  	
  	if(sec == 3)
    {
      clearInterval(m);
    }
  	sec++;
  
}

//runs check_sp function after 1000 ms (1 sec)
//window.setTimeout(check_sp, 1000);

//set interval function helps to run any function infinite times
//clearinterval function helps in stopping that infinite loop
//var m=setInterval(check_sp, 1000);
//var m=setInterval()



const pp=document.querySelectorAll('p');
console.log(pp);
console.log(pp[0]);

pp.forEach(para => {
  console.log(para);
});

const errors= document.querySelectorAll('.error');
console.log(errors);

//get an element by id
const title=document.getElementById('page-title');
console.log(title);

//get elements by their class name
const errorss=document.getElementsByClassName('error');
console.log(errorss);
console.log(errorss[0]);


//get elements by their tag name
const parass=document.getElementsByTagName('p');
console.log(parass);
console.log(parass[1]);


const pad=document.querySelector('p');
console.log(pad.innerText);
//change contect of one tag only
pad.innerText="ninjas are awesome!";

//for changing content of every p tag
const ppp=document.querySelectorAll('p');
ppp.forEach(pdf=>{
  console.log(pdf.innerText);
  pdf.innerText+=' new Text';
});

const contt=document.querySelector('.content');
console.log(contt.innerHTML);

//appends it to the existing one
//contt.innerHTML+='<h2>This is a first h2</h2>';

//will erase the existing one and replces with it totally
//contt.innerHTML='<h2>This is a new h2</h2>';

const people=['mario','luigi','yoshi'];
people.forEach(person=>{
  contt.innerHTML+=`<p>${person}</p>`;
});

//getting href value
const link=document.querySelector('a');
console.log(link.getAttribute('href'));
//changing href value
link.setAttribute('href','https://www.theninjas.co.uk');
link.innerText='The Net Ninja Website';


const mssg=document.querySelector('p');
console.log(mssg.getAttribute('class'));
//changing class name that is present
mssg.setAttribute('class', 'success');
//assigning new css attribute to any code block
mssg.setAttribute('style','color:green;');

const tiitle=document.querySelector('h1');
//tiitle.setAttribute('style','margin:50px;');

//changing attributes of html
//accessing all the styles type
console.log(tiitle.style);
//accessing color style
console.log(tiitle.style.color);
//changing or appending the style attributes
tiitle.style.margin='50px';
tiitle.style.color='crimson';
tiitle.style.fontSize='60px';
tiitle.style.margin='';


const conn=document.querySelector('p');
console.log(conn.classList);
//to add or remove class name
conn.classList.add('err');
conn.classList.remove('success');

const pq=document.querySelectorAll('p');

pq.forEach(pl=>{
  console.log(pl.innerText);
})

pq.forEach(pl=>{
  console.log(pl.textContent);
})

pq.forEach(p1=>{
  if(p1.textContent.includes('error'))
  {
    p1.classList.add('error');
  }
  if(p1.innerText.includes('success'))
  {
    p1.classList.add('success');
  }
});

 const gf=document.querySelector('.tlre');
 console.log(gf);

 gf.classList.toggle('test');
 gf.classList.toggle('test');


 ////////////*******Node relationship******* //////////////

 const article=document.querySelector('article');
 console.log(article.children);

console.log(Array.from(article.children));
console.log(article.children);

Array.from(article.children).forEach(child=>{
  child.classList.add('article-element');
})

const hg=document.querySelector('h2');
//getting parent tag
console.log(hg.parentElement);
//getting parent's parent tag
console.log(hg.parentElement.parentElement);
//getting next element sibbling
console.log(hg.nextElementSibling);
//getting previos element siblings
console.log(hg.previousElementSibling);
//note : if there is no such tag after or before i.e. required
//then it will give NULL

//chaining
console.log(hg.nextElementSibling.parentElement.children);
