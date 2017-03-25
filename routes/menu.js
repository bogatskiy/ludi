'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');


router.get('/', function (req, res) {
  let obj = {page: 'Меню'};
  const Model = mongoose.model('menu');

  Model.find().then(menus => {
    Object.assign(obj, {menu: menus});
    res.render('pages/menu', obj);
  })
});

module.exports = router;