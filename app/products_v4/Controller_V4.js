const connection = require("../../config/mongoose")
const path = require("path")
const fs = require("fs")
const router = require("./routes")
const multer = require("multer")
const upload = multer({dest: "uploads/"})
const productsSchema = require("./model")
const { ObjectId } = require("mongodb")

const getproducts = async (req, res) => {
    productsSchema.find()
        .then(result => res.send(result))
        .catch(error => res.send(error))
}

// const search = async (req, res) => {
//     productsSchema.findOne({name: req.params})
//         .then(result => res.send(result))
//         .catch(error => res.send(error))
// }

const getproductsview = async (req, res) => {
    const {id} = req.params;
    productsSchema.findById({_id: ObjectId(id)})
        .then(result => res.send(result))
        .catch(error => res.send(error))
}

//-------------------------------------------------------------------------

const createproducts = async (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    if(image) {
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        productsSchema.create({name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`})
            .then(result => res.send(result))
            .catch(error => res.send(error))
    }else {
        productsSchema.create({name, price, stock, status})
        .then(result => res.send(result))
        .catch(error => res.send(error))
    }
};

//-------------------------------------------------------------------------

const updateproducts = async (req, res) => {
    const {name, price, stock, status} = req.body;
    const image = req.file;
    const {id} = req.params;
    if(image) {
        const target = path.join(__dirname, "../../uploads", image.originalname);
        fs.renameSync(image.path, target);
        productsSchema.findByIdAndUpdate({_id: ObjectId(id)}, { $set: {name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`}})
            .then(result => res.send(result))
            .catch(error => res.send(error))
    }else {
        productsSchema.findByIdAndUpdate({_id: ObjectId(id)}, { $set: {name, price, stock, status}})
        .then(result => res.send(result))
        .catch(error => res.send(error))
    }
};

//-------------------------------------------------------------------------

const destroyproducts = async (req, res) => {
    const {id} = req.params;
    productsSchema.findByIdAndDelete({_id: ObjectId(id)})
        .then(result => res.send(result))
        .catch(error => res.send(error))
};

module.exports = {
    createproducts,
    getproducts,
    updateproducts,
    destroyproducts,
    getproductsview
};