import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-black text-white py-4 flex gap-5 justify-center'>
      <Link to={'/'}>
       <div>Home</div>
      </Link>
      <Link to={'/addtodo'}>
       <div>CreateTodo</div>
      </Link>
      <Link to={'/showtodo'}>
       <div>ShowTodo </div>
      </Link>
    </div>
  )
}

export default Navbar