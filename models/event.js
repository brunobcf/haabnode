var mongoose = require('mongoose');

// Event Schema
var eventSchema = mongoose.Schema({
	text:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Event = module.exports = mongoose.model('Event', eventSchema,'event');

// Get Event
module.exports.getEvents =  (callback, limit) => {
	Event.find(callback).limit(limit).sort({ create_date: -1 } );
}

// Add Event
module.exports.addEvent = (evento, callback) => {
	Event.create(evento, callback);
}

// Update Event
module.exports.updateEvent = (id, evento, options, callback) => {
	var query = {_id: id};
	var update = {
		text: evento.text
	}
	Event.findOneAndUpdate(query, update, options, callback);
}

// Delete Event
module.exports.removeEvent = (id, callback) => {
	var query = {_id: id};
	Event.remove(query, callback);
}
