const express = require('express');
const mysql = require('mysql');
const app = express();

//viewエンジンをejsであることを設定
app.set("view engine", "ejs");



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'list_app'
});

connection.connect( err => {
    if (err) throw err;
    console.log('Connected');
});

app.get('/', (req, res) => {
    connection.query(
        'SELECT * FROM items',
        (error, results) => {
            res.render("index", {items: results[0]})
        }
    )
});

app.listen(3000, () => console.log('app listening on port 3000!'));