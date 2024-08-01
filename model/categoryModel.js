const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category: { type: String, require: true ,unique:true},
  value: { type: String, require: true },
  selected: { type: Boolean, default: false },
});

exports.Category = mongoose.model("Category",categorySchema)