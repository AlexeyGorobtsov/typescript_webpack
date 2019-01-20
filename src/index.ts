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

namespace Util {

    export function isEmpty(d: any): boolean {
        return !d;
    }

    export function isUndefined(d: any): boolean {
        return typeof d === 'undefined';
    }

    export const PI = Math.PI;
    export const EXP = Math.E;
}

const EXP = 'TEST';

console.log(Util);
console.log(Util.isEmpty(''));
console.log(Util.isEmpty('asdf'));
console.log(EXP);
console.log(Util.EXP);

const myNumber: number = 10;
const numberArray: number[] = [10, 20, 30, 40];

function log(str: string): void {
    console.log(str);
}

class User<T> {
    constructor(private name: string, private age: number){}
}