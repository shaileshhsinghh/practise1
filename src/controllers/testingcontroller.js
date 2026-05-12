const {hashedPassword,comparePassword} = require('./authcontroller');
const User = require('../db/schema/userschema');
const Post = require('../db/schema/postschema');
const jwt = require('jsonwebtoken');

const testing = (req,res,next)=>{
    try{
        res.status(200).json({
            msg:'succesful'
        });
    }catch(err){
        next(err);
    }
}

const authentication = async (req,res,next)=>{
    const {username,password,email} = req.body;

    try{
       const hashed = await hashedPassword(password);

       const data = {
        username,
        password:hashed,
        email
       }

        const senddata = await User.create(data);

        res.status(201).json({
            msg:"User Created Successfully",
            username:data.username,
            email:data.email,
        })

    }catch(err){
        next(err);
    }
}

const compareauth = async(req,res,next)=>{
    const {username,password} = req.body;

    try{

        const data = await User.findOne({username}).select('+password');

        if(!data){ 
            const err = new Error('User Not Found');
            return next(err);
        }

        const check = await comparePassword(password,data.password);

        if(!check){
            const err = new Error('Invalid Credentials');
            return next(err);
        }

        const token = jwt.sign({
            username:data.username,
            email:data.email,
        },process.env.JWT_SECRET);

        res.status(200).json({
            msg:"User login successful",
            token,
        });

    }catch(err){
        next(err);
    }
}
module.exports = {testing,authentication,compareauth};