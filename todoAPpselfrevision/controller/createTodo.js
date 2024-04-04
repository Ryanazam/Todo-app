const Todo = require("../model/Todo");


exports.createTodo = async(req,res)=>{


    try{

     //fetching the data from req 
       const{title ,description}  =  req.body;


    // now insert the data in the database 

    const response = await Todo.create({title,description});

    res.status(200).json({
                              
        message:"Todo created successfully",
        success:true,

    })

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:"Issue in creating Todo",
            error
        })

    }


 




}