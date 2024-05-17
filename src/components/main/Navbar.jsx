import React, { useCallback, useContext } from 'react'
import logo from "../assets/img/gallery/logo.png"
import { Link } from 'react-router-dom'
import { Context } from '../../Context';
const Navbar = () => {
  const token = localStorage.getItem("token");
  const { LogOut } = useContext(Context);
  return (
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
        <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} width="118" alt="logo" /></Link>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
              <li className="nav-item px-2"><Link className="nav-link" aria-current="page" to="/about">About Us</Link></li>
              <li className="nav-item px-2"><Link className="nav-link" to="/">Departments</Link></li>
              <li className="nav-item px-2"><Link className="nav-link" to="/">Membership</Link></li>
              <li className="nav-item px-2"><Link className="nav-link" to="/help">Help </Link></li>
              <li className="nav-item px-2"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
            {
              token ? <button onClick={(e) => {LogOut()}} className='btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4'>Log Out</button> : <Link className="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4" to="/login">Sign In</Link>
            }
          </div>
        </div>
      </nav>
    
  )
}

export default Navbar