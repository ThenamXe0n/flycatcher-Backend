const mongoose = require("mongoose");
exports.connectMongoose = async() => {
  try{
    mongoose
    .connect("mongodb://127.0.0.1:27017/flycatcherApi")
    console.log("databse is connected")
  }catch(err){
    console.log({error:err.message})
  }
 
};
