document
    .getElementById('toggle-password')
    .addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            this.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            this.textContent = '👁️';
        }
    });
document
    .getElementById('login-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[type="password"]');
        const email = emailInput.value;
        const password = passwordInput.value;
        const errorDiv = document.getElementById('error-message');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        let passed = true;

        // Clear and hide previous errors
        errorDiv.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        errorDiv.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';

        // Email validation
        if (!email) {
            emailError.textContent = 'Please enter your email address.';
            emailError.style.display = 'block';
            passed = false;
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailError.style.display = 'block';
                passed = false;
            }
        }

        // Password validation
        if (!password) {
            passwordError.textContent = 'Please enter your password.';
            passwordError.style.display = 'block';
            passed = false;
        } else {
            if (password.length < 8) {
                passwordError.textContent =
                    'Password must be at least 8 characters long.';
                passwordError.style.display = 'block';
                passed = false;
            } else if (!/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
                passwordError.textContent =
                    'Password must include a number and a special character.';
                passwordError.style.display = 'block';
                passed = false;
            }
        }

        // Show a general error if any field is invalid
        if (!passed) {
            errorDiv.textContent = 'Please fix the errors above and try again.';
            errorDiv.style.display = 'block';
        } else {
            alert('Login successful! (This is a placeholder alert.)');
        }
    });
