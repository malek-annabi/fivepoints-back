// mongoose
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
//schema
const bookSchema = mongoose.Schema({
  tittle: String,
  author:String,
  description: String,
  status: String,
  content: String,
},
{
  timestamps:true
});


// Product model extraction
module.exports = mongoose.model('Book',bookSchema);