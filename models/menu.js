'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  name: {type: String, required: true},
  desc: {type: String, required: true},
  descEn: {type: String},
  img: {type: String},
  weight: {type: String, required: true},
  price: {type: Number, required: true},
  unit: {type: String}
});


const MenuSchema = new Schema({
  section: {
    type: String,
    required: [true, 'Не указана группа']
  },
  items: [MenuItemSchema]
});

mongoose.model('menu', MenuSchema);