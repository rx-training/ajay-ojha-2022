var express=require("express");
const mongoose = require("mongoose");
const productModel=require("../Models/Product");
const ProductModel = require("../Models/Product");
var router=express.Router();

router.get("/",async (req,res)=>{
   //categoryid is a join key for populate
   var data= await productModel.find().populate("categoryID","CategoryName")
   res.send(data);
   res.end();
})
 router.post("/",async (req,res)=>{

  
 var productModel=new  ProductModel(req.body);

 var result=await productModel.save();
 
res.end();
 //res.status(200).send("record inserted");

})

router.put("/:id",async(req,res)=>{
  var id= req.params["id"]
 var data=await productModel.findById(id);
 data.Feedback.push(req.body);
 data.save();
})

module.exports=router;