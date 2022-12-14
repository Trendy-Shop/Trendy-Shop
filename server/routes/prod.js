var productRouter = require('express').Router();
var productController = require('../controller/prod.controller');


// TODO: Create route handlers for each of the six methods in pokemonController
productRouter.route('/prod')
.get(productController.retrieve)
.post(productController.createOne)

productRouter.route('/:id')
.get(productController.retrieveOne)
.put(productController.updateOne)
.delete(productController.deleteOne)

module.exports = productRouter;