import React, { useState } from 'react';


const CreateTodo = () => {

  const [formData,setFormData] = useState({

    title:"",
    description:"",
  })


  function changeHandler(e){
const {name,value} = e.target;

    setFormData((prev)=>{

      

      return{
        ...prev,
        [name]:value
      }
    })




    


  }

  function submithandler(e)
  {
    e.preventDefault();

    fetch("http://localhost:8000/api/v1/createTodo",{
      method:"POST",
      body:JSON.stringify({

        title:formData.title,
        description:formData.description,

      }),
      headers:{
        "content-Type":"application/json"
      }
    })
    


    

  }
  return (
    <div className='main'>
        <h1>Todo Add list</h1>
       

        <form onSubmit={submithandler} className='form'>

        <div className='box'>

        <label htmlFor="title" className='label'>
          Enter the Title
          </label>
          <input type="text"
          name='title'
          id='title'
          onChange={changeHandler} />
      
        </div>
       <div className='box'>
       <label htmlFor="description" className='label'>
        Enter the Description
       </label>
        
          <input type="text"
          name='description'
          value={formData.description}
          id='description'

          onChange={changeHandler} />
      
       </div>
       
        
        <button className='btn'>Add Todo</button>
        
        </form>
    </div>
  )
}

export default CreateTodo