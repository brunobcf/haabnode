module.exports = function(app){
  app.get('/api/room', (req, res) => {
  	Room.getRooms((err, rooms) => {
  		if(err){
  			throw err;
  		}
  		res.json(rooms);
  	});
  });

  app.get ('/api/room/add', function(req,res){
  res.render("room/add");
  });

  app.post('/api/room', (req, res) => {
  	var room = req.body;
  	Room.addRoom(room, (err, room) => {
  		if(err){
  			throw err;
  		}
  		res.json(room);
  	});
  });

  app.put('/api/room/:_id', (req, res) => {
  	var id = req.params._id;
  	var room = req.body;
  	Room.updateRoom(id, room, {}, (err, room) => {
  		if(err){
  			throw err;
  		}
  		res.json(room);
  	});
  });

  app.delete('/api/room/:_id', (req, res) => {
  	var id = req.params._id;
  	Room.removeRoom(id, (err, room) => {
  		if(err){
  			throw err;
  		}
  		res.json(room);
  	});
  });
}
