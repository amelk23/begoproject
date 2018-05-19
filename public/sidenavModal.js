var sidenav = document.getElementById('sidenav');
var closeSidenavBtn = document.getElementById('closesidenav');

closeSidenavBtn.onclick = function(){
    sidenav.style.display = "none";
    document.body.style.backgroundColor = "white";
}

if(document.getElementById('sidenavBtn') !== null){
    var sidenavBtnAbout = document.getElementById('sidenavBtn');
    sidenavBtnAbout.onclick = function(){
        sidenav.style.display ="block";
    }
}

else if (document.getElementById('logoBtn') !== null){
    var sidenavBtnSign = document.getElementById('logoBtn');
    var signInModal = document.getElementById('modal');
    var signUpModal = document.getElementById('modal2');
    sidenavBtnSign.onclick = function(){
        sidenav.style.display = "block";
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
}