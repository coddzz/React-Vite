import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Home from "./pages/home";
import AboutHooks from "./pages/aboutHooks";

const App = () =>{
  return(
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/hooks" element={<AboutHooks />} />
      </Routes>
    </div>
  )
}

export default App;