var express = require('express');

var router = express.Router();

var todos = require('./api/todos.route');

//everything that calls this router will have this prefix
router.use('/todos', todos);


module.exports = router;