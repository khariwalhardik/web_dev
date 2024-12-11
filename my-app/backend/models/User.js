const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    govtId: {
        type: { type: String },
        IdNumber: { type: String},
    },
    reg: {
        type: { type: String },
        IdNumber: { type: String},
    },
    work: {
        type: { type: String },
        IdNumber: { type: String},
    },
});

const userSchema = new mongoose.Schema({
    aboutYourself: { type: String },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    documents: documentSchema,
    workplace: { type: String }, // New field
    address: { type: String },   // New field
    dob: { type: Date },         // New field
    profilePic: { type: String } // New field
});

const User = mongoose.model("User", userSchema);
module.exports = User;
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String, required: true },
// });

// const User = mongoose.model("User", userSchema);