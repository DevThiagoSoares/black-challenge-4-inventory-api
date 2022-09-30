const { Sequelize, DataTypes } = require('sequelize')
const db = require('../database')

const Item = db.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, { tableName: 'items' })

module.exports = Item