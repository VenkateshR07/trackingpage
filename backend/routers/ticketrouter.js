const express = require("express")
const { createtickentfun, getticketfun, editticketfun } = require("../controllers/ticketcontrol")


const ticketRouter = express.Router()

ticketRouter.post("/postticket",createtickentfun)
ticketRouter.get("/getticket/:cellNumber",getticketfun)


module.exports = ticketRouter
