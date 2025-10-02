import React from 'react'
import Header from '../components/header';
import Nav from '../components/Nav';
import Home from '../components/Home';
import NewPost from '../components/NewPost';
import PostPage from '../components/PostPage';
import About from '../components/About';
import Missing from '../components/Missing';
import {Footer} from '../components/Footer';
import { Link } from 'react-router-dom';


const home = () => {
  
  return (
    <div>
      <Header />
      <Nav />
      <Home />
      <NewPost /> 
      <PostPage />
      <About />
      <Missing /><br/>

      <div>
        <h1>Links</h1>
        <ul>
          <li><Link to="/postpage" 
          className='text-blue-900 underline'>postpage</Link></li>
        </ul>
      </div>
      
      <Footer />
    </div>
  )
}

export default home;
