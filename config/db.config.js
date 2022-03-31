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

  module.exports = sequelize