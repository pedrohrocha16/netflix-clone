import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import './App.css'
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home'

function App() {
return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
