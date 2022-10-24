const router = require("express").Router();
const multer = require("multer");
const uploads = require("express")
const upload = multer({dest: "uploads/"});
const productsController = require("./Controller_V3")

router.get("/products", productsController.index)
router.get("/products/:id", productsController.view)
router.delete("/products/:id", upload.single("image"), productsController.destroy)
router.post("/products", upload.single("image"), productsController.store)
router.put("/products/:id", upload.single("image"), productsController.update)

module.exports = router;