//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address
    //always remember to use .value to get text from an input field.
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3: get password
    //3.a:set id on the html element
    // 3.b: get hte element
    //3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    //DANGER: Do not verify email password on the client site.
    //STEP-4: VERIFY EMAIL AND PASSWORD 
    if(email === 'farhan@gmail.com' && password === 'farhanthegreat'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})