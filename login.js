    
  function validate(){
    let email = document.getElementById("email");
    var error = document.getElementById("error");
      let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
      if(regexp.test(email.value)){
          error.innerHTML = "Valid Email Address";
          error.style.color = "green";
          return true;
      }
      else{
          error.innerHTML = " Please Enter Valid Email Address";
          error.style.color = "red";
          return false;
      }
  }
 
  
  function verifyPassword() {  
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Weak Password";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "Shouldn't Be Greater Than 15";  
       return false;  
    } else {  
       document.getElementById("message").innerHTML= "Password is correct"; 
       document.getElementById("message").style.color="green";
       return true; 
    } 
    
  }  