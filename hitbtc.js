var fetch = require('node-fetch');

var endpoint = "http://api.hitbtc.com";
var timestamp = "/api/1/public/time";
var ticker = "/api/1/public/BTCUSD/ticker"

var hitbtc = {
  getTicker: function(tickerSymbol){
    fetch(endpoint + "/api/1/public/" + tickerSymbol + "/ticker")
      .then(function(res) {
          return res.text();
      }).then(function(body) {
          console.log(body);
      });
  },

  getSymbols: function(){
    fetch(endpoint + "/api/1/public/symbols")
      .then(function(res) {
          return res.text();
      }).then(function(body) {
          console.log(body);
      });

  }
}

module.exports = hitbtc;
