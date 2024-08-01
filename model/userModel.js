const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true},
    profile:{type:String,default:"https://cdn.pixabay.com/photo/2023/10/01/15/39/girl-8287665_640.jpg"},
    password:{type:String,required:true},
    contact:{type:String,min:10,max:10},
    role:{type:String,default:"User"},
    address:{type:Array,default:[]}
})

exports.User = mongoose.model("User",userSchema)