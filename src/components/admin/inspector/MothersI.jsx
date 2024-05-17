import React, { useState } from 'react'
import Sidebar from './Sidebar'
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom';

const MothersI = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className='doctor_main'>
        <div className="cards">
            <Sidebar/>
        <div className='main'>
        <h1>Doctor / Dashboard</h1>
        <div className="crud"> 
    <h1>Mothers</h1>
    <ul className="table">
        <li>Name</li>
        <li>Blood</li>
        <li>Phone</li>
        <li>Created</li>
    </ul>
    <div className="hospital">
        <div>
        <input disabled={!open} type="text" defaultValue={"Bohodir IKromov"} />
        </div>
        <input type="text" disabled={!open}  defaultValue={"Blood"}  />
        <input type="number" disabled={!open}   defaultValue={"998909999999"}/>
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

export default MothersI