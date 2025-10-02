import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutHooks from "./pages/aboutHooks";
import Posts from "./pages/posts";
import TodolistPage from "./pages/todolist";
import PostPage from "./pages/postPage"
import Missing from "./components/Missing";
import PostLayout from "./components/PostLayout";
import About from "./components/About";


const App = () =>{
  return(
    <div className="">
      <nav>
        <h1>React + Vite</h1>
        <h2>Navigation using link {"(App.jsx)"}</h2>
        <ul  className="flex border-2 rounded-xl justify-evenly py-2 px-4 m-2 bg-amber-300 font-semibold">
          <li><Link to="/" 
          className="hover:bg-amber-200 px-2 py-1 rounded">Home</Link></li>
          <li><Link to="/about" 
          className=" px-2 py-1 rounded">About</Link></li>
          <li><Link to="/newpost" 
          className=" px-2 py-1 rounded">NewPost</Link></li>
          <li><Link to="/posts" 
          className="hover:bg-amber-200 px-2 py-1 rounded">Posts</Link></li>
          <li><Link to="/hooks" 
          className="hover:bg-amber-200 px-2 py-1 rounded">Hooks</Link></li>
          <li><Link to="/todolist" 
          className="hover:bg-amber-200 px-2 py-1 rounded">To do List</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/hooks" element={<AboutHooks />} />
        <Route path="/todolist" element={<TodolistPage />} />
        <Route path="/about" element={<About />} />

        {/* nested */ }
        < Route path="/postpage" element={<PostLayout />} >
          <Route index element={<PostPage />} />
          <Route path=":id" element={<Posts />} />
          <Route path="todo" element={<TodolistPage />} /> {/* this works with es6 and above */}     
        </Route>

        <Route path="*" element={<Missing />} />     
      </Routes>
    </div>
  )
}

export default App;