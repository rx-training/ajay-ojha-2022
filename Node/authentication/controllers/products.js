var express=require("express");

var authorization=require("../Middleware/authorization");

var router=express.Router();
router.get("/",(req,res)=>{
    var list=[{"productname":"monitor","price":"4000"},{"productname":"keyboard","price":"500"}]
    res.send(list);

})
router.post("/",[authorization.authorization],(req,res)=>{
    res.send("product added");
})
module.exports=router;