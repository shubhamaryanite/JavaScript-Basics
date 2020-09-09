//will open a dialog box including text including OK button
alert('Hello, World !!');

//log things to console
//to print in console
console.log(1);

//declaring and initializing values
//var was used earlier - now let is used in new technologies

//still let is not supported by 
//some old web browsers - internet explorer
let age=12;
let year=2020;

console.log(age, year);

//declaring string
let email='shubhamaryanite@gmail.com';
console.log(email);

let firstname="Shubham";
let middlename="Kumar";
let lastname="Singh";

//string concatenation
console.log(firstname+" "+middlename+" "+lastname);

let fullname=firstname+" "+middlename+" "+lastname;
//to know the character at the particular index of string
console.log(fullname[0]);


/////////////////STRING//////////////////


//string function
//to find length of string
console.log(fullname.length);

//some string methods
//to lower each letter
console.log(fullname.toUpperCase());
let result=fullname.toLowerCase();
console.log(result);

//doesnt changes the old fullname
//just  doing changes in newly made strings
console.log(result, fullname);

//to find index where the particular charater occur
let index=email.indexOf('@');
console.log(index);

let name='shubham kumar singh';
//to find the last index of particular occuring element
let ind=name.lastIndexOf('s');
console.log(ind);

//slicing or taking out substring of desired length
let resultt=name.slice(2,8);
console.log(resultt);

//substr-but it acts little bit differently than c++
//it takes starting position in first argument
/* and no of characters to be included after starting position
as the second argument */
let ans=name.substr(2,9);
console.log(ans);

let some=name.replace('s', 'a');
console.log(some);



///////////NUMBER///////////

let radius=21;
let r=213;
console.log(radius, r);

let pi=3.14;
//area being calculated using **(just like power function being used in c++)
let area=pi * radius**2;
console.log(area);

let likes=12;
//likes=likes+1;
likes++;
console.log(likes);

likes+=10;
console.log(likes);

likes-=5;
console.log(likes);
console.log(likes);


//NaN -- Not a Number
console.log(5 / 'hello');
console.log(5 * 'hello');

let anss='This Blog has '+ likes + ' likes';
console.log(anss);

const author='Dan Browne';
const like=10;
const book='Demons & Angels';


///******concatenation way

//normal concatenation of strings
let write='This book '+ book + ' written by '+ author + ' has ' + like +' likes.';
console.log(write);

///*****template string way

//normal template being created
//to use directly the names without using + sign again and again
//use ` ` to include statement first of all
//to use directly and vaiable defined earlier -- use --  ${var_name}
let ano=`This book called ${book} is written by ${author} has ${like} likes`;
console.log(ano);

///********creating html templates

//to directly use the template in body of html
let html=`
<h2> ${book}</h2>
<p> By ${author}</p>
<span> This blog has ${like} likes</span>
`;
console.log(html);


/////**** ARRAYS *****///////

//array of strings
let ninjas=['shaun', 'ryu', 'chao-lien'];
console.log(ninjas);

//accessing any element just like c++
ninjas[1]='shaon-chin';
console.log(ninjas[1]);
console.log(ninjas);

let i=0;
let text='';
for (i of ninjas)
{
    console.log(i);
    text+=i+' ';
}
console.log(text);

//array of numbers
let ages=[20, 21, 25, 24, 26];
console.log(ages);
//calculating length of array
console.log(ages.length);
i=0;
for(i of ages)
{
    console.log(i);
}

//can store random data types in single array
let random=['shaun', 'crystal', 20, 60];
console.log(random)

//to print all element putting sign in between all the lements
let hn=random.join('-');
console.log(hn);

//to find index of any particular element in array
let indi=random.indexOf('crystal');
console.log(indi);

let neww=random.concat(['ken', 'goku']);
console.log(neww);

let nw=neww.push('saket');
console.log(nw);
console.log(neww);

let fd=neww.pop();
console.log(fd);
console.log(neww);

//undefined and null

//values is declared as undefined untill something is assigned to it 
let agee;

console.log(agee, agee+3, `The age is ${agee}`);

//declaring variable value as NULL
let nn=null;
console.log(nn, nn+3, `The new number is ${nn}`);


////**** BOOLEAN & COMPARISONS****////
console.log(true, false, "true", "false");

let ema='shawnmendis213@gmail.com';
let am=ema.includes('@');
console.log(am);
am=ema.includes('!');
console.log(am);

let names=['mario', 'luigdi', 'toad'];
let vj=names.includes('luigdi');
console.log(vj);

let ah=13;
console.log(ah==13);
console.log(ah==12);
console.log(ah!=12);
console.log(ah>23);
console.log(ah>10);
console.log(ah<=13);
console.log(ah>=13);

let nane='shaun';
console.log(nane=='shaun');
console.log(nane=='Shaun');
console.log(nane > 'shaun');
console.log(nane > 'zacd');
console.log(nane < 'zacd');

//loose comparisons

let hg=25;
console.log(hg==25);
//type of bug as it only checks content
//in this it is converting string to number
//type conversion
console.log(hg=='25');
console.log(hg!='25');


/////////****Strict Comparison ****///////
//for perfect comparisons 
//it checks bith value and data type
console.log(hg===25);
console.log(hg==='25');
console.log(hg!==25);
console.log(hg!=='25');


///////****TYPE CONVERISION ****///////
let score='100';

console.log(score+1);
//converting string to number datatype
console.log(typeof(score));
score=Number(score);
console.log(typeof(score));
console.log(score+1);

let ree=Number('hello');
console.log(ree);

let qw=String(112);
console.log(qw, typeof qw);

let fg=Boolean(100);
console.log(fg, typeof fg);
fg=Boolean(0);
console.log(fg, typeof fg);
fg=Boolean('');
console.log(fg, typeof fg);
 

/////****LOOPS ****///////


///for loop///
const ar=['shaun', 'mario', 'lungdi'];
for(i=0;i<ar.length; i++)
{
    console.log(ar[i]);
}

for(i=0;i<ar.length; i++)
{
    let httml=`<div>${ar[i]}</div>`;
    console.log(httml);
}


/////while loop////
i=0;
while(i<5)
{
    console.log('in loop: ', i);
    i++;
}

i=0;
while(i<ar.length)
{
    console.log(ar[i]);
    i++;
}


/////do while loop///
i=0;
do{
    console.log(i);
    i++;
}
while(i<5);

  
////if statements///

const as=25;
if(as > 20)
{
    console.log('you are over 20 years');
}

const ninnjas=['shaun', 'ryu', 'shun-li', 'yoshi'];
if(ninnjas.length > 3)
{
    console.log("that's a lot of ninjas");
}

let password ='p@ssword1234';
if(password.length >= 12)
{
    console.log('passowrd is strong');
}
else if(password.length >= 8)
{
    console.log('that password is long enough');
}
else{
    console.log('that password is not long enough.. use atleast 8 digits');
}


//using logical operators//

password ='pp@ssword1234';
if(password.length >= 12 && password.includes('@'))
{
    console.log('passowrd is mighty strong');
}
else if(password.length >= 8 || password.includes('@') && password.length >5)
{
    console.log('that password is long enough');
}
else{
    console.log('that password is not long enough.. use atleast 8 digits');
}

//logical not operator

let uu=false;

if(!uu)
{
    console.log('you must be login into computer');
}
console.log(!true);
console.log(!false);


/////******break and continue******/////

//break- totally get out of the loop
//continue- to skip the operations of the current iteration of the loop

const marks=[50, 25, 0, 30, 100, 20, 10];
for(let i=0; i<marks.length; i++)
{
    if(marks[i]===0)
    {
        continue;
    }
    console.log('your score: ', marks[i]);
    if(marks[i]===100)
    {
        console.log('Congrats, you got the top score');
        break;
    }
}

////*******Switch Statements ********////

const grade='D';

switch(grade)
{
    case 'A' :
        console.log('you got a garde A');
        break;
    
    case 'B' :
        console.log('you got a garde B');
        break;
    
    case 'C' :
        console.log('you got a garde C');
        break;

    case 'D' :
        console.log('you got a garde D');
        break;
    
    case 'E' :
        console.log('you got a garde E');
        break;
    
    case 'F' :
        console.log('you got a garde F');
        break;

    default :
        console.log('you have not got a valid grade');
}



//////******Variables and Block Scope *******//////

let hij=50;
//cannot be declared and initialised again in global scope 
//let hij=34;
if(true)
{
    /*  cannot print again if varibale is again initialised and defined
    in the box again */
    //console.log(hij);

    //any variable can be redfined in the block of statement
    //as hij is being defined in this block
    //and it has its scope until this box
    let hij=32;
    console.log(hij);

    if(true)
    {
        //will print most recent value of hij
        console.log(hij);
    }

    //creating and designing statements in nested block
    if(true)
    {
        //declaring again the variable in nested block
        let hij=32324;
        console.log(hij);
    }
}

console.log(hij);


var abc=12;
if(true)
{
    console.log(abc);
    var abc=2132;
    console.log(abc);
}