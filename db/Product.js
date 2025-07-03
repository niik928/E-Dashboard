const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
     ProductID: { type: Number, required: true },
    ProductName: { type: String, required: true },
    Category: String,
    Price: Number,
    inStock: Boolean,
    userId: String,
});
module.exports = mongoose.model("products",productSchema);