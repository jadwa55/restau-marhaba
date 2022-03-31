const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    'restodb',
    'root',
    null,
    {host: 'localhost', dialect: 'mysql'}
)

// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "123456",
//     DB: "restodb",
//     dialect: "mysql",


    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // }
//   };
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/userModel.js")(sequelize, Sequelize);
db.role = require("../models/roleModel.js")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

  module.exports = { 
    sequelize,
    db
  }