const con = require("../config/db.config");
const Sequelize = require("sequelize");
// const con = new Sequelize(
//     // dbConfig.DB, 
//     // dbConfig.USER, dbConfig.PASSWORD, 
//     {
//     // host: dbConfig.HOST,
//     // dialect: dbConfig.dialect,

//     host: process.env.DATABASE_HOST,
//     user: process.env.DATABASE_USER,
//     password: process.env.DATABASE_PASSWORD,
//     database: process.env.DATABASE
//   });

const db = {};

db.Sequelize = Sequelize;
db.con = con;

db.user = require("./userModel")(con, Sequelize);
db.role = require("./roleModel")(con, Sequelize);

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

db.ROLES = ["user", "admin", "livreur"];

module.exports = db;