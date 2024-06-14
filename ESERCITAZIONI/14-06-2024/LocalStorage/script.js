var modal = document.getElementById('id01');
var initialLoginBtn = document.getElementById('initialLoginBtn');
var logoutBtn = document.getElementById('logoutBtn');
const loggedUser = document.querySelector(".loggedUser");


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const psw = "ciao";
const loginBtnModale = document.querySelector(".loginBtnModale");
const userPsw = document.querySelector("#userPsw");
const userName = document.querySelector("#user");
const loginBtn = document.querySelector(".loginBtn");

loginBtnModale.addEventListener('click', (event) => {
    event.preventDefault(); 
    if (userPsw.value == psw) {
        localStorage.setItem('utente', userName.value);
        modal.style.display = "none"; 
        initialLoginBtn.style.display = "none"; 
        logoutBtn.style.display = "block";
        loggedUser.textContent = `Login effettuato dall'utente: ${userName.value}`;
    } else {
        alert("Password errata"); 
    }
});


logoutBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    
    localStorage.removeItem('utente');
    initialLoginBtn.style.display = "block"; 
    logoutBtn.style.display = "none";
    loggedUser.textContent = ``;
     
});