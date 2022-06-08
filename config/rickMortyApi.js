const axios = require('axios');

module.exports = axios.create({
    "baseURL": 'http://rickandmortyapi.com/api/character'
})