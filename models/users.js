const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    password:{
        type: String
    },
    country:{
        type: String
    }
})

module.exports = mongoose.model('User', UsersSchema)