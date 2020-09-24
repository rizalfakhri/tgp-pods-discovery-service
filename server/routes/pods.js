var express = require('express');
var router = express.Router();

const PodsAPI = require('../data/pods')


/* GET users listing. */
router.get('/', function(req, res, next) {

  let podsApi = new PodsAPI()

  let id = req.query.id


  let response = (typeof id == 'undefined') ? podsApi.getRawData() : podsApi.getPodById(id)

  res.send(
    (typeof id == 'undefined') ? podsApi.getRawData() : podsApi.getPodById(id)
  );
});

module.exports = router;
