const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  quantity: { type: Number,default:1},
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// const virtual = CartSchema.virtual("id");
// virtual.get(function () {
//   return this._id;
// });
// CartSchema.set("toJSON", {
//   virtuals: true,
//   versionKey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

exports.Cart = mongoose.model("Cart",cartSchema)
