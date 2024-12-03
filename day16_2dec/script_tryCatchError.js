let a=prompt("enter the number a");
let b=prompt("enter the number b");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("please enter a valid number");
}
//there are very different types of the error

let sum=parseInt(a)+parseInt(b);    

console.log(`the sum of ${a} and ${b} is ${sum}`);


// console.log(sum*x); //this will throw a reference error because x is not defined


//to handle the error we can use try catch block    
try{
    console.log(sum*x);
}
catch(err){
    console.log("error aa gya hai bhai");
}


//finally block will always run whether there is an error or not

function divide(a,b){
    try{
        if(b==0){
            throw "divide by zero error";
        }
        return a/b;
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("finally block is executed");
    }
}

console.log(divide(10,0));