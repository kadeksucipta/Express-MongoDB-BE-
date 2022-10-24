const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "field nama harus ada"],
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 1000,
        max: 100000000
    },
    stock: Number,
    status: {
        type: Boolean,
        default: true
    },
    image_url: {
        type: String
    }
});

const Products = mongoose.model("Product", productsSchema);
module.exports = Products;

