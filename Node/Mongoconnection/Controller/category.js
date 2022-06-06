var express=require("express");
const mongoose = require("mongoose");
const CategoryModel=require("../Models/Category");
var router=express.Router();
router.get("/",(req,res)=>{
    CategoryModel.find((err,data)=>{
        res.send(data);
        res.end();
    })
})
router.post("/",(req,res)=>{
var data=new CategoryModel(req.body);
data.save();
res.end();
})
module.exports=router;