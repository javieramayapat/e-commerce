const faker = require('faker');


class CategoryService {

  constructor() {
    this.categories = [];
    this.generateCategories();
  }


  generateCategories() {

    let limit = 100;

    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        isActive: faker.datatype.boolean()
      });

    }

  }


  findAll() {
    return this.categories;
  }


  findOne(id) {
    return this.categories.find(element => element.id === id)

  }

  create() {

  }


  update() {

  }


  delete() {


  }

}


module.exports = CategoryService;
