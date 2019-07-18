var express = require('express');
var router = express.Router();
var request = require('request');
/* GET users listing. */
router.get('/', function (req, res, next) {
    var shortid = req.query.shortid;
    var preview = req.query.preview;
    var data = {
        template: { "shortid": shortid },
        options: {
            preview: preview
        }
    }
    var options = {
        uri: 'http://localhost:5488/api/report',
        auth: { user: 'admin', password: 'password'}, // << this what I mean
        method: 'POST',
        json: data
    }
    console.log(JSON.stringify(req.headers));
    request(options).pipe(res);
});

module.exports = router;
