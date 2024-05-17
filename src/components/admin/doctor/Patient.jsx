import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Patient = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className='doctor_main'>
        <div className="cards">
            <Sidebar/>
        <div className='main'>
        <h1>Doctor / Patients</h1>
        <div className="crud"> 
    <h1>Patients</h1>
    <ul className="table">
        <li>Name</li>
        <li>Date</li>
        <li>Baby Status</li>
        <li>Next Date</li>
        <li>Attendence</li>
    </ul>
    <div className="create">
        <div className='dv'>
        <input type="text" className='inp'  placeholder='name' />
        </div>
        <input type="text"  className='inp' placeholder='date' />
        <select name="" id="">
            <option value="">born</option>
            <option value="">Emb</option>
        </select>
        <input type="text" className='inp' placeholder='next date' />
        <div className='dv'>
        <input type="date" className='inp' />
        <button>create</button>
        </div>
    </div>
    <div className="hospital">
        <div>
        <input disabled={!open} type="text" defaultValue={"joo"} />
        </div>
        <input type="text" disabled={!open}  defaultValue={"01.01.2023"}  />
        <input type="text" disabled={!open}   defaultValue={"born"}/>
        <input type="text" disabled={!open}  defaultValue={"01.01.2023"}  />
        <div>
        <input type="date" disabled={!open}  defaultValue={"01.03.2004"}/>
            {
                !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) => {setOpen(false)}} class="fa-solid fa-check"></i>
            }
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

export default Patient