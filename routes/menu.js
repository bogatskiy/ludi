'use strict';

const express = require('express');
const router = express.Router();
let menu = require('../data/menu/menu');

let obj = {page: 'Меню'};
Object.assign(obj, {menu: menu});

router.get('/', function (req, res) {
  res.render('pages/menu', obj);
});

module.exports = router;