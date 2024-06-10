const { Sequelize } = require("sequelize");
require('dotenv').config()
console.log(process.env)

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD , {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = { conn: sequelize };
