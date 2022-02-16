const express = require('express');
const yargs = require('yargs');
const Jimp = require('jimp');

const app = express();
const fs = require('fs');
app.use(express.static('static'));

app.get('/procesar', async(req, res) => {
    let archivo = req.query.foto;
    const imagen = await Jimp.read(archivo);
    await imagen.resize(350, Jimp.AUTO).rgba(false).quality(60).grayscale().writeAsync('img/newImg.jpg')

    fs.readFile('img/newImg.jpg', (err, imagen) => {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
        res.end(imagen)
    })

});

let puerto = 8080;

yargs.command(
    'start',
    'comando para echar a correr el servidor', {
        key: {
            describe: 'clave secreta para iniciar el servidor',
            demand: true,
            alias: 'k'
        }
    },
    function(args) {

        if (args.key != '123') {
            console.log('clave incorrecta')
            return 1;
        };

        app.listen(puerto, () => {
            console.log(`servidor corriendo en el puerto ${puerto}`);
        });

    }
).help().argv;