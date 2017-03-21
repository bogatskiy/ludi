'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

router.get('/', function (req, res) {
  let obj = {page: 'Музыка'}
  const Model = mongoose.model('dj')

  Model.find().then(djs => {
    Object.assign(obj, {djs: djs})
    res.render('pages/music', obj);
  })
});

// router.get('/', function (req, res) {
//   let obj = {page: 'Музыка'}
//
//   res.render('pages/music', obj);
// });


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
