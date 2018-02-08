#!/usr/bin/env node
// All Express stuff is on config
var app = require ('./config/express')();
var mysql = require('mysql');
// Connect to Mongoose via connectionFactory
var db = app.infra.connectionFactory();
var connection = mysql.createConnection({
                host     : '10.127.11.150',
                user     : 'node',
                password : 'iamnode',
                database : 'haabnode'
              });
connection.connect();
global.db = connection;

//Default route. All other routes are in /app/routes
/*app.get('/', (req, res) => {
	res.render("home/home",{teste : "Bruno"});
});*/

var logServerStart = function(){
  console.log("Server running.");
}
var server_port = 5630;
app.listen(server_port,logServerStart);
