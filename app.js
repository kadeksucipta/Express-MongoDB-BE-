//membuat routing dengan express js
const express = require("express")
const path = require("path")
const app = express() //untuk inisialisasi
const productrouter = require("./app/products/routes")
const productrouterV2 = require("./app/products_v2/routes")
const { json } = require("express")
const logger = require("morgan")
const cors = require("cors")
require("dotenv").config();


app.use(cors())
app.use(logger("dev"))
app.use(express.urlencoded({extends: true}))
app.use(json())
app.use("/public", express.static(path.join(__dirname, "uploads")))
app.use("/api/v1", productrouter) 
app.use("/api/v2", productrouterV2) 
app.use((req, res, next) => {
    res.status(404) //middleware sederhana
    res.send({
        status: "failed",
        message: "Resource" + req.originalUrl + "Not found"
    })
})

app.listen(process.env.PORT || 3000, () => console.log("Server: http://localhost:3000")) //untuk running