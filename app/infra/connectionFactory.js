const mongoose = require('mongoose');


function createDBConnection(){
  var datab = mongoose.connect('mongodb://10.127.11.150/haab',{
	   useMongoClient: true,
  });
  datab.on('error', console.error.bind(console, 'connection error:'));
  datab.once('open', function() {
  	console.log("Connected to database");
    // we're connected!
  });
  return datab.connection;
}

module.exports = function(){
  return createDBConnection;
}
