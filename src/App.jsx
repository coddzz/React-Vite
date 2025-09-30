import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Home from "./pages/home";
import AboutHooks from "./pages/aboutHooks";

const App = () =>{
  return(
    <div className="">
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/newpost" >NewPost</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/hooks" element={<AboutHooks />} />
      </Routes>
    </div>
  )
}

export default App;