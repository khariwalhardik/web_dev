let animal={
    eats:true,
}
let rabbit={   
    jumps:true,
}

// rabbit.__proto__=animal; this is the old way of setting the prototype of an object

// creating class using OOPS

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log("animal is created");
        this.eats=true;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    jump(){
        console.log(`${this.name} is jumping`);
    }
}
class lion extends Animal{
    constructor(name,age){
        super(name,age);//super is used to call the constructor of the parent class
        console.log("lion is created");
    }
    roar(){
        console.log(`${this.name} is roaring`);
    }
    eat(){
        super.eat();//super is used to call the method of the parent class
        console.log(`${this.name} is eating meat`);
    }//method overriding


    //static method belongs to the class not to the object
    static king(){
        console.log("lion is the king of the jungle");
    }

}
let obj1=new Animal("dog",4);
console.log(obj1);
let obj2=new Animal("cat",2);
console.log(obj2);

let obj3=new lion("lion",5);
console.log(lion.king());

//instanceof operator is used to check whether the object is the instance of the class or not

console.log(obj3 instanceof lion);
console.log(obj3 instanceof Animal);