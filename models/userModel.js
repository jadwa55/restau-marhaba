/* -------------------------------------------------------------------------- */
/*                               User Model                              */
/* -------------------------------------------------------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false

    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false

    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    passwordConfirm: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // role: {
    //     type: DataTypes.ENUM,
    //     values: ['livreur', 'client'],
    //     defaultValue: 'client',
    // },
},
{
    sequelize: sequelize,
    modelName: 'User'
})


module.exports = User