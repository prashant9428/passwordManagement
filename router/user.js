const express = require("express")
const User = require("../model/user")
const {check,validationResult}= require("express-validator")
const route = express.Router()

const formVaidation = [check("name","Name Feild is required").notEmpty(),
check("email","Please use the vaid email").isEmail(),
check('password',"password is small").isLength({ min: 5 })]

    route.get("/",(req,res)=>{
        res.render("index")
    })

    route.get("/register",(req,res)=>{
        res.render("register")
    })
     route.post("/register",formVaidation,async(req,res)=>{
    try {
        //checking for user errors
        const errors = validationResult(req)
        if(!errors.isEmpty()){            
            throw errors.array()
        }
        //Once user has valid entries check for email is it already exsist?
        const  emailExsist = await User.checkForEmail(req.body.email)

        if(emailExsist){
            throw [{msg:"Email Already Exsist.. Please try Login"}]
        }
        //save the data in data base
        const user = new User({name:req.body.name,email:req.body.email,password:req.body.password})
        await user.save()

    } catch (error) {       
        res.status("400").send(error)
    }
    
})




module.exports = route