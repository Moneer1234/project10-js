var emailinput = document.getElementById("createmail")
var passwordinput = document.getElementById("creatpassword")
var btnlogin = document.getElementById("Signin-btn")
var alluser = []

var user = {
    passworduser: passwordinput.value,
    emailuser: emailinput.value
}

if (localStorage.getItem("allusers")) {
    alluser = JSON.parse(localStorage.getItem("allusers"))
}


btnlogin.addEventListener("click", function () {
    if (isexsist()) {

        window.open("../home.html")
    }
    else {
        document.querySelector(".invalid").classList.remove("d-none")
    }
})

function isexsist() {
    for (var i = 0; i < alluser.length; i++) {
        if (alluser[i].emailuser == emailinput.value && alluser[i].passworduser == passwordinput.value) {
            localStorage.setItem("currentuser", alluser[i].nameuser)
            return true
        }
    }
    return false
}