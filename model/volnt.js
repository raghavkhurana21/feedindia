const mongoose = require('mongoose');
const volnSchema = new mongoose.Schema({
    name : {
        type :String,
        required :true
    },
    email : {
        type :String,
        required :true,
        

    },
    pnumber : {
        type :String,
        required :true,
    },
    edu : {

        type : String,
        required : true,
    },
    city : {
        type :String,
        required :true,
    },
    address : {

        type : String,
        required : true,
    },
    pincode : {
        type :String,
        required :true,
    },
    govid : {

        type : String,
        required : true,
    },
    intrst : {

        type : Array,
        required : true,
    },
},{
    timestamps : true // will provide created at and updated at 
});

const volnt = mongoose.model('volnt',volnSchema);

module.exports = volnt;