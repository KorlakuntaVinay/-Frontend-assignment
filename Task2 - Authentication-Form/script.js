document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let userList = document.getElementById("userList");

    let valid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (valid) {
        // Add user to authenticated list
        let li = document.createElement("li");
        li.textContent = email + " (Authenticated)";
        userList.appendChild(li);

        alert("Login Successful!");
        document.getElementById("loginForm").reset();
    }
});