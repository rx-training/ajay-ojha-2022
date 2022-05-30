let express=require("express");
let fs=require("fs");
const { json } = require("express");
let app=express();

app.use(express.json())
app.get("/",(req,res)=>{
    console.log("Welcome to the Express");
    res.send("Welcome to the Express");
    res.end();
})

app.get("/api/customers",(req,res)=>{
fs.readFile("./info.json",(err,data)=>{
res.send(data);
res.end();
})
})
app.post("/api/customers",(req,res)=>{
    //console.log(req.headers);
    //console.log(req.body);
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
app.listen(3000,()=>{
    console.log("Server is listing on 3000 port")
})