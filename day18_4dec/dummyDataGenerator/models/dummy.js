//generating dummy schema

import mongoose from "mongoose";
const Schema=mongoose.Schema;
const dummySchema=new Schema({
    name:String,
    city:String,
    salary:Number,
    age:Number,
    language:String,
    isManager:Boolean
});

const Dummy = mongoose.model('Dummy', dummySchema);
export { Dummy };
