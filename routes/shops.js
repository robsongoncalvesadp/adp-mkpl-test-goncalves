var express = require('express');
var router = express.Router();
const API_KEY = "8ZrKLjDVqCgbAL4uh736OZev15c-MIMuJ8kCDm1NfUDJ8vAItJwY2cWTamsslYXuFZG_SWm_O2GB8h-9asfrLQUtyBafmHe7fZmz0GP29dGa6sCK1B_tSfzy7qCAXXYx"

/* GET shops listing. */
router.get('/', function(req, res, next) {
  'use strict';

  const yelp = require('yelp-fusion');
  const client = yelp.client(API_KEY);

  client.search({
    term: 'ice cream shop',
    location: 'Alphareta, GA',
    limit: 5,
  }).then(response => {
    res.send(response.jsonBody.businesses);
  }).catch(e => {
    console.log(e);
  })
});

module.exports = router;
