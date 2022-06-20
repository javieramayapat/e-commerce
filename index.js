const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World')
});


app.get('/new-route', (req, res) => {
  res.status(200).send("Hello new route")
});

// integrate query parameter size to generate data in a dinamic way
app.get('/products', (req, res) => {
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


app.get('/categories', (req, res) => {
  res.status(200).json([
    {
      "id": 1,
      "name": "Farmacy",
    },
    {
      "id": 2,
      "name": "Clotes",
    }
  ]);
});


// Chalenge: create a route to see the detail of a product
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    "id": id,
    "name": "t-shirts",
    "price": 150.60
  });
});


// Challenge: recive query parameter limit, offset
// Example: http://localhost:3000/users?limit=54&offset=41
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (!limit && !offset) {
    res.json({
      "message": "No limit and offset recived"
    });
  }

  res.status(200).json({
    "limit": limit,
    "offset": offset
  })
})


// Chalenge: create a route to see the detail of a cataegory
app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    "id": id,
    "name": "pants",
    "price": 500

  })
});
// Chalenge: create a route which recive multiple params
// example: Get from a special categgory an specific product
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.status(200).json({
    "categoryId": categoryId,
    "productId": productId
  });
});


app.get('/people', (req, res) => {
  res.status(200).json([
    {
      "id": 1,
      "name": "Juan Carlos",
      "edad": 26
    },
    {
      "id": 2,
      "name": "Liliana Amaya",
      "edad": 18
    }
  ]);
});

app.get('/people/:id/', (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    "id": id,
    "name": "Elvira Guzman",
    "edad": 33
  });
});


app.listen(port, () => {
  console.log(`Example app listen in port ${port}`)
});
