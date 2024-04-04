const Todo = require("../model/Todo");


exports.getAllTodo = async(req,res)=>{


   
   
   
    try{

    


 // now insert the data in the database 

    const response = await Todo.find({});

    res.status(200).json({
                              
        message:"Todo fetch successfully",
        success:true,
        response,

    })

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:"Issue in fetching Todo List",
        })

    }


 




}