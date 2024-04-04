const express =require("express");

const cors = require("cors");


const app = express();


require("dotenv").config();

const PORT = process.env.PORT || 6000;




// parsing 


app.use(cors());


app.use(express.json());





// mount the api router 

const todoRouter = require("./routes/route");

app.use("/api/v1",todoRouter);


// start server 


app.listen(PORT,()=>{

    console.log(`Server started successfully at PORT no ${PORT}`);

})


const dBConnect = require("./config/database");

dBConnect();



app.get('/',(req,res)=>{

    res.send(`<h1>This is Home Page</h1>`)
});  