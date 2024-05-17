import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';

const Inspector = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className='doctor_main'>
        <div className="cards">
            <Sidebar/>
            <div className="main">
                <h1>Inspector / Dashboard</h1>
                <div className="crud"> 
    <h1>Patients</h1>
    <ul className="table">
        <li>Mother Name</li>
        <li>Doctor Name</li>
        <li>Date</li>
        <li>Baby Status</li>
        <li>Next Date</li>
        <li>Attendence</li>
        <li>Comment</li>
    </ul>
    <div className="hospital">
        <div>
        <input disabled={!open} type="text" defaultValue={"Joo"} />
        </div>
        <input disabled={!open} type="text" defaultValue={"Joo"} />
        <input type="text" disabled={!open}  defaultValue={"01.01.2023"}  />
        <input type="text" disabled={!open}   defaultValue={"born"}/>
        <input type="text" disabled={!open}  defaultValue={"01.01.2023"}  />
        <div>
        {true ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-xmark"></i>}
        </div>
        <div>
        <input type="text" disabled={true} placeholder='lorem ipsum'/>
        <button onClick={(e) => {setOpen(!open)}}>View</button>
        </div>
        {
            open ? <p className='comment'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vel.</p> : null
        }
    </div>
   
              </div>
            </div>
        </div>
    </div>
  )
}

export default Inspector