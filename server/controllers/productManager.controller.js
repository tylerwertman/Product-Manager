const productManager = require('../models/productManager.model');

module.exports.findAllProducts = (req, res) => {
    productManager.find()
        .then((allProducts) => {
            res.json({ products: allProducts })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSingleProduct = (req, res) => {
    productManager.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ product: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewProduct = (req, res) => {
    productManager.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.updateExistingProduct = (req, res) => {
    productManager.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExistingProduct = (req, res) => {
    productManager.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
