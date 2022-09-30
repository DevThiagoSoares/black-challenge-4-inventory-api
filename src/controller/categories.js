const Category = require('../models/categories')

module.exports = {

    // Endpoint de listar todas as categorias
    allCategories: async (req, res) => {
        const categories = await Category.findAll()
        return res.json(categories)
    },

    // Endpoint de criar uma nova categoria
    createCategories: async (req, res) => {
        const { name } = req.body
        const category = await Category.create({ name })
        return res.status(201).json(category)
    },

    // Endpoint de obter uma categoria específica
    getIdCategories: async (req, res) => {
        const { id } = req.params
        const category = await Category.findByPk(id)
        return res.json(category)
    },

    // Endpoint de atualizar uma categoria
    updateCategories: async (req, res) => {
        const { id } = req.params
        const { name } = req.body
        await Category.update({ name }, { where: { id } })
        return res.status(204).end()
    },

    // Endpoint de excluir uma categoria
    deleteCategories: async (req, res) => {
        const { id } = req.params
        await Category.destroy({ where: { id } })
        return res.status(204).end()

    },

}
