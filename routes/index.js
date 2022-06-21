const express = require('express')

const productsRouter = require('./products.router.js')
const categoriesRouter = require('./categories.router.js')
const usersRouter = require('./users.router.js')

/**
 * Index.js is going to be the encharger to get the app from the entrypoint and
 * pass it to the routes to enable the functionalities.
 *
 * Challenge: Create a master router that allow integrate the suffixes required for api versioning
 * from this format:
 * ❌app.use('/api/v1/products', productsRouter);
 * ❌app.use('/api/v1/categories', categoriesRouter);
 *
 * To this format:
 * app.user('/api/v1', router)
 * ✅route.use('/products', productsRouter);
 */

function routerApi(app) {
  // Creating a master route to add a versioning layer to my api routes
  const router = express.Router();
  app.use('/api/v1', router)

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}


module.exports = routerApi
