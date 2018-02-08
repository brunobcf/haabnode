var mongoose = require('mongoose');

// Users Schema
var userSchema = mongoose.Schema({
	first_name:{
		type: String,
		required: true
	},
  last_name:{
    type: String,
    required: true
  },
  mob_no:{
    type: String,
    required: false
  },
  user_name:{
    type: String,
    index:{unique: true},
    required: false
  },
  password:{
    type: String,
    required: false
  },
	create_date:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', roomSchema,'user');

// Get Room
module.exports.getUsers =  (callback, limit) => {
	User.find(callback).limit(limit);
}

// Add Room
module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}

// Update Room
module.exports.updateUser = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		first_name: user.first_name,
    last_name: user.last_name,
    mob_no: user.mob_no,
    user_name: user.useR_name,
    password: user.password
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete Room
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}
