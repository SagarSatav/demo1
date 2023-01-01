const express=require("express");
const app=express();
const path=require("path");

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"));
});
app.get("/home",(req,res)=>{
    res.send("hello sagar");
});

app.listen(1000);
console.log("server is running");