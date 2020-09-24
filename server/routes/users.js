var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let pods = [
    {
      name: 'Pods 1'
    }
  ]

  res.send(pods);
});

module.exports = router;
