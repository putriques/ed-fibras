const express = require('express')
const cors = require('cors')
const app = express()
const inscritosRouter = require('./src/routes/inscritos.routes.js')
const appRouter = require('./src/routes/app.routes.js')

app.use(express.json())
app.use(cors())
app.use('/', inscritosRouter)
app.use('/', appRouter)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}) 