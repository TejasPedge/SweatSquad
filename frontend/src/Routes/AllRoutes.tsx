import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SiginUp from '../Pages/SiginUp'
import Notification from '../Pages/Notification'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SiginUp />}></Route>
        <Route path='/notification' element={<Notification/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes