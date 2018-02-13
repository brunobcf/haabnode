module.exports = function(app){
  var message = '';
  var HomeController = {
    index: function(req,res) {
      if (req.session.user){
        var user = req.session.user;
        res.render('home/dashboard', {user: user});
      }
      else{
        message = "Please login first";
        res.render('home/home', {message: message});
      }
    },
    login: function(req, res){
       //var message = '';
       var sess = req.session;

       if(req.method == "POST"){
          var post  = req.body;
          var name= post.user_name;
          var pass= post.password;

          var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";
          db.query(sql, function(err, results){
            console.log(results.length);
             if(results.length>0){
                req.session.userId = results[0].id;
                req.session.user = results[0];
                //console.log(results[0].id);
                res.redirect('/dashboard');
             }
             else{
                message = 'Wrong Credentials.';
                //res.redirect('/');
                res.render('home/home', {message: message});
             }
          });
        } 
        else {
          res.redirect('/');
        }
    },
    logout: function(req,res){
      req.session.destroy();
      res.redirect('/');
    }
  };
  return HomeController;
};
