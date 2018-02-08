module.exports = function(app){

  app.post('/haabnexa/send', (req, res) => {
    var net = require('net');
    var command = req.body;
    var user = req.session.user.user_name;
    var client = net.connect(5697,"10.127.11.50", function() { //'connect' listener
      //console.log(command.command);
      Event.addEvent({"text":("Sent command "+command.command+" to HaabNexa gateway by user: "+user)}, (err, evento) => {
        if(err){
          throw err;
        }
      });
      client.write(command.command);
      res.json(command);
    });
  });

}
