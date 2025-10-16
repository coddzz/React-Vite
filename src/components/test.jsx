import React from 'react'

const Test = ({ 
    title="Lorem ipsum dolor", 
    subtitle="This is the subtitle."
}) => {
  return (
    <>
    <div>
        <h6>testing..</h6>
        <h5 className='text-lg'>{title}</h5>
        <h5 className='text-lg'>{subtitle}</h5>
    </div>
    </>
  )
}

export default Test;

