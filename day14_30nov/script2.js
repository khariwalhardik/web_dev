let boxex=document.getElementsByClassName('box');

let box3 = boxex[2];

box3.style.backgroundColor = 'blue';
box3.style.color = 'white';

let box3byid = document.getElementById('box3');
box3byid.style.backgroundColor = 'green';
box3byid.style.color = 'coral';

//dom searching properties are helpful when the elements are closely related

//querySelector() method returns the first element that matches a specified CSS selector(s) in the document.

let box1byquery = document.querySelector('.box');
box1byquery.style.backgroundColor = 'purple';
box1byquery.style.color = 'yellow';


//querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.
let box3query = document.querySelectorAll('.box')[2];
box3query.style.backgroundColor = 'black';
box3query.style.color = 'white';

// querySelectorAll generate a node list which is a static list of nodes, it does not change as the document changes

//matches the first element that matches the selector
let box1 = document.querySelector('.box');
console.log(box1.matches('.box')); //true

//contains() method returns true if a node is a descendant of a specified node, otherwise false.
let box1byid = document.getElementById('box1')
console.log(box1byid.contains(box1)); //true

console.log(box1byid.contains(box3)); //false

//closest() method returns the first ancestor of the current element (or the current element itself) which matches the selectors given in parameter.
let box1bquery = document.querySelector('.box');
console.log(box1bquery.closest('.container')); //div.container




