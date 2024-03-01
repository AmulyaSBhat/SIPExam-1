const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: String,
    foodId: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: String
});

module.exports = mongoose.model('Order', OrderSchema);
