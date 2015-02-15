module.exports = function(app) {
    
    app.get('/list/events', function(req, res) {

        // get the events collection
        var events = app.db.get('events')


        // execute the query to find those matched limiting to 20
        events.find({}, {
            limit: 30
        }, function(err, e) {

            res.render('listEvents.jade', {
                events: e
            })
        })

    })
}