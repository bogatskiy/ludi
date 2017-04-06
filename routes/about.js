'use strict'

const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  let obj = {
    page: 'О нас',
    title: 'Ресторан Бар "ЛЮDИ" IBP Group',
    description: 'Основан в начале 2017 года. Является одним их пяти заведений сети IBP Group.'
  }
  res.render('pages/about', obj)
})

module.exports = router
