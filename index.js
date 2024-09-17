function validateForm() {
    
    // var username = document.getElementById("user").value;
    // var password = document.getElementById("pwd").value;
    // var confirmPassword = document.getElementById("cpwd").value;


if (document.getElementById("user").value === ""){
    alert("Username Is required.");
    return;
}


if (document.getElementById("pwd").value === ""){
    alert("Password Is required.");
    return;
}


if (document.getElementById("cpwd").value === ""){
    alert("Please confirm your password.");
    return;
}


if (document.getElementById("pwd").value !== document.getElementById("cpwd").value){
    alert("Passwords do not match.");
    return;
}

if (document.getElementById("pwd").value === document.getElementById("cpwd").value){
    alert("Registration successful!");
    return;
}
   

}
