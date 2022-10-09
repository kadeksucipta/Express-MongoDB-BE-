const router = require("express").Router()
const { application } = require("express")
const multer = require("multer")
const upload = multer({dest: "uploads"})
const fs = require("fs")
const patch = require("path")
const connection = require("../../config/mysql")
const productController = require("./Controller")

router.get("/product", productController.index)
router.get("/product/:id", productController.view)
router.post("/product/", upload.single("image"), productController.store)
router.put("/product/:id", upload.single("image"), productController.update)
router.delete("/product/:id", upload.single("image"), productController.destroy)

module.exports = router 