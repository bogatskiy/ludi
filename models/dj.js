'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DjSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Не указано имя Dj']
  },
  img: {
    type: String,
    required: [true, 'Не указан img']
  },
  city: {
    type: String,
    required: [true, 'Не указано город Dj']
  },
  desc: {
    type: String,
    required: [true, 'Добавте описание']
  },
  sets: {
    type: Array
  }
})

mongoose.model('dj', DjSchema)