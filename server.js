const express = require('express');
const yargs = require('yargs');
const jimp = require('jimp');

const app = express();

app.use(express.static('static'));

app.listen(8080, () => {
    console.log('servidor corriendo en el puerto 8080');
});