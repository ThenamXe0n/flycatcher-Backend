const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    products:{type:mongoose.Schema.Types.Array,require:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    totalamount:{type:Number,require:true},
    totalItems:{type:Number,require:true},
    status:{type:String,default:"pending"},
    placed_on:{type:Date, default:Date.now}
})

exports.Order = mongoose.model("Order",orderSchema)