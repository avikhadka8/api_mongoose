// // import productModel from "../models/Product.js"


// class ProductController{

// static getAllDoc =  (req, res) => {
//    res.send("get all doc")
// }
// static createDoc =  (req, res) => {
//    res.send("create doc")
// }
// static getSingleDocById =  (req, res) => {
//    res.send("get single doc")
// }
// static updateDocById =  (req, res) => {
//    res.send("update doc")
// }
// static deletedocbyIdDoc =  (req, res) => {
//    res.send("delete doc")
// }
// }

// export default ProductController




import productModel from "../models/Product.js";



// get all products
const getAllProducts = async (req, res) => {
    try {
        const result = await productModel.find()
        res.json(result)
        // console.log(result)

    } catch (error) {
        console.log(error)
    }

}

// single product
const getSingleProduct = async (req, res) => {
    try {
        const result = await productModel.findById(req.params.id)
        res.json(result)
        // console.log(result)

    } catch (error) {
        console.log(error)
    }
}
// create or add new product
const addNewProduct = async (req, res) => {
    try {
        const { id, name, price } = req.body
        const doc = new productModel({
            id: id,
            name: name,
            price: price
        })
        // another way 
        // const doc = new productModel(req.body)


        const result = await doc.save()
        // console.log(result)
        // res.send(result)
        res.json(result)

    } catch (error) {

    }
}
// update product
const updateProduct = async (req, res) => {
try {
    const result = await productModel.findByIdAndUpdate(req.params.id,req.body)
    res.send(result)
} catch (error) {
    
}
}
// delete product
const deleteProduct = async (req, res) => {
    try {
        const result = await productModel.findByIdAndDelete(req.params.id)
        res.send(result)
    } catch (error) {
        
    }
}

export { getAllProducts, getSingleProduct, addNewProduct, updateProduct, deleteProduct }
// export { getAllProducts }
