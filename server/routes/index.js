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
        url: '/graphql',
        description: 'The GraphQL API.'
      },
      {
        url: '/graphiql',
        description: 'The GraphiQL Playground.'
      }
    ]
  });
});

module.exports = router;
