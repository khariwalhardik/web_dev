import mongoose from 'mongoose';
import { Todo } from './models/todo.js';
// Connect to the database
let conn= await mongoose.connect('mongodb://localhost:27017/todo');

import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    let days=Math.floor(Math.random()*10);
    let done=Math.random()>0.5;
    const todo =new Todo({task: 'Learn Python', done: done,days: days});
    todo.save();

    res.send('Hello World!');
}
);

app.get('/a', async (req, res) => {
    let todo=await Todo.find({task: 'Learn Python'});
    res.json(todo);
}
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});