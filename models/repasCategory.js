/* -------------------------------------------------------------------------- */
/*                               RepasCategoryModel                              */
/* -------------------------------------------------------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Category extends Model{}

Category.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    type: {
        type: DataTypes.STRING,
    }
},
{
    sequelize: sequelize,
    modelName: 'Category'
}
)



module.exports = Category;