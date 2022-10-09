const router = require("express").Router();
const multer = require("multer")
const path = require("path")
const fs = require("fs")
const upload = multer({dest: "uploads"})
const productsController_V2 = require("./Controller_V2")


router.post("/products_v2", upload.single("image"), productsController_V2.createproducts)
router.get("/products_v2", productsController_V2.getproducts);
router.delete("/products_v2/:id",productsController_V2.destroyproducts)
router.put("/products_v2/:id", upload.single("image"),productsController_V2.updateproducts)

module.exports = router;