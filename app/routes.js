var Artist = require('./models/artist');

module.exports = function(app) {

  var handleError = function(res, err, onSuccess) {
    if (err) {
      res.status(500).send(err);
    } else {
      onSuccess();
    }
  }

  app.get('/api/artists', function(req, res) {
    Artist.find(function(err, artists) {
      handleError(res, err, function() {
        res.json(artists)
      });
    });
  });

  app.get('/api/artists/:id', function(req, res) {
    Artist.findById(req.params.id, function(err, artist) {
      handleError(res, err, function() {
        res.json(artist)
      });
    });
  });

  // app.post('/api/artists'), function(req, res) {
  //   Artist.find(function(err, artists) {
  //     if (err) {
  //       res.send(err);
  //     }
  //     res.json(artists);
  //   });
  // });

  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

};
