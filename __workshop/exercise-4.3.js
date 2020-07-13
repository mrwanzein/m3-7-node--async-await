const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const randomGeekJoke = await request('https://geek-jokes.sameerkumar.website/api?format=json');
    return JSON.parse(randomGeekJoke).joke;
  } catch(err) {
    console.log('Error: ', err);
  }
};

getGeekJoke();

module.exports = { getGeekJoke };
