const {getDadJoke} = require('./__workshop/exercise-4.1');
const {getTronaldDumpQuote} = require('./__workshop/exercise-4.2');
const {getGeekJoke} = require('./__workshop/exercise-4.3');

const handleJoke = async (req, res) => {
    const {type} = req.params;

    try {
        if(type === 'dad') {
            res.status(200).send({
                status: 200,
                joke: await getDadJoke()
            });
        } else if(type === 'tronald') {
            res.status(200).send({
                status: 200,
                joke: await getTronaldDumpQuote()
            });
        } else if(type === 'geek') {
            res.status(200).send({
                status: 200,
                joke: await getGeekJoke()
            });
        } else {
            res.status(404).json({
                status: 404,
                joke: 'Unrecognized type of joke'
            })
        }
    } catch(err) {
        console.log('Error:', err);
    }

}

module.exports = {handleJoke}