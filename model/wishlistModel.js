const mongoose = require("mongoose");
const wishlistSchema = mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId,require:true, ref: "Product",unique:true },
  user: { type: mongoose.Schema.Types.ObjectId,require:true, ref: "User" },
  quantity:{type:Number,require:true,default:1}
});

exports.Wishlist = mongoose.model("Wishlist", wishlistSchema);
