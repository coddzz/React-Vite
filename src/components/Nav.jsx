import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="search">Search </label>
        <input 
            id='search'
            type='text'
            placeholder='Search Post'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
      </form>
      <ul>
        <li><Link to="/" className="hover:underline px-2 py-1 m-0.5 rounded-2xl" >Home</Link></li>
        <li><Link to="/posts" className="hover:underline px-2 py-1 m-0.5 rounded-2xl">Posts</Link></li>
        <li><Link to="/newpost" className="hover:underline px-2 py-1 m-0.5 rounded-2xl" >About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
