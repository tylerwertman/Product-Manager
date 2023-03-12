const ProductManagerController = require('../controllers/productManager.controller');

module.exports = app => {
    app.get('/api/products', ProductManagerController.findAllProducts);
    app.get('/api/products/:id', ProductManagerController.findOneSingleProduct);
    app.post('/api/products', ProductManagerController.createNewProduct);
    app.put('/api/products/:id', ProductManagerController.updateExistingProduct);
    app.delete('/api/products/:id', ProductManagerController.deleteAnExistingProduct);
}
