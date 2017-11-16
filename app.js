var http=require("http");
var express=require("express");
var app=express();
//var ejsEngine=require("ejs-locals");

//Setup view engine

var controllers=require("./controllers")

//app.engine("ejs",ejsEngine);
//app.set("view engine","ejs");

app.set("view engine" , "vash");

//app.set('views', '/views');
//app.get("/",function(req,res){
// // res.send("<html><body><h1>Hi There</h1></body></html>");
////res.render("ejs/index", { title : "Express + EJS"});
//res.render("index", {title : "Express + vash" });

app.use(express.static(__dirname + "/public"));

controllers.init(app);



app.get("/api/users", function(req, res){

    res.send({ name: "Abhishek", isvalid: true, UserRole: "Admin" });

    res.set('Content-Type', 'application/json');


  console.log('called inside Api code');
});

var server=http.createServer(app);
server.listen(8080);

console.log('Server running at http://localhost:8080/');



