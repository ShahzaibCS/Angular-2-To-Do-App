/**
 * Created by shahzaib on 1/16/17.
 */
var express = require('express');
var router = express.Router()

//Controller
var todos = require('./../controllers/todos');

router.post('/add',todos.add);
router.get('/show',todos.selectall);

module.exports = router;
