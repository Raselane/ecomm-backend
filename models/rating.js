const mongoose = require('mongoose')

// Rating Schema

const RatingSchema = mongoose.Schema({
    rate: {
        type: Number,
       
    },
    count: {
        type: Number,
      
    },
    
})

module.exports = new mongoose.model('Rating', RatingSchema);