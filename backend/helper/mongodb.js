const mongoose = require("mongoose")
require("dotenv").config();

// console.log(process.env.DB_MONGO_URL)

mongoose.connect(
  process.env.DB_MONGO_URL || 'mongodb://localhost:27017/real_estate_management',
  { useNewUrlParser: true },
  function (err, db) {
    if (err) {
      console.log("MongoDB Database Connection Error", err);
    } else {
      
      console.log("MongoDB Connection Done!!");
    }
  }
);



