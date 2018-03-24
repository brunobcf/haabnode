#!/usr/bin/env node
// All Express stuff is on config
var app = require ('./config/express')();

// Connect to Mongoose via connectionFactory
var db = app.infra.connectionFactory();


app.infra.mysqlconnectionFactory();


//global.db = connection;

var logServerStart = function(){
  console.log("Server running.");
}
var server_port = 5630;
app.listen(server_port,logServerStart);
