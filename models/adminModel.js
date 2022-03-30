/* -------------------------------------------------------------------------- */
/*                               AdminModel                              */
/* -------------------------------------------------------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')

class Admin extends Model{}

Admin.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING

    },

    email: {
        type: DataTypes.STRING

    },

    password: {
        type: DataTypes.STRING,
    },


},
{
    sequelize: sequelize,
    modelName: 'Admin'
}
)


module.exports = Admin;