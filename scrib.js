

let loginButton = document.getElementById("loginBtn")
loginButton.addEventListener('click', function(){
   
  let number = 1234567890
  let pinNumber = 1234 

let mobile = document.getElementById("mobileNumber").value 
 let mobileConverted = parseInt(mobile)

 let pin = document.getElementById("password").value 
 let pinConverted = parseInt(pin)

console.log(mobileConverted, pinConverted)

  if(mobileConverted === number && pinConverted === pinNumber){
    window.location.href = "./main.html"
  }else{
    alert('valid number')
  }



})