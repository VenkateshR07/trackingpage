const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
        billNumber: { type: String, unique: true, required: true },
        // date: { type: Date, default: Date.now },
        name: { type: String, required: true },
        cellNumber: { type: String, required: true },
        alternateNumber: { type: String },
        address: { type: String },
        guaranteeStatus: { type: String, enum: ['Guarantee', 'Non-Guarantee'], required: true },
        item: { type: String, required: true },
        problem: { type: String, required: true },
        status: { 
            type: String, 
            enum: ['Done', 'Work in Progress', 'Beyond Repair', 'Other'], 
            default: 'Work in Progress' 
        },
        otherStatus: { type: String },
});

module.exports = mongoose.model('Ticket', ticketSchema);
