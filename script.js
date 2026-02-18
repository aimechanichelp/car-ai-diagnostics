function buyNow(){
    if(localStorage.getItem("loggedIn") !== "true"){
        alert("Please login first");
        openLogin();
        return;
    }

    alert("Proceeding to payment...");
}
// ===== AUTH SYSTEM =====

let mode = "login";

function openSignup() {
    mode = "signup";
    document.getElementById("modalTitle").innerText = "Create Account";
    document.getElementById("authModal").style.display = "block";
}

function openLogin() {
    mode = "login";
    document.getElementById("modalTitle").innerText = "Login";
    document.getElementById("authModal").style.display = "block";
}

function closeModal() {
    document.getElementById("authModal").style.display = "none";
}

function submitAuth() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if(mode === "signup"){
        localStorage.setItem("user", JSON.stringify({email, pass}));
        alert("Account created!");
    } else {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user && user.email === email && user.pass === pass){
            localStorage.setItem("loggedIn", "true");
            alert("Logged in!");
        } else {
            alert("Wrong login");
            return;
        }
    }

    closeModal();
    updateUI();
}

function logout(){
    localStorage.removeItem("loggedIn");
    updateUI();
}

function updateUI(){
    const logged = localStorage.getItem("loggedIn") === "true";
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn){
        logoutBtn.style.display = logged ? "inline-block":"none";
    }
}

updateUI();


// ===== BLOCK BUY UNTIL LOGIN =====

function buyNow(){
    if(localStorage.getItem("loggedIn") !== "true"){
        alert("Please login first");
        openLogin();
        return;
    }

    alert("Proceeding to payment...");
}
