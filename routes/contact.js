'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('pages/contact', {page: 'Контакты'});
});

module.exports = router;
