const notfound = (req,res,next)=>{
    const err = new Error('Route not found');
    next(err);
};

module.exports = notfound;