var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");

function validatePassword(){
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Password don't match");
    }
    else{
        confirmPassword.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;