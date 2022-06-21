const express = require('express');
const routerApi = require('./routes') // the file index.js if automatically looking for so it´s no declared
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World')
});

routerApi(app);


app.listen(port, () => {
  console.log(`Example app listen in port ${port}`)
});
