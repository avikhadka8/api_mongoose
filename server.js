import express from "express"
import { getAllProducts } from "./controllers/productController.js"
import connectdb from "./db/connectDB.js"
import pro from './routes/product.js'
const app = express()
const port = process.env.PORT || 8000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/store"




// connection database

connectdb(DATABASE_URL)

// middleware json
app.use(express.json())

// load routes

app.use('/api/products',pro)

// controller function calling
getAllProducts




app.listen(port,(req,res)=>{
    console.log(`your app is runningat port number http://localhost:${port}`)
})

