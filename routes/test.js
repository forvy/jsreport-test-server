var express = require('express');
var router = express.Router();
var request = require('request');
/* GET users listing. */
router.get('/', function (req, res, next) {
  var shortid=req.query.shortid;
  var preview =req.query.preview;
  var data = {
      template: { "shortid": shortid },
      options: {
          preview: preview
      }
  }
  var options = {
      uri: 'http://localhost:5477/api/report',
      method: 'POST',
      json: data
  }
  request(options).pipe(res);
});

module.exports = router;
