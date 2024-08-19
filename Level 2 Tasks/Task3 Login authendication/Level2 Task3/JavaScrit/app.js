document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register');
    const loginForm = document.getElementById('login');
    const securedPage = document.getElementById('secured-page');
    const authContainer = document.getElementById('auth-container');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');
    const logoutButton = document.getElementById('logout');
    const registerMsg = document.getElementById('register-msg');
    const loginMsg = document.getElementById('login-msg');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    function showForm(formToShow) {
        if (formToShow === 'login-form') {
            authContainer.style.transform = 'translateX(-100%)';
            setTimeout(() => {
                document.getElementById('login-form').style.display = 'block';
                document.getElementById('registration-form').style.display = 'none';
            }, 500);
        } else if (formToShow === 'registration-form') {
            authContainer.style.transform = 'translateX(0)';
            setTimeout(() => {
                document.getElementById('registration-form').style.display = 'block';
                document.getElementById('login-form').style.display = 'none';
            }, 500);
        } else if (formToShow === 'secured-page') {
            authContainer.style.display = 'none';
            securedPage.style.display = 'block';
        }
    }

    showForm('registration-form');

    showLoginLink.addEventListener('click', () => {
        showForm('login-form');
    });

    showRegisterLink.addEventListener('click', () => {
        showForm('registration-form');
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        if (users.find(user => user.username === username)) {
            registerMsg.textContent = 'Username already exists.';
            return;
        }

        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        registerMsg.textContent = 'Registration successful! Logging in...';
        setTimeout(() => showForm('login-form'), 2000);
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            securedPage.style.display = 'block';
            authContainer.style.display = 'none';
            localStorage.setItem('loggedIn', 'true');
        } else {
            loginMsg.textContent = 'Invalid username or password.';
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.setItem('loggedIn', 'false');
        showForm('login-form');
    });

    if (localStorage.getItem('loggedIn') === 'true') {
        showForm('secured-page');
    }
});
