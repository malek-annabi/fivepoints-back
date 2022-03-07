// mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Book = require('../models/Book');


//schema
const categorySchema = mongoose.Schema({
        name: String,
        description: String,
        books: [{type: Schema.Types.ObjectId, ref: 'Book'}],
        status: String,
    },
    {
        timestamps:true
      })
    ;

    
//category model Extraction
module.exports = mongoose.model('Category',categorySchema);