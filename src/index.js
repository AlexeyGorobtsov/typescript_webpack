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
