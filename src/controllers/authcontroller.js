const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashedPassword = async (password)=>{
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password,salt);
};

const comparePassword = async(password,hashedpassword)=>{
    return await bcrypt.compare(password,hashedpassword);
};

module.exports = {hashedPassword,comparePassword};