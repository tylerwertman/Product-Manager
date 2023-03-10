const ProductManagerController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/products', ProductManagerController.findAllProducts);
    app.get('/api/products/:id', ProductManagerController.findOneSingleProduct);
    app.put('/api/products/:id', ProductManagerController.updateExistingProduct);
    app.post('/api/products', ProductManagerController.createNewProduct);
    app.delete('/api/products/:id', ProductManagerController.deleteAnExistingProduct);
}
