const express = require('express');
const faker = require('faker');

/**
 *  In this case we don´t have acces to the application so let's create a router
 *  It's important to separe the resource and only left fron the route and only
 *  keep the parameters that follow from our collection
 *
 *  ❌ products/:id
 *  ✅ /:id
 */
const router = express.Router();

// integrate query parameter size to generate data in a dinamic way
router.get('/', (req, res) => {
  const { size } = req.query;
  const products = []
  let limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.status(200).json(products);
});

// Challenge: create a route to see the detail of a product
router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    "id": id,
    "name": "t-shirts",
    "price": 150.60
  });
});


module.exports = router;
