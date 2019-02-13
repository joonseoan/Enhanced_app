const express = require('express');
const router = express.Router();

const { getAddProducts, postAddProducts, getProducts } = require('../controllers/admin');

// Editing Routes
router.get('/addProducts', getAddProducts);

router.get('/products',getProducts);

router.post('/addProducts', postAddProducts);

module.exports = router;