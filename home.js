var currentUser = JSON.parse(localStorage.getItem('currentUser')) || "";

if (currentUser === "") {
    location.href = "./signup/signup.html";
}

var greet = document.querySelector(".greet");
greet.innerHTML = currentUser.email;

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}