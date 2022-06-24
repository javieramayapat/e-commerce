const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
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


// Challenge: create a route to see the detail of a cataegory
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    "id": id,
    "name": "pants",
    "price": 500

  })
});


// Challenge: create a route which recive multiple params
// example: Get from a special categgory an specific product
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.status(200).json({
    "categoryId": categoryId,
    "productId": productId
  });
});


router.post('/', (req, res) => {

  const body = req.body;

  res.status(200).json({
    message: "Create",
    body: body
  })

});


router.put('/:id', (req, res) => {

  const { id } = req.params;
  const body = req.body;

  res.status(200).json({
    message: "Update",
    id: id,
    body: body
  })

});


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;


  res.status(200).json({
    message: "Partial Update",
    id: id,
    body: body
  });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.status(204).json({
    message: "Delete",
    id: id
  })
});



module.exports = router;
