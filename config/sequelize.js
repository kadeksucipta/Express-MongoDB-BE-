const {Sequelize} = require("sequelize");

const sequelize = new Sequelize({
    database: "FMLPeYwaA3",
    host: "remotemysql.com",
    username: "FMLPeYwaA3",
    password: "KXk91Es6Rr",
    dialect: "mysql"
});



(async () => {
  try{
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  }catch (error) {
    console.error("Unable to connect to the database:", error)
  }
})();

module.exports = sequelize;

// const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB
// });

// module.exports = sequelize;