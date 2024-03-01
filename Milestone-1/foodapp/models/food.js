const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    category: String
});

module.exports = mongoose.model('Food', FoodSchema);
