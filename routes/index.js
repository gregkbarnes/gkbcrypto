// Load environmental variables
require('dotenv').config();

var express = require('express');
var router = express.Router();
var hitbtc = require('../hitbtc.js')

// hitbtc.getSymbols();
hitbtc.getTicker("BCCBTC");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Index', { name: 'Greg' });
});

module.exports = router;
