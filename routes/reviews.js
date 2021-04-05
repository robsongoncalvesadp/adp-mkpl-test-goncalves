var express = require('express');
var router = express.Router();
const API_KEY = "8ZrKLjDVqCgbAL4uh736OZev15c-MIMuJ8kCDm1NfUDJ8vAItJwY2cWTamsslYXuFZG_SWm_O2GB8h-9asfrLQUtyBafmHe7fZmz0GP29dGa6sCK1B_tSfzy7qCAXXYx"

router.get('/:id', function(req, res, next) {
  'use strict';
  const yelp = require('yelp-fusion');
  const client = yelp.client(API_KEY);

  client.reviews(req.params.id).then(response => {
    res.send(response.jsonBody.reviews[0]);
  }).catch(e => {
    console.log(e);
  });
});

module.exports = router;
