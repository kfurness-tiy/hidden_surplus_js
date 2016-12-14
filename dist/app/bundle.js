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
	__webpack_require__(/*! ./login_form.js */ 7);
	__webpack_require__(/*! ./scatter_plot_chart.js */ 8);
	__webpack_require__(/*! ./where_to_donate_graph.js */ 9);
	__webpack_require__(/*! ./what_to_donate_graph.js */ 10);

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
	exports.push([module.id, "@font-face {\n  font-family: 'Lato';\n  src: font-files(\"./Lato-Light.ttf\"); }\n\n* {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 300;\n  color: #333333;\n  margin: 0; }\n\nhtml, body {\n  height: 100%; }\n\np {\n  font-size: 16px;\n  line-height: 160%; }\n\nbutton {\n  border-radius: 4px;\n  background-color: #72bfb8;\n  border: none;\n  color: white;\n  width: 160px;\n  height: 45px; }\n\ni {\n  color: white;\n  margin-right: 6px; }\n\n.container-fluid {\n  margin-right: 0;\n  margin-left: 0;\n  padding-right: 0;\n  padding-left: 0; }\n\n.title {\n  font-size: 26px; }\n\n.wrapper {\n  min-height: 100%;\n  margin-bottom: -58px; }\n\n.wrapper:after {\n  content: \"\";\n  display: block; }\n\n.site-footer, .wrapper:after {\n  height: 58px; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n  header .logo {\n    display: inline-block;\n    padding: 8px 0; }\n  header nav {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: right; }\n  header ul {\n    margin-bottom: 0; }\n  header li {\n    display: inline-block;\n    padding: 1em; }\n  header a {\n    color: #333333; }\n  header a:hover {\n    color: #72bfb8;\n    font-weight: bolder; }\n  header button {\n    height: 32px;\n    width: 93px;\n    font-family: 'Maitree', serif; }\n\n.jumbotronDiv {\n  display: flex;\n  height: 550px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-image: url(" + __webpack_require__(/*! ../img/jumbotrong.jpg */ 4) + ");\n  background-repeat: no-repeat;\n  text-align: center; }\n  .jumbotronDiv button {\n    font-size: 18px; }\n  .jumbotronDiv p {\n    color: white;\n    font-size: 55px;\n    font-weight: 500; }\n  .jumbotronDiv .line {\n    font-weight: lighter;\n    line-height: 1;\n    text-align: center; }\n    .jumbotronDiv .line span {\n      display: inline-block;\n      position: relative;\n      color: white;\n      font-weight: lighter;\n      margin: 10px; }\n    .jumbotronDiv .line span:before,\n    .jumbotronDiv .line span:after {\n      content: '';\n      position: absolute;\n      height: 35px;\n      border-bottom: 2px solid rgba(255, 255, 255, 0.4);\n      top: 0;\n      width: 140px; }\n    .jumbotronDiv .line span:before {\n      right: 100%;\n      margin-right: 20px; }\n    .jumbotronDiv .line span:after {\n      left: 100%;\n      margin-left: 20px; }\n\n#toggleButton {\n  background-color: #72bfb8;\n  padding: 5px; }\n\n#about {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  #about .title {\n    color: #3b6670;\n    margin-top: 44px;\n    margin-bottom: 22px; }\n  #about p {\n    margin-bottom: 10px;\n    max-width: 700px; }\n    #about p a {\n      color: #3b6670; }\n    #about p a:hover {\n      color: #72bfb8; }\n  #about p:last-child {\n    margin-bottom: 44px; }\n\n.doGoodSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 550px;\n  background-image: url(" + __webpack_require__(/*! ../img/doGood.jpg */ 5) + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  text-align: center; }\n\n#form .title {\n  color: white; }\n\n#form h2 {\n  color: white;\n  font-weight: 300; }\n\n#form div {\n  margin: auto; }\n\n#form label {\n  color: white;\n  font-size: 16px;\n  font-weight: 300; }\n\n#form .typeInput input {\n  height: 40px;\n  margin: 5px 1vw;\n  width: 25vw;\n  font-size: 18px;\n  padding: 10px; }\n\n#form button {\n  margin: 10px; }\n\n#form select {\n  height: 30px;\n  background: white;\n  font-size: 16px; }\n\n#form .signOut {\n  background-color: #9e9d9a; }\n\n#form .signOut:hover {\n  background-color: #737372; }\n\n#form .dropdown {\n  display: inline-block;\n  margin: 20px 6vw; }\n\n#form .inline {\n  display: inline-block;\n  margin: 10px;\n  color: white; }\n\n.dash {\n  line-height: 1;\n  margin-top: 10px; }\n  .dash span {\n    display: inline-block;\n    position: relative;\n    color: white;\n    font-weight: 500; }\n  .dash span:before,\n  .dash span:after {\n    content: '';\n    position: absolute;\n    height: 15px;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.4);\n    top: 0;\n    width: 120px; }\n  .dash span:before {\n    right: 100%;\n    margin-right: 15px; }\n  .dash span:after {\n    left: 100%;\n    margin-left: 15px; }\n\n#formSubmitMsg h3 {\n  color: white; }\n\n#formSubmitMsg p {\n  color: white; }\n\n#logIn p {\n  color: white; }\n\n#logIn h3 {\n  color: white; }\n\n#logIn h2 {\n  color: white; }\n\n#logIn p {\n  margin: 15px; }\n\n#logIn button {\n  margin: 30px;\n  font-size: 16px; }\n\n#logIn #signOutMsg {\n  font-weight: 300; }\n\n#contributions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1271px;\n  margin: auto;\n  background: linear-gradient(to right, #d1d1d1 0%, #faf7fa 29%, #faf7fa 70%, #d1d1d1 100%); }\n  #contributions .title {\n    margin-top: 40px;\n    color: #3b6670; }\n  #contributions svg {\n    margin-bottom: 15vh;\n    max-width: 1200px; }\n\n.tooltip {\n  background-color: rgba(252, 252, 252, 0.6);\n  border: 1px solid rgba(211, 209, 209, 0.3);\n  padding: 5px;\n  min-width: 150px;\n  margin: 3px auto;\n  text-align: center;\n  color: black; }\n  .tooltip .dispAmount {\n    font-size: 24px; }\n  .tooltip .dispTo {\n    font-size: 12px;\n    font-style: italic; }\n  .tooltip .dispToText {\n    font-size: 16px; }\n  .tooltip hr {\n    margin: 3px;\n    border: 1px solid rgba(59, 102, 112, 0.4); }\n\n.tooltip.hidden {\n  display: none; }\n\n.totalAmounts {\n  max-width: 1656px;\n  text-align: center;\n  padding: 15px;\n  background-color: #50a399; }\n  .totalAmounts p {\n    font-weight: 300;\n    color: white;\n    text-transform: uppercase;\n    margin-bottom: 0px;\n    font-size: 22px; }\n  .totalAmounts #totalAmounts {\n    font-size: 36px;\n    font-weight: 500;\n    margin-bottom: 0px; }\n\n#donations h3 {\n  margin-top: 44px;\n  color: #3b6670; }\n\n#donations .hoverMsg {\n  font-style: italic;\n  font-size: 14px;\n  margin-top: 10px; }\n\n.tooltipBar {\n  font-size: 16px;\n  text-align: center;\n  background-color: rgba(252, 252, 252, 0.8);\n  border: 1px solid rgba(211, 209, 209, 0.3); }\n  .tooltipBar .hidden {\n    display: none; }\n  .tooltipBar .fromDisp {\n    font-style: italic;\n    font-size: 14px; }\n\n.growRad {\n  stroke-width: 5;\n  stroke: #50a399; }\n\n.donate {\n  margin-bottom: 20px; }\n\n#whereDonateChartDiv text {\n  font-size: 16px; }\n\nsvg.bar {\n  padding-bottom: 10px;\n  margin-bottom: 10px; }\n\ng.hideAxis line,\ng.hideAxis path {\n  display: none; }\n\nfooter {\n  background-color: #3b6670;\n  max-width: 1656px;\n  margin: auto; }\n  footer div {\n    padding: 10px 0; }\n\nbutton:hover {\n  background-color: #58948e; }\n\na:hover {\n  text-decoration: none; }\n\n@media (max-width: 992px) {\n  header .logo {\n    width: 275px;\n    padding: 8px 0; }\n  nav ul {\n    padding: 0; }\n  nav li {\n    font-size: 12px;\n    padding: 3px; } }\n\n@media (max-width: 767px) {\n  nav {\n    float: right; }\n    nav ul li {\n      display: block; }\n  header {\n    display: block; } }\n\n@media (max-width: 700px) {\n  .jumbotronDiv {\n    background-size: cover; }\n    .jumbotronDiv p {\n      font-size: 35px; }\n    .jumbotronDiv .line span:before,\n    .jumbotronDiv .line span::after {\n      height: 22px;\n      width: 70px; }\n  #form .typeInput input {\n    display: block;\n    margin: 10px auto;\n    width: auto; }\n  #doGood {\n    background-size: cover;\n    height: auto; } }\n\n@media (max-width: 600px) {\n  #doGood {\n    background-color: #3b6670;\n    background-size: cover;\n    height: auto; } }\n\n@media (max-width: 480px) {\n  .line span:before,\n  .line span:after {\n    display: none; }\n  .title {\n    font-size: 22px; }\n  #form .dash span:before,\n  #form .dash span:after {\n    width: 60px; } }\n\n@media (max-width: 410px) {\n  header .logo {\n    width: 200px;\n    padding: 8px 0; }\n  nav button {\n    width: 80px; } }\n\n@media (max-width: 379px) {\n  h3:first-child {\n    margin-top: 25px; }\n  .dash {\n    margin-top: 7px; } }\n", ""]);
	
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
/*!*******************************!*\
  !*** ./src/app/login_form.js ***!
  \*******************************/
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
	
	var fbRef = firebase.database().ref();
	var fbDoGood = fbRef.child("doGood");
	var fbUser = fbRef.child('users');
	
	///////////////// Authentication /////////////////////
	
	$(document).ready(function () {
	  $("#form").hide();
	  $("#signOutNav").hide();
	  $("#signOutMsg").hide();
	  $("#formSubmitMsg").hide();
	});
	
	var user;
	var provider = new firebase.auth.GoogleAuthProvider();
	
	function signIn() {
	  firebase.auth().signInWithPopup(provider).then(function (result) {
	    var token = result.credential.accessToken;
	    user = result.user;
	    showForm();
	    writeUserData(user.uid, user.displayName, user.email);
	  }).catch(function (error) {
	    var errorCode = error.code;
	    var errorMessage = error.message;
	    var email = error.email;
	    var credential = error.credential;
	  });
	};
	
	function writeUserData(userId, name, email) {
	  firebase.database().ref('users/' + userId).set({
	    name: name,
	    email: email
	  });
	}
	
	function showForm() {
	  $("#logIn").hide();
	  $("#signInNav").hide();
	  $("#form").show();
	  $("#signOutNav").show();
	  $("#welcomeUser").html("Hello, " + user.displayName + ". <br/> Fill out the form below to do some good!");
	};
	
	function signOut() {
	  firebase.auth().signOut().then(function () {
	    $("#form").hide();
	    $("#signOutNav").hide();
	    $("#formSubmitMsg").hide();
	    $("#signInNav").show();
	    $("#logIn").show();
	    $("#signOutMsg").show();
	    $("#signOutMsg").html("Your have successfully logged out.");
	    document.getElementById("doGoodForm").reset();
	  }, function (error) {
	    $("#signOutMsg").html("We were not able to log you out. Please try again.");
	  });
	};
	
	$('.signIn').click(signIn);
	$('.signOut').click(signOut);
	
	/////////////////// Form //////////////////////////
	function validateForm() {
	  var name = document.getElementById('name').value;
	  var amount = Number(document.getElementById('amount').value);
	  var donateTo = document.getElementById('donateTo').value;
	  var gaveUp = document.getElementById('gaveUp').value;
	  if (name !== '' && amount !== '' && !isNaN(amount) && donateTo !== '' && gaveUp !== '') {
	    getValueDoGood();
	    return false;
	  } else if (name === '') {
	    alert("Please fill in your name.");
	    return false;
	  } else if (amount === '' || isNaN(amount)) {
	    alert("Please put in a number for the amount donated.");
	    return false;
	  } else if (donateTo === '') {
	    alert("Please fill in where you donated to.");
	    return false;
	  } else if (gaveUp === '') {
	    alert("Please fill in what you gave up.");
	    return false;
	  } else {
	    alert("It looks like some fields were not filled in correctly. Please try again.");
	    return false;
	  }
	}
	
	function goodDone() {
	  $('#formSubmitMsg').show();
	  $('#form').hide();
	}
	
	function showAnotherForm() {
	  document.getElementById("doGoodForm").reset();
	  $('#form').show();
	  $('#formSubmitMsg').hide();
	}
	
	function addDoGood(obj) {
	  var doGood = obj;
	  var doGoodId = fbDoGood.push().key;
	  var newDonation = "new_donation_" + fbUser.push().key;
	
	  var updates = {};
	  var userUpdated = {};
	  updates['doGood/' + doGoodId] = doGood;
	  userUpdated['users/' + user.uid + '/' + newDonation] = doGood;
	  fbRef.update(updates);
	  fbRef.update(userUpdated);
	}
	
	function getValueDoGood() {
	  var d = new Date();
	  var doGood = {
	    name: document.getElementById('name').value,
	    amount: Number(document.getElementById('amount').value),
	    donateTo: document.getElementById('donateTo').value,
	    gaveUp: document.getElementById('gaveUp').value,
	    selectWhat: document.getElementById("selectWhat").value,
	    selectWhere: document.getElementById("selectWhere").value,
	    showNameInfo: $('input[name=showInfo]:checked').val(),
	    postTime: d.getTime(),
	    userId: user.uid,
	    userName: user.displayName
	  };
	  addDoGood(doGood);
	  goodDone();
	}
	
	$('#submitForm').click(validateForm);
	$('#showAnotherForm').click(showAnotherForm);

/***/ },
/* 8 */
/*!***************************************!*\
  !*** ./src/app/scatter_plot_chart.js ***!
  \***************************************/
/***/ function(module, exports) {

	'use strict';
	
	var fbRef = firebase.database().ref();
	var fbDoGood = fbRef.child("doGood");
	
	fbDoGood.on('value', function (snapshot) {
	
	  var data = snapshot.val();
	  var arr = Object.values(data);
	  var total = 0;
	
	  arr.map(function (c, i, a) {
	    total += c.amount;
	    return total;
	  });
	
	  document.getElementById('totalAmounts').innerHTML = "$" + total.toFixed(2);
	
	  function callFunction() {
	
	    var svgtest = d3.select('body').select('.scatter');
	
	    if (!svgtest.empty()) {
	      svgtest.remove();
	    }
	
	    var heightPx = $(window).height() * 0.40;
	    var widthPx = $(window).innerWidth() * 0.75;
	
	    var svg = d3.select("#svg").append('svg').classed("scatter", true),
	        width = svg.attr("width", widthPx),
	        height = svg.attr("height", heightPx),
	        radius = 12;
	
	    var chartGroup = svg.append("g");
	
	    var tooltip = d3.select("body").append("div").classed("tooltip", true).style("opacity", "0").style("position", "absolute");
	
	    var time = new Date();
	    var timeNow = time.getTime();
	    var day = 86400000;
	    var dayOld = timeNow - day;
	
	    function randomSize(unit) {
	      var num = Math.round(Math.random() * (unit - radius * 2 + 5) + radius);
	      return num;
	    }
	
	    var recentColor = d3.scaleOrdinal().range(['rgb(30,156,150)', 'rgb(115,191,184)', 'rgb(59,102,112)', 'rgb(158,157,154)', 'rgb(80,163,153)']);
	
	    var color = d3.scaleOrdinal().range(['rgba(30,156,150,0.2)', 'rgba(115,191,184,0.2)', 'rgba(59,102,112,0.2)', 'rgba(158,157,154,0.2)', 'rgba(80,163,153,0.2)']);
	
	    var eventFocus = function eventFocus(d, i, a, self) {
	      self.style.fill = "rgb(51,51,51)";
	      d3.select(self).attr("r", 15).classed("growRad", true);
	      tooltip.style("opacity", "5").style("left", d3.event.pageX + "px").style("top", d3.event.pageY + "px");
	      d3.select(".tooltip").classed("hidden", false);
	      tooltip.html(function () {
	        if (arr[i].showNameInfo === 'true') {
	          return '<span class="dispAmount"> $' + arr[i].amount + '</span><br/><span class="dispTo"> donated to </span> <br/> <span class="dispToText"> ' + arr[i].donateTo + '</span><hr/>' + '<span class="dispTo">' + arr[i].name + ' gave up <br/></span>' + '<span class="dispToText">' + arr[i].gaveUp + '</span>';
	        } else {
	          return '<span class="dispAmount"> $' + arr[i].amount + '</span><br/><span class="dispTo"> donated to </span><br/><span class="dispToText">' + arr[i].donateTo + '</span><hr/><span class="dispTo"> Anonymous gave up <br/></span><span class="dispToText">' + arr[i].gaveUp + '</span><br/>';
	        }
	      });
	    };
	
	    var eventErase = function eventErase(d, i, a, self) {
	      d3.select(".tooltip").classed("hidden", true);
	      d3.select(self).attr("r", 12).classed("growRad", false);
	      if ($(self).hasClass("newer")) {
	        self.style.fill = recentColor(i);
	      } else {
	        self.style.fill = color(i);
	      }
	    };
	
	    chartGroup.selectAll("circle").data(arr).enter().append("circle").attr("cx", function (d) {
	      return randomSize(widthPx);
	    }).attr("cy", function (d) {
	      return randomSize(heightPx);
	    }).attr("r", radius).attr("class", function (d) {
	      if (dayOld <= d.postTime) {
	        return "newer";
	      } else {
	        return "older";
	      }
	    }).style("fill", function (d, i) {
	      if ($(this).hasClass("newer")) {
	        return recentColor(i);
	      } else {
	        return color(i);
	      }
	    }).on("mouseover", function (d, i, a) {
	      var self = this;
	      eventFocus(d, i, a, self);
	    }).on("touchstart", function (d, i, a) {
	      var self = this;
	      eventFocus(d, i, a, self);
	    }).on("mouseout", function (d, i, a) {
	      var self = this;
	      eventErase(d, i, a, self);
	    }).on("touchend", function (d, i, a) {
	      var self = this;
	      eventErase(d, i, a, self);
	    });
	  }
	
	  $(window).resize(callFunction);
	  d3.select(window).on("resize", callFunction);
	  callFunction();
	});

/***/ },
/* 9 */
/*!******************************************!*\
  !*** ./src/app/where_to_donate_graph.js ***!
  \******************************************/
/***/ function(module, exports) {

	'use strict';
	
	var fbRef = firebase.database().ref();
	var fbDoGood = fbRef.child("doGood");
	
	fbDoGood.on('value', function (snapshot) {
	
	  function whereToDonateDonut() {
	
	    var svgtest = d3.select('body').select('.pie');
	
	    if (!svgtest.empty()) {
	      svgtest.remove();
	    }
	
	    var fbData = snapshot.val();
	    var dataArr = Object.values(fbData);
	    var selectWhere = [];
	
	    dataArr.map(function (c, i, a) {
	      selectWhere.push(c.selectWhere);
	    });
	
	    var width = function width() {
	      if ($(window).innerWidth() > 752) {
	        return $(window).innerWidth() * 0.30;
	      } else {
	        return $(window).innerWidth() * 0.75;
	      }
	    };
	    var height = function height() {
	      if ($(window).innerWidth() > 752) {
	        return $(window).innerWidth() * 0.30;
	      } else {
	        return $(window).innerWidth() * 0.75;
	      }
	    };
	    var radius = Math.min(width(), height()) / 2.5,
	        donutWidth = 80;
	
	    var color = d3.scaleOrdinal().range(['rgba(30,156,150,0.4)', 'rgba(115,191,184,0.4)', 'rgba(59,102,112,0.4)', 'rgba(158,157,154,0.4)', 'rgba(80,163,153,0.4)', 'rgba(121,121,121,0.4)']);
	
	    var hoverColor = d3.scaleOrdinal().range(['rgb(30,156,150)', 'rgb(115,191,184)', 'rgb(59,102,112)', 'rgb(158,157,154)', 'rgb(80,163,153)', 'rgb(121,121,121)']);
	
	    var finalData = genData();
	
	    function genData() {
	      var where = ['charity', 'family', 'school', 'fundraiser', 'other'];
	
	      var dataset = new Array();
	
	      where.map(function (c, i, a) {
	        var printedCategory = ['Charity', 'Family/Friend', 'School', 'Fundraiser', 'Other'];
	        var total = 0;
	        selectWhere.map(function (j) {
	          if (c === j) {
	            total += 1;
	          }
	        });
	        var obj = { "category": printedCategory[i], "total": total, "pieTotal": dataArr.length };
	        dataset.push(obj);
	      });
	      return dataset;
	    }
	
	    var svg = d3.select("#whereDonateChartDiv").append("svg").classed("pie", true).attr("width", width()).attr("height", height()).append("g").attr("transform", "translate(" + width() / 2 + "," + height() / 2 + ")");
	
	    var arc = d3.arc().innerRadius(radius - donutWidth).outerRadius(radius);
	
	    var pie = d3.pie().value(function (d) {
	      return d.total;
	    }).sort(null);
	
	    var eventFocus = function eventFocus(d, i, a, self) {
	      self.style.fill = hoverColor(i);
	      d3.select(self).transition().attr('d', arc.innerRadius(radius * 0.5).outerRadius(radius * 1.05));
	      showInfo(d);
	    };
	
	    var eventErase = function eventErase(d, i, a, self) {
	      self.style.fill = color(i);
	      d3.select(self).transition().attr('d', arc.innerRadius(radius - donutWidth).outerRadius(radius));
	      removeInfo(d);
	    };
	
	    var path = svg.selectAll('path').data(pie(finalData)).enter().append('path').attr('d', arc).attr('fill', function (d, i) {
	      return color(i);
	    }).on("mouseover", function (d, i, a) {
	      var self = this;
	      eventFocus(d, i, a, this);
	    }).on("touchstart", function (d, i, a) {
	      var self = this;
	      eventFocus(d, i, a, this);
	    }).on("mouseout", function (d, i, a) {
	      var self = this;
	      eventErase(d, i, a, self);
	    }).on("touchend", function (d, i, a) {
	      var self = this;
	      eventErase(d, i, a, self);
	    });
	
	    var circle = svg.append("circle").attr("r", radius * 0.6).style("fill", "white");
	
	    function showInfo(e) {
	      var newArr = [];
	      svg.append("text").data(function () {
	        return Object.values(e);
	      }).attr("text-anchor", "middle").attr("dominant-baseline", "middle").style("fill", "black").text(function (d, i) {
	        var percent = Math.floor(d.total / d.pieTotal * 100);
	        return d.category + " " + percent + "%";
	      });
	    }
	
	    function removeInfo() {
	      svg.selectAll("text").style("visibility", "hidden");
	    }
	  }
	
	  $(window).resize(whereToDonateDonut);
	  d3.select(window).on("resize", whereToDonateDonut);
	  whereToDonateDonut();
	});

/***/ },
/* 10 */
/*!*****************************************!*\
  !*** ./src/app/what_to_donate_graph.js ***!
  \*****************************************/
/***/ function(module, exports) {

	'use strict';
	
	var fbRef = firebase.database().ref();
	var fbDoGood = fbRef.child("doGood");
	
	fbDoGood.on('value', function (snapshot) {
	
	  function whatToDonateBar() {
	
	    var svgtest = d3.select('body').select('.bar');
	
	    if (!svgtest.empty()) {
	      svgtest.remove();
	    }
	
	    var printedCategory = ['Food/Beverage', 'Beauty', 'Clothing/Accesories', 'Enertainment', 'Service', 'Other'];
	
	    var fbData = snapshot.val();
	    var dataArr = Object.values(fbData);
	    var selectWhat = [];
	
	    dataArr.map(function (c) {
	      selectWhat.push(c.selectWhat);
	    });
	
	    var getData = function getData() {
	      var arr = ['food', 'beauty', 'clothing', 'entertainment', 'service', 'product'];
	
	      var dataset = new Array();
	
	      arr.map(function (c, i) {
	        var total = 0;
	        selectWhat.map(function (d) {
	          if (c === d) {
	            total += 1;
	          }
	        });
	        var obj = { "category": printedCategory[i], "total": total };
	        dataset.push(obj);
	      });
	      return dataset;
	    };
	
	    var finalData = getData();
	
	    var color = d3.scaleOrdinal().range(['rgba(30,156,150,0.4)', 'rgba(115,191,184,0.4)', 'rgba(59,102,112,0.4)', 'rgba(158,157,154,0.4)', 'rgba(80,163,153,0.4)', 'rgba(121,121,121,0.4)']);
	
	    var hoverColor = d3.scaleOrdinal().range(['rgb(30,156,150)', 'rgb(115,191,184)', 'rgb(59,102,112)', 'rgb(158,157,154)', 'rgb(80,163,153)', 'rgb(121,121,121)']);
	
	    function getYAxis() {
	      var totalArr = [];
	      finalData.map(function (c, i) {
	        totalArr.push(c.total);
	      });
	      var maxNum = Math.max.apply(Math, totalArr);
	      return maxNum;
	    }
	
	    var maxTotal = getYAxis();
	
	    var width = function width() {
	      if ($(window).innerWidth() > 752) {
	        return $(window).innerWidth() * 0.30;
	      } else {
	        return $(window).innerWidth() * 0.75;
	      }
	    };
	    var height = function height() {
	      if ($(window).innerWidth() > 752) {
	        return $(window).innerWidth() * 0.30;
	      } else {
	        return $(window).innerWidth() * 0.50;
	      }
	    };
	
	    var tooltip = d3.select("body").append("div").attr("class", "tooltipBar").style("opacity", "0").style("position", "absolute");
	
	    var x = d3.scaleBand().domain(printedCategory).range([0, width()]).paddingInner(0.1176);
	
	    var xAxis = d3.axisBottom(x);
	
	    var svg = d3.select("#whatDonateChartDiv").append("svg").classed("bar", true).attr("height", height()).attr("width", width());
	
	    var eventFocus = function eventFocus(d, i, a, self) {
	      self.style.fill = hoverColor(i);
	      tooltip.style("opacity", "5").style("left", d3.event.pageX - 50 + "px").style("top", d3.event.pageY - 70 + "px");
	      d3.select(".tooltipBar").classed("hidden", false);
	      tooltip.html('<span class="totalBarDisp">' + d.total + ' donations' + '</span> <br/> <span class="fromDisp"> from </span> <br/> <span class="categoryDisp">' + d.category + '</span>');
	    };
	
	    var eventErase = function eventErase(d, i, a, self) {
	      self.style.fill = color(i);
	      d3.select(".tooltipBar").classed("hidden", true);
	    };
	
	    svg.selectAll("rect").data(finalData).enter().append("rect").attr("height", function (d) {
	      return d.total * 15;
	    }).attr("width", function (d, i) {
	      var wide = Math.floor(width() / 6 - 5);
	      return wide;
	    }).attr("x", function (d, i) {
	      return width() / 6 * i;
	    }).attr("y", function (d, i) {
	      return height() - 20 - d.total * 15;
	    }).attr("fill", function (d, i) {
	      return color(i);
	    }).on("mouseover", function (d, i, a) {
	      var self = this;
	      eventFocus(d, i, a, self);
	    }).on("touchstart", function (d, i, a) {
	      var self = this;
	      eventFocus(d, i, a, self);
	    }).on("mouseout", function (d, i, a) {
	      var self = this;
	      eventErase(d, i, a, self);
	    }).on("touchend", function (d, i, a) {
	      var self = this;
	      eventErase(d, i, a, self);
	    });
	  }
	
	  $(window).resize(whatToDonateBar);
	  d3.select(window).on("resize", whatToDonateBar);
	  whatToDonateBar();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map