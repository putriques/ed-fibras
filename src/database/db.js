const knex = require('knex')
const config = require('../../knexfile.js')

const db = knex(config.development)

db.raw('SELECT 1')
.then(() => {
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
})
.catch((error) => {
    console.error('❌ Erro ao conectar no banco de dados', error.message)
});

module.exports = db;