const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {

    res.render('admin/addProducts', {
        docTitle: 'Add Products',
        path: '/admin/addProducts',
        activeAddProducts: true,
        productCSS: true
    });

}

exports.postAddProducts = (req, res, next) => {
    
    console.log('req.body.title: ', req.body.title);

    const {title, imageUrl, description, price } = req.body;
    
    const product = new Product(title, imageUrl, description, price);

    product.save();

    res.redirect('/');

}

exports.getProducts = (req, res, next) => {

    Product.fetchAll(products => {
        res.render('admin/products', { 
            products, 
            docTitle: 'Admin Products', 
            path: '/admin/products'
      
         });
    });

}