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


    setFormData({
      title:"",
      description:"",
    })
    


    

  }
  return (
    <div className=' bg-gray-500 w-[540px] mx-auto mt-[100px]'>
        <h1 className='text-center mt-5 font-bold text-[36px] capitalize'>Todo Add list</h1>
       

        <form onSubmit={submithandler} className='flex flex-col items-center gap-3' >

        <div className='flex flex-col'>

        <label htmlFor="title" className='font-bold'>
          Enter the Title <span className='text-red-800'>*</span>
          </label>
          <input type="text"
          name='title'
          id='title'
          value={formData.title}
          onChange={changeHandler} 
          className='outline-none'/>
      
        </div>
       <div className='flex flex-col'>
       <label htmlFor="description" className='font-bold'>
        Enter the Description <span className='text-red-800'>*</span>
       </label>
        
          <input type="text"
          name='description'
          value={formData.description}
          id='description'
          className='outline-none '
          onChange={changeHandler} />
      
       </div>
       
        
        <button className='bg-yellow-400 py-2 px-5 m-7 font-bold'>Add Todo</button>
        
        </form>
    </div>
  )
}

export default CreateTodo