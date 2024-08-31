function validateForm() {
    
    var username = document.getElementById("username").Value;
    var password = document.getElementById("password").Value;
    var confirmPassword = document.getElementById("confirmPassword").Value;


if (username === ""){
    alert("Username Is required.");
    return false;
}


if (password === ""){
    alert("Password Is required.");
    return false;
}


if (confirmPassword === ""){
    alert("Please confirm your password.");
    return false;
}


if (password  !== confirmPassword){
    alert("Passwords do not match.");
    return false;
}

alert("Registration successful!");
return true;

}
