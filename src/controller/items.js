const Item = require('../models/item')

const itemsController = {

    // Endpoint de listar todos os items
    allItems: async (req, res) => {
        const items = await Item.findAll()
        return res.json(items)
    },

    // Endpoint de criar um novo item
    createItem: async (req, res) => {
        const { name, quantity, category_ids } = req.body
        const item = await Item.create({ name, quantity })
        await item.addCategories(category_ids)
        return res.status(201).json(item)
    },

    // Endpoint de obter um item específico
    getIdItem: async (req, res) => {
        const { id } = req.params
        const item = await Item.findByPk(id)
        return res.json(item)
    },

    // Endpoint de atualizar o nome e as categorias de um item
    updateCategoryItem: async (req, res) => {
        const { id } = req.params
        const { name, category_ids } = req.body
        const item = await Item.findByPk(id)
        item.name = name
        await item.setCategories(category_ids)
        return res.status(204).end()
    },

    // Endpoint de adicionar mais unidades de um item específico
    addQuantifyItem: async (req, res) => {
        const { id } = req.params
        const { quantity } = req.query
        const item = await Item.findByPk(id)
        item.quantity += parseInt(quantity)
        await item.save()
        return res.json(item)
    },

    // Endpoint de remover unidades de um item específico
    removeQuantifyIdItem: async (req, res) => {
        const { id } = req.params
        const { quantity } = req.query
        const item = await Item.findByPk(id)
        item.quantity -= parseInt(quantity)
        await item.save()
        return res.json(item)
    },

    // Endpoint de excluir um item
    deleteItem: async (req, res) => {
        const { id } = req.params
        await Item.destroy({ where: { id } })
        return res.status(204).end()
    },

}

module.exports = itemsController