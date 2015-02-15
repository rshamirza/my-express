module.exports = function(app) {

    app.get('/view/repos/:id', function(req, res) {

        // get the repos collection
        var repos = app.db.get('repos')

        var q = {
            'id': Number(req.params.id)          
        }
        var r = repos.findOne(q, function(err, item) {

            res.render('viewRepos.jade', {
                repos: item
            })
        })

    })
}