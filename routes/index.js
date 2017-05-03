'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  let obj = {
    page: "Главная",
    title: 'Ресторан Люди - Мясо, Стейки, Коктейли, Музыка, "Горки Город"',
    description: 'Лучший мясной ресторан Красной Поляны в центре курорта "Горки город", с широким выбором блюд и богатой коктейльной картой. В основе меню стейки и авторские коктейли'
  };
  res.render('pages/index', obj);
});

module.exports = router;
