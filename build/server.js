"use strict";

const PORT = process.env.PORT || 3000;

var assert = require('assert'),
    express = require('express'),
    engines = require('consolidate'),
    app = express().engine('html', engines.nunjucks).set('view engine', 'html').set('views', __dirname + '/views').get('/', function (req, res) {
    // res.send('It Works JW!');
    res.render('welcome');
}).use(function (req, res) {
    res.sendStatus(404);
}),
    server = app.listen(PORT, function () {
    let port = server.address().port;
    console.log('Up an runnin');
});
