import mongoose from "mongoose";

const dummySchema = new mongoose.Schema({
    name: String,
    city: String,
    salary: Number,
    age: Number,
    language: String,
    isManager: Boolean
});

const Dummy = mongoose.model('Dummy', dummySchema);
export { Dummy };