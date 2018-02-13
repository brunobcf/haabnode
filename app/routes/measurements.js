  module.exports = function(app){
  app.get('/api/measurement', (req, res) => {
  	Measurement.getMeasurementAll((err, measurements) => {
  		if(err){
  			throw err;
  		}
  		res.json(measurements);
  	});
  });

  app.get('/api/measurement/currtemp', (req, res) => {
    Measurement.getMeasurement((err, measurements) => {
      if(err){
        throw err;
      }
      res.json(measurements);
    },1,"Temperature");
  });

  app.get('/api/measurement/currhum', (req, res) => {
    Measurement.getMeasurement((err, measurements) => {
      if(err){
        throw err;
      }
      res.json(measurements);
    },1,"Humidity");
  });

  app.get('/api/measurement/currcur', (req, res) => {
    Measurement.getMeasurement((err, measurements) => {
      if(err){
        throw err;
      }
      res.json(measurements);
    },1,"Current");
  });

  app.get('/api/measurement/temp', (req, res) => {
    Measurement.getMeasurement((err, measurements) => {
      if(err){
        throw err;
      }
      res.json(measurements);
    },100,"Temperature");
  });

  app.get('/api/measurement/hum', (req, res) => {
    Measurement.getMeasurement((err, measurements) => {
      if(err){
        throw err;
      }
      res.json(measurements);
    },100,"Humidity");
  });

  app.get('/api/measurement/cur', (req, res) => {
    Measurement.getMeasurement((err, measurements) => {
      if(err){
        throw err;
      }
      res.json(measurements);
    },100,"Current");
  });

  app.get('/api/measurement/:_id', (req, res) => {
  	Measurement.getMeasurementById(req.params._id, (err, measurement) => {
  		if(err){
        res.redirect("/");
  			//throw err;
  		}
  		res.json(measurement);
  	});
  });

  app.post('/api/measurement', (req, res) => {
  	var measurement = req.body;
  	Measurement.addMeasurement(measurement, (err, measurement) => {
  		if(err){
  			throw err;
  		}
      Event.addEvent({"text":("Got a new "+measurement.type +" measurement from sensor: "+measurement.sensorid)}, (err, evento) => {
        if(err){
          throw err;
        }
      });
  		res.json(measurement);
  	});
  });

  app.put('/api/measurement/:_id', (req, res) => {
  	var id = req.params._id;
  	var measurement = req.body;
  	Measurement.updateMeasurement(id, measurement, {}, (err, measurement) => {
  		if(err){
  			throw err;
  		}
  		res.json(measurement);
  	});
  });
}
