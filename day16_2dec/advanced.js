//iife concept
// immediately invoked function expression

// (function(){
//     console.log("Hello");
// }
// )();

async function sleep(number){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(number);
        },1000);
    })
}

// let a=await sleep();//this will give error because await can only be used inside an async function
// let b=await sleep();

//iife
(async function main(){
    let a=await sleep(34);
    console.log(a);
    let b=await sleep(353);
    console.log(b);

})();

// main();

    // let x,y=[2,3];this will give undefined because x is not defined
let [x,y]=[2,3];
console.log(x,y);
//concept of destructuring

let [a,b,...rest]=[1,2,3,4,5,6,7,8,9];

console.log(a,b,rest);


let obj={a:1,b:2,c:3,d:4};
let {first,second,...remaining}=obj;    
console.log(first,second,remaining);


let arr=[4,7,3,8];
console.log(Math.max(...arr));//spread operator
// console.log(sum(...arr));


let a1="yes";let b1="no";
let c={a1,b1};
console.log(c);


let objx={...arr};
console.log(objx);//index :value pair will be created

//concept of hoisting   

{
    hello();//function also gets hoisted
    function hello(){
        alpha=10;
        console.log("hello");
        console.log(alpha);

        var alpha=10;//we declared the variable after using it but still it is not giving error because of hoisting
        //this moves to the top of its scope
    }
}




//localstorage 
let nameof;
if(localStorage.getItem("name")){
    a=localStorage.getItem("name");
    document.write("Hello, "+a);
}
else{
    nameof=prompt("Enter your name");
    localStorage.setItem("name",nameof);
    document.write("Hello, "+nameof);
}


//json parsing
let object1={
    name:"John",
    age:23,
    city:"Mumbai",
}
let json=JSON.stringify(object1);
console.log(json);
let object2=JSON.parse(json);
console.log(object2);
