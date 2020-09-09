const form=document.querySelector('.signup-form');
const feedback=document.querySelector('.feedback');
const usernamePattern=/^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e=>{
    e.preventDefault();
  
    //validation
    const username=form.username.value;
    

    if(usernamePattern.test(username))
    {
        //feedback good info
        feedback.textContent='That Username is valid !!!';
    }
    else{
        //feedback bad info
        feedback.textContent='That Username is NOT valid !!! Username must contains only Alphabets and max of 12 and min of 6 charcater';
    }
});


//live feedback

form.username.addEventListener('keyup', e=>{
    console.log(e);
    console.log(e.target.value, form.username.value);
    if(usernamePattern.test(form.username.value))
    {
        //console.log('pass');
        form.username.setAttribute('class','success');
    }
    else{
        //console.log('fail');
        form.username.setAttribute('class', 'error');
    }
});
