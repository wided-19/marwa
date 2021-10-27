const Router = require('express').Router()
const User =require('../models/user')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const isAuth  = require ('../midleware/isAuth')

const {validator , registerRules , loginRules} = require('../midleware/volidator')


Router.post("/register",validator , registerRules() ,async(req,res)=>{
 const {first_name , last_name , dateofBrith , email , password , phone }=req.body
    try {
       //simple validation
         //if(!first_name || !last_name || !dateofBrith|| !email || !password || !phone){
        // return res.status(400).send({msg:"please enter all filds"})
        // }
   
        // check for existing email
        let user = await User.findOne({email})
        if (user){
          return res.status(400).send({msg:"user already exist"})
        }
        //create new user
        user = new User({first_name  , last_name, dateofBrith , email, password, phone})
        //hash password
        const salt = 10 ;
         hashPassword = await bcrypt.hash(password, salt)
        user.password = hashPassword
        //save user
        await user.save();
           
         //register payload
          const payload={ id : user._id
       }
        const token = await jwt.sign(payload , "mySecret" ,{expiresIn : 60*60})
    res.status(200).send({msg:'user Register with Success',user  ,token})
        }
    catch (error) { 

       return res.status(500).send({msg:'Register server error'})
         }
})

// login
 Router.post('/login',validator  , loginRules(), async(req, res)=>{
const {email , password} =req.body
try {
   // if (!email || !password){
      //  return res.status(400).send({msg:'please enter all fields'})
   // }

    let user = await User.findOne({email})
    if(!user){

        return res.status(400).send({msg:'user Does not exist'})
    }
    const isMatch =  await bcrypt.compare(password ,user.password)
    if (!isMatch){
       return  res.status(400).send({msg:'Bad credentials'})
    }
    //login payload
    const payload={ id : user._id   ,  
      first_name:user.first_name
    }
     const token = await jwt.sign(payload ,  "mySecret", {expiresIn : 60*60})
    res.status(200).send({msg:'Logged with success', user,token})


} catch (error) {
    
    res.status(500).send({msg:'login server error'})
}

 })

 
Router.get("/user",isAuth,(req,res)=>{
   res.status(200).send({user:req.user})
})


 module.exports= Router 