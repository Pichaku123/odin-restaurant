/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contents: () => (/* binding */ contents),\n/* harmony export */   swapAbout: () => (/* binding */ swapAbout)\n/* harmony export */ });\nconst contents=document.createElement(\"div\");\nconst title=document.createElement(\"h1\");\ntitle.textContent=\"About us-\";\nconst para=document.createElement(\"p\");\npara.textContent=\"<insert my phone no. here>\";\ncontents.appendChild(title);\ncontents.appendChild(para);\n\nconst display=document.querySelector(\"#content\");\nconst swapAbout= () => {\n    display.appendChild(contents);\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/about.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contents: () => (/* binding */ contents),\n/* harmony export */   swapHome: () => (/* binding */ swapHome)\n/* harmony export */ });\nconst contents=document.createElement(\"div\");\nconst title=document.createElement(\"h1\");\ntitle.textContent=\"Welcome to my restaurant!\";\nconst para=document.createElement(\"p\");\npara.textContent=\"this is my super awesome restaurant\";\ncontents.appendChild(title);\ncontents.appendChild(para);\n\nconst display=document.querySelector(\"#content\");\nconst swapHome= () => {\n    display.appendChild(contents);\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n \n\n\n\nconst display=document.querySelector(\"#content\");\nconst homeButton=document.querySelector(\"#home\");\nconst menuButton=document.querySelector(\"#menu\");\nconst aboutButton=document.querySelector(\"#about\");\n\nhomeButton.addEventListener(\"click\", () => {\n    display.innerHTML=\"\";\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.swapHome)();\n});\n\nmenuButton.addEventListener(\"click\", () => {\n    display.innerHTML=\"\";\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.swapMenu)();\n});\n\naboutButton.addEventListener(\"click\", () => {\n    display.innerHTML=\"\";\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__.swapAbout)();\n});\n\n\nconsole.log(\"hi\");\nalert(\"file running fine\");\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contents: () => (/* binding */ contents),\n/* harmony export */   swapMenu: () => (/* binding */ swapMenu)\n/* harmony export */ });\nconst contents=document.createElement(\"div\");\nconst title=document.createElement(\"h1\");\ntitle.textContent=\"This is our menu!\";\nconst para=document.createElement(\"p\");\npara.textContent=\"items here\";\ncontents.appendChild(title);\ncontents.appendChild(para);\n\nconst display=document.querySelector(\"#content\");\nconst swapMenu= () => {\n    display.appendChild(contents);\n}\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;