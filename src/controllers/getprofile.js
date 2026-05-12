const User = require('../db/schema/userschema');

const getprofile = async(req,res,next)=>{

    const userdata = await User.findOne({username:req.user.username});
    
    res.status(200).json({
        username:userdata.username,
        LoggedIn:true,
        posts:userdata.posts,
    })
}

module.exports = getprofile;