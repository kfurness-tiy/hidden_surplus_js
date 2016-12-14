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
});

let user;
let provider = new firebase.auth.GoogleAuthProvider();

function signIn() {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    user = result.user;
    showForm();
    writeUserData(user.uid, user.displayName, user.email);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
};

function writeUserData(userId, name, email) {
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
  $("#welcomeUser").html("Hello, " + user.displayName + ". <br/> Fill out the form below to do some good!");
};

function signOut () {
  firebase.auth().signOut().then(function() {
    $("#form").hide();
    $("#signOutNav").hide();
    $("#formSubmitMsg").hide();
    $("#signInNav").show();
    $("#logIn").show();
    $("#signOutMsg").show();
    $("#signOutMsg").html("Your have successfully logged out.");
    document.getElementById("doGoodForm").reset();
  }, function(error) {
    $("#signOutMsg").html("We were not able to log you out. Please try again.");
  });
};

$('.signIn').click(signIn);
$('.signOut').click(signOut);

/////////////////// Form //////////////////////////
function validateForm () {
  let name = document.getElementById('name').value;
  let amount = Number(document.getElementById('amount').value);
  let donateTo = document.getElementById('donateTo').value;
  let gaveUp = document.getElementById('gaveUp').value;
  if ( name !== '' && amount !== '' && !isNaN(amount) && donateTo !== '' && gaveUp !== '') {
  getValueDoGood();
  return false;
} else if (name === '') {
  alert("Please fill in your name.")
  return false;
} else if (amount === '' || isNaN(amount)) {
  alert("Please put in a number for the amount donated.")
  return false;
} else if (donateTo === '') {
  alert("Please fill in where you donated to.")
  return false;
} else if (gaveUp === '') {
  alert("Please fill in what you gave up.")
  return false;
} else {
  alert("It looks like some fields were not filled in correctly. Please try again.");
  return false
  }
}

function goodDone () {
  $('#formSubmitMsg').show();
  $('#form').hide();
}

function showAnotherForm () {
  document.getElementById("doGoodForm").reset();
  $('#form').show();
  $('#formSubmitMsg').hide();
}

function addDoGood (obj) {
  let doGood = obj;
  const doGoodId = fbDoGood.push().key;
  const newDonation = "new_donation_" + fbUser.push().key;

  let updates = {};
  let userUpdated = {};
  updates['doGood/' + doGoodId] = doGood;
  userUpdated['users/' + user.uid + '/' + newDonation] = doGood;
  fbRef.update(updates);
  fbRef.update(userUpdated);
}

function getValueDoGood () {
  let d = new Date();
  let doGood = {
    name: document.getElementById('name').value,
    amount: Number(document.getElementById('amount').value),
    donateTo: document.getElementById('donateTo').value,
    gaveUp: document.getElementById('gaveUp').value,
    selectWhat: document.getElementById("selectWhat").value,
    selectWhere: document.getElementById("selectWhere").value,
    showNameInfo: $('input[name=showInfo]:checked').val(),
    postTime: d.getTime(),
    userId: user.uid,
    userName: user.displayName,
  }
  addDoGood(doGood);
  goodDone();
}

$('#submitForm').click(validateForm);
$('#showAnotherForm').click(showAnotherForm);
