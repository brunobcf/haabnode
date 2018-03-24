var mysql = require('mysql');

function createMysqlDBConnection(){
    global.connection = mysql.createConnection({
        host     : '10.127.11.150',
        user     : 'node',
        password : 'iamnode',
        database : 'haabnode'
      });
    
      connection.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
          console.log('error when connecting to db:', err);
          setTimeout(createMysqlDBConnection, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
      });                                     // process asynchronous requests in the meantime.
                                              // If you're also serving http, display a 503 error.
      connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            createMysqlDBConnection();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
          throw err;                                  // server variable configures this)
        }
    });
    global.db = connection;
    
}

module.exports = function(){
  return createMysqlDBConnection;
}

