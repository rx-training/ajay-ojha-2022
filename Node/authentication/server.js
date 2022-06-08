var express=require("express");
var app=express();
global.config=require("./config");
var Login=require("./controllers/Login");
var Product=require("./controllers/products");
var verify=require("./Middleware/verify");
app.use(express.json());
app.listen(3000,()=>{
    console.log("server is listening on 3000 port number");
})
app.use("/login",Login);
app.use(verify.verify);
app.use("/products",Product);