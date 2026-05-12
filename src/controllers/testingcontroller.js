const {hashedPassword,comparePassword} = require('./authcontroller');

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
    const password = req.body;

    try{
       const hashed = await hashedpassword(password);
    }catch(err){
        next(err);
    }
}

const compareauth = async(req,res,next)=>{
    const {username,password} = req.body;
    //won't run until username used to fetch user through db

    try{
        const check = await comparePassword(password,hashedpass);
    }catch(err){
        next(err);
    }
}
module.exports = {testing};