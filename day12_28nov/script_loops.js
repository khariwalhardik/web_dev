console.log(
    "learning loops in js"
);
for(let i=0; i<5; i++){
    console.log(i);
}

let o={
    name: "Rahul",
    age: 25,
    city: "Bangalore"
};
for(const key in o){
    const element = o[key];
    console.log(key, element);
}

for(const c of "Hardik"){
    console.log(c);
}
// for of is for arrays and strings
// for in is for objects key and value pairs


let i=10;
while(i>0){
    console.log(i);
    i--;
}

i=0;
do{
    console.log(i);
    i++;
}
while(i<10);