module.exports = function(app){
  app.get('/events', (req, res) => {
  	Event.getEvents((err, events) => {
  		if(err){
  			throw err;
  		}
  		//res.json(events);
      res.render("events/events", {list: events});
  	},50);
  });

}
