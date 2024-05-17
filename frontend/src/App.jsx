import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Books from './pages/Books';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
