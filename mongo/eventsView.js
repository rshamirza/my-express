module.exports = function(app) {

    app.get('/view/events/:id', function(req, res) {

        // get the events collection
        var events = app.db.get('events')

         var q = {
            'id': req.params.id            
        }

        var e = events.findOne(q, function(err, item) {

            res.render('viewEvents.jade', {
                events: item
            })
        })

    })
}