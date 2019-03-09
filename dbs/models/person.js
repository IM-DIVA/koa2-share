const mongoose = require('mongoose')

let personschema = new mongoose.Schema({
    name: String,
    age: Number
})

module.exports = mongoose.model('Person', personschema)