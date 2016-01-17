var assert = require('assert'),
    express = require('express'),
    engines = require('consolidate'),

    app = express()
     .engine('html', engines.nunjucks)
     .set('view engine', 'html')
     .set('views', __dirname + '/views')
     .get('/', function(req, res) {
         res.send('It Works JW!');
    })
    .use(function(req, res) {
        res.sendStatus(404);
    }),
    server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Up an runnin');
    });
