import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = () => {
  return (
    <div>
      <h1 className='font-bold text-2xl'>Post Page!</h1>
      <h1><Link to="/postpage/1" className='text-blue-500 hover:underline'>Post 1</Link></h1>
      <h1><Link to="/postpage/2" className='text-blue-500 hover:underline'>Post 2</Link></h1>
      <h1><Link to="/postpage/3" className='text-blue-500 hover:underline'>Post 3</Link></h1>
    </div>
  )
}

export default PostPage