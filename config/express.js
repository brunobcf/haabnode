const express = require('express');
const load = require('express-load');
//const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const MongoStore = require('connect-mongo')(session);


module.exports = function(){
  var app = express();
  Room = require('../models/room');
  Measurement =require('../models/measurement');
  Event =require('../models/event');
  //console.log(__dirname);
  app.set('view engine','ejs');
  app.set('views','./app/views');
  //app.use(cookieParser('haab'));
  app.use(session({
    secret: 'haabathome',
    store: new MongoStore({ url: 'mongodb://10.127.11.150/haab' }),
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 2592000000 }
    }));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(methodOverride('_method'));
  app.use(express.static('public'));


  load('controllers',{cwd: 'app'})
    .then('routes', {cwd: 'app'})
    .then('infra', {cwd: 'app'})
  .into(app);


  return app;
}
