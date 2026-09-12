import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DoctorList from './pages/DoctorList'
import Upload from './pages/Upload'
import Reports from './pages/Reports'
import DoctorProfile from './pages/DoctorProfile'
import ScanReport from './pages/ScanReport'

const App = () => {
  return (
    <div>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/doctors' element={<DoctorList/>} />
      <Route path='/doctor/:id' element={<DoctorProfile/>} />
      <Route path='/upload' element={<Upload/>} />
      <Route path='/scan-report' element={<ScanReport/>} />
      <Route path='/reports' element={<Reports/>} />
    </Routes>
    </div>
  )
}

export default App