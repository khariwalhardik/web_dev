console.log("start CRUD operations");

use("HKdatabase");
console.log(db);


//CREATE
// db.createCollection("money");
// db.money.insertOne({
//     name: "John",
//     age: 25,
//     money: 1000
// });

// db.money.insertMany([
//     {
//         name: "Jane",
//         age: 30,
//         money: 2000
//     },
//     {
//         name: "John",
//         age: 25,
//         money: 3000
//     },
//     {
//         name: "Jane",
//         age: 30,
//         money: 4000
//     },
//     {
//         name: "John",
//         age: 25,
//         money: 5000
//     },
//     {
//         name:"alia",
//         age: 22,
//         money: 6000
//     },
//     {
//         name: "alia",
//         age: 22,
//         money: 7000
//     }
// ]);

//READ
// let a= db.money.find({money: {$gt: 3000}});
// console.log(a);
// let b=a.toArray();

// let c=db.money.findOne({money: {$gt: 3000}});
// console.log(c);

// for (let i=0; i<b.length; i++){
//     console.log(b[i]["name"]);
// }

//UPDATE
// db.money.updateOne({name: "John"}, {$set: {money: 10000}});
// db.money.updateMany({name: "Jane"}, {$set: {money: 20000}});

//DELETE
// db.money.deleteOne({name: "John"});
// db.money.deleteMany({name: "Jane"});


//operators in MongoDB
// $eq
// $gt
// $gte
// $lt
// $lte
// $in
// $nin
// $or
// $and
// $not
// $nor
// $exists
// $type
// $expr
// $jsonSchema
// $mod
// $regex
// $text
// $where
