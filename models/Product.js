const conn = require('../db/conn')

class Product {
  constructor(name,image, price, description) {
    this.name = name
    this.image = image
    this.price = price
    this.description = description
  }

  save() { 
    const product = conn.db().collection('products').insertOne({ 
      name: this.name, //"name" é o nome do parametro do document e o "this.name" seria o parametro do objeto construido.
      image: this.image,//"image" é o nome do parametro do document e o "this.image" seria o parametro do objeto construido.
      price: this.price, //"price" é o nome do parametro do document e o "this.price" seria o parametro do objeto construido.
      description: this.description, //"description" é o nome do parametro do document e o "this.description" seria o parametro do objeto construido.
    });
    return product;
  }

  static getProducts(){
    const products = conn.db().collection('products').find().toArray();
      return products;
  }

}

module.exports = Product;