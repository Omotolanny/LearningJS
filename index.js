function validateForm() {
    
    var username = document.getElementById("user").value;
    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("cpwd").value;


if (username === ""){
    alert("Username Is required.");
    return;
}

if (username.endsWith("@gmail.com")){
    alert("Username Is required.");
    return;
} else {
    alert("Please enter a valid Gmail address")
}


if (password === ""){
    alert("Password Is required.");
    return;
}


if (confirmPassword === ""){
    alert("Please confirm your password.");
    return;
}


if (password !== confirmPassword){
    alert("Passwords do not match.");
    return;
}

if (password === confirmPassword){
    alert("Registration successful!");
    return;
}
   

}
