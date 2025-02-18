const ticketschema = require("../schemas/ticketschema")


const createtickentfun = async(req,res)=>{
    try {
        const newTicket = new ticketschema(req.body);
        await newTicket.save();
        res.status(201).json({ message: 'Ticket created successfully', ticket: newTicket });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getticketfun = async(req,res)=>{
    try {
        const tickets = await ticketschema.find({ cellNumber: req.params.cellNumber });
        res.status(200).json(tickets);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const editticketfun = async(req,res)=>{
    try {
        const updatedTicket = await ticketschema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Ticket updated', ticket: updatedTicket });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {createtickentfun,getticketfun,editticketfun}