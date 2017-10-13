const express = require('express')
const router = express.Router()
const Product = require('../models/product')

/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    if (!err) {
      let productChunks = []
      let chunkSize = 4

      for (let i = 0; i < docs.length; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize))
      }

      res.render('shop/index', {
        title: 'Node Shop',
        products: productChunks
      })
    }
  })
})

module.exports = router
