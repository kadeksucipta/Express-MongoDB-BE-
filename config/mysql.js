const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "FMLPeYwaA3",
    password: "KXk91Es6Rr",
    database: "FMLPeYwaA3"
})

module.exports = connection;