const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () =>{
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
  container.classList.remove("sign-up-mode");
});

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBal78RRLcOOCG4LVKvrY5OupGc6mpiABY",
    authDomain: "form-4a97f.firebaseapp.com",
    projectId: "form-4a97f",
    storageBucket: "form-4a97f.appspot.com",
    messagingSenderId: "17149906961",
    appId: "1:17149906961:web:bde85044bbe06e214261b0",
    measurementId: "G-7VM00G8FEH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const auth = firebase.auth();

// Sign Up function
  function signUp(){
    var  email = document.getElementById("sign_up_email");
    var  password = document.getElementById("sign_up_password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value)
    promise.catch(e => alert(e.message));

    alert("Signed Up");
    email.value='';
    password.value='';
  }

// Sign In function
  function signIn(){
   var  email = document.getElementById("sign_in_email");
   var  password = document.getElementById("sign_in_password");

   const promise = auth.signInWithEmailAndPassword(email.value, password.value);
   promise.catch(e => alert(e.message));
   alert("Signed In "+email.value);
   email.value='';
   password.value='';
 }

// Sign Out function
 function signOut(){

 		auth.signOut();
 		alert("Signed Out");

 	}


// User state function
 auth.onAuthStateChanged(function(user){
 	if(user){
 		var email = user.email;
 		alert("Active User " + email);
 		//Take user to a different or home page
 		//is signed in
 	}
   else{
 		alert("No Active User");
 		//no user is signed in
 	}
 });
