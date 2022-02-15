const express = require('express');
const yargs = require('yargs');
const Jimp = require('jimp');

const app = express();

app.use(express.static('static'));

app.get('/procesar', async (req,res) =>{
    let archivo = req.query.foto;
    const imagen = await Jimp.read(archivo);
    await imagen.resize(350, Jimp.AUTO).rgba(false).grayscale().writeAsync('img/newimg.jpg')
    res.send('imagen procesada exitosamente');
});

app.listen(8080, () => {
    console.log('servidor corriendo en el puerto 8080');
});