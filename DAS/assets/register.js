let form = document.register, 
    fullname = form.fullname,
    email = form.email,
    tel = form.tel,
    password = form.password,
    cpassword = form.cpassword;


//form event
 form.addEventListener('submit', function(e){
    if(fullname.value == ''){
        fullname.nextElementSibling.innerText = 'This field is required';
        e.preventDefault();
    }

    if(email.value == ''){
        email.nextElementSibling.innerText = 'This field is required';
        e.preventDefault();
    }

    if(tel.value == ''){
        tel.nextElementSibling.innerText = 'This field is required';
        e.preventDefault();
    }

    if(password.value == ''){
        password.nextElementSibling.innerText = '1 number and 1 special character with minimum 6 characters are required';
        e.preventDefault();
    }

    if(cpassword.value == ''){
        cpassword.nextElementSibling.innerText = 'This field is required';
        e.preventDefault();
    }
 })

 //keyboard event
 fullname.addEventListener('keyup', function(){
    let fullnameRegex = /^[a-zA-Z\s]+$/g
    if(this.value == ''){
        this.nextElementSibling.innerText = 'This field is required';
    }else{
        this.nextElementSibling.innerText = '';
    }
 })

 email.addEventListener('keyup', function(){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(this.value == ''){
        this.nextElementSibling.innerText = 'This field is required';
    }else if(emailRegex.test(this.value) == false){
        this.nextElementSibling.innerText = 'Email is not valid.';
    }
    else{
        this.nextElementSibling.innerText = '';
    }
 })

 tel.addEventListener('keyup', function(){
    let phoneRegex = /(?:\(?\+977\)?)?[9][6-9]\d{8}|01[-]?[0-9]{7}/g //?? = optional
    let phoneChar = /^[0-9]*$/g
    if(this.value == ''){
        this.nextElementSibling.innerText = 'This field is required';
    } else if(phoneChar.test(this.value) == false){
        this.nextElementSibling.innerText = 'Only number format supported';
    }
    else if(phoneRegex.test(this.value) == false){
        this.nextElementSibling.innerText = 'Phone number is not valid.';
    }
    else{
        this.nextElementSibling.innerText = '';
    }
 })
;

 password.addEventListener('keyup', function(){
    if(this.value == ''){
        passwordRegex =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        this.nextElementSibling.innerText = 'This field is required';
    }else{
        this.nextElementSibling.innerText = '';
    }
 })

 cpassword.addEventListener('keyup', function(){
    if(this.value == ''){
        this.nextElementSibling.innerText = 'This field is required';
    }else if(this.value != password.value){
        this.nextElementSibling.innerText = 'Password does not match';
    }
    else{
        this.nextElementSibling.innerText = '';
    }
 })