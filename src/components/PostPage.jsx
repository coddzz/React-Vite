import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Post Page!</h1>
      <h1><Link to="/postpage/1" className='text-blue-500 hover:underline'>Post 1</Link></h1>
      <h1><Link to="/postpage/45" className='text-blue-500 hover:underline'>Post 45</Link></h1>
      <h1><Link to="/postpage/312" className='text-blue-500 hover:underline'>Post 312</Link></h1>
      <h1><Link to="/postpage/todo" className='text-blue-500 hover:underline'>To do list</Link>
      /postpage/todo</h1>
    </div>
  )
}

export default PostPage;