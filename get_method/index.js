const mongoose = require("mongoose");
const express = require("express");
const app = express();
const multer = require("multer");
const path=require("path");
//my Route
const userRoutes = require("./routes/user");


//my Routes
app.use("/api", userRoutes);

//DATABASE connectivit
mongoose.connect(process.env.DATABASE ,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>{
    console.log("DB Connected")
});
 
//server
const port = process.env.PORT || 8000;

//starting a server
app.listen(port , () =>{
    console.log(`App is runnning at ${port}`)
});