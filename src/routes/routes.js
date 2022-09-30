const { allItems, createItem, getIdItem, deleteItem, removeQuantifyIdItem, addQuantifyItem, updateCategoryItem } = require("../controller/items")
const { allCategories, createCategories, getIdCategories, updateCategories, deleteCategories } = require("../controller/categories")
const express = require('express')
const router = express.Router();

// CATEGORIES
// Endpoint de listar todas as categorias
router.get('/categories', allCategories)
// Endpoint de criar uma nova categoria
router.post('/categories', createCategories)
// Endpoint de obter uma categoria específica
router.get('/categories/:id', getIdCategories)
// Endpoint de atualizar uma categoria
router.put('/categories/:id', updateCategories)
// Endpoint de excluir uma categoria
router.delete('/categories/:id', deleteCategories)


// ITEMS
// router de listar todos os items
router.get('/items', allItems)
// router de criar um novo item
router.post('/items', createItem)
// router de obter um item específico
router.get('/items/:id', getIdItem)
// router de atualizar o nome e as categorias de um item
router.put('/items/:id', updateCategoryItem)
// router de adicionar mais unidades de um item específico
router.put('/items/:id/add', addQuantifyItem)
// router de remover unidades de um item específico
router.put('/items/:id/remove', removeQuantifyIdItem)
// router de excluir um item
router.delete('/items/:id', deleteItem)

module.exports = router