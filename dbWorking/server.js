var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
  
/* fs.readFile( "C:\\Users\\Administrator\\Desktop\\nodejsans.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });  */


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/test";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("test");
    console.log("Database connected");

dbo.collection("test").find({}).toArray(function(err, result) {
  console.log(JSON.stringify(result));
  res.end(JSON.stringify(result));
  });

});

});


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

});