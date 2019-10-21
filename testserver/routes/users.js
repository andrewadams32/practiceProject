var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login/:email/:pass', (req, res) => {
  res.send({found: true})
})

router.post('/signup/:email/:pass', (req, res) => {
  res.send({created: true})
})

module.exports = router;
