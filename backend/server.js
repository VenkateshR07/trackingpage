const express = require("express")
const mongoose = require ("mongoose")

const app = express()

// Connect to MongoDB

mongoose.connect("mongodb://localhost/your_database_name", )
.then(() => console.log("MongoDB Connected..."))
.catch(()=>{
    console.log("Connection failed!")
})



app.listen(4002,()=>{
    console.log("Server is running on port 4002...")
})
