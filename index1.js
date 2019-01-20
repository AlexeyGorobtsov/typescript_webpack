"use strict";
// class User {
//     private isTeacher: boolean;
//     protected age: number = 32;
//     constructor(public name: string, public job: string) {
//     }
//
//     public getAge(): string {
//         return this.age + '';
//     }
// }
//
// class WFM extends User {
//     name: string = 'WFM';
//     constructor(job: string) {
//         super('WFM', job);
//         this.age = 100;
//     }
//
//     getAge(): string {
//         return 'Hello ' + this.age;
//     }
// }
//
// abstract class Car {
//     model: string;
//     year: number = 2010;
//
//     abstract logInfo (info: string): void;
//
//     getCarYear(): number {
//         return this.year;
//     }
// }
//
// class Mercedes extends Car {
//     logInfo(info: string): void {
//         console.log(info);
//     }
// }
//
// const car = new Mercedes();
// console.log(car);
// car.logInfo('info');
// console.log(car.getCarYear());
//
//
// const wfm = new WFM('Fronted');
// console.log(wfm);
// console.log(wfm.getAge());
// const user = new User('Test', 'Frontend');
// interface ILength {
//     length: number;
// }
//
// function getLength(variable: ILength): void {
//     console.log('getLength', variable.length);
// }
//
// const box = {
//     name: 'WFM',
//     length: 20
// };
//
// getLength(box);
// interface IUser {
//     name: string;
//     age?: number;
//     logInfo(info: string): void;
// }
//
// interface IGetYear {
//     getYear(): number;
// }
// const user: IUser = {
//     name: 'WFM',
//     age: 20,
//     logInfo(info) {
//         console.log('Info: ', info)
//     }
// };
// class User implements IUser {
//     name: string = 'user';
//
//     logInfo(info: string): void {
//         console.log(info);
//     }
// }
// function getter(data: any) {
//     return data;
// }
//
// console.log(getter('WFM').length);
// console.log(getter(100));
// function genericGetter<T> (data: T): T {
//     return data;
// }
//
// let str = 'string';
// let newGenericFunction: <T> (d: T) => T = genericGetter;
//
// console.log(newGenericFunction<string>('WFM').length);
// console.log(newGenericFunction<number>(100).toFixed(2));
// function logger(constrFn: Function) {
//     console.log(constrFn)
// }
//
// function shouldLog(flag: boolean): any {
//     return flag ? logger : null;
// }
//
// @shouldLog(false)
// class User {
//     constructor(public name: string, public age: number, public job: string) {
//         console.log('I am new user');
//     }
// }
