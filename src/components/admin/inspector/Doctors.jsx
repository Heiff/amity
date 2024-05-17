import React, { useState } from 'react'
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Doctors = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className='doctor_main'>
    <div className="cards">
        <Sidebar/>
        <div className="main">
        <h1>Admin / Doctors</h1>
        <div className="crud"> 
    <h1>Doctors</h1>
    <ul className="table">
        <li>Name</li>
        <li>Gender</li>
        <li>Phone</li>
        <li>Email</li>
        <li>Hospital</li>
        <li>Created</li>
    </ul>
    <div className="doctor">
        <div>
        <img src="" alt="50" />
        <input disabled={!open} type="text" defaultValue={"Bohodir IKromov"} />
        </div>
        <input type="text" disabled={!open}  defaultValue={"male"}  />
        <input type="number" disabled={!open}   defaultValue={"998909999999"}/>
        <input type="text" disabled={!open}  defaultValue={"mr.@mail.ru"} />
        <input type='text' disabled={!open} defaultValue={"SHoxMEd"}/>
        <div>
        <input type="date" disabled={!open}  defaultValue={"01.03.2004"}/>
        </div>
    </div>
   
              </div>
    </div>
</div>
</div>
  )
}

export default Doctors