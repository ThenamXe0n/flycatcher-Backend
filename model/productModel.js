const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    product:{type:String,require:true},
    thumbnail:{type:String,require:true},
    price:{type:Number,require:true},
    brand:{type:String},
    category:{type:String},
    sub_category:{type:String},
    rating:{type:Number,default:0,max:5, min:0},
    images:{type:mongoose.Schema.Types.Array},
    discription:{type:String},
    finalprice:{type:Number,require:true},
    keywords:{type:String} ,
    stock:{type:Number,require:true}
})


const virtual = ProductSchema.virtual('productid');
virtual.get(function(){
    return this.id
})
ProductSchema.set('toJSON',{
    virtuals: true,
    versionKey:false,
    transform:function(doc,ret){delete ret.id;delete ret._id}
})


exports.Product = mongoose.model('Product',ProductSchema)