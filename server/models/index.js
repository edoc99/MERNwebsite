const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/auth');

module.exports.User = require('./user');
module.exports.Other = require('./other');
