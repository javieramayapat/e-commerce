const faker = require('faker');

/**
 * In a service we need to have the transactional management that we must bring to even one product
 * This represents the Application Business Rules layer.
 */
class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  /**
   * Generate create ain memory faker products to simulate the work of a real databse but in memory
   */
  generate() {
    let limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }

  }

  create() {

  }


  findAll() {
    return this.products;
  }

  findOne(id) {

    return this.products.find(item => item.id === id)

  }

  update() {

  }


  delete() {

  }

}


module.exports = ProductsService
