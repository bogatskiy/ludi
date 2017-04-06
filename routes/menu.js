'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');


router.get('/', function (req, res) {
  let obj = {
    page: 'Меню',
    title: 'Меню Ресторан "ЛЮDИ". Мясо, Стейки, Бургеры, Рыба, Закуски, Первые и Вторые Блюда, Десерты, Коктейли',
    description: 'Для любителей мяса, лучшего ресторана не найти! Мы удовлетворим даже самые изысканные вкусы! Основа меню - мясные блюда из говядины, баранины, свинины и дичи. Так же богатый выбор алкоголя и коктейлей на любой вкус.'
  };
  const Model = mongoose.model('menu');

  Model.find().then(menus => {
    Object.assign(obj, {menu: menus});
    res.render('pages/menu', obj);
  })
});

module.exports = router;