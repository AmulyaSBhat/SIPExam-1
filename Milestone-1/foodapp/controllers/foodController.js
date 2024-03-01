const Food = require('../models/food');
const Order = require('../models/order');

// Display a list of available food items with details
exports.getAllFood = async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Implement filters for veg, non-veg, dessert
exports.getFoodByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const foods = await Food.find({ category });
        res.status(200).json(foods);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Enable efficient search by creating an index on the food name field
// Implement auto-recommendations based on entered letters
exports.searchFood = async (req, res) => {
    try {
        const { query } = req.query;
        const regex = new RegExp(query, 'i');
        const foods = await Food.find({ name: regex });
        res.status(200).json(foods);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Allow users to order food
exports.placeOrder = async (req, res) => {
    try {
        const { userId, foodId, addressId, paymentMode } = req.body;

        // Create a new order
        const newOrder = new Order({
            userId,
            foodId,
            addressId,
            paymentMode,
            createdAt: new Date(),
            updatedAt: new Date(),
            status: 'placed' // Set initial status to 'placed'
        });

        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
