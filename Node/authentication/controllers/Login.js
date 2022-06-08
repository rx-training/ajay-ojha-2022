var express=require("express");
var jwt=require("jsonwebtoken");
var router=express.Router();

router.post("/",(req,res)=>{


    if(req.body.username=="admin" && req.body.password=="admin")
    {
        var user={"username":"admin","role":"admin"}
        jwt.sign(user,global.config.key,{expiresIn:global.config.expiresin,algorithm:global.config.algorithm},(error,token)=>{
            if(error)
            {
                res.send(error);
            }
            else
            {
                res.send({message:"Valid user",tokeninfo:token});
            }
        })
    }
    else
    {
        res.send("Invalid user");
    }
});
module.exports=router;