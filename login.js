    
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
 
