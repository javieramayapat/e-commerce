const express = require('express')
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World')
});


app.get('/new-route', (req, res) => {
  res.status(200).send("Hello new route")
});


app.get('/products', (req, res) => {
  res.status(200).json({
    "id": 1,
    "name": "Laptop"
  });
});


app.get('/categories', (req, res) => {
  res.status(200).json({
    "id": 1,
    "name": "Farmacy",
  });
});


app.listen(port, () => {
  console.log(`Example app listen in port ${port}`)
});
