import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignIn from '../Pages/SignIn'
import SiginUp from '../Pages/SiginUp'
import HomePage from '../Pages/HomePage'
import WorkoutsRoutine from '../Pages/WorkoutsRoutine'
import SinglePageTargetWorkouts from '../Pages/SinglePageTargetWorkouts'
import SinglePageStartExercise from '../Pages/SinglePageStartExercise'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SiginUp />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/workout-routine' element={<WorkoutsRoutine />}></Route>
        <Route path='/workout-routine/:target' element={<SinglePageTargetWorkouts />}></Route>
        <Route path='/workout-routine/:target/:id' element={<SinglePageStartExercise />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes