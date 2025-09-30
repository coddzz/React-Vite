import React from 'react'
import Header from '../components/header';
import Nav from '../components/Nav';
import Home from '../components/Home';
import NewPost from '../components/NewPost';
import PostPage from '../components/PostPage';
import About from '../components/About';
import Missing from '../components/Missing';
import {Footer} from '../components/Footer';


const home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  )
}

export default home;
