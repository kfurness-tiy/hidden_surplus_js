/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./firebase_auth.js */ 1)
	__webpack_require__(/*! ./form_completion.js */ 2);
	__webpack_require__(/*! ./d3_graph.js */ 3);


/***/ },
/* 1 */
/*!**********************************!*\
  !*** ./src/app/firebase_auth.js ***!
  \**********************************/
/***/ function(module, exports) {

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
	    $("#formSubmitMsg").hide();
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
	  $('#form').hide();
	}
	
	function showAnotherForm () {
	  document.getElementById("doGoodForm").reset();
	  $('#form').show();
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
	  let d = new Date();
	  let doGood = {
	    name: document.getElementById('name').value,
	    amount: Number(document.getElementById('amount').value),
	    donateTo: document.getElementById('donateTo').value,
	    gaveUp: document.getElementById('gaveUp').value,
	    selectWhat: document.getElementById("selectWhat").value,
	    selectWhere: document.getElementById("selectWhere").value,
	    postTime: d.getTime(),
	  }
	  addDoGood(doGood);
	  goodDone();
	  return false;
	}
	
	
	// document.getElementById('submitForm').onclick = getValueDoGood;
	$('#submitForm').click(getValueDoGood);
	$('#showAnotherForm').click(showAnotherForm);


/***/ },
/* 2 */
/*!************************************!*\
  !*** ./src/app/form_completion.js ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';


/***/ },
/* 3 */
/*!*****************************!*\
  !*** ./src/app/d3_graph.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	const fbRef = firebase.database().ref();
	const fbDoGood = fbRef.child("doGood");
	
	fbDoGood.on('value', (snapshot) => {
	
	  let data = snapshot.val();
	  let arr = Object.values(data);
	
	  let total = 0;
	
	  arr.map((c,i,a) => {
	    total += c.amount;
	    return total
	  });
	
	  document.getElementById('totalAmounts').innerHTML = "$" + total;
	
	  d3.select(window).on("resize",callFunction);
	  callFunction();
	
	function callFunction(){
	
	  var svg = d3.select("svg"),
	  width = +svg.attr("width"),
	  height = +svg.attr("height"),
	  radius = 32;
	
	var tooltip = d3.select("body").append("div")
	  .style("opacity", "0").style("position", "absolute");
	
	let time = new Date();
	let timeNow = time.getTime();
	let week = 604800000;
	let weekOld = timeNow - week;
	
	console.log(timeNow);
	console.log(weekOld);
	
	function randomWidth() {
	  let num = Math.round(Math.random() * (width - radius * 2) + radius)
	  return num;
	}
	
	function randomHeight() {
	  let num = Math.round(Math.random() * (height - radius * 2) + radius)
	  return num;
	}
	
	var recentColor = d3.scaleOrdinal()
	    .range(['pink', 'purple', 'silver']);
	
	var color = d3.scaleOrdinal()
	    .range(d3.schemeCategory20);
	    // .range(['black', 'red', 'blue', 'yellow']);
	
	svg.selectAll("circle")
	  .data(arr)
	  .enter().append("circle")
	    .attr("cx", function(d) { return randomWidth() })
	    .attr("cy", function(d) { return randomHeight() })
	    .attr("r", radius)
	    .attr("class", function(d) {
	      console.log(d.postTime);
	      if (weekOld <= d.postTime) {
	        return "meat"
	      } else  {
	        return "potato"
	      }
	    })
	    .style("fill", function(d, i) { return color(i); })
	    .on("mouseover", function(){this.style.fill =
	        "red"})
	        .on("mouseout", function(d,i){this.style.fill = color(i)})
	    .attr("d", function () {return arr})
	    .on("mousemove", function(d,i,a){
	        tooltip.style("opacity", "5")
	          .style("left",d3.event.pageX+"px")
	          .style("top",d3.event.pageY+"px")
	        tooltip.html("Amount: $" + arr[i].amount + "<br/>"
	          + "Donated: " + arr[i].gaveUp + "<br/>" + "Donated to: " + arr[i].donateTo)
	    })
	
	
	  }
	
	});


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map