const {MongoClient} = require("mongodb");

const url = "mongodb+srv://kadek:kadekatlas@express-cluster-crud.iezz7nm.mongodb.net"

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