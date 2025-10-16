import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-violet-300 p-6 rounded-lg shadow-md'>
        <h1 className='font-extralight'>change color using props {"(Card.jsx)"}</h1>
        {children}
    </div>
  )
}

export default Card
