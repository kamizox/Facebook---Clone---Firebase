import { createUserWithEmailAndPassword, getAuth } from "./config.js";

window.Signup = (event) =>
{
    event.preventDefault();
    
    let email = document.getElementById("email-phone");
    let password = document.getElementById("New-Password");


    const auth = getAuth();
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}