var mongoose = require('mongoose');

//mongoose.Promise = require('bluebird');

var promise = mongoose.connect('mongodb://localhost/NodeProje', {
  useMongoClient: true,
  /* other options */
},function(err){
    if(err)
        console.log('Connection failed :'+err);
    else
        console.log('Connected succesfully');
});


