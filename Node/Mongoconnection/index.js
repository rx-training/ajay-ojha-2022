var express=require("express");

var category=require('./Controller/category')
var CategoryModel=require("./Models/Category");
var product=require("./Controller/product");
var connection=require("./connection");
const connect = require("mongoose");
connect.connect;
//var connect=mongoose.connect("mongodb://localhost:27017/testdb");
var app=express();
app.use(express.json());
app.use("/category",category);
app.use("/products",product);

// var data=new CategoryModel({CategoryName:"Electronics"});
// data.save();

app.listen(5000,()=>{
    console.log("Server is listing on port 3000");
})