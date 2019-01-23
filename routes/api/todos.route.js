var express = require('express');
var router = express.Router();

// Getting the Todo Controller that we just created

var ToDoController = require('../../controllers/todo.controller.js');


// Map each API to the Controller FUnctions

router.get('/', ToDoController.getTodos) //run the function that was created in the

router.post('/', ToDoController.createTodo)

router.put('/', ToDoController.updateTodo)

router.delete('/:id',ToDoController.removeTodo)


// Export the Router

module.exports = router;
