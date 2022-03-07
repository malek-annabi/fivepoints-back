const express =require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app =express();
require('./database/connect');
//.env
require("dotenv").config();

//cors
app.use(cors());

// Configure bodyparser 
app.use(bodyParser.urlencoded({
   extended: false
}));


// database conenction 
connectDb();


// routes imports
require('./api/routes/users')(app);
require('./api/routes/categories')(app);
require('./api/routes/books')(app);


// server start
 app.listen(process.env.PORT || 3500,() =>{
     console.log( "port 3500 hello malek");
 })