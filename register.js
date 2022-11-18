 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
 import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
        
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCT7v_NAYEVXjB3TgbRjGO5IuMn-8G3CEE",
   authDomain: "hashdefine-50e36.firebaseapp.com",
   databaseURL: "https://hashdefine-50e36-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "hashdefine-50e36",
   storageBucket: "hashdefine-50e36.appspot.com",
   messagingSenderId: "51576220241",
   appId: "1:51576220241:web:5257e7c453641128c62670"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const auth = getAuth();

document.getElementById('btn').addEventListener("click",(e)=>{
var email=document.getElementById('email').value;
var password=document.getElementById('pass').value;
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
window.open("./signup.html")
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
// ..
});

});        




