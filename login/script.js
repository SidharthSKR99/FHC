document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    const validUsername = 'user';
    const validPassword = 'password';
    
    if (username === validUsername && password === validPassword) {
        alert('Login successful');
        document.getElementById('login-image').src = 'https://preview.redd.it/8vhs36c6d3o51.jpg?auto=webp&s=d3eecf10fb47e0e460dc0e8da3143017f650effb';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password(Fraudulent Behaviour)';
    }
});
