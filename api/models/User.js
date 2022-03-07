// contactModel.js
var mongoose = require('mongoose');


//schema
const userSchema = mongoose.Schema({
        email: String,
        password: String,
        role: String,
        books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
    },
    {
        timestamps:true
      });
      
// User model extraction
module.exports = mongoose.model('User',userSchema);
