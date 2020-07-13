const request = require('request-promise');

// getDadJoke
const getDadJoke = () => {
    return request('https://icanhazdadjoke.com/', { headers: {"Accept": "text/plain" } });
}

// 4.1
getDadJoke();

module.exports = { getDadJoke };
