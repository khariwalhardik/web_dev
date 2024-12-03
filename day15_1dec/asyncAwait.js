// console.log("i am hardik ");

// console.log("getting data from server");

// console.log("loading data");

// function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data is loaded");
//             resolve("data");
//         },5000);
//     }
//     )
// }
// let data=getdata();
// //this will be running in the background for 5sec and then it will be printed

// console.log("yes data is loaded");
// console.log(data);
// // but the below line will be printed first and then the data will be loaded due to async nature of js



async function getdata(){
    let x= await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data=await x.json();
    console.log(data);
    return data;
}
async function main(){
    console.log("task1");
    console.log("getting data from server");
    console.log("loading data");
    let data= await getdata();
    //now this will be runnig for the 5sec and then the data will be printed and the below code will run after the data is loaded

    console.log(data);

    console.log("task2 ");
    console.log("i am hardik");
    console.log("yes data is loaded");
}

main();

//settling of the promise means either it is resolved or rejected
//resolved means promise is fullfilled
//rejected means promise is not fullfilled


// fetch api is used to get the data from the server
// fetch is a promise based api
// fetch is used to get the data from the server



