// const form=document.querySelector('.signup-form');
// const username=document.querySelector('#username');

// form.addEventListener('submit',e=>{
//     e.preventDefault();
//     console.log(username.value);
// });


const form=document.querySelector('.signup-form');
//const username=document.querySelector('#username');

form.addEventListener('submit',e=>{
    e.preventDefault();
    //console.log(username.value);
    //accessing using username or id
    console.log(form.username.value);
});

//checking validation using regx exp
const username='sashaun';
//accepts the string greater than size 5 and contains lowercase alphabets
const pattern=/^[a-z]{6,}$/;
//to test or check the string 
let result=pattern.test(username);
console.log(result);

if(result)
{
    console.log('regex test passed:)');
}
else{
    console.log('regex test failed:(');
}

//another method to check match pattern
let resut=username.search(pattern);
//will search for match 
console.log(resut);

