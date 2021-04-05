var express = require('express');
var router = express.Router();

/* GET shops listing. */
router.get('/:id', function(req, res, next) {
  res.send("Id: " + req.params.tagId);
});

module.exports = router;
