const login = document.getElementById("lgnfrm");
const register = document.getElementById("regfrm");

function loginjs(){
    register.style.display = "none";
    login.style.display = "block";
}

function registerjs(){
   login.style.display = "none";
   register.style.display = "block";
}