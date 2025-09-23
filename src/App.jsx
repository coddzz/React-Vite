import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import TestPage from "./pages/testpage";

const App = () =>{
  return(
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  )
}

export default App;