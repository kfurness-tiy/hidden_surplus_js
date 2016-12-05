'use strict';

var config = {
   apiKey: "AIzaSyAxBPqozNv7Ra_Kn8m9E0l2BWUjMhm_pfI",
   authDomain: "hidden-surplus-js.firebaseapp.com",
   databaseURL: "https://hidden-surplus-js.firebaseio.com",
   storageBucket: "hidden-surplus-js.appspot.com",
   messagingSenderId: "393536735786"
 };

 firebase.initializeApp(config);

 const fbRef = firebase.database().ref();
 const fbDoGood = fbRef.child("doGood");
 const fbUser = fbRef.child('users');

///////////////// Authentication /////////////////////

$(document).ready(function (){
  $("#form").hide();
  $("#signOutNav").hide();
  $("#signOutMsg").hide();
  $("#formSubmitMsg").hide();
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
  $("#signInNav").hide();
  $("#form").show();
  $("#signOutNav").show();
  $("#welcomeUser").html("Hello, " + user.displayName + ". Fill out the form below to do some good!");
};

function signOut () {
  firebase.auth().signOut().then(function() {
    $("#form").hide();
    $("#signOutNav").hide();
    $("#signInNav").show();
    $("#logIn").show();
    $("#signOutMsg").show();
    $("#signOutMsg").html("Your have successfully logged out.");

  }, function(error) {
    $("#signOutMsg").html("We were not able to log you out. Please try again.");
  });
};

$('.signIn').click(signIn);
$('.signOut').click(signOut);

/////////////////// Form //////////////////////////
function goodDone () {
  $('#formSubmitMsg').show();
}

function addDoGood (obj) {
  let doGood = obj;
  const doGoodId = fbDoGood.push().key;
  const newDonation = "new Donation " + fbDoGood.push().key;

  let updates = {};
  let userUpdated = {};
  updates['doGood/' + doGoodId] = doGood;
  userUpdated['users/' + user.uid + '/' + newDonation] = doGood;
  fbRef.update(updates);
  fbRef.update(userUpdated);
}

function getValueDoGood () {
  let doGood = {
    name: document.getElementById('name').value,
    amount: Number(document.getElementById('amount').value),
    donateTo: document.getElementById('donateTo').value,
    gaveUp: document.getElementById('gaveUp').value,
    selectWhat: document.getElementById("selectWhat").value,
    selectWhere: document.getElementById("selectWhere").value,
  }
  addDoGood(doGood);
  goodDone();
  return false;
}


document.getElementById('submitForm').onclick = getValueDoGood;
