var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate') 
//helps with grouping results increase performance results

//model setup blueprint
var ToDoSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    status: String
})

ToDoSchema.plugin(mongoosePaginate)
//create instance of a model
const ToDo = mongoose.model('Todo', ToDoSchema)

module.exports = ToDo;