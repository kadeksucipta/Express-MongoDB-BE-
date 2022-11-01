const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "db4free.net",
    user: "kadekmysqlfree",
    password: "kadekmysqlfree",
    database: "kadekexpresssql"
})

module.exports = connection;