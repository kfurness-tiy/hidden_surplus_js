var config = {
   apiKey: "AIzaSyAxBPqozNv7Ra_Kn8m9E0l2BWUjMhm_pfI",
   authDomain: "hidden-surplus-js.firebaseapp.com",
   databaseURL: "https://hidden-surplus-js.firebaseio.com",
   storageBucket: "hidden-surplus-js.appspot.com",
   messagingSenderId: "393536735786"
 };
 firebase.initializeApp(config);

export const fbRef = firebase.database().ref();
export const fbDoGood = fbRef.child("doGood");
