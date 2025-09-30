import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutHooks from "./pages/aboutHooks";
import Posts from "./pages/posts";

const App = () =>{
  return(
    <div className="">
      <nav>
        <ul  className="flex justify-evenly py-2 px-4 m-2 bg-amber-300 font-semibold">
          <li><Link to="/" 
          className="hover:bg-amber-200 px-2 py-1 rounded">Home</Link></li>
          <li><Link to="/about" 
          className="hover:bg-amber-200 px-2 py-1 rounded">About</Link></li>
          <li><Link to="/newpost" 
          className="hover:bg-amber-200 px-2 py-1 rounded">NewPost</Link></li>
          <li><Link to="/posts" 
          className="hover:bg-amber-200 px-2 py-1 rounded">Posts</Link></li>
          <li><Link to="/hooks" 
          className="hover:bg-amber-200 px-2 py-1 rounded">Hooks</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hooks" element={<AboutHooks />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  )
}

export default App;