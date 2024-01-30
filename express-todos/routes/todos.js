var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');

// GET /todos
router.get('/', todosCtrl.index);

// GET /todos/:id
router.get('/:id', todosCtrl.show)
module.exports = router;
