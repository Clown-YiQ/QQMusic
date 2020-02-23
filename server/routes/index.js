var express = require('express');
var router = express.Router();
var connection = require('../db/sql')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function (req, res, next) {
  connection.query("select * from user", function (error, results, fields) {
    res.json(results);
  })
});

module.exports = router;
