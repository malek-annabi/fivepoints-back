const mongoose = require("mongoose");
require("dotenv").config();



connectDb=()=>{
mongoose
.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connect to MongoDB."))
  .catch(err => console.error("Connection error", err));
}