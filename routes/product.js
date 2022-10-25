// import express from "express"
// import ProductController from "../controllers/productController.js"
// const router = express.Router()


// router.get('/',ProductController.getAllDoc)
// router.post('/',ProductController.createDoc)
// router.get('/:id',ProductController.getSingleDocById)
// router.delete('/:id',ProductController.deleteDocByid)
// router.put('/:id',ProductController.updateDocByid)

// export default router

import express from "express"
import { addNewProduct, getAllProducts, getSingleProduct, updateProduct,deleteProduct } from "../controllers/productController.js"


const router = express.Router()

router.get('/',getAllProducts)
router.get('/:id',getSingleProduct)
router.post('/',addNewProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

export default router
