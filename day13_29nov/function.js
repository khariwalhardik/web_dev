function nice(name){
    console.log("Hello "+name);
}
nice("Rahul");

function sum(a,b){
    console.log(a+b);
    return a+b;
}

sum(5,6);

let result=sum(5,6);
console.log("the sum of these numbers is "+result);

// Nan is a special value in js which means not a number 
const func = (x)=> {
    return x*x;
}
//thi is a arrow function

console.log(func(5));