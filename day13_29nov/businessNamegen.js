console.log("this is random business name generator");

let n1="Crazy   Amazing Fire    ";
let n2="Engine   Foods    Garments ";
let n3="Bros    Limited Hub     ";

let r1=Math.floor(Math.random()*n1.length);
let r2=Math.floor(Math.random()*n2.length);
let r3=Math.floor(Math.random()*n3.length);

let x1=(n1.length)/3;
let x2=n2.length/3;
let x3=n3.length/3;

console.log(x1,x2,x3);
console.log(r1,r2,r3);
console.log(Math.floor(r1/x1),Math.floor(r2/x2),Math.floor(r3/x3));
let y1=Math.floor(r1/x1);
let y2=Math.floor(r2/x2);
let y3=Math.floor(r3/x3);

console.log(y1,y2,y3);

let result=n1.slice(y1*x1,(y1+1)*x1)+n2.slice(y2*x2,(y2+1)*x2)+n3.slice(y3*x3,(y3+1)*x3);


console.log(result);


