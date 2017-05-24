
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


var dal = (function(){
   return{

       connect : function(){
           db.once('open', function() {
               console.log('your connected');
           });
       }
   }


})();


module.exports = dal;