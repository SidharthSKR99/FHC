document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    const validUsername = 'user123';
    const validPassword = 'password123';
    
    if (username === validUsername && password === validPassword) {
        alert('Login successful');
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
