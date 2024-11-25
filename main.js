/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  document.getElementById("nav-panel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("nav-panel").style.width = "0";
}

function openExtrasMenu() {
    document.getElementById("extras-menu").style.display = "flex";
}

function closeExtrasMenu() {
    document.getElementById("extras-menu").style.display = "none";
}

function confirmExtras() {
    document.getElementById("extras-menu").style.display = "none";
    alert("Extras successfully added");
}

/* Sign In/Sign Up */
const signInForm = document.getElementById('signIn-form');
const signUpForm = document.getElementById('signUp-form');
const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const overlay = document.querySelector('.overlay');

signUpButton.addEventListener('click', () => {
    overlay.style.transform = 'translateX(100%)';
});

signInButton.addEventListener('click', () => {
    overlay.style.transform = 'translateX(0)';
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    };
    localStorage.setItem(userData.email, JSON.stringify(userData));
    alert('Sign Up Successful!');
});

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const userData = JSON.parse(localStorage.getItem(email));
    
    if (userData && userData.password === password) {
        alert('Sign In Successful!');
    } else {
        alert('Invalid email or password.');
    }
});


/* Quantity Selector */
