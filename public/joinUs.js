var signUpModal = document.getElementById('modal2');
var closeBtn2 = document.getElementById('close2');
var joinUsBtn = document.getElementById('joinUs');

joinUsBtn.onclick = function(){
    signUpModal.style.display = 'block';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

closeBtn2.onclick = function(){
    signUpModal.style.display = 'none';
    document.body.style.backgroundColor = "white";
}