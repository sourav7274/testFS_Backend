require('./db_connection/db.connection')
require('dotenv').config()


const express = require('express')
const cors = require('cors')
const CorsOption ={
    origin:"*",
    credentials: true,
    OptionSuccessStatus: 200
}
const app = express()
app.use(cors(CorsOption))
app.use(express.json())

app.get("/",async (req,res) =>{
    res.json({message:"Success HIya"})
})

const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log("Server Running on PORT",PORT)
})
