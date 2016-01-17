"use strict";

const PORT = process.env.PORT || 3000;

var assert = require('assert'),
    express = require('express'),
    engines = require('consolidate'),
    ts = require('./timestamps.js'),
    app = express().engine('html', engines.nunjucks).set('view engine', 'html').set('views', __dirname + '/views').get('/', function (req, res) {
    // res.send('It Works JW!');
    res.render('welcome');
}).get('/:value', function (req, res) {
    res.json(ts.response(ts.parseValue(req.params.value)));
}).use(function (req, res) {
    res.sendStatus(404);
}),
    server = app.listen(PORT, function () {
    let port = server.address().port;
    console.log('Up an runnin');
});
