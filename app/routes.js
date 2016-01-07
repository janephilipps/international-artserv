var Artist = require('./models/artist');

module.exports = function(app) {

  app.get('/api/artists', function(req, res) {
    console.log('hello');
    Artist.find(function(err, artists) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.json(artists);
    });
  });

  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html');
  });

};
