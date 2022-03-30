const sequelize = require('../config/db')
const Admin = require('../models/admin')
const User = require('../models/user')
const Repas = require('../models/repas')
const RepasOrder = require('../models/repas_order')
const Category = require('../models/category')
const Order = require('../models/order')
const Facture = require('../models/facture')
const Historique = require('../models/historique')

User.hasMany(Order)
Order.belongsTo(User, {as: 'livreurId'})
Order.belongsTo(User, {as: 'clientId'})


Repas.belongsToMany(Order, {through: RepasOrder})
Order.belongsToMany(Repas, {through: RepasOrder})

Repas.belongsTo(Categorie)
Categorie.hasMany(Repas)

Facture.belongsTo(Order)
Order.hasOne(Facture)

Historique.hasMany(Facture)
Facture.belongsTo(Historique)



sequelize.sync({force: true}, ()=>{
    console.log('All is Good')
})