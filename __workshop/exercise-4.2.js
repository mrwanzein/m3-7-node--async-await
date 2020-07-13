const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    const randomTrumpQuote = await request('https://api.tronalddump.io/random/quote', { headers: {"Accept": "application/json" } });
    return JSON.parse(randomTrumpQuote).value;
  } catch(err) {
    console.log('Error: ', err);
  }
};

getTronaldDumpQuote();

module.exports = { getTronaldDumpQuote };
