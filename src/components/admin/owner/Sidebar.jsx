import React, { useContext } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { Context } from '../../../Context'

const Sidebar = () => {
   const { profile ,LogOut} = useContext(Context);
  return (
    <div className="sidebar">   
                 <div className="routes">
                  {
                     profile.map((el) =>{
                        console.log(el);
                        return(
                           <h1>{el.full_name}</h1>
                        )
                     })
                  }
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
                    <NavLink to="/owner/messages">Messages</NavLink>
                 </div>
                 </div>
                 <div>
                 <button onClick={LogOut}>Log Out</button>
                 </div>
            </div>
  )
}

export default Sidebar