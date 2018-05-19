//modal for signin, modal2 for signup
var signInModal = document.getElementById('modal');
var signUpModal = document.getElementById('modal2');
var signInBtn = document.getElementById('signin');
var signUpBtn = document.getElementById('signup');
var closeBtn = document.getElementById('close');
var closeBtn2 = document.getElementById('close2');
var sidenav = document.getElementById('sidenav');
var backgroundHomepage = document.getElementById('backgroundHomepage')

signInBtn.onclick = function(){
    signInModal.style.display = 'block';
    sidenav.style.display = 'none';
    signUpModal.style.display = 'none';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    //backgroundHomepage.style.filter = "blur(2px)";
}

signUpBtn.onclick = function(){
    signUpModal.style.display = 'block';
    sidenav.style.display = 'none';
    signInModal.style.display = 'none';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    //backgroundHomepage.style.filter = "blur(2px)";
}

closeBtn.onclick = function(){
    signInModal.style.display = 'none';
    document.body.style.backgroundColor = "white";
    //backgroundHomepage.style.filter = "blur(0px)";
}

closeBtn2.onclick = function(){
    signUpModal.style.display = 'none';
    document.body.style.backgroundColor = "white";
    //backgroundHomepage.style.filter = "blur(0px)";
}