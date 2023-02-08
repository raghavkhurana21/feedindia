const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
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
    pincode : {
        type :String,
        required :true,
    },
    address : {

        type : String,
        required : true,
    },
    items : {

        type : String,
        required : true,
    }
},{
    timestamps : true // will provide created at and updated at 
});

const User = mongoose.model('user',userSchema);

module.exports = User;