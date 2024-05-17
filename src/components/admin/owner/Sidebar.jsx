import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">   
                 <div className="routes">
                 <h1>Bohodir Ikromov</h1>
                 <div>
                    <NavLink to="/owner">Dashboard</NavLink>
                 </div>
                 <div>
                    <NavLink to="/">Home</NavLink>
                 </div>
                 <div>
                    <NavLink to="/owner/hospital">Hospital</NavLink>
                 </div>
                 <div>
                    <NavLink to="/owner/inspector">Inspector</NavLink>
                 </div>
                 <div>
                    <NavLink to="/owner/doctor">Doctor</NavLink>
                 </div>
                 <div>
                    <NavLink to="/owner/messages">Messages</NavLink>
                 </div>
                 </div>
                 <div>
                 <button>Log Out</button>
                 </div>
            </div>
  )
}

export default Sidebar