import fs from 'fs/promises';

//if i am using type as moudule then we can use await directly
let a= await fs.readFile('read1.txt');

console.log(a.toString());