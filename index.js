require('./db_connection/db.connection')
require('dotenv').config()


const express = require('express')
const cors = require('cors')
const CorsOption ={
    origin:"*",
    credentials: true,
    OptionSuccessStatus: 200
}

import Dummy from './models/dummy.model'

const app = express()
app.use(cors(CorsOption))
app.use(express.json())

app.get("/",async (req,res) =>{
    res.json({message:"Success HIya"})
})


app.get('/dummy',async(req,res) =>{
    const data = await Dummy.find()
    res.status(200).json({data})
})

app.post('/dummy',async(req,res) =>{
    const data = new Dummy(req.body)
    await data.save()
    if(data)
    {
        res.status(200).json({message:"Data Created"})
    }
    else
    {
        res.status(400).json({message:"Data Not Created"})
    }
})


const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log("Server Running on PORT",PORT)
})
