module.exports = function(app){
  var DashboardController = {
    index: function(req,res) {
      var user = req.session.user,
          userId = req.session.userId,
          param = {user:user};
      var message = '';

      if(userId == null){
        res.redirect("/");
        return;
      }
      if(global.db != null){
        var sql="SELECT * FROM `login_details` WHERE `id`='"+userId+"'";
        db.query(sql, function(err, results){
        // console.log(param);
        //res.render('home/dashboard', temp);
          Measurement.getMeasurement((err, temp) => {
           if(err){
             throw err;
           }
           //res.json(temp);
          // console.log(temp[0].value/temp[0].scale);
           res.render('home/dashboard', param);
          },1,"Temperature");
        });
      } else {
        connection.connect();
        global.db = connection;
        var sql="SELECT * FROM `login_details` WHERE `id`='"+userId+"'";
        db.query(sql, function(err, results){
        // console.log(param);
        //res.render('home/dashboard', temp);
          Measurement.getMeasurement((err, temp) => {
           if(err){
             throw err;
           }
           //res.json(temp);
          // console.log(temp[0].value/temp[0].scale);
           res.render('home/dashboard', param);
          },1,"Temperature");
        });
      }

    }
  };
  return DashboardController;
};
