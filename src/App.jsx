import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from "./Screens/Signup"
import LogIn from "./Screens/LogIn"
import ProtectedRoutes from './Config/protectedRoutes'
import Application from './Screens/Application'

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<Application />} />
        <Route path='/' element={<LogIn />} />

    </Routes>
  )
}

export default App