var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    httpProxyAgent = require('http-proxy-agent');

var app = express();

app.get('/scrape',function(req,res){
    //The url where we will scrape from.Request is sent using request required above.
    var url = "http://www.imdb.com/title/tt0111161/";
    var url1 = "http://www.imdb.com/title/tt0137523/";
    // To be used when working behind a proxy server.

    // var agent = new httpProxyAgent("http://172.31.1.4:8080");
    request({
        uri : url1
        // agent : agent
    },
    function(error, response, html){
        if(!error && response.statusCode == 200){
            var $ = cheerio.load(html);
            var title, release ,rating;

            var json = {
                title : "",
                release : "",
                rating : ""
            };

            var detailsHeader = $(".title_wrapper").children("h1");

            var title = detailsHeader.text();

            json.title = title;
            console.log(title);
            res.send(html);
        }
        else{
            console.log("Could not connect.");
        }
    });

});

app.listen(8000);
console.log("Server using the port 8000");
