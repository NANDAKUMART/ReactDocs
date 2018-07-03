var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
var fs = require("fs");

function getValuesFromTable(tableName) {

    return new Promise(function(success, fail) {

        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://127.0.0.1:27017/test";

        MongoClient.connect(url, function(err, db) {
            if (err)
            {
                fail(err);
            }

            var dbo = db.db("test");

            dbo.collection(tableName).find({}).toArray(function(err, result) {
                if (err)
                {
                    fail(err);
                }
                console.log("Inside getValuesFromTable:" + JSON.stringify(result));
                db.close();
                success(result);
            });
        });
    });
}

function postValueToTable(tableName,obj)
{

    return new Promise(function(success, fail) {

        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://127.0.0.1:27017/test";

        MongoClient.connect(url, function (err, db) {
            if (err) {
                fail(err);
            }

            var dbo = db.db("test");
            dbo.collection(tableName).insertOne(obj, function (err, res) {
                if (err) {
                    fail(err);
                }

                console.log("document inserted");
                db.close();
                success("Success");
            });
        });

    });

}



var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});

//This is dummy get call
app.get('/listUsers', function (req, res) {

    getValuesFromTable("test").
    then(function(data) {
        res.end(JSON.stringify(data));
    }).catch(function(error) {
        console.error(error);
        res.end(error);
    });
});

app.get('/getHackMasterDetails', function (req, res) {

    getValuesFromTable("HackMasterTbl").
    then(function(data) {
        res.end(JSON.stringify(data));
    }).catch(function(error) {
        console.error(error);
        res.end(error);
    });

});

app.get('/getHackDetails', function (req, res) {

    getValuesFromTable("HackDetailViewTbl").
    then(function(data) {
        res.end(JSON.stringify(data));
    }).catch(function(error) {
        console.error(error);
        res.end(error);
    });

});

app.get('/getLoginDetails', function (req, res) {

    getValuesFromTable("LoginTbl").
    then(function(data) {
        res.end(JSON.stringify(data));
    }).catch(function(error) {
        console.error(error);
        res.end(error);
    });
});

app.get('/getRegisteredTeamDetails', function (req, res) {

    getValuesFromTable("RegisteredTeamDetailsTbl").
    then(function(data) {
        res.end(JSON.stringify(data));
    }).catch(function(error) {
        console.error(error);
        res.end(error);
    });
});

app.get('/getLeadingInfoDetails', function (req, res) {

    getValuesFromTable("LeadingInfoTbl").
    then(function(data) {
        res.end(JSON.stringify(data));
    }).catch(function(error) {
        console.error(error);
        res.end(error);
    });
});

app.post("/postUserDetail", function(request, response) {

    console.log(request.body);

    if (!request.body || 0 === request.body.length) {
        getValuesFromTable("test", request.body).then(function (data) {
            response.end("Success");
        }).catch(function (error) {
            console.error(error);
            response.end(error);
        });
    }
    else
        response.end("Body Missing");

});

/* fs.readFile( "C:\\Users\\Administrator\\Desktop\\nodejsans.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
    });  */
