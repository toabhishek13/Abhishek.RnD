var http=require("http");

var express=require("express");
var app=express();

app.get("/",function(req,res)
{
  res.send("<html><body><h2> Hi There </h1></body></html>);
});

var server=http.createServer(app);

server.listen(3000);