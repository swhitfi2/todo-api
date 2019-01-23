// Access our newly created Mongoose Model
//example of read function of  CRUD 
var ToDo = require('../models/todo.model.js');

// Saving the context of this module inside the _this variable
_this = this

// Let's use an Async function to get the To Do List define and export in the same line of code
exports.getTodos = async function(query, page, limit){

    // We also want to set up options for the mongoose paginate

    var options = {
        page,
        limit
    }

//Let's create a Try and Catch function 
//that way we have some error handling set. 
//Waiting for the promise
    
try {
    var todos = await ToDo.paginate(query, options)
    
//Once the Mongoose promise is returned 
//we're going to go ahead and return 
//the To Do List it has produced 

    return todos;

    } catch (e) {

//If the try didn't work we're going to 
//go ahead and let the users know what kind of 
//Error we have

    throw Error('Oh No! We got an error while Paginating our To-Do Tasks, so sorry!' )
    }
}

//new function creater a todo
//create function in CRUD
exports.createTodo = async function(todo){
    
    // Creating a new Mongoose Object by using the new keyword
    
        var newTodo = new ToDo({
            title: todo.title,
            description: todo.description,
            date: new Date(),
            status: todo.status
        })
    
        try{
    
            // Let's go ahead and save the Todo 
    
            var savedTodo = await newTodo.save()
    
            return savedTodo;
            } catch(e) {
          
            //if we can't create a Todo we want to throw an error 
    
            throw Error("Error while Creating Todo")
        }
    }

//new function
//update function CRUD
exports.updateTodo = async function(todo){
    var id = todo.id

    try{
        //Find the old Todo Object by the Id
    
        var oldTodo = await ToDo.findById(id);
       } catch(e) {
        throw Error("Error occured while Finding the Todo")
    }

    // If no old Todo Object exists return false

    if(!oldTodo){
        return false;
    }

    console.log(oldTodo)

    //Edit the Todo Object

    oldTodo.title = todo.title
    oldTodo.description = todo.description
    oldTodo.status = todo.status


    console.log(oldTodo)

    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
       } catch(e) {
        throw Error("And Error occured while updating the Todo");
    }
}

//new function
//Delete destroy function CRUD

exports.deleteTodo = async function(id){
    
    // Delete the Todo

    try{
        var deleted = await ToDo.deleteOne({_id: id})
        if(deleted.n === 0){ //n represents the number of records that are deleted
            throw Error("Todo Could not be deleted")
        }
        return deleted
        } catch(e) {
        throw Error("Error Occured while Deleting the Todo")
    }
}

