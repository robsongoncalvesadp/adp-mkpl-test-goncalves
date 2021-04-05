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
  })
  .then(response => {
    let result = [];
    let id = response.jsonBody.businesses.id;
    let name = response.jsonBody.businesses.name;

    for ( { id, name } of response.jsonBody.businesses) {
      console.log(id);
      client.reviews(id)
      .then(response => {
        let finalObj = {
          id,
          name,
          user: response.jsonBody.reviews[0].user.name,
          text: response.jsonBody.reviews[0].text,
        }

        result.push(finalObj);
      },
      )
      .catch(err => { console.log(err);
      });
    }
  })
  .catch(e => {
    console.log(e);
  })
});

module.exports = router;
