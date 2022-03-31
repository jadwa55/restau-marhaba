/* -------------------------------------------------------------------------- */
/*                               Repas Model                              */
/* -------------------------------------------------------------------------- */
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config')


class Repas extends Model{}

Repas.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
    },

    prix: {
        type: DataTypes.INTEGER,
        allowNull: false
    }


},
{
    sequelize: sequelize,
    modelName: 'Repas'
})



module.exports = Repas;