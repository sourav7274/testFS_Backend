require('dotenv').config()
const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB

mongoose.connect(mongoURI)
.then(() => console.log("connected to DB"))
.catch((err) => console.log("Error connecting",err))
