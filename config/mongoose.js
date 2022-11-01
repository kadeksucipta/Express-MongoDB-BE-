const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kadek:kadekatlas@express-cluster-crud.iezz7nm.mongodb.net/ExpressCrud");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server databse terhubung"));