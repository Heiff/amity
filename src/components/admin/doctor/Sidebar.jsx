import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">   
                 <div className="routes">
                 <h1>Bohodir Ikromov</h1>
                 <div>
                    <NavLink to="/doctor">Dashboard</NavLink>
                 </div>
                 <div>
                    <NavLink to="/">Home</NavLink>
                 </div>
                 <div>
                    <NavLink to="/doctor/patients">Patients</NavLink>
                 </div>
                 <div>
                    <NavLink to="/doctor/children">Children</NavLink>
                 </div>
                 <div>
                    <NavLink to="/doctor/vaccinations">vaccination</NavLink>
                 </div>
                 </div>
                 <div>
                 <button>Log Out</button>
                 </div>
            </div>
  )
}

export default Sidebar