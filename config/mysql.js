const mysql = require("mysql")

const connection = mysql.createPool({
    host: "remotemysql.com",
    user: "FMLPeYwaA3",
    password: "KXk91Es6Rr",
    database: "FMLPeYwaA3"
})

module.exports = connection;