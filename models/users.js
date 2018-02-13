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

var User = module.exports = mongoose.model('Users', roomSchema,'users');

// Get Users
module.exports.getUsers =  (callback, limit) => {
	Users.find(callback).limit(limit);
}

// Get User
module.exports.getUser =  (callback, limit, user) => {
	Users.find(callback).find({user_name:user});
}

// Add User
module.exports.addUser = (user, callback) => {
	Users.create(user, callback);
}

// Update User
module.exports.updateUser = (id, user, options, callback) => {
	var query = {_id: id};
	var update = {
		first_name: user.first_name,
    last_name: user.last_name,
    mob_no: user.mob_no,
    user_name: user.useR_name,
    password: user.password
	}
	Users.findOneAndUpdate(query, update, options, callback);
}

// Delete User
module.exports.removeUser = (id, callback) => {
	var query = {_id: id};
	Users.remove(query, callback);
}
