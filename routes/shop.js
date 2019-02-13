const express = require('express');
const router = express.Router();

const { getProducts, getIndex, getCart, getCheckout, getOrders } = require('../controllers/shop');

// const { products } = require('../controllers/products');

router.get('/', getIndex);
router.get('/products', getProducts);
router.get('/cart', getCart);
router.get('/orders', getOrders);
router.get('/checkout', getCheckout);

module.exports = router;