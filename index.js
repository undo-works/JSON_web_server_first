const express = require('express')
const path = require("path")
const app = express()

//to use body in req
app.use(express.urlencoded({extended: false}));

//can use the location of public
app.use(express.static(path.join(__dirname, "public")))

//post method
app.post("/api/v1/quiz", function(req, res){
    const answer = req.body.answer;
    if(answer === "2"){
        res.redirect("/correct.html")

    }else if(answer === "二"){
        res.send("<h1>It's Japanese KANJI!!</h1>");
        
    }else{
        res.send("Incorrect answer");
    }
});

//get method
/* app.post("/api/v1/quiz", function(req, res){
    res.send({
        name : "Mike",
        age : 30,
    });
}); */

/* app.get('/', function (req, res) {
    console.log(req)
  res.send('<h1>index page</h1>')
}) */

/* app.get('/about', function (req, res) {
    res.send('about page')
  }) */

app.listen(3000, function(){
    console.log("I am running")
})
