const faker = require('faker');

/**
 * In a service we need to have the transactional management that we must bring to even one product
 * This represents the Application Business Rules layer.
 * services are often asynchronous processes, since they have a delay time to respond, that is why we can implement async - await
 */
class ProductService {

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

  async create(data) {
    // When I'm going to develop the create method it so important do define
    // the strucure of the object that I'm going to persist in my database

    // using objects desestructurin for mantein only the fields required to cretae my object
    const { name, price, image } = data;

    // Creating the object with only necesary fields
    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      price,
      image
    }

    this.products.push(newProduct);
    return newProduct;

  }


  findAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000);
    })
  }


  async findOne(id) {

    return this.products.find(item => item.id === id)

  }

  async update(id, changes) {

    // look for the id in products
    const index = this.products.findIndex(item => item.id === id);

    if (index === -1) {
      throw new Error("Product Not Found");
    }

    // Get the product before the changes from the database using the previus index
    const product = this.products[index];

    // match the product stored with a new object and insert the previous object and adds the new changes using destructuring
    this.products[index] = {
      ...product,
      ...changes
    }

    return this.products[index];
  }


  async delete(id) {

    // look for the id in the database
    let productIndex = this.products.findIndex(item => item.id === id);

    if (productIndex === -1) {
      throw new Error("Product Not Found")
    }

    this.products.splice(productIndex, 1)

    return { id }

  }

}


module.exports = ProductService
