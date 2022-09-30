const app = require('./app')
const Category = require('./models/categories')
const Item = require('./models/item')

// // Cria a associação muitos-para-muitos entre categories e items
Category.belongsToMany(Item, { through: 'categories_items', as: 'items', foreignKey: 'category_id' })
Item.belongsToMany(Category, { through: 'categories_items', as: 'categories', foreignKey: 'item_id' })

// Define a porta onde a aplicação vai estar ouvindo
const PORT = process.env.PORT || 3333

// Inicia a aplicação
app.listen(PORT, function () {
  console.log(`Aplicação iniciada. Ouvindo na porta ${PORT}`)
})