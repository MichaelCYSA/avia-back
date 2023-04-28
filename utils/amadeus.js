const Amadeus = require('amadeus');

const amadeusApi = new Amadeus({
  clientId: 'scaTkOPIdKkhQb8bY0w8tyIvqxV21JFM',
  clientSecret: 'oVAkrqbm7Cm2LyEr',
  baseUrl: 'https://api.amadeus.com'
});

module.exports = amadeusApi;
