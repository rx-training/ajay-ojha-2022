exports.logger=(req,res,next)=>{
    console.log(req.url,req.method,new Date());
    next();
}