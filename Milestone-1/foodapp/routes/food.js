const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/', foodController.getAllFood);
router.get('/:category', foodController.getFoodByCategory);

module.exports = router;
