import React from 'react'

const Footer = () => {

    const year = new Date();
  return (
    <div>
      <div className='fixed bottom-0 left-0 w-full py-3 bg-indigo-700 text-center border-t-4 border-indigo-400 text-gray-100 font-sans'>Copyright &copy; {year.getFullYear()} </div>
    </div>
  )
}

export default Footer
