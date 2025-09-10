// Background image carousel
const backgroundImages = document.querySelectorAll('.background-image');
let currentImageIndex = 0;

// Auto-rotate background images every 2 seconds
function rotateBackgroundImages() {
    backgroundImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    backgroundImages[currentImageIndex].classList.add('active');
}

setInterval(rotateBackgroundImages, 2000);

// Form switching functionality
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchText = document.getElementById('switchText');
const switchBtn = document.getElementById('switchBtn');

let isLogin = true;

function switchToLogin() {
    isLogin = true;
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
    switchText.innerHTML = 'Don\'t have an account? <button id="switchBtn">Sign up now</button>';
    
    // Re-attach event listener to new button
    document.getElementById('switchBtn').addEventListener('click', switchToSignup);
}

function switchToSignup() {
    isLogin = false;
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
    switchText.innerHTML = 'Already have an account? <button id="switchBtn">Sign in</button>';
    
    // Re-attach event listener to new button
    document.getElementById('switchBtn').addEventListener('click', switchToLogin);
}

// Event listeners for toggle buttons
loginBtn.addEventListener('click', switchToLogin);
signupBtn.addEventListener('click', switchToSignup);
switchBtn.addEventListener('click', switchToSignup);

// Password toggle functionality
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Form submission handlers
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log('Login attempt:', { email, password });
    
    // Add your login logic here
    alert('Login form submitted! Check console for details.');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('signupEmail').value,
        password: document.getElementById('signupPassword').value,
        confirmPassword: document.getElementById('confirmPassword').value,
        phone: document.getElementById('phone').value,
        country: document.getElementById('country').value
    };
    
    // Basic password confirmation check
    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    console.log('Signup attempt:', formData);
    
    // Add your signup logic here
    alert('Signup form submitted! Check console for details.');
});

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone);
}

// Real-time validation (optional)
document.getElementById('signupEmail').addEventListener('blur', function() {
    if (!validateEmail(this.value)) {
        this.style.borderColor = '#ef4444';
    } else {
        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }
});

document.getElementById('phone').addEventListener('blur', function() {
    if (!validatePhone(this.value)) {
        this.style.borderColor = '#ef4444';
    } else {
        this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }
});

// Password strength indicator (optional enhancement)
document.getElementById('signupPassword').addEventListener('input', function() {
    const password = this.value;
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    // You can add visual feedback for password strength here
    console.log('Password strength:', strength);
});
