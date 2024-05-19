import React, { useCallback, useContext } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { Context } from '../../Context';
const Navbar = () => {
  const token = localStorage.getItem("token");
  const { LogOut } = useContext(Context);
  const dashboard = localStorage.getItem("navigate")
  return (
      <nav>
        <div className="container">
        <div className="nav">
        <div className="logo">
        <img src={logo} alt="" />
        <h2>Sog'lom Bola</h2>
        </div>
        <div className='route'>
          <Link to="/">Home</Link>
        {
              token ? <div>
                <Link to="/queue">Queue Online</Link>
                <Link to={`/${dashboard}`}>Dashboard</Link>
                 <button onClick={LogOut} className='logout'>LogOut</button>
              </div> : <Link className="sign" to="/login">Sign In</Link>
            }
        </div>
      </div>  
        </div>
      </nav>
  )
}

export default Navbar