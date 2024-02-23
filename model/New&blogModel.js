const mongoose = require("mongoose");

const newsblogSchema = mongoose.Schema({
    title:{type:String,require:true},
    ImgURL:{type:String,require:true},
    description:{type:String,require:true},
    genre:{type:String,require:true},
    blogtype:{type:String,default:"blog"},
    publishon:{type:Date, default:Date.now},
    blogsource:{type:String},
})

exports.News = mongoose.model("News",newsblogSchema)