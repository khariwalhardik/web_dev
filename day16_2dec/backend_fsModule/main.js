console.log("learning about fs module");

const fs= require('fs');

// console.log(fs);

// console.log("creating a file");
// fs.writeFileSync('read.txt',"hello world");
//this is synchronous function
// console.log("file created");

// console.log("creating a file");
// fs.writeFile('read1.txt',"hello world",()=>{
//     console.log("file created successfully");
//     fs.readFile('read1.txt',(err,data)=>{
//         console.log(err,data);
//         console.log(err,data.toString());

//     });
// });

fs.appendFile('read1.txt',"this is a piece of cake\n",(e,d)=>{
    console.log(e,d);
})
//this is asynchronous function
console.log("file created");