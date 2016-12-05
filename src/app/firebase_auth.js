'use strict';


$(document).ready(function (){
  $("#form").hide();
})

let user;
let provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;
    showForm();
    writeUserData(user.uid, user.displayName, user.email);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};

function writeUserData(userId, name, email) {
  console.log(userId);
  firebase.database().ref('users/' + userId).set({
    name: name,
    email: email,
  });
}



function showForm() {
  $("#logIn").hide();
  $("#form").show();
  $("#welcomeUser").html("Hello, " + user.displayName + ". Way to do some good!");
};

 // document.getElementsByClassName('signIn').onclick = signIn;
$('.signIn').click(signIn);
