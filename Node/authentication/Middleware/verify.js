var jwt=require("jsonwebtoken");
const e = require("express");
module.exports.verify=(req,res,next)=>{
if(req.headers["token"])
{
    var token=req.headers["token"];
   var decode= jwt.verify(token,global.config.key);
    console.log(decode);
   if(decode)
   {
       next();
   }
   else
   {
       res.send("invalid token");
   }

}
else
{
    res.send("Invalid user");
}
}