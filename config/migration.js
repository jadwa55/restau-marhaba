const sequelize = require('../config/db.config')
const Admin = require('../models/adminModel')
const User = require('../models/userModel')
const Repas = require('../models/repasModel')
const RepaOrder = require('../models/repaOrderModel')
const Category = require('../models/repasCategory')
const Order = require('../models/orderModel')
const Facture = require('../models/factureModel')
const Historique = require('../models/historiqueModel')

User.hasMany(Order)
Order.belongsTo(User, {as: 'livreurId'})


Repas.belongsToMany(Order, {through: RepaOrder})
Order.belongsToMany(Repas, {through: RepaOrder})

Repas.belongsTo(Category)
Category.hasMany(Repas)

Facture.belongsTo(Order)
Order.hasOne(Facture)

Historique.hasMany(Facture)
Facture.belongsTo(Historique)



sequelize.sync({force: false}, ()=>{
    console.log('All is Good')
})



module.exports = {
    User,
    Repas,
    RepaOrder,
    Category,
    Order,
    Facture,
    Historique







}