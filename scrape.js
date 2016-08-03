var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      console.log(a.text());
    });
  }
});

app.listen(3000,function(err){
	if(err) throw err;
	console.log('server is runing');
});