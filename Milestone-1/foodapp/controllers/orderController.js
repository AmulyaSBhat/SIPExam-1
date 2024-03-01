const Order = require('../models/order');

// Place an order
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
