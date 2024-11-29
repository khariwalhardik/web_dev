let a=prompt("Enter the first number");
let b=prompt("Enter the second number");
let c=prompt("Enter the operator");

//generate random number
let random=Math.random();
// this will generate a number between 0 and 1

if(random<=0.1){
    if(c=="+"){console.log(a-b);}
    if(c=="-"){console.log(a/b);}
    if(c=="*"){console.log(a+b);}
    if(c=="/"){console.log(a**b);}
}
else{
    if(c=="+"){console.log(a+b);}
    if(c=="-"){console.log(a-b);}
    if(c=="*"){console.log(a*b);}
    if(c=="/"){console.log(a/b);}
}
