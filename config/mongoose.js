const mongoose = require("mongoose");

mongoose.connect("mongodb://kadek:kadekatlas@ac-i7b8hda-shard-00-00.iezz7nm.mongodb.net:27017,ac-i7b8hda-shard-00-01.iezz7nm.mongodb.net:27017,ac-i7b8hda-shard-00-02.iezz7nm.mongodb.net:27017/?ssl=true&replicaSet=atlas-v29czy-shard-0&authSource=admin&retryWrites=true&w=majority");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Server database terhubung"));