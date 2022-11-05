const {MongoClient} = require("mongodb");

const url = "mongodb://kadek:kadekatlas@ac-i7b8hda-shard-00-00.iezz7nm.mongodb.net:27017,ac-i7b8hda-shard-00-01.iezz7nm.mongodb.net:27017,ac-i7b8hda-shard-00-02.iezz7nm.mongodb.net:27017/?ssl=true&replicaSet=atlas-v29czy-shard-0&authSource=admin&retryWrites=true&w=majority"

const client = new MongoClient(url);



(async () => {
    try {
    await client.connect();
    console.log("koneksi ke mongodb berhasil");
    }catch(e) {
    console.log(e);
    }
    
})();

const db = client.db("Express-Crud");

module.exports = db;