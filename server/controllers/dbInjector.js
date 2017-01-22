/**
 * Created by shahzaib on 1/16/17.
 */

var mongoose = require('mongoose');
var schema = require('./../schema/schema');

module.exports.dataModels = {
   todos:schema.todos()
}
