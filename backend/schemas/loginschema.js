const mongoose = require("mongoose")

const adminschema = mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    resetToken: { type: String },
    tokenExpiry: { type: Date },
})
// adminschema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

module.exports = mongoose.model("admin",adminschema)