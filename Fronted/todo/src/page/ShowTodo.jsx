import React from 'react'
import TodoList from '../Component/TodoList'
import { useEffect, useState } from 'react';

const ShowTodo = () => {
    

  const [todo,setTodo]  = useState([]);


  async function fetchApi(){



    const getTodo =  await fetch("http://localhost:8000/api/v1/getAllTodo");
    

    const data = await getTodo.json();
    console.log(data.response)

    setTodo(data.response);



    

    
  }




  useEffect(()=>{
 fetchApi();

  },[])
  return (
    <div>
          <TodoList todo={todo}></TodoList>/
    </div>
  )
}

export default ShowTodo