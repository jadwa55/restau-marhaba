/* -------------------------------------------------------------------------- */
/*                               HistoriqueModel                              */
/* -------------------------------------------------------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db')


class Historique extends Model{}

Historique.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    
},
{
    sequelize: sequelize,
    modelName: 'Historique'
}
)



module.exports = Historique