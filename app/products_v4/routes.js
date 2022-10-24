const router = require("express").Router();
const multer = require("multer");
const uploads = require("express")
const upload = multer({dest: "uploads/"});
const productsSchema = require("./model");
const fs = require("fs")
const path = require("path")
const productsController_V4 = require("./Controller_V4")

router.get("/products_v4", productsController_V4.getproducts)
router.get("/products_v4/:id", productsController_V4.getproductsview)
router.post("/products_v4", upload.single("image"), productsController_V4.createproducts)
router.delete("/products_v4/:id", upload.single("image"), productsController_V4.destroyproducts)
router.put("/products_v4/:id", upload.single("image"), productsController_V4.updateproducts)

module.exports = router;