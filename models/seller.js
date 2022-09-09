const mongoose = require('mongoose')

// Seller Schema

const SellerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    type: {
        type: String,
        required: true,
        minlength: 3,
    },
    location: {
        type: String,
        required: true,
        minlength: 3,
    },
    
})

module.exports = new mongoose.model('Seller', SellerSchema);