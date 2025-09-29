import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ReactHooks from "./pages/reactHooks";

const App = () =>{
  return(
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hooks" element={<ReactHooks />} />
      </Routes>
    </div>
  )
}

export default App;