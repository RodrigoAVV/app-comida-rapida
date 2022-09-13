const express = require('express')
const fs = require('fs')

const app = express()
const PORT = 8080
const server = app.listen(PORT,() => {
    console.log(`Servidor http escuchando en puerto ${server.address().port}`)
})
server.on('error',error => console.log(`Error en el servidor ${error}`))

app.get('/productos',async (req,res) => {
    let data = await fs.promises.readFile('./data/productos.json','utf-8')
    data = JSON.parse(data)
    res.json(data)
})

app.get('/productoRandom',async (req,res) => {
    let data = await fs.promises.readFile('./data/productos.json','utf-8')
    data = JSON.parse(data)
    const total = (data.length - 1)
    const indice = Math.floor(Math.random()*(total-0+1)+0)
    res.json(data[indice])
})