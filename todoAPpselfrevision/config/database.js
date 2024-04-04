const mongoose = require('mongoose');
require("dotenv").config();

const dBConnnect = ()=>{


    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB ka connection successfully"))
    .catch((error)=>{

        console.log("Issue in Db connection")
        process.exit(1);
    })


}

module.exports=dBConnnect; 