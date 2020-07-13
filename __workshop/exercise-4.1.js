const request = require('request-promise');

// getDadJoke
const getDadJoke = () => {
    return request('https://icanhazdadjoke.com/', { headers: {"Accept": "text/plain" } });
}

// 4.1
getDadJoke().then((data) => console.log(data));
