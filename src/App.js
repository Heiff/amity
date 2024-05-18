import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Owner from './components/admin/owner/Owner'
import Hospital from './components/admin/owner/Hospital'
import Inspector from './components/admin/owner/Inspector'
import Messages from './components/admin/owner/Messages'
import DoctorDashboard from './components/admin/doctor/DoctorDashboard'
import Mothers from './components/admin/doctor/Mothers'
import Childrens from './components/admin/doctor/Childrens'
import Patient from './components/admin/doctor/Patient'
import Vaccination from './components/admin/doctor/Vaccination'
import Mother from './components/admin/mother/Mother'
import Doctors from './components/admin/inspector/Doctors'
import MothersI from './components/admin/inspector/MothersI'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/owner' element={<Owner/>}/>
          <Route path='/owner/hospital' element={<Hospital/>}/>
          <Route path='/owner/inspector' element={<Inspector/>}/>
          <Route path='/owner/messages' element={<Messages/>}/>
          <Route path='/doctor' element={<DoctorDashboard/>}/>
          <Route path='/doctor/mothers' element={<Mothers/>}/>
          <Route path='/doctor/children' element={<Childrens/>}/>
          <Route path='/doctor/patients' element={<Patient/>}/> 
          <Route path='/doctor/vaccinations' element={<Vaccination/>}/>
          <Route path='/mother' element={<Mother/>}/>
          <Route path='/inspector' element={<Inspector/>}/> 
          <Route path='/inspector/doctors' element={<Doctors/>}/> 
          <Route path='/inspector/mothers' element={<MothersI/>}/>
     
      </Routes>
    </div>
  )
}

export default App
