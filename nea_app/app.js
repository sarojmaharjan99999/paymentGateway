"use strict";

var express = require("express");
var app     = express();


var port = 5000;


app.get('/',function (req,res) {
    res.json({message:"hello world"});
});

app.listen(port ,function () {
    console.log("server running at port" + port);
});