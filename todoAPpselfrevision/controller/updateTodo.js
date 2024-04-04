const Todo = require("../model/Todo");


exports.updateTodo = async(req,res)=>{


    try{

    


 // now insert the data in the database 

 const{title,description} =req.body;
 const{id} = req.params;
    const response = await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()});

    res.status(200).json({
                              
        message:"updated successfully",
        success:true,
        response,

    })

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:"Issue in update the Todo",
        })

    }


 




}