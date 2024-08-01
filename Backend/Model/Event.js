const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({

    name :{
        type :String,
        required: true,
        trim :true
    },
    description : {
        type :String

    },
    id : {
        type : String,
        required : true
    },
    checked : {
        type : Boolean
    }

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;