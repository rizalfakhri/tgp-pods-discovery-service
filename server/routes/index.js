var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    'message': 'This is the Pods Discovery Service example.',
    'endpoints': [
      {
        url: '/pods',
        description: 'List of all pods.'
      },
      {
        url: 'http://localhost:9006',
        description: 'The GraphQL API.'
      }
    ]
  });
});

module.exports = router;
