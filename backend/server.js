const express = require("express")
const dotenv = require("dotenv")
const connetDb = require("./config/mongoose")
const ticketRouter = require("./routers/ticketrouter")
const loginRouter = require("./routers/loginroute")
const cors = require("cors")



// app config
const app = express()
dotenv.config()
connetDb()

// middelware
app.use(express.json())
app.use(cors())


// apiendpoint

app.use("/ticketapi",ticketRouter)
app.use("/loginapi",loginRouter)



app.listen(process.env.Port,()=>{
    console.log("Server is running on port")
})
