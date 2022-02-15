const express = require('express');
const yargs = require('yargs');
const Jimp = require('jimp');

const app = express();

app.use(express.static('static'));

app.get('/procesar', async (req,res) =>{
    let archivo = req.query.foto;
    const imagen = await Jimp.read(archivo);
    await imagen.resize(350, Jimp.AUTO).rgba(false).grayscale().writeAsync('img/newImg.jpg')
    res.send('imagen procesada exitosamente');
});

let puerto = 8080;

app.listen(puerto, () => {
    console.log(`servidor corriendo en el puerto ${puerto}`);
});