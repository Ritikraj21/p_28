function show(){
    let nam=document.querySelector('.nam').value;
    let email=document.querySelector('.email').value;
    let mobile=document.querySelector('.mobile').value;
    let password=document.querySelector('.password').value;
    let cpassword=document.querySelector('.cpassword').value;
console.log(nam,email,mobile,password,cpassword);
if(nam === ""){
    window.alert("please enter your name");

    return false;
}
else if(email=== ""){
    window.alert("please fill out this field");
    document.querySelector('.email').focus();
    return false;
}
else if(!email.match(/[@]/)){
window.alert("please include @ in email filed")
document.querySelector('.email').focus();
return false;
}
else if(!(email.includes('@gmail.com') || email.includes('@yahoo.com') ||
 email.includes('@outlook.com'))){
    window.alert("please include gamil.com in email filed")
    document.querySelector('.email').focus();

    return false;
 }
 else if(email=== ""){
    window.alert("please fill out this field");
    document.querySelector('.mobile').focus();
    return false;
}

else if(isNaN(mobile)){
    window.alert("does not include charaters");
    document.querySelector('.mobile').focus();
    document.querySelector('.mobile').value = "";
    return false;

}

else if(mobile.length !== 10){
    window.alert("number should be 10 digit");
    document.querySelector('.mobile').focus();
   
    return false;

}
else if(password === ""){
    window.alert("please fill out this field");
    document.querySelector('.password').focus();
   
    return false;

}
else if(password.length <= 8){
    window.alert("password not less than 8 charater");
    document.querySelector('.password').focus();
   
    return false;

}
else if(password.match(/[1234567890]/)){
    window.alert("password should contain atlest one numeric digit");
    document.querySelector('.password').focus();
   
    return false;

}
else if(password.match(/[!~`@#$%^&*()-+]/)){
    window.alert("password should contain atlest one specil charater");
    document.querySelector('.password').focus();
   
    return false;

}
else if(password.match(/[qwertyuioplkjhgfdsazxcvbnm]/)){
    window.alert("password should contain atlest one alphabet");
    document.querySelector('.password').focus();
   
    return false;

}
else if(password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)){
    window.alert("password should contain atlest one uppercase");
    document.querySelector('.password').focus();
   
    return false;

}

else if(password !== cpassword){
    window.alert("password and confirm password not matched");
    document.querySelector('.passwors').value = "";
    document.querySelector('.cpasswors').value = "";
    document.querySelector('.passwors').focus = "";
return false;
}

else{
    window.alert("Hii Don Kay hal hai");
    window.open("chiku.html");
}


}