const YahooFinanceAPI = require('yahoo-finance-data').default;
const express = require('express');
const cors = require('cors')
const app = express();

const api = new YahooFinanceAPI({
  key: 'dj0yJmk9Q3owTWZUSFpQbzVMJmQ9WVdrOVoxUnFhWGhGTldVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0yYg--',
  secret: 'd95b1cdc63a6d4e0ccc61ed21581c06ae30a011b'
});

app.use(cors());

app.get('/quotes', function (req, res) {
  console.log(`Getting quotes for query: ${req.query.q}`);

  api
    .getQuotes(req.query.q)
    .then(data => res.send(data));
});

app.get('/search', function (req, res) {
  console.log(`Searching quotes for query: ${req.query.q}`);
  
  api
    .tickerSearch(req.query.q)
    .then(data => res.send(data));
});

app.listen(7000, function () {
  console.log('Stokr-Server app listening on port 7000!');
});