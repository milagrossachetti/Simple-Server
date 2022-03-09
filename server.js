const config = require('./config.js');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(config.PORT, config.HOST, function() {
    console.log(`App listening on http://${config.HOST}:${config.PORT}`)
});