const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "kadeksql",
    password: "kadeksql",
    database: "kadeksql-cruds"
})

module.exports = connection;