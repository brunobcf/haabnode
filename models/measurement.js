const mongoose = require('mongoose');

// Measurement Schema
const measurementSchema = mongoose.Schema({
	type:{
		type: String,
		required: true
	},
	sensorid:{
		type: String,
		required: true
	},
	unit:{
		type: String,
		required: true
	},
	scale:{
		type: String,
		required: true
	},
	value:{
		type: String,
		required: true
	},
  create_date:{
		type: Date,
		default: Date.now
	}
});

const Measurement = module.exports = mongoose.model('Measurement', measurementSchema,'measurement');

// Get measurements
module.exports.getMeasurement = (callback, limit, data) => {
	Measurement.find(callback).sort({create_date: -1}).find({type:data}).limit(limit);
}

module.exports.getMeasurementAll = (callback, limit) => {
	Measurement.find(callback).limit(limit).sort({create_date: -1});
}

// Get Measurement
module.exports.getMeasurementById = (id, callback) => {
	Measurement.findById(id, callback);
}

// Add Measurement
module.exports.addMeasurement = (measurement, callback) => {
	console.log("Got new measurement from sensors.");
	Measurement.create(measurement, callback);
}

// Update Measurement
module.exports.updateMeasurement = (id, measurement, options, callback) => {
	var query = {_id: id};
	var update = {
		name: measurement.name,
		room: measurement.room,
		//description: measurement.description,
		value: measurement.value,
		unit: measurement.unit,
		sensorid: measurement.sensorid,
	}
	Measurement.findOneAndUpdate(query, update, options, callback);
}
