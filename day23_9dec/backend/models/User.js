const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    govtId: {
        type: { type: String },
        filePath: { type: String },
    },
    reg: {
        type: { type: String },
        filePath: { type: String },
    },
    work: {
        type: { type: String },
        filePath: { type: String },
    },
});

const userSchema = new mongoose.Schema({
  aboutYourself: { type: String },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    documents: documentSchema,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String, required: true },
// });

// const User = mongoose.model("User", userSchema);