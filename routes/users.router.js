const express = require('express')


const router = express.Router();


// Challenge: recive query parameter limit, offset
// Example: http://localhost:3000/users?limit=54&offset=41
router.get('/', (req, res) => {
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


router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    "id": id,
    "name": "Elvira Guzman",
    "edad": 33
  });
});

module.exports = router
