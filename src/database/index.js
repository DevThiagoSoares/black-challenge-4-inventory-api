const { Sequelize } = require('sequelize')
require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL
// Cria a instância do sequelize para se conectar ao banco de dados
const db = new Sequelize(databaseUrl, {
    define: {
        underscored: true
    }
})
module.exports = db