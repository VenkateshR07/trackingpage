const mongoose = require("mongoose");
const defaultadminfun = require("./defaulteadmin");

const connetDb = ()=>{
    mongoose.connect(process.env.DataBase).then(()=>{
       defaultadminfun()
        console.log("data base is connect");
        
    }).catch((err)=>{
        console.log("data base not connect",err);
        
    })
}

module.exports = connetDb