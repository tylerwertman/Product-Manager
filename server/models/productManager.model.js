const mongoose = require('mongoose');

const PMSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            true,
            "Title is required"
        ],
        minlength: 3
    },
    price: {
        type: Number,
        required: [
            true,
            "Price is required"
        ],
        minlength: 1
    },
    description:{
        type: String,
        required: [
            true,
            "Description is required"
        ],
        minlength: 3
    }
}, {timestamps:true})

const productManager = mongoose.model('productManager', PMSchema);

module.exports = productManager;
