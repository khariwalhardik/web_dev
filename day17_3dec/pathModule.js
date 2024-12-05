import path from 'path';

// console.log(path);

let mypath=`C:/Users/HP/Desktop/NodeJS/NodeJS-Training/day17_3dec/pathModule.js`;
console.log(path.basename(mypath));
console.log(path.dirname(mypath));
console.log(path.extname(mypath));

console.log(path.join("C:/","Users","HP","Desktop","NodeJS"));