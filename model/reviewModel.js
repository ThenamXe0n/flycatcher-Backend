const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "product",
    },
    customerName: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    message: { type: String },
  },
  {
    timestamps: true,
    get: time => time.toDateString()
 }
);

exports.Review = mongoose.model("Review", reviewSchema);
