const mongoose = require('mongoose');

const uerSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post',
        },
    ],
},
{timestamps:true}
);

module.exports = mongoose.model('User',userSchema);