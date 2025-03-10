const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}!`);
});

//create http server and listen on port 3000 for requests
const server = http.createServer((req,res)=>{
    //Set the response HTTP header with status and content type
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World\n");
});

//Listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});