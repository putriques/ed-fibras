const express = require('express')
const InscritosController = require('../controllers/inscritosController.js')

const inscritosRouter = express.Router()
const inscritosController = new InscritosController();

inscritosRouter.post('/formulario', inscritosController.create)

module.exports = inscritosRouter