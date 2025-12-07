import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MainLayout from './layouts/MainLayout'
import Jobpage from './pages/Jobpage'
import NotFoundpage from './pages/NotFoundpage'
import NotesPage from './pages/NotesPage'
import ToolsPage from './pages/ToolsPage'
import Calculator from './components/Calculator'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/jobs' element={<Jobpage/>}/>
          <Route path='/notes' element={<NotesPage/>}/>
          <Route path='/tools' element={<ToolsPage/>}/>
          <Route path='*' element={<NotFoundpage/>}/>
          {/*Nested Routes*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App