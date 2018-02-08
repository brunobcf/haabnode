module.exports = function(app){
  var home = app.controllers.home;
  var user = app.controllers.user;
  app.get('/', home.index);
  app.get('/login', home.login);
  app.get('/logout', home.logout);
  app.get('/signup', user.signup);//call for signup page
  app.post('/login', home.login);//call for login post
  app.post('/signup', user.signup);//call for signup post

};
