const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('passwordtwo');

    form.addEventListener('submit',(e)=>{

        e.preventDefault();
         checkinputs()

    })

    function checkinputs(){

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const passwordtwoValue = passwordtwo.value.trim();

        if(usernameValue === ''){
            errorValidation(username,'Preencha esse Campo')
        } else { successValidation(username)};

        if(emailValue === ''){
            errorValidation(email,'Preencha esse Campo')
        }else { successValidation(email)}

        if(passwordValue === ''){
            errorValidation(password,'Preencha esse Campo')
        }else if(passwordValue.length < 8){
            errorValidation(password,'Minimo 8 Caractéres')
        }else{successValidation(password)}

        if(passwordtwoValue === ''){
            errorValidation(passwordtwo,'Preencha esse Campo')
        }else if(passwordValue !== passwordtwoValue){
            errorValidation(passwordtwo ,'As Senhas Estão Incorretas')
        } else {successValidation(passwordtwo)}

    }

    function errorValidation(input, message){
        const formControl = input.parentElement;
        const small =formControl.querySelector('small')

        small.innerText = message;
        formControl.className = 'form-control error'
    }

    function successValidation(input){
        const formControl = input.parentElement;

        formControl.className = 'form-control success'
    

    }