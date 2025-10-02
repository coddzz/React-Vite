import React from 'react'
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className='m-4 p-4'>
      <h1 className='text-xl font-bold'>Missing Page ! </h1><br/>
      <h1> Page Not Found ! </h1>
      <h1 >Please Visit <Link to ="/" className='text-blue-700 hover:underline'>Homepage</Link> . </h1>
    </div>
  )
}

export default Missing;
