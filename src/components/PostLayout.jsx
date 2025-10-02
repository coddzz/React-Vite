import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
        <h1 className='font-semibold text-lg text-gray-500'>Post Layout</h1>
        <div className='flex justify-around'>      
            <h1><Link to="/postpage/1" className='text-blue-500 hover:underline'>Post 1</Link></h1>
            <h1><Link to="/postpage/45" className='text-blue-500 hover:underline'>Post 45</Link></h1>
            <h1><Link to="/postpage/312" className='text-blue-500 hover:underline'>Post 312</Link></h1>
            <h1><Link to="/postpage/todo" className='text-blue-500 hover:underline'>To do list</Link>
            /postpage/todo</h1>             
        </div>
        <div>
            <Outlet />  
        </div>
    </>
  )
}

export default PostLayout;
