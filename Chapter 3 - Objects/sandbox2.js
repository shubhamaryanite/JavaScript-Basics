//object literals

let user = {
    name : 'crystal', 
    age : 30,
    email : 'crystal@theninja.co.uk',
    location : 'Berlin',
    blogs : ['why mac & cheese rules', '10 things to make with maritime'],
};
//to access any value of object using (.)
console.log(user);
console.log(user.name);
//to change value of any thing inside object
user.age=35;
console.log(user.age);

//different way of accessing properties of object
console.log(user['name']);
console.log(user['email']);

user['name']='Shubham';
console.log(user['name']);

console.log(typeof(user));

//also involving methods in objects
let userr = {
    name : 'crystal', 
    age : 30,
    email : 'crystal@theninja.co.uk',
    location : 'Berlin',
    blogs : ['why mac & cheese rules', '10 things to make with maritime'],
    login : function(){
        console.log('the user is logged in');
    },
    logout : function(){
        console.log('user is logged out');
    },
    logBlogs : function(){
        console.log(this.blogs);
    },
    logBlogg : function() {
        console.log('this user has written the follwing blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

userr.login();
userr.logBlogs();
userr.logBlogg();
 
//storing objects inside array
const bn=[
    {title : 'why mac & cheese users', likes : 30},
    {title : '10 things to make maritime', likes : 50},
];
console.log(bn);



let uuser = {
    name : 'crystal', 
    age : 30,
    email : 'crystal@theninja.co.uk',
    location : 'Berlin',
    blogs : [
        {title : 'why mac & cheese users', likes : 30},
        {title : '10 things to make maritime', likes : 50},
    ],
    
    login : function(){
        console.log('the user is logged in');
    },
    logout : function(){
        console.log('user is logged out');
    },
    logBlogs : function(){
        console.log(this.blogs);
    },
    logBlogg : function() {
        console.log('this user has written the follwing blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

uuser.logBlogg();


/////*******Math Object*******//////

console.log(Math);

console.log(Math.PI);
console.log(Math.E);

//round up function
const area = 7.121;
console.log(Math.round(area));

console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//to generate random numbers
const random = Math.random();
console.log(random);

console.log(Math.random);
console.log(Math.round(random * 100));


//primtive data types

//it creates another block for primitive data types
let scoreOne=50;
let scoreTwo=scoreOne;
console.log(`scoreOne : ${scoreOne}`, `scoreTwo : ${scoreTwo}`);

scoreOne=100;
console.log(`scoreOne : ${scoreOne}`, `scoreTwo : ${scoreTwo}`);

//refernce type points to the same thing
//so changes appear in both the objects
const userOne = {name : 'ryu', age : 30};
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age=60;
console.log(userOne, userTwo);