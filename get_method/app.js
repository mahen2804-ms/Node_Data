var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

// New app using express module
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get("/student_get",function(req, res) {
res.sendFile(__dirname + "/index.html");
});

app.post("/student_data",function(request, res){  
  var data= request.body
   console.log(data);
   res.send(JSON.stringify(data)); 
   
});

app.listen(8000, function(){
console.log("server is running on port 8000");
})
