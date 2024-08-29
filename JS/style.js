//Signup page
let nameInputSignup=document.getElementById("nameInputSignup");
let emailInputSignup=document.getElementById("emailInputSignup");
let passwordSignup=document.getElementById("passwordSignup");
let signup=document.getElementById("signup");
let signuplink=document.getElementById("signuplink");
let reqire=document.getElementById("reqire");
let signerror=document.getElementById("signerror");


//Login page
let emailInputLogin=document.getElementById("emailInputLogin");
let passwordLogin=document.getElementById("passwordLogin");
let login=document.getElementById("login");
let loginButtun=document.getElementById("loginButtun");




//Home page
let welcomeName=document.getElementById("welcomeName");
let togglePassword=document.getElementById("togglePassword");
let passwordToggle=document.getElementById("passwordToggle");




var check=0;;
if(localStorage.getItem("signupArr")==null){
    var signupArr=[];
  }else{
    var signupArr= JSON.parse(localStorage.getItem("signupArr"));
  }
function signupAdd(){
    for(var i=0; i<signupArr.length; i++){
        if(emailInputLogin==signupArr[i].userEmail){
            check++;
        }}
        if(namevalidation()&&emailvalidation()&&passwordvalidation()&&check==0){
        var user={
            userName:nameInputSignup.value,
            userEmail:emailInputSignup.value,
            userPassword:passwordSignup.value
        }
        signupArr.push(user);
        localStorage.setItem("signupArr",JSON.stringify(signupArr));
        signupClear();
        signerror.classList.remove("d-none");
        signerror.innerHTML="Success";
        signerror.classList.replace("text-danger","text-success");
    }
    else if(nameInputSignup.value==""||emailInputSignup.value==""||passwordSignup.value==""){
        signerror.classList.remove("d-none");
        signerror.innerHTML="All Input Is Required";
        signerror.classList.replace("text-success","text-danger");
    }else if(check!=0){
        signerror.classList.remove("d-none");
        signerror.innerHTML="this email is already exist";
        signerror.classList.replace("text-success","text-danger");
    }
}


function loginmaya(){
    for( var i=0; i<signupArr.length; i++){
        if(emailInputLogin.value==""&&passwordLogin.value==""){
            reqire.classList.remove("d-none");
            reqire.innerHTML="All input Is required";
        }
        else if(emailInputLogin.value==signupArr[i].userEmail&&passwordLogin.value==signupArr[i].userPassword){
               var index=i;
            localStorage.setItem('index',index);
            login.setAttribute("href","home.html"); 
        break;
       
        }else{
            reqire.classList.remove("d-none");
            reqire.innerHTML="incorrect email or password";
        }
    }
}

function loginclear(){
    emailInputLogin.value="";
    passwordLogin.value="";
}
function signupClear(){
    nameInputSignup.value="";
    emailInputSignup.value="";
    passwordSignup.value="";
}


function namevalidation(){
        var rgex=/[a-zA-Z0-9 ]{3,20}$/;
        var isMatch=rgex.test(nameInputSignup.value);
        if (isMatch){
            return true;
        }else{
            return false;
        }
}
function emailvalidation(){
    var rgex=/[a-zA-Z0-9 ](@){1}[a-z0-9 ](.){1}[a-z]/;
    var isMatch=rgex.test(emailInputSignup.value);
    if (isMatch){
        return true;
    }else{
        return false;
    }
    
}

function passwordvalidation(){
    var rgex=/[a-zA-Z0-9 @#$%^&*]{8,20}/;
    var isMatch=rgex.test(passwordSignup.value);
    if (isMatch){
        return true;
    }else{
        return false;
    }
}

if(togglePassword){
togglePassword.addEventListener("click",function(e) {
        // toggle the type attribute
if(passwordSignup.getAttribute("type")=="password"){
    passwordSignup.setAttribute("type","text");
}else if(passwordSignup.getAttribute("type")=="text"){
    passwordSignup.setAttribute("type","password");
}
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});}


if(passwordToggle){
passwordToggle.addEventListener("click",function(e) {
   
if(passwordLogin.getAttribute("type")=="password"){
    passwordLogin.setAttribute("type","text");
}else if(passwordLogin.getAttribute("type")=="text"){
    passwordLogin.setAttribute("type","password");
}

this.classList.toggle('bi-eye');
});}
var logout=document.getElementById("logout");


if(welcomeName){
     var index=localStorage.getItem("index");
    welcomeName.innerHTML=`welcome ${signupArr[index].userName}`;
}