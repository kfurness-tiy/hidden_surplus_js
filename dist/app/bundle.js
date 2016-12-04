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
	
	function addDoGood (obj) {
	  let doGood = obj;
	  const doGoodId = fbDoGood.push().key;
	
	  let updates = {};
	  updates['doGood/' + doGoodId] = doGood;
	  fbRef.update(updates);
	}
	
	function getValue () {
	  let doGood = {
	    name: document.getElementById('name').value,
	    amount: Number(document.getElementById('amount').value),
	    donateTo: document.getElementById('donateTo').value,
	    gaveUp: document.getElementById('gaveUp').value,
	    selectWhat: document.getElementById("selectWhat").value,
	    selectWhere: document.getElementById("selectWhere").value,
	  }
	  addDoGood(doGood);
	}
	
	document.getElementById('submitForm').onclick = getValue;
	
	
	fbDoGood.on('value', (snapshot) => {
	  //displays entire object
	
	  console.log(snapshot.val());
	  console.log(snapshot.key);
	  console.log(snapshot.key.length);
	
	  let data = snapshot.val();
	
	  // let numberness = data.map((c,i,a) => i);
	  // console.log(numberness);
	
	  d3.select(window).on("resize",callFunction);
	  callFunction();
	
	  function callFunction(){
	
	    var svg = d3.select("svg"),
	    width = +svg.attr("width"),
	    height = +svg.attr("height"),
	    radius = 32;
	
	var circles = d3.range(20).map(function() {
	  return {
	    x: Math.round(Math.random() * (width - radius * 2) + radius),
	    y: Math.round(Math.random() * (height - radius * 2) + radius)
	  };
	});
	
	var color = d3.scaleOrdinal()
	    .range(d3.schemeCategory20);
	
	svg.selectAll("circle")
	  .data(circles)
	  .enter().append("circle")
	    .attr("cx", function(d) { return d.x; })
	    .attr("cy", function(d) { return d.y; })
	    .attr("r", radius)
	    .style("fill", function(d, i) { return color(i); })
	    .call(d3.drag()
	        .on("start", dragstarted)
	        .on("drag", dragged)
	        .on("end", dragended));
	
	function dragstarted(d) {
	  d3.select(this).raise().classed("active", true);
	}
	
	function dragged(d) {
	  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
	}
	
	function dragended(d) {
	  d3.select(this).classed("active", false);
	}
	  }
	
	});


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map