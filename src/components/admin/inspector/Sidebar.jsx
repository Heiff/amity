import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">   
                 <div className="routes">
                 <h1>Bohodir Ikromov</h1>
                 <div>
                    <NavLink to="/inspector">Dashboard</NavLink>
                 </div>
                 <div>
                    <NavLink to="/">Home</NavLink>
                 </div>
                 <div>
                    <NavLink to="/inspector/mothers">Mothers</NavLink>
                 </div>
                 <div>
                    <NavLink to="/inspector/doctors">Doctors</NavLink>
                 </div>
                 </div>
                 <div>
                 <button>Log Out</button>
                 </div>
            </div>
  )
}

export default Sidebar