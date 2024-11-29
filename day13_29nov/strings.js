console.log("this is strings tutorial for js");

let a="Hardik Khariwal";
console.log(a);

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

let myname="Hardik";
let mysurname="Khariwal";

//template literals

console.log(`My name is ${myname} and my surname is ${mysurname}`);


console.log(myname.concat(mysurname));
console.log(myname.toUpperCase());  
console.log(myname.toLowerCase());
console.log(myname.length);

//string slicing
let str="Hardik Khariwal";

console.log(str.slice(1,9));
console.log(str.slice(4,11));
console.log(str.slice(3));

let nk="Hardik Khari";
let newnk=nk.replace("Khari","khariwal");
console.log(newnk);

let str1="    Hardik Khariwal is a good boy ";
console.log(str1.trim());

console.log(str.charAt(3));
console.log(str.charCodeAt(3));
console.log(str.indexOf("ik"));
