var currentUser = JSON.parse(localStorage.getItem('currentUser')) || "";
var users = JSON.parse(localStorage.getItem("users"));

if (currentUser) {
    location.href = "../index.html";
}

function login() {
    var loginEmail = document.querySelector("#loginEmail");
    var loginPassword = document.querySelector("#loginPassword");
    var currentUserloop = users.forEach(element => {
        // check the email
        if (element.email === loginEmail.value) {
            // check the password
            if (element.password == loginPassword.value) {
                var currentUserObject = {
                    email: element.email,
                    password: element.password
                }
                localStorage.setItem('currentUser', JSON.stringify(currentUserObject));
                location.href = "../index.html";
            }
        } else if (currentUser) {
            location.href = "../index.html";
        } 
        else {
            location.href = "../signup/signup.html";
        }
    });
}

function gotosignup() {
    location.href = "../signup/signup.html";
}