var mongoose = require('mongoose');

module.exports = mongoose.model('Artist', {
    firstName  : {type : String, default: ''},
    lastName   : {type : String, default: ''},
    website    : {type : String, default: ''},
    email      : {type : String, default: ''},
    city       : {type : String, default: ''},
    country    : {type : String, default: ''},
    occupation : {type : String, default: ''}
});
