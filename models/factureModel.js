/* -------------------------------------------------------------------------- */
/*                               FactureModel                              */
/* -------------------------------------------------------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Facture extends Model{}

Facture.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize: sequelize,
    modelName: 'Facture'
}
)


module.exports = Facture;