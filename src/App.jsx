import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Homepage/>}/>
          {/*Nested Routes*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App