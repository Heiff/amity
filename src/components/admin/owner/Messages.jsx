import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Messages = () => {
  return (
    <div className='owner'>
        <div className="cards">
            <Sidebar/>
            <div className="main">
                <h1>Admin / Hospital</h1>
                <div className="crud"> 
        <h1>Hospital</h1>
        <ul className="table">
            <li>Name</li>
            <li>Phone</li>
            <li>Email</li>
            <li>Hospital</li>
        </ul>
        <div className="message">
            <p>Name</p>
            <p>Phone</p>
            <p>Email</p>  
            <div>
                <p>Hospital</p> 
                <Link><i class="fa-solid fa-eye"></i></Link>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
      
                  </div>
                  </div>
        </div>
    </div>
  )
}

export default Messages