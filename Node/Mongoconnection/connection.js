var mongoose=require("mongoose");
var connect=mongoose.connect("mongodb://localhost:27017/testdb");
module.exports=connect;