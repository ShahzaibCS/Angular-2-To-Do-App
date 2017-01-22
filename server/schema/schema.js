/**
 * Created by shahzaib on 1/16/17.
 */

var mongoose = require('mongoose');
var path = require('path');
var Schema = mongoose.Schema;

exports.todos = function(){
    var todo  =  {
        id:Schema.ObjectId,
        task_name:String,
        createdAt:Date
    }

    // var todos = mongoose.Schema(todo);
    var todos = mongoose.Schema({
        id:Schema.ObjectId,
        task_name:String,
        createdAt:Date
    });

    return mongoose.model('todo',todos);
}