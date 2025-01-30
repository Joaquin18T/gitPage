import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import About from '../About'

export default function Rutas() {
  return (
    <>
      <Routes>
        <Route path='/gitPage' element={<Home/>}/>
        <Route path='gitPage/about' element={<About/>}/>
      </Routes>
    </>
  )
}
