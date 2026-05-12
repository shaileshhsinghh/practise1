const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    email:{
        type:String,
        reqiured:true,
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