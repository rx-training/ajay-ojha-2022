let jwt=require("jsonwebtoken");

verifyuser=(req,res,next)=>{
    if(req.headers["token"])
    {
    jwt.verify(req.headers["token"],global.config.key,{algorithms:global.config.algorithm},(err,decoded)=>{
        if(err)
        {
            return res.status(401).send("Error occur")
        }
        if(decoded)
        {
            //console.log(decoded);
            req.headers["data"]=decoded;
            next();
        }
    })
}
else
{
    return res.status(401).send("Token not provided");
}
}

module.exports=verifyuser;