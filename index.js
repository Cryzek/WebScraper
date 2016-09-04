var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');

var app = express();

app.get('/scrape',function(req,res){
    //The url where we will scrape from.Request is sent using request required above.

    var url = "http://www.imdb.com/title/tt1229340/";

    request(url, function(error, responseCode, html){
        if(!error){

        }
    });
    res.send("Hello User\n");
});

app.listen(8000);
console.log("Server using the port 8000");
