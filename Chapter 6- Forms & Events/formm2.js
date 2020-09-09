const form=document.querySelector('.signup-form');
const feedback=document.querySelector('.feedback');

form.addEventListener('submit', e=>{
    e.preventDefault();
  
    //validation
    const username=form.username.value;
    const usernamePattern=/^[a-zA-Z]{6,12}$/;

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