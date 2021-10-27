 const Produit =require ('../models/produit')
 const Router = require('express').Router()

    
   Router.post("/produit" ,async(req,res)=>{

      const {image,title,price ,description , countInStock ,rating}=req.body
      try {
          // simple validation
             if(!image|| !title || !price || !description || !countInStock|| !rating){
             return res.status(400).send({msg:"please enter all filds"})
             }
             //create new prouit
            produit = new Produit({image,title,price ,description,countInStock,rating})
             
             await produit.save();
                
             
             res.status(200).send({msg:'Produit with Success',produit})
          }
        catch (error) { 
     
          return res.status(500).send({msg:'Produit  server error'})
              }
            
   })
   
//get all Produit
Router.get("/produit", async(req,res)=>{
    
  try {
      const result = await Produit.find();
        res.status(200).send({response: result, msg:"geting Produit succes"})
    } catch(error) {
        res.status(500).send({msg:"can not get Produit"})
    
   } 
   })
    //get By ID
  Router.get("/produit/:id/", async(req,res)=>{
    
       try {
        const result = await Produit.findOne({_id:req.params.id});
           res.status(200).send({response: result, msg:"geting Produit succes"})
    } catch(error) {
           res.status(400).send({msg:"can not get Produit whith this ID"})
       }
      })
        
    // delete Produit
  Router.delete("/produit/produit/:id/", async(req,res)=>{
        try {
            const res = await Produit.deleteOne({_id:req.params.id})
            res?
           res.status(200).send({msg:"Produit deleted"})
           :
          res.status(400).send({msg : "can not Produit"})
        } catch (error) {
           res.status(500).send({msg :"can not delete Produit"})
        }
    })
    
   // update  Produit with ID
   Router.put("/produit/produit/:id/", async(req,res)=>{

      try {
        const productId = req.params.id;
         const updatedProduct = await Produit.updateOne({_id:productId}, {$set:{...req.body}})
         updatedProduct?
          res.status(200).send({msg:"Produit updated"})
          :
           res.status(400).send({msg : "can not Produit"})
     } catch (error) {
           res.status(500).send({msg :"can not update Produit"})
       }
   })
    module.exports= Router 
