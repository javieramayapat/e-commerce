const express = require('express')


const router = express.Router();




// Challenge: recive query parameter limit, offset
// Example: http://localhost:3000/users?limit=54&offset=41
router.get('/', (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "Javier",
      email: "javier@gmail.com"
    },
    {
      id: 1,
      name: "Daniela",
      email: "Daniela@gmail.com",
      example: example
    }
  ]);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    "id": id,
    "name": "Elvira Guzman",
    "edad": 33
  });
});


router.post('/', (req, res) => {
  const body = req.body;

  res.status(201).json({
    message: "created",
    body: body
  });

});


router.put('/:id', (req, res) => {

  const { id } = req.params;
  const body = req.body;

  res.status(200).json({
    message: "Update user",
    id: id,
    body: body
  });
});


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.status(200).json({
    message: "Partial update",
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

module.exports = router
