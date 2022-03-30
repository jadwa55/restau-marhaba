/* -------------------------------------------------------------------------- */
/*                               RepasOrder Model                              */
/* -------------------------------------------------------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')

class RepasOrder extends Model{}

RepasOrder.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    quantity: {
        type: DataTypes.INTEGER,
    }
},
{
    sequelize: sequelize,
    modelName: 'RepasOrder'
})


module.exports = RepasOrder;