// let a=prompt("Enter a number");
let a=50;
let fact=1;
for (let i = 1; i <= a; i++) {
    fact*=i;
}
console.log(fact);

// using reduce
// let b=prompt("Enter a number");
let b=5;
let arr=[];
for (let i = 1; i <= b; i++) {
    arr.push(i);
}
const red=(a,b)=>{
    return a*b;
}
let c=arr.reduce(red);
console.log(c);