const mongoose = require("mongoose");

mongoose.connect("mongodb://kadek:kadek@localhost:27017/mongoose-kadek?authSource=admin")

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server databse terhubung"));