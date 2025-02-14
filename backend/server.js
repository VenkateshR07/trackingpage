const express = require("express")
const mongoose = require ("mongoose")
const Schema1 = require("./Schema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")



const app = express()

app.use(express.json())

// Connect to MongoDB

mongoose.connect("mongodb://localhost/trackinglogin", )
.then(() => console.log("MongoDB Connected..."))
.catch(()=>{
    console.log("Connection failed!")
})


const tokenverify = async (req, res, next) => {
    const tokenData = req.header("Authorization")?.split(" ")[1];
  
    if (!tokenData) return res.json("token is not there");
  
    try {
      const verify = await jwt.verify(tokenData, "happy");
  
      req.User = verify;
      
  
      if (verify.role !== "admin") {
        return res.status(403).json("Access denied");
      }
  
      next();
    } catch (err) {
      res.json("token has expriy", err);
    }
  };


app.post("/createData", async (req, res) => {
    
    const  hide = await bcrypt.hash(req.body.password,7)
    const createData = Schema1({
      ...req.body,password:hide
    })

    const savedata = await createData.save()

    res.json({savedata , msg:"success"})
  })


  app.get("/getData", async(req,res)=>{
    const getdata = await Schema1.find()
    res.json({getdata , msg:"success"})
  })

  app.put("/editData/:id",async(req,res)=>{
    const updateData = await Schema1.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json({updateData, msg:"success"})
  })

  app.delete("/deleteData/:id",async(req,res)=>{
    const deleteData = await Schema1.findByIdAndDelete(req.params.id,{new:true})
    res.json({deleteData, msg:"success"})
  })



  app.post("/loginData",async(req,res)=>{
    const userData = await Schema1.findOne({email:req.body.email })
    if(!userData) return res.json({msg:"User not found"})
        
    const isMatch = await bcrypt.compare(req.body.password,userData.password)
    if(!isMatch) return res.json({msg:"Invalid credentials"})

 

    const token = jwt.sign({email:userData.email,name:userData.name,role:userData.role},'happy',{expiresIn: "1h"})

        
    res.json({token,msg:"Logged in Successfully"})
  })



app.listen(4002,()=>{
    console.log("Server is running on port 4002...")
})
