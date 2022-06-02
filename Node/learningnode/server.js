let express=require("express");
let logger=require("./logger");
let jwt=require("jsonwebtoken");
let fs=require("fs");
let verifyuser=require("./middleware/verify");
const { config } = require("dotenv");
global.config=require("./config");
let app=express();
app.use(express.static("public"));

app.use(express.json())

app.post("/login",(req,res)=>{
    if(req.body.username=="admin" && req.body.password=="admin")
    {
        let user={UserName:"varsha",Role:["admin","HR"]}
    let token=    jwt.sign(user,global.config.key,{
           
            algorithm:global.config.algorithm,
            expiresIn:global.config.expiresin
        })
        res.status(200).send({status:"login successful",Token:token})
    }
    else
    {
        res.status(401).send({status:"Invalid user"})
    }
    res.end();
})

app.get("/",(req,res,next)=>{
    console.log("Welcome to the Express");
    fs.readFile("./data.ts",(err,data)=>{
        if(err)
        {
          //  throw new Error(err);
            next(err);
            //res.send(err);
        }
        else
        {
        console.log("hello")
        res.send(data);}
   // res.end();
    })
    
})

app.get("/api/customers",(req,res)=>{
fs.readFile("./info.json",(err,data)=>{
res.send(data);
res.end();
})
})
app.use(logger.logger);
app.post("/api/customers",[verifyuser],(req,res)=>{
    //console.log(req.headers);
    //console.log(req.body);
    console.log(req.headers["data"]);
    data1=[];
    datainfo={};
    fs.readFile("./info.json","utf-8",(err,data)=>{
        data1= JSON.parse( data);
        data1.push(req.body);
        fs.writeFile("./info.json",JSON.stringify( data1),(err)=>{
        console.log("File written");
        })
        res.send(data1);
        res.end();
    })})


app.put("/api/customers/:id",(req,res)=>{
data1=[];
fs.readFile("./info.json","utf-8",(err,data)=>{
    data1=JSON.parse(data);
 const result=   data1.find((data)=>{
            return  data.id=== parseInt( req.params.id);
    })

result.Name=req.body.Name;
result.Address=req.body.Address;
fs.writeFile("./info.json",JSON.stringify( data1),(err)=>{
    console.log("File written");
})
res.send(data1);
res.end();
})
})

app.delete("api/customers/:id",(req,res)=>{

})

app.use((error,req,res,next)=>{
    console.log(error)
    res.status(500).send("Error occur in the application")
})

app.listen(3000,()=>{
    console.log("Server is listing on 3000 port")
})

