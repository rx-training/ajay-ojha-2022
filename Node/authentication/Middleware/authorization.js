var jwt=require("jsonwebtoken");
const e = require("express");
module.exports.authorization=(req,res,next)=>{
if(req.headers["token"])
{
    var token=req.headers["token"];
   var decode= jwt.verify(token,global.config.key);
    console.log(decode);
   if(decode)
   {
       if(decode.role=="admin")
       {
           next();
       }
       else
       {
       res.send("You are unauthorized ");
       }
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