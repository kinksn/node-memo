const express = require('express');
const mysql = require('mysql');
const app = express();

//viewエンジンをejsであることを設定
app.set("view engine", "ejs");

app.get('/', function(req, res){
    const message = "Hello World!";
    res.render("index", {message: message});
});

app.listen(3000, () => console.log('app listening on port 3000!'));