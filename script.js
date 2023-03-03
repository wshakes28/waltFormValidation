const form = document.querySelector("form")
const fullName = document.querySelector("#fullname")
const phoneNumber = document.querySelector("#phonenumber")
const emailInput = document.querySelector("#emailinput")
const website = document.querySelector("#website")
const password = document.querySelector("#password")
const passwordConfirmation = document.querySelector("#passwordconfirmation")
const register = document.querySelector("#register")
const message = document.querySelector("#message")

let isValid = false
let passwordsMatch = false

let errorbox = document.querySelector(".errorbox")

errorbox = []



function submitInfo(e) {
    e.preventDefault()
    validateInfo()
    
    console.log(e)

} 

function validateInfo() {

   isValid = form.checkValidity()

   if(isValid == false) {
   message.textContent = "Please fill out all fields"
   message.style.borderColor = "red"
   message.style.color = "red"
   return

   }

   

   localStorage.setItem("password", password.value)

   if(password.value === passwordConfirmation.value) {
    passwordsMatch = true
    password.style.borderColor = "green"
    passwordConfirmation.style.borderColor = "green"
    
   } else {
    passwordsMatch = false
    message.textContent = "Passwords do not match!"
    password.style.borderColor = "red"
    passwordConfirmation.style.borderColor = "red"
    return


   }

   if(isValid  && passwordsMatch) {

    message.textContent = "Your registration has been a success!"
   message.style.borderColor = "white"
   message.style.color = "white"
   message.style.backgroundColor = "green"

   }

   
   console.log(isValid)
}






form.addEventListener('submit', submitInfo)