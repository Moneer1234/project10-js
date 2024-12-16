var nameinput = document.getElementById("creatName")
var emailinput = document.getElementById("createmail")
var passwordinput = document.getElementById("creatpassword")
var signbtn = document.getElementById("SignUp-btn")
var allusers = []

if (JSON.parse(localStorage.getItem("allusers"))) {
    allusers = JSON.parse(localStorage.getItem("allusers"))
}
signbtn.addEventListener("click", function () {
    adduser()
})

// add sign up
function adduser() {
    if (exsist()) {

        var user = {
            nameuser: nameinput.value,
            emailuser: emailinput.value,
            passworduser: passwordinput.value
        }

        allusers.push(user)
        localStorage.setItem("allusers", JSON.stringify(allusers))
        clear()
        document.querySelector(".exsist").classList.add("d-none")
        window.open("../index.html ")
    }
    else {
        document.querySelector(".exsist").classList.remove("d-none")
    }
}

// clear
function clear() {
    nameinput.value = null
    emailinput.value = null
    passwordinput.value = null
}

function exsist() {
    for (var i = 0; i < allusers.length; i++) {
        if (allusers[i].emailuser == emailinput.value) {
            return false
        }
    }
    return true
}