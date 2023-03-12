const mongoose = require('mongoose');

const PMSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description:{
        type: String
    }
}, {timestamps:true})

const productManager = mongoose.model('productManager', PMSchema);

module.exports = productManager;
