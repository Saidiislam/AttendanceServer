const mongoose = require('mongoose');

const checkPending = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true
    },
    check:{
        type: String,
        required: true,
    },
    time:{
        type:String,
        required: true,
    },
    date:{
        type:String,
        required: true,
    },
    lati:{
        type:Number,
        required: true,
    },
    long:{
        type:Number,
        required: true,
    },
    placedata:{
        type:String,
        required:true,
    },
}, {
    timestamps: true
})

const CheckPending = mongoose.model('CheckPending',checkPending );
module.exports = CheckPending;