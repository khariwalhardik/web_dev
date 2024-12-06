const fs=require('fs');
const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path =require('path');
const ejs=require('ejs');

const app=express();
const port=3000;
mongoose.connect('mongodb://localhost:27017/myDB');

const myDBschema=require('./models/myDBschema');

app.use(express.static('public'));

//ejs
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    res.render('index');
    // res.send("Hello World");
})

app.use(bodyParser.json());

app.post('/add',(req,res)=>{
    //fixing the error
    let body='';
    req.on('data',(chunk)=>{
        body+=chunk.toString();
    })
    // console.log(req.body);//this outputs undefined
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;

    if(!name || !email || !phone){
        res.send("Please enter all the fields");
        return;
    }
    //adding data to database
    else{   
        console.log(name,email,phone);
        const newEntry=new myDBschema({
            name:name,
            email:email,
            phone:phone
        });
        newEntry.save();
        res.send("Data received");
    }
}) 

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})