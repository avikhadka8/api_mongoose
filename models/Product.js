import mongoose from "mongoose";


// defining schema

const productSchema = new mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    Price:{type:Number,validate:(value)=>value>=4000}
})

// compiling schema 

const productModel = mongoose.model("Product",productSchema)


export default productModel
