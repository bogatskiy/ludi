'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');

router.get('/', function (req, res) {
  let obj = {
    page: 'Музыка',
    title: 'Pre-party вечеринки в Красной Поляне, Наши Dj и их музыка',
    description: 'Каждую пятницу и субботу, Вы можете прекрасно начать вечер под припатийные сэты наших диджеев. На этой страницей у Вас есть возможность ознакомиться с музыкой наших вечеринок'
  };
  const Model = mongoose.model('dj');

  Model.find().then(djs => {
    Object.assign(obj, {djs: djs});
    res.render('pages/music', obj);
  })
});


router.post('/', (req, res) => {
  if (!req.body.name || !req.body.city || !req.body.desc) {
    return res.json({status: 'no data'})
  }
  const Model = mongoose.model('dj')
  let item = new Model({
    name: req.body.name,
    img: req.body.img,
    city: req.body.city,
    desc: req.body.desc
  })
  item.save().then(
    i => {
      return res.json({status: 'saved'});
    },
    e => {
      const error = Object
        .keys(e.error)
        .map(key => e.errors[key].message)
        .join(', ')
      res.json(error)
    }
  )
});

module.exports = router;
