const express = require('express')
const path = require('node:path')

const appRouter = express.Router()

const buildPath = path.join(__dirname, '../../dist') // Caminho da pasta que contém os arquivos estáticos

appRouter.use(express.static(buildPath)) // Server arquivos estáticos da aplicação

appRouter.get('/home', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
}) // Rota que o usuário acessa o servidor e envia o arquivo público

module.exports = appRouter