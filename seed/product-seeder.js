const Product = require('../models/product')

const mongoose = require('mongoose')

mongoose.connect('localhost:27017/nodeshop')

const products = [
  new Product({
    imagePath: '/images/products/placeholder.svg',
    title: 'Product One',
    description: 'This is the description of the product one',
    price: 10
  }),
  new Product({
    imagePath: '/images/products/placeholder.svg',
    title: 'Product Two',
    description: 'This is the description of the product Two',
    price: 18
  }),
  new Product({
    imagePath: '/images/products/placeholder.svg',
    title: 'Product Three',
    description: 'This is the description of the product Three',
    price: 5
  }),
  new Product({
    imagePath: '/images/products/placeholder.svg',
    title: 'Product Four',
    description: 'This is the description of the product Four',
    price: 22
  })
]

let done = 0
for (let index = 0; index < products.length; index++) {
  products[index].save(function () {
    done++
    if (done === products.length) {
      exit()
    }
  })
}

function exit () {
  mongoose.disconnect()
}
