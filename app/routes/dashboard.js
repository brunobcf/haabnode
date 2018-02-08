module.exports = function(app) {
  var authenticate = require('../../middlewares/auth');
  var dashboard = app.controllers.dashboard;
  app.get('/dashboard', authenticate, dashboard.index);
};
