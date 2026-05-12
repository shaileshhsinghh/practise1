const Post = require('../db/schema/postschema');
const Usersc = require('../db/schema/userschema');

const Createpost = async(req,res,next)=>{
    const { title , content } = req.body;

    const userdata = await Usersc.findOne({username:req.user.username});

    try{
        const post = await Post.create({
            title,
            content,
            user:userdata.id,
        });

        await Usersc.findByIdAndUpdate(userdata.id,{
            $push:{posts:post._id}
        });

        res.status(201).json({
            msg:"Post Created!!!",
            post:post,
        });
    }catch(err){
        next(err);
    }
}

module.exports = Createpost;