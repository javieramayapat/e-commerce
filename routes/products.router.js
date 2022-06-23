const express = require('express');
const ProductsService = require('./../services/products.service')
/**
 *  In this case we don´t have acces to the application so let's create a router
 *  It's important to separe the resource and only left fron the route and only
 *  keep the parameters that follow from our collection
 *
 *  ❌ products/:id
 *  ✅ /:id
 *
 *  Note: By using asynchronous functions, we can cache errors using try and catch.
 */
const router = express.Router();
const service = new ProductsService();

// integrate query parameter size to generate data in a dinamic way
router.get('/', async (req, res) => {
  const products = await service.findAll();
  res.status(200).json(products);
});

// Challenge: create a route to see the detail of a product
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.status(200).json(product);

});


router.post('/', async (req, res) => {
  // req.body allow me retrieve the entire contents of the body of the request
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json(newProduct)

});


// Challenge: create a put endpoint for a product
router.put('/:id', async (req, res) => {
  let { id } = req.params;
  const body = req.body;

  const updateProduct = await service.update(id, body);
  res.status(200).json(updateProduct);

});

// Challenge: create a patch endpoint for a product
router.patch('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    const body = req.body;
    const partialUpdateProduct = await service.update(id, body);
    res.status(200).json(partialUpdateProduct);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

});


// Challenge: create a delete endpoint for a product
router.delete('/:id', async (req, res) => {
  let { id } = req.params;

  const response = await service.delete(id)
  res.status(204).json(response)
})


module.exports = router;
