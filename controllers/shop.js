const Product = require('../models/product');

exports.getProducts = (req, res, next) => {

    // error : no products.json file or empty array in products.json file.
    // when 'error' with products.length == 0, it returns [] to shop.ejs file.
    Product.fetchAll(products => {
        res.render('shop/productList', { 
            products, 
            docTitle: 'All Products', 
            path: '/products'
            // hasProducts: products.length > 0,
            // activeShop: true,
            // mainCSS: true
      
         });
    });
        
 }

 exports.getIndex = (req, res, next) => {

    Product.fetchAll(products => {
        res.render('shop/index', { 
            products, 
            docTitle: 'Shop', 
            path: '/'
            // hasProducts: products.length > 0,
            // activeShop: true,
            // mainCSS: true
      
         });
    });

 }

 // '/shop/cart' is wrong. 
 // 'shop/cart' is correct.
 exports.getCart = (req, res, next) => {

    res.render('shop/cart', {
        docTitle: 'Your Cart',
        path: '/cart'
    });
 }

 exports.getOrders = (req, res, next) => {

    res.render('shop/orders', {
        docTitle: 'Your Orders',
        path: '/orders'
    });
 }

 exports.getCheckout = (req, res, next) => {

    res.render('shop/checkout', {
        docTitle: 'Checkout',
        path: '/checkout'
    });
 }

