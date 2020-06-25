var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
	{id: 1, message="hello"},
	{id: 2, message="hello2"}
	])
});

module.exports = router;
