var mongoose = require('mongoose');

// Room Schema
var roomSchema = mongoose.Schema({
	name:{
		type: String,
		index:{unique: true},
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Room = module.exports = mongoose.model('Room', roomSchema,'room');

// Get Room
module.exports.getRooms =  (callback, limit) => {
	Room.find(callback).limit(limit);
}

// Add Room
module.exports.addRoom = (room, callback) => {
	Room.create(room, callback);
}

// Update Room
module.exports.updateRoom = (id, room, options, callback) => {
	var query = {_id: id};
	var update = {
		name: room.name
	}
	Room.findOneAndUpdate(query, update, options, callback);
}

// Delete Room
module.exports.removeRoom = (id, callback) => {
	var query = {_id: id};
	Room.remove(query, callback);
}
