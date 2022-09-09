const express = require('express');
const router = express.Router();
const Product = require('../models/products');

// Get all Products
router.get("/", async(req, res)=>{
    const products = await Product.find();
    if(!products) res.status(500).send("Something went wrong",error)
    res.send(products);
})

// Create Product
router.post("/", (req, res)=>{
    const product = new Product({
        name:req.body.productName,
        seller:{
            name: req.body.sellerName,
            type: req.body.sellerType,
            location: req.body.sellerLocation,
        },
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        rating:{
            rate: req.body.productRate,
            count: req.body.ratingCount,
        },
        image:req.body.image,
      
    })

    product.save().then(product => {
        res.send(product);
    }).catch((error)=>{
        res.send("Product was not stored in a database", error);
    })
})

// GET Product by Id
router.get("/:productId", async(req,res)=>{
    const product = await Product.findById(req.params.productId);
    if(!product) res.status(500).send("Something went wrong",error)
    res.send(product);
})

// Update Product
router.put("/:productId", async(req,res)=>{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, {
        name:req.body.productName,
        seller:{
            name: req.body.sellerName,
            type: req.body.sellerType,
            location: req.body.sellerLocation,
        },
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        rating:{
            rate: req.body.rate,
            count: req.body.count
        }
    }, {new:true})
    if(!updatedProduct) res.status(404).send("product not found");
    res.send(updatedProduct);
})

// Delete a Product
router.delete("/:productId", async(req, res)=>{
    const deletedProduct = await Product.findByIdAndRemove(req.params.productId);
    if(!deletedProduct) res.status(404).send("product not found");
    res.send(deletedProduct);
})
module.exports = router;
