//function declaration
function great()
{
    console.log('hello! there');
}

//to avoid function hositing
//function expression
const speak=function()
{
    console.log('good ! day');
};

great();
great();
great();

speak();
speak();
speak();


/* function declaratiion can be done later 
and can be executed earlier in the program */

//Note: But it doesn't allow function expression to be executed like this
callbeforedefined();
callbeforedefined();
callbeforedefined();

function callbeforedefined()
{
    console.log('this function is defined lated before being called');
}

//arguments and parameters
const sppeak=function(name)
{
    console.log(`good day !! ${name}`);
};

sppeak();
sppeak('mario');

//more than one parameters

const some=function(name, time)
{
    console.log(`have a good ${time} ${name}`);
};
some('shaun', '9pm');

//default arguments

const som=function(name='Luigdi', time='10pm')
{
    console.log(`have a good ${time} ${name}`);
};
som('shaun', '9pm');
som('shubham');
som();

const calcArea=function(radius)
{
    //let area= 3.14 * radius**2;
    //console.log(area);
    //returning area
    //return area;

    return 3.14 * radius**2;
}

let ans=calcArea(5);
console.log(ans);
console.log(calcArea(10));



///////*** arrow function ***/////

//if there is one paramater 
//then we can use it without parenthesis
const calcarea= radius =>{
    return 3.14* radius**2;
};

const area=calcarea(5);
console.log(area);


//practise arrow function

const greet = ()=>'hello ! world';
const resultt=greet();
console.log(resultt);

const bill = (products, tax)=>{
    let total=0;
    for(let i=0;i<products.length;i++)
    {
        total+=products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10,20,30,32], 0.2));


/////********* Methods *******///////
const gret = () => 'hello';
console.log(gret());

const name='shaun';
let resultTwo = name.toUpperCase();
console.log(resultTwo);


//for each method and callback function
//pass function as an argument
const myFunc = (callbackFunc) => {
    let value=50;
    callbackFunc(value);
};

myFunc(value => {
    console.log(value);
});

let people = ['mario', 'luigdi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(function(person){
//     console.log(person);
// });

// people.forEach(person=>{
//     console.log(person);
// });

people.forEach((person,index)=>{
    console.log(index, person);
});



//cannot pass by reference
//instead can pass an object and then modify contents using function
function shu(obj)
{
    obj.ans="Shubham";
}
var myobj={ans:"Hello"};
shu(myobj);
alert(myobj.ans);

/////////

function Shu(a,b)
{
    myObj.ans=a+b;
    return myObj.ans;
}
var a=5, b=6;
var myObj={ans : 0};
var obj=Shu(a,b);
console.log(obj);

////////////


function shub(c,d,myObj1)
{
    myObj1.ans=c+d;
    return myObj1;
}

var c=5,d=21;
var myObjj={ans:0};
var obb=shub(c,d,myObjj);
alert(myObjj.ans);


///ignores extra argument while function call

function ss(a,b)
{
    return a+b;
}
var m=ss(4,5,34,34);
console.log(m);



//variable hositing
function sun()
{
    console.log(i);
    var i=1219;
}
sun();

//will give error
//console.log(jj);
//int jj=21;


//////*****Function Hoisting ******////////

hoistDemo();
//definition
function hoistDemo()
{
    console.log("Taslim");
}
//hoistDemo();

xx=55;
console.log(xx);
var xx;


//function expression
var ssum=function factorial(n)
{
    var an=1;
    for(var i=1;i<=n;i++)
    {
        an=an*i;
    }
    return an;
}
console.log(ssum(5));

