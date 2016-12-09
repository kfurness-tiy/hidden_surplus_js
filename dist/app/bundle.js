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
	
	__webpack_require__(/*! ./styles/main.sass */ 1);
	__webpack_require__(/*! ./firebase_auth.js */ 7);
	__webpack_require__(/*! ./d3_graph.js */ 8);


/***/ },
/* 1 */
/*!**********************************!*\
  !*** ./src/app/styles/main.sass ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../~/css-loader!./../../../~/sass-loader!./main.sass */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../~/style-loader/addStyles.js */ 6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./main.sass", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./main.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/*!*****************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/app/styles/main.sass ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  font-family: \"Lato\", sans-serif;\n  color: #333333;\n  margin: 0; }\n\nhtml, body {\n  height: 100%; }\n\np {\n  font-size: 16px;\n  line-height: 160%; }\n\nbutton {\n  border-radius: 4px;\n  background-color: #72bfb8;\n  border: none;\n  color: white;\n  width: 160px;\n  height: 45px; }\n\n.container-fluid {\n  margin-right: 0;\n  margin-left: 0;\n  padding-right: 0;\n  padding-left: 0; }\n\n.title {\n  font-size: 26px;\n  font-weight: bolder; }\n\n.wrapper {\n  min-height: 100%;\n  margin: 0 auto -58px; }\n\n.site-footer, .push {\n  height: 58px; }\n\n.line {\n  text-decoration: line-through;\n  font-size: 2em;\n  color: white; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  header img {\n    display: inline-block; }\n  header nav {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: right; }\n  header ul {\n    margin-bottom: 0; }\n  header li {\n    display: inline-block;\n    padding: 1em; }\n  header a {\n    color: #333333; }\n  header a:hover {\n    color: #72bfb8;\n    font-weight: bolder; }\n  header button {\n    height: 32px;\n    width: 93px;\n    font-family: 'Maitree', serif; }\n\n.jumbotronDiv {\n  display: flex;\n  height: 550px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-image: url(" + __webpack_require__(/*! ../img/jumbotrong.jpg */ 4) + ");\n  background-repeat: no-repeat;\n  text-align: center; }\n  .jumbotronDiv button {\n    font-size: 18px; }\n  .jumbotronDiv p {\n    color: white;\n    font-size: 55px; }\n  .jumbotronDiv .smallSacrifices {\n    font-weight: lighter; }\n  .jumbotronDiv .bigChange {\n    font-weight: bolder; }\n\n#about {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  #about .title {\n    color: #3b6670;\n    margin-top: 44px;\n    margin-bottom: 22px; }\n  #about p {\n    margin-bottom: 10px;\n    max-width: 700px; }\n    #about p a {\n      color: #3b6670; }\n    #about p a:hover {\n      color: #72bfb8; }\n  #about p:last-child {\n    margin-bottom: 44px; }\n\n.doGoodSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 550px;\n  background-image: url(" + __webpack_require__(/*! ../img/doGood.jpg */ 5) + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  text-align: center; }\n\n#logIn h3 {\n  margin: 30px; }\n\n#logIn p {\n  margin: 15px; }\n\n#logIn button {\n  margin: 30px; }\n\n#form {\n  color: white; }\n  #form div {\n    margin: auto; }\n  #form label {\n    color: white;\n    font-family: \"Maitree\", serif; }\n  #form button {\n    margin: 10px; }\n  #form .signOut {\n    background-color: #9e9d9a; }\n  #form .signOut:hover {\n    background-color: #737372; }\n\n.inline {\n  display: inline-block; }\n\n#logIn p {\n  color: white; }\n\n#logIn h3 {\n  color: white; }\n\n#logIn h2 {\n  color: white; }\n\n#contributions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1271px;\n  margin: auto;\n  background: linear-gradient(to right, #d1d1d1 0%, #faf7fa 29%, #faf7fa 70%, #d1d1d1 100%); }\n  #contributions .title {\n    margin-top: 40px;\n    color: #3b6670; }\n  #contributions svg {\n    margin-bottom: 40px; }\n  #contributions #totalAmounts {\n    font-size: 26px;\n    color: #58948e;\n    margin-bottom: 44px; }\n\n.tooltip {\n  background-color: rgba(252, 252, 252, 0.6);\n  border: 1px solid rgba(211, 209, 209, 0.3);\n  padding: 5px;\n  min-width: 150px;\n  margin: 3px auto;\n  text-align: center;\n  font-weight: bolder;\n  color: black; }\n  .tooltip .dispAmount {\n    font-size: 24px; }\n  .tooltip .dispTo {\n    font-size: 12px;\n    font-style: italic; }\n  .tooltip .dispToText {\n    font-size: 16px; }\n  .tooltip hr {\n    margin: 3px;\n    border: 1px solid rgba(59, 102, 112, 0.4); }\n\n#donations h3 {\n  margin-top: 44px; }\n\n.tooltip.hidden {\n  display: none; }\n\n.growRad {\n  stroke-width: 5;\n  stroke: #50a399; }\n\nfooter {\n  background-color: #3b6670;\n  max-width: 1271px;\n  margin: auto; }\n  footer div {\n    padding: 10px 0; }\n\nbutton:hover {\n  background-color: #58948e; }\n\na:hover {\n  text-decoration: none; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/*!************************************!*\
  !*** ./src/app/img/jumbotrong.jpg ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "src/app/img/jumbotrong.jpg?066520fbba";

/***/ },
/* 5 */
/*!********************************!*\
  !*** ./src/app/img/doGood.jpg ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "src/app/img/doGood.jpg?92a58ccf3e";

/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
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
	  $("#form").hide();     // CHANGE
	  $("#logIn").show();    // CHANGE
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
	function validateForm () {
	  let name = document.getElementById('name').value;
	  let amount = Number(document.getElementById('amount').value);
	  let donateTo = document.getElementById('donateTo').value;
	  let gaveUp = document.getElementById('gaveUp').value;
	  if ( name !== '' && amount !== '' && !isNaN(amount) && donateTo !== '' && gaveUp !== '') {
	  getValueDoGood();
	  return false;
	  }
	  else {
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
	    showNameInfo: $('input[name=showInfo]:checked').val(),
	    postTime: d.getTime(),
	  }
	  addDoGood(doGood);
	  goodDone();
	}
	
	$('#submitForm').click(validateForm);
	$('#showAnotherForm').click(showAnotherForm);


/***/ },
/* 8 */
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
	
	function callFunction(){
	
	  var svgtest = d3.select('body').select('svg');
	
	  if (!svgtest.empty()) {
	    svgtest.remove();
	  }
	
	  let heightPx = $(window).height() * 0.40;
	  let widthPx = $(window).innerWidth() * 0.75;
	
	  var svg = d3.select("#svg").append('svg'),
	    width = svg.attr("width", widthPx),
	    height = svg.attr("height", heightPx),
	    radius = 12;
	
	  var chartGroup = svg.append("g")
	
	  var tooltip = d3.select("body").append("div")
	    .classed("tooltip", true)
	    .style("opacity", "0")
	    .style("position", "absolute");
	
	  let time = new Date();
	  let timeNow = time.getTime();
	  let day = 86400000;
	  let dayOld = timeNow - day;
	
	  function randomWidth() {
	    let num = Math.round(Math.random() * (widthPx - radius * 2) + radius)
	    return num;
	  }
	
	  function randomHeight() {
	    let num = Math.round(Math.random() * (heightPx - radius * 2) + radius)
	    return num;
	  }
	
	  var recentColor = d3.scaleOrdinal()
	      .range(['rgb(30,156,150)', 'rgb(115,191,184)', 'rgb(59,102,112)', 'rgb(158,157,154)', 'rgb(80,163,153)']);
	
	  var color = d3.scaleOrdinal()
	      .range(['rgba(30,156,150,0.2)', 'rgba(115,191,184,0.2)', 'rgba(59,102,112,0.2)', 'rgba(158,157,154,0.2)', 'rgba(80,163,153,0.2)']);
	
	
	  chartGroup.selectAll("circle")
	    .data(arr)
	    .enter().append("circle")
	      .attr("cx", function(d) { return randomWidth() })
	      .attr("cy", function(d) { return randomHeight() })
	      .attr("r", radius)
	      .attr("class", function(d) {
	        if (dayOld <= d.postTime) {
	          return "newer"
	        } else  {
	          return "older"
	        }
	      })
	      .style("fill", function(d, i) {
	          if ($(this).hasClass("newer")) {
	             return recentColor(i);}
	           else {
	             return color(i);
	           }})
	          .on("mouseover", function(d,i,a){
	              this.style.fill = "rgb(51,51,51)"
	              d3.select(this).attr("r", 15)
	                  .classed("growRad", true)
	              tooltip.style("opacity", "5")
	                .style("left",d3.event.pageX+"px")
	                .style("top",d3.event.pageY+"px")
	              d3.select(".tooltip").classed("hidden", false)
	              tooltip.html(function () {
	                if (arr[i].showNameInfo === 'true') {
	                  return '<span class="dispAmount"> $' + arr[i].amount + '</span><br/><span class="dispTo"> donated to </span> <br/> <span class="dispToText"> ' + arr[i].donateTo + '</span><hr/>' + '<span class="dispTo">' + arr[i].name + ' gave up <br/></span>' + '<span class="dispToText">' + arr[i].gaveUp + '</span>'}
	                  else {
	                    return '<span class="dispAmount"> $' + arr[i].amount + '</span><br/><span class="dispTo"> donated to </span><br/><span class="dispToText">' + arr[i].donateTo + '</span><hr/><span class="dispTo"> Anonymous gave up <br/></span><span class="dispToText">' + arr[i].gaveUp + '</span><br/>'
	                  }
	                })
	              })
	          .on("mouseout", function(d, i) {
	             d3.select(".tooltip").classed("hidden", true)
	             d3.select(this).attr("r", 12)
	              .classed("growRad", false)
	              if ($(this).hasClass("newer")) {
	                 this.style.fill = recentColor(i);}
	               else {
	                 this.style.fill = color(i);
	            }})
	}
	
	  d3.select(window).on("resize", callFunction);
	  callFunction();
	});


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map