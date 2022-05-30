require('dotenv').config();

var http=require("http");
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


// import
const {emitter} = require('./hello');
const fs = require('fs');

http.createServer((req,res)=>{
if(req.url="/")
{
    setTimeout(() => {
        fs.readFile("./info.json",(err,data)=>{
            emitter.emit('fileIsReady', data);
            console.log(JSON.parse( data));
    })
    }, 5000);

}
res.end();

}).listen(process.env.port,()=>{
    console.log(`Server started at ${process.env.port}`)
});

// const os = require('node:os');
// console.log(os.homedir());


// var test=require("./test");

// var obj=new test.calc();
// console.log(obj.add(45,56))
// var obj1=new test.rectangle();
// console.log( obj1.area(45,45));