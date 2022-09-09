const mongoose = require('mongoose');
const Seller = require('./seller');
const Rating = require('./rating')
// Product Schema
const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
    },
    seller: Seller.schema,
    price:{
        type: Number,
        required: true,
       
    },
    description:{
        type: String,
        required: true,
        minlength:3,
        
    },
    category:{
        type: String,
        required: true,
        minlength:3,
        
    },
    rating: Rating.schema,
    image:{
        type: String,
    }
})

module.exports = new mongoose.model('Product', ProductSchema);