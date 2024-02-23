const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
    brand: { type: String, require: true },
    value: { type: String, require: true },
    selected: { type: Boolean, default: false },
})

exports.Brand = mongoose.model("Brand",brandSchema)