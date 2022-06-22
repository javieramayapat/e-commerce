const express = require('express');
const ProductsService = require('./../services/products.service')
/**
 *  In this case we don´t have acces to the application so let's create a router
 *  It's important to separe the resource and only left fron the route and only
 *  keep the parameters that follow from our collection
 *
 *  ❌ products/:id
 *  ✅ /:id
 */
const router = express.Router();
const service = new ProductsService();

// integrate query parameter size to generate data in a dinamic way
router.get('/', (req, res) => {
  const products = service.findAll();
  res.status(200).json(products);
});

// Challenge: create a route to see the detail of a product
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product =  service.findOne(id);
  res.status(200).json(product);

});


router.post('/', (req, res) => {
  // req.body allow me retrieve the entire contents of the body of the request
  const body = req.body;
  res.status(201).json({
    message: "Created",
    data: body
  })
})


// Challenge: create a put endpoint for a product
router.put('/:id', (req, res) => {
  let { id } = req.params;
  const body = req.body;

  if (id === '999') {
    res.status(404).json({
      message: 'Not Found'
    });
  }

  res.status(200).json({
    message: "update product",
    data: body,
    id: id
  });

});
// Challenge: create a patch endpoint for a product

router.patch('/:id', (req, res) => {
  let { id } = req.params;
  const body = req.body;

  if (id === '999') {
    res.status(404).json({
      message: 'Not Found'
    });
  }

  res.status(200).json({
    message: "Partial Update:",
    data: body,
    id: id
  });
});


// Challenge: create a delete endpoint for a product
router.delete('/:id', (req, res) => {
  let { id } = req.params;

  if (id === '999') {
    res.status(404).json({
      message: 'Not Found'
    });
  }

  res.status(204).json({
    message: "Delete",
    id: id
  })
})


module.exports = router;
