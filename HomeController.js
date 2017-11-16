
(function (homeController) {
    var data=require("../data");
    homeController.init = function (app)
    {
        app.get("/", function (req, res) {

            // res.send("<html><body><h1>Hi There</h1></body></html>");
            //res.render("ejs/index", { title : "Express + EJS"});

            //  res.render("index", { title: "Express + vash" });

            data.getNoteCategories(function (err, results) {

                res.render("index", { msg: "Hi there Abhishek", title: "Node Work" ,  error: err, categories: results });

            });         
        });
     };
   })(module.exports);