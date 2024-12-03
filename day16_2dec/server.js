var slugify=require('slugify');

let a=slugify('Some string with spaces');
console.log(a);

let b=slugify('Some string with @#$%&^$^$^ spaces','_');
console.log(b);

//node js is a server side language and used for backend development

//npm is a package manager for node js 