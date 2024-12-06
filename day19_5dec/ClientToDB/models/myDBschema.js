const mongoose = require('mongoose');

const myDBschema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('myDBschema', myDBschema);
