document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
      
        if (username === 'usuarioteste' && password === 'senhateste') {
            window.location.href = 'index.html'; 
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });
});
