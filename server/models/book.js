let mongoose = require('mongoose');

// Junhong Ge 300965466 04 March 2021
// crearte a model class
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number 
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);