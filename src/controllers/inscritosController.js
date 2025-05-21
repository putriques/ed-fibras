const db = require('../database/db.js')

class inscritosController {
    async create(req, res) {
        const {nome, telefone, whatsapp, email} = req.body;

        await db('formulario').insert({
           nome, telefone , whatsapp, email
        })
        return res.status(200).json("Mensagem enviada com sucesso!")
             
    }
}

module.exports = inscritosController