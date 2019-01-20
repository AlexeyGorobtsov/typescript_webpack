/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// function addShowAbility(constructorFn: Function) {
//     constructorFn.prototype.showHtml = function() {
//         const pre = document.createElement('pre');
//         pre.innerHTML = JSON.stringify(this);
//         document.body.appendChild(pre);
//     }
// }
//
// @addShowAbility
// class User {
//     constructor(public name: string, public age: number, public job: string) {}
// }
//
// let user = new User('WFM', 20, 'Frontend');
// console.log(user
// );
// (<any>user).showHtml();
var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    Util.isEmpty = isEmpty;
    function isUndefined(d) {
        return typeof d === 'undefined';
    }
    Util.isUndefined = isUndefined;
    Util.PI = Math.PI;
    Util.EXP = Math.E;
})(Util || (Util = {}));
var EXP = 'TEST';
console.log(Util);
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('asdf'));
console.log(EXP);
console.log(Util.EXP);
var myNumber = 10;
var numberArray = [10, 20, 30, 40];
function log(str) {
    console.log(str);
}
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscURBQXFEO0FBQ3JELHNEQUFzRDtBQUN0RCxxREFBcUQ7QUFDckQsZ0RBQWdEO0FBQ2hELDBDQUEwQztBQUMxQyxRQUFRO0FBQ1IsSUFBSTtBQUNKLEVBQUU7QUFDRixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLGtGQUFrRjtBQUNsRixJQUFJO0FBQ0osRUFBRTtBQUNGLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIsS0FBSztBQUNMLDBCQUEwQjtBQUUxQixJQUFVLElBQUksQ0FZYjtBQVpELFdBQVUsSUFBSTtJQUVWLFNBQWdCLE9BQU8sQ0FBQyxDQUFNO1FBQzFCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRmUsWUFBTyxVQUV0QixDQUFBO0lBRUQsU0FBZ0IsV0FBVyxDQUFDLENBQU07UUFDOUIsT0FBTyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQUM7SUFDcEMsQ0FBQztJQUZlLGdCQUFXLGNBRTFCLENBQUE7SUFFWSxPQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNiLFFBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUMsRUFaUyxJQUFJLEtBQUosSUFBSSxRQVliO0FBRUQsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDO0FBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUV0QixJQUFNLFFBQVEsR0FBVyxFQUFFLENBQUM7QUFDNUIsSUFBTSxXQUFXLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUUvQyxTQUFTLEdBQUcsQ0FBQyxHQUFXO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsQ0FBQztBQUVEO0lBQ0ksY0FBb0IsSUFBWSxFQUFVLEdBQVc7UUFBakMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVE7SUFBRSxDQUFDO0lBQzVELFdBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQyJ9

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map