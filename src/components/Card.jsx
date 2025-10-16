import React from 'react'

const Card = ({children, bg='bg-violet-300'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        <h1 className='font-extralight'>change color using props {"(Card.jsx)"}</h1>
        {children}
    </div>
  )
}

export default Card
