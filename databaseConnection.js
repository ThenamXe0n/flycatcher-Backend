require("dotenv").config();
const mongoose = require("mongoose");
exports.connectMongoose = async() => {
  try{
    mongoose
    .connect(process.env.DB_URL)
    console.log("databse is connected")
  }catch(err){
    console.log({error:err.message})
  }
 
};
