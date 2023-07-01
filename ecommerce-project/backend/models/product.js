const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 255,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    maxLength: 1000,
  },
  category: {
    type: String,
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
