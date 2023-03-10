const mongoose = require('mongoose');

const PMSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const productManager = mongoose.model('productManager', PMSchema);

module.exports = productManager;
