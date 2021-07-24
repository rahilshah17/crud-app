const mongoose = require('mongoose');

const userSchema = require("./schema");

const Product = mongoose.model("Products", userSchema);

module.exports = Product;