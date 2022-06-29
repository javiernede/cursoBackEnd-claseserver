const express = require('express');

const app = express()

const fs = require('fs')

const { Contenedor } = require('./contenedor')

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
})

let visitas = 0

app.get('/productos/:id', (req, res) => {
    let idP = Number(req.params.id) - 1
    let contenedor = new Contenedor(idP, 'Productos')
    console.log(`Precio inicial:${ contenedor.precio }`)
    contenedor.setPrecio(150)
    console.log(`Precio final:${ contenedor.precio }`)
    res.send('productos')
})

app.get('/productosRandom/:id', async(req, res) => {
    let id = Number(req.params.id) - 1
    let result = await fs.promises.readFile('productos.txt', 'utf-8')
    let productos = JSON.parse(result)
    res.send(productos[id])
})

app.get('/fhy', (req, res) => {
    res.send({ fhy: new Date().toLocaleDateString() })
})

app.get('/ruta', (req, res) => {
    let respuesta = respuestaRuta();
    res.send(respuesta)
})

//const PORT = process.env.PORT || 8080
const server = app.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => (`Error en servidor ${error}`))