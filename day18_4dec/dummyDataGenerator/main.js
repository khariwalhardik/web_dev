// import express from 'express'
// // import path from 'path'
// // import mongoose from 'mongoose'
// const app = express()
// const port = 3000
// import ejs from 'ejs';
// app.set('view engine', 'ejs');



// // mongoose.connect('mongodb://localhost:27017/dummyData');
// // export {Dummy} from './dummySchema.js';

// app.get('/', (req, res) => {
//   //we have to render the html file where we have button which is clicked to generate the data
//     res.render('index');
//     //how to listen the event of button click
//     let button=document.getElementsByTagName('button')[0];
//     // button.addEventListener('click',()=>{
//     //     let index=math.floor(math.random()*3);
//     //     console.log('button clicked with index:',index);
//         //generate random index;
//         // let index=Math.floor(Math.random()*3);
//         // let name1=name[index];
//         // index=Math.floor(Math.random()*3);
//         // let city1=city[index];
//         // index=Math.floor(Math.random()*3);
//         // let salary1=salary[index];
//         // index=Math.floor(Math.random()*3);
//         // let age1=age[index];
//         // index=Math.floor(Math.random()*3);
//         // let language1=laguage[index];
//         // let isManager=Math.random()>0.5;

//         // const dummy =new Dummy({name: name1, city: city1,salary: salary1,age: age1,language: language1,isManager: isManager});
//         // dummy.save();
        
//     // })

// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';

const app = express();

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// Dummy data to be generated
let name=['hardik','prateek','sachin'];
let city=['delhi','mumbai','bangalore'];
let salary=[1000000,2000000,3000000];
let age=[25,30,35];
let laguage=['python','java','c++'];



// Middleware to serve static files and parse JSON requests
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Set EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve the main page
app.get('/', (req, res) => {
  res.render('index');
});

//connecting to the database
let conn=await mongoose.connect('mongodb://localhost:27017/dummyData');
//exporting the dummy schema
import {Dummy} from './models/dummy.js';

// Handle button click requests
app.post('/button-click', async (req, res) => {
  let index=Math.floor(Math.random()*3);
  // console.log('Button was clicked on the client!');
  console.log('button clicked with index:',index);
  // res.json({ message: 'Button click received by server!' });
  //initially delete all the data from the database
  await Dummy.deleteMany({});
for(let i=0;i<10;i++){  let name1=name[index];index=Math.floor(Math.random()*3);
  let city1=city[index];index=Math.floor(Math.random()*3);
  let salary1=salary[index];index=Math.floor(Math.random()*3);
  let age1=age[index];index=Math.floor(Math.random()*3);
  let language1=laguage[index];
  let isManager=Math.random()>0.5;
  const dummy =new Dummy({name: name1, city: city1,salary: salary1,age: age1,language: language1,isManager: isManager});
  dummy.save();}
  res.send("Data generated successfully");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
