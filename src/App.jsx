import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/homePage";

const App = () =>{
  return(
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App;