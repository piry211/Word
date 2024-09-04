function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const username = document.getElementById('login-username').value.trim();

    if (email && password && username) {
        // Redirigir a la página principal después del login
        window.location.href = 'piry.html';
    } else {
        alert('Please enter all required fields.');
    }
}
