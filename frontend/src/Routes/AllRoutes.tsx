import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SiginUp from '../Pages/SiginUp'
import HomePage from '../Pages/HomePage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SiginUp />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes