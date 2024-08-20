function login() {
    var userName = uname.value;
    var passWord = pswd.value;

    var user = JSON.parse(localStorage.getItem(userName));
    
    if (user) { // Check if user exists
        if (passWord === user.password) { // Validate password
            alert("Login successful");
            window.location = 'main.html'; // Redirect to main page
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("User not found");
    }
}
