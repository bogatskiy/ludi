const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('pages/music', {page: 'Музыка'});
});

module.exports = router;
