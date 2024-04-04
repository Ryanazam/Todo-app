const Todo = require("../model/Todo");


exports.getTodo = async(req,res)=>{


    try{
 

        const {id}  =req.params;
    


    // now insert the data in the database 

    const response = await Todo.find({_id:id});

    res.status(200).json({
                              
        message:"Todo created successfully",
        success:true,
        response,

    })

    }

    catch(error){

        res.status(500).json({

            success:false,
            message:"Issue in creating Todo",
            
        })

    }


 




}