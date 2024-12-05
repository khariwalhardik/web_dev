import mongoose from "mongoose";
//creating schema for todo
const todoSchema = new mongoose.Schema({
    //you can add more options like required, unique, default, etc.
    task: String,
    done: Boolean,
    days: Number,
    description:{type:String,default:"No description",required:true,unique:true}
    });
const Todo = mongoose.model('Todo', todoSchema);
export { Todo };