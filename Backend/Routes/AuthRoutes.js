const express = require('express');
const router = express.Router();
const User = require('../Model/User');
const bcrypt = require('bcrypt');
const generatetoken = require('./jsonwebtoken');

router.post("/login", async(req,res)=>{

    let userData = req.body;
    let foundUser;

    try{
        foundUser = await User.findOne({email : userData.email})
    } 
    catch(err){
        console.log(err);
    }

    if(foundUser == null)
        return res.send("user not registered");

    let validatedpassword = await bcrypt.compare(userData.password, foundUser.password).catch((err)=>{
        console.log(err);
    })

    if(!validatedpassword)
        return res.send("Wrong Password");

    //generating a token for the userData
    let token = generatetoken(foundUser);
    

    //set token
    
    res.send(token); 

})

router.post("/signup", async(req,res)=>{

    let userData = req.body;
    let foundUser = await User.findOne({contactEmail : userData.email});

    // console.log(foundUser);

    if(foundUser != null){
        return res.send("user already exists ");
    }

    let hashedpass = await bcrypt.hash(userData.password, 10); 

    let newUser = await User.create({
        name : userData.name,
        email : userData.email,
        password : hashedpass
    })

    console.log(newUser);
    res.send("userData signup successfull");
} )

router.get("/gettoken", (req,res) => {
    
    console.log("hello");
  
    res.send("ok");
})

module.exports = router;