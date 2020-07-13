const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    const randomTrumpQuote = await request('https://api.tronalddump.io/random/quote', { headers: {"Accept": "application/json" } });
    console.log(JSON.parse(randomTrumpQuote).value);
  } catch(err) {
    console.log('Error: ', err);
  }
};

getTronaldDumpQuote();
