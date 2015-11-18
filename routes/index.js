module.exports = function (app) {

  app.get('/api/artists', function (req, res) {
    var artists = [{ firstName: 'Jane',
                    lastName: 'Philipps',
                    website: 'www.janephilipps.com',
                    emailAddress: 'jane.philipps@gmail.com',
                    city: 'San Francisco',
                    country: 'USA',
                    occupation: 'Artist'},
                    { firstName: 'Erin',
                    lastName: 'Mitchell',
                    website: 'www.erin-mitchell.com/',
                    emailAddress: 'erinleighmitchell1@gmail.com',
                    city: 'San Francisco',
                    country: 'USA',
                    occupation: 'Artist'},
                    { firstName: 'Jen',
                    lastName: 'Hewett',
                    website: 'http://jenhewett.com/',
                    emailAddress: 'erinleighmitchell1@gmail.com',
                    city: 'San Francisco',
                    country: 'USA',
                    occupation: 'Artist'}
                    ];
    res.json(artists);
  });

  app.get('*', function (req, res) {
    res.sendfile('./public/views/index.html');
  });

};