var express = require('express')
var app = express()

var dburl = 'mongodb://github:1234@ds041871.mongolab.com:41871/github'

// get db
var db = require('monk')(dburl)

// set the database
app.db = db

// use jade as the view engine
app.set('view engine', 'jade');

// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'));

// default to index
app.get('/', function(req, res) {
    res.render('layout.jade')
})


require('./mongo/reposList')(app)
require('./mongo/reposView')(app)
require('./mongo/eventsList')(app)
require('./mongo/eventsView')(app)


var server = app.listen(process.env.PORT || 5000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
})
