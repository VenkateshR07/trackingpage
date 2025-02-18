const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const adminschema = require("../schemas/loginschema")


const defaultadminfun = async(req,res)=>{
    try {
        const email = process.env.DefaultEmail
        const password = process.env.DefaultPassword

        
        const existingUser = await adminschema.findOne({ email });
        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new adminschema({ email, password: hashedPassword });
            await user.save();
            console.log('Default admin user created.');
        } else {
            console.log('Default user already exists.');
        }
    } catch (error) {
        console.error('Error creating default user:', error);
    }
}

module.exports = defaultadminfun