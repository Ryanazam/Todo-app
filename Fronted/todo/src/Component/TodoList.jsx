import React from 'react'

const TodoList = ({todo}) => {


  return (


    
    <div>

        {
            todo.map((element,index)=>{

                return <div key={index}>
                    <h1>{element.title}</h1>
                     <p>{element.description}</p>
                </div>
            })
        }
    </div>
  )
}

export default TodoList