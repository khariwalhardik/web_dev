//in js arrays are a collection of elements
//arrays are created using []
//arrays are 0 indexed

//one array can hold multiple data types

let arr=[1,2,3,4];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);

arr[1]=20;
console.log(arr);

console.log(arr.toString());    //converts array to string

console.log(arr.join(" and ")); //converts array to string with specified separator

arr.pop();  //removes last element and return the removed element
console.log(arr);

arr.push("hardik "); //adds element to the end of the array and return the length of the array
console.log(arr);

arr.shift(); //removes the first element and return the removed element
console.log(arr);

arr.unshift("hardik"); //adds element to the beginning of the array and return the length of the array
console.log(arr);

// shift and unshift are slower than pop and push, shift pop ka bhai hai and unshift push ka bhai hai

delete arr[1]; //deletes the element at the specified index
console.log(arr);


//concat() method is used to join two or more arrays
let a1=[1,2,3];
let a2=[4,5,6];
let a3=[7,8,9];

let a4=a1.concat(a2,a3);
console.log(a4);

//slice() method is used to extract a part of an array and return a new array
let a5=a4.slice(2,5);
console.log(a5);

//sort() method is used to sort the elements of an array
let a6=[4,3,2,1];
a6.sort();
console.log(a6);


//splice() method is used to add or remove elements from an array
let a7=[1,2,3,4,5];
let a8=a7.splice(2,2,6,7,8);
console.log(a7);
//this will remove 2 elements starting from index 2 and add 3 elements at index 2



//forEach() method is used to call a function once for each element in an array
let a9=[1,2,3,4,5];
a9.forEach(function(item,index,array){
    console.log(item,index,array);
});


for (const element of a9) {
    console.log(element);
}


//map() method is used to create a new array with the results of calling a function for every array element
// map(element,index,array) this is the syntax of map
let a10=[1,2,3,4,5];
let a11=a10.map(e=>{
    return e**e;
});
console.log(a11);


//filter() method is used to create a new array with the elements that pass the test implemented by the provided function
let a12=[1,2,3,4,5];
let a13=a12.filter(e=>{
    return e>2;
});
console.log(a13);

const greaterThanTwo=(e)=>{
    return e>2;
}
let a14=a12.filter(greaterThanTwo);
console.log(a14);


//reduce() method is used to reduce the array to a single value
let a15=[1,2,3,4,5];
const red=(a,b)=>{
    return a+b;
}
let a16=a15.reduce(red);
console.log(a16);

// convert string to array
let str="hardik";
let a17=Array.from(str);
console.log(a17);