import React from 'react'
import './App.css'
import Index from './components/View'
import Teams from './components/Team/Teams'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Navigate} from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
      <Route path = "/" element= {<Index />} />
      <Route path="team" element={<Teams />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}

export default App
