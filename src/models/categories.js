const { DataTypes } = require('sequelize')
const db = require('../database')

const Category = db.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { tableName: 'categories' })

module.exports = Category