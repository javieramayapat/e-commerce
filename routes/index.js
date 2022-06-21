const productsRouter = require('./products.router.js')
const categoriesRouter = require('./categories.router.js')
const usersRouter = require('./users.router.js')

/**
 * Index.js is going to be the encharger to get the app from the entrypoint and
 * pass it to the routes to enable the functionalities.
 */

function routerApi(app) {
  app.use('/api/v1/products', productsRouter);
  app.use('/api/v1/categories', categoriesRouter);
  app.use('/api/v1/users', usersRouter);
}


module.exports = routerApi
