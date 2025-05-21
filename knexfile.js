// Update with your config settings.
const path = require('node:path')
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    
    connection: {
      host: process.env.DB_URL,
      port: process.env.DB_PORT,
      user:process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DB_URL_PROD,
      ssl: {rejectUnauthorized: false},
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    },
  },

};
