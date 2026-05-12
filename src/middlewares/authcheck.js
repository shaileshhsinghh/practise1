const jwt = require('jsonwebtoken');

const verifytoken = (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) return next(new Error('No token provided'));

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        next(err);
    }
};

module.exports = verifytoken;