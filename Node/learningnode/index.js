// require('dotenv').config();
// var http=require("http");
// console.log("WElcome everyone");

// console.log("Hello world");
// console.log("WElcome")
// console.log("Hello ")
// function helloword()
// {
//     console.log("greeting of the day")
// }
// helloword();
// console.log(process.env.port);

// var textencode=new TextEncoder();
// var data=textencode.encode("Varsha");
// console.log(data);

// const fs=require("fs");

// var url="http://localhost:3000";
// var url1=new URL("/foo?id=9000",url);
// //console.log(url1.searchParams().get("id"));
// console.log("__dirname : "+ __dirname);
// // fs.mkdir("demofile",(err,path)=>{
// // console.log(path);
// // })d

// fs.appendFile("./demofile/info.txt","hello world",(d)=>{
// console.log(d);
// })


// http.createServer((req,res)=>{
// if(req.url="/")
// {
//     fs.readFile("./info.json",(err,data)=>{
//             console.log(JSON.parse( data));
//     })
// }
// res.end();

// }).listen(process.env.port,()=>{
//     console.log(`Server started at ${process.env.port}`)
// });

const os = require('node:os');
console.log(os.homedir());

