console.log("this is all about variables in javascript");

var a=7;
var b=3;

console.log(a+b);

var c="hk";

console.log(a+c);

console.log(typeof a,typeof c);

// we generally do not use var keyword in modern javascript
// let and const are used instead of var

// var are case sensitive

// var is global scope while let and const are block scope

const a1=7;
// we cannot change the value of a1 because it is a constant


let x=5;
let y=true;
let z="hk";
let p=undefined;
let q=null;
let g=5.5;
console.log(x,y,z,p,q,g);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof g);


let o={
    name:"hk",
    age:21,
    city:"delhi",
    "job role":"developer"

    // we can use space in key but we have to use quotes
    //  key and value are separated by colon
};
console.log(o);
o.age=22;
o.salary=100000;
console.log(o);

console.log(o["job role"]);
console.log(typeof o);