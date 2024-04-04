const Todo = require("../model/Todo");


exports.deleteTodo = async(req,res)=>{


    try{

     // fetching the data from req 
    const{id} = req.params;


    // now insert the data in the database 

    const response = await Todo.findByIdAndDelete({_id:id});

    res.status(200).json({
                              
        message:"Todo deleted successfully",
        success:true,

    })

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:"Issue in deleting Todo",
            error
        })

    }


 




}