var mongoose = require('mongoose');

module.exports = mongoose.model('Artist', {
    firstName : {type : String, default: ''},
    lastName : {type : String, default: ''}
});