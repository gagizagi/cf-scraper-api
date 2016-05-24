var express = require('express');
var cloudscraper = require('cloudscraper');
var app = express();

app.get('/', function (req, res) {
  cloudscraper.get(req.query.href, function(error, response, body) {
    if (error) {
      console.log('Error occurred');
      res.send("Error");
    } else {
      res.send(body);
    }
  });
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT || 422, process.env.OPENSHIFT_NODEJS_IP || "", function () {
  console.log('App listening on port', process.env.OPENSHIFT_NODEJS_PORT || 422);
});
