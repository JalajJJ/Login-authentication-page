// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example of simple authentication logic
    // You should replace this with a call to your backend for real authentication
    if (email === "user@example.com" && password === "password123") {
        alert("Login successful!");
        // Redirect to another page or perform other actions
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = "Invalid email or password.";
    }
});
