const connection = require("../../config/sequelize")
const path = require("path")
const fs = require("fs")
const router = require("./routes")
const multer = require("multer")
const upload = multer({dest: "uploads"})
const Products = require("./model")


// router.index = (req, res) => {
//     const {search} = req.body
//     let exec = {}
//     if(search) {
//         exec = {
//             sql: "/products_v2",
//             values: [`%${search}%`]
//         }
//     }else {
//         exec = {
//             sql: "/products_v2"
//         }
//     }
//     connection.sequelize(exec, _response(res))
// }

//-------------------------------------------------------------------------

const getproducts = async (req, res) => {
        try {
            await Products.sync()
            const result = await Products.findAll()
            res.send(result)
        }catch(e) {
            res.send(e)
        }
    }

//-------------------------------------------------------------------------

const destroyproducts = async (req, res) => {
        try {
            await Products.sync()
            const result = await Products.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json({message:"Products Sudah Terhapus"})
        }catch(e) {
            res.send(e)
        }
    }

//-------------------------------------------------------------------------

const createproducts = async (req, res) => {
    console.log(req)
    const {user_id, name, price, stock, status} = req.body
    const image = req.file
    if(image) {
        const target = path.join(__dirname, "../../uploads", image.originalname)
        fs.renameSync(image.path, target) 
        try {
            await Products.sync()
            const result = await Products.create({user_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`})
            res.send(result)
        }catch(e) {
            res.send(e)
        }
    }
    
}

//-------------------------------------------------------------------------

const updateproducts = async (req, res) => {
    const {user_id, name, price, stock, status} = req.body
    const image = req.file
    if(image) {
        const target = path.join(__dirname, "../../uploads", image.originalname)
        fs.renameSync(image.path, target)
    }
    try {
        await Products.sync()
        const result = await Products.update({user_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}`}, {where: {id: req.params.id}})
        res.json({message: "Data telah diUpdate"})
    }catch(e) {
        res.send(e)
    }
}

//-------------------------------------------------------------------------


module.exports = {
    createproducts,
    getproducts,
    destroyproducts,
    updateproducts
};