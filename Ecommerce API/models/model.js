const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product name is required"],
    trim: true
  },
  productDescription: {
    type: String,
    required: [true, "Product description is required"],
    trim: true,
    maxlength: [1000, "Description must be less than 1000 characters"]
  },
  productCategory: {
    type: String,
    required: [true, "Product category is required"],
    trim: true
  },
  productPrice: {
    type: Number,
    required: [true, "Product price is required"]
  },
  productAvailability: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Product", productSchema);
