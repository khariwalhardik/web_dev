console.log("i am hardik");
console.log("i am khariwal");

setTimeout(() => {
    console.log("i am khari inside setTimeout");
}, 1000);

console.log("i am hardik khariwal");
//this is the asynchronous nature of javascript1    

const callback1 = (arg) => {
    console.log(arg);
}
const callback2 = (arg) => {
    console.log(arg);
}
const loadscript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    document.head.append(sc);
    sc.onload=callback("KHariwal");
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" ,callback1);


let prom1=new Promise((resolve,reject)=>{
    let a=Math.floor(Math.random()*10);
    if(a%2==0){
        reject("i am hardik");  
    }
else{    setTimeout(()=>{
        resolve("i am khariwal");
    },2000);}
});

prom1.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
});


//we can also use catch method to catch the error
