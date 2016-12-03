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

function addDoGood (obj) {
  console.log("obj",obj);
  let doGood = obj;
  const doGoodId = fbDoGood.push().key;

  let updates = {};
  updates['doGood/' + doGoodId] = doGood;
  fbRef.update(updates);
}

function getValue () {
  console.log('pizza');
  let doGood = {
    name: document.getElementById('name').value,
    amount: Number(document.getElementById('amount').value),
    donateTo: document.getElementById('donateTo').value,
    gaveUp: document.getElementById('gaveUp').value,
    selectWhat: document.getElementById("selectWhat").value,
    selectWhere: document.getElementById("selectWhere").value,
  }
  console.log(doGood);
  addDoGood(doGood);
}

document.getElementById('submitForm').onclick = getValue;
