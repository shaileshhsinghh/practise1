const express = require('express');
const dbconnect = require('./src/db/dbconnect');
const errorhandler = require('./src/middlewares/errorhandler');
const notfound = require('./src/middlewares/notfound');
const router = require('./src/routes/userroutes');
require('dotenv').config();
const app = express();
dbconnect();


app.use('/',router);
app.use(notfound);


app.use(errorhandler);

app.listen(process.env.PORT,()=>{
    try{
        console.log(`Server Running on ${process.env.PORT}`);
    }catch(err){
        next(err);
    }
});
