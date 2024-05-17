import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';

const Vaccination = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className='doctor_main'>
    <div className="cards">
    <Sidebar/>
     <div className='main'>
      <h1>Doctor / Vaccination</h1>
      <div className="crud"> 
  <h1>Vaccination</h1>
  <ul className="table">
      <li>Name</li>
      <li>Date</li>
      <li>Status</li>
      <li>Baby</li>
      <li>Mother</li>
      <li>Comment</li>
  </ul>
  <div className="create_baby">
 
      <input  type="text" placeholder='name' />
      
      <input type="text"  placeholder='date'  />
      <select name="" id="">
        <option value="">Vaccination</option>
        <option value="">Unvaccination</option>
      </select>
      <select name="" id="">
        <option value="">Baby 1</option>
        <option value="">Baby 2</option>
      </select>
      <select name="" id="">
        <option value="">Mother</option>
        <option value="">Mother</option>
      </select>
      <div className='dv'>
      <input type="text" placeholder='comment' />
          <button>Create</button>
      </div>
  </div>
  <div className="hospital">
      <div>
      <input disabled={!open} type="text" defaultValue={"Bohodir IKromov"} />
      </div>
      <input type="text" disabled={!open}  defaultValue={"01.06.2024"}  />
      <select disabled={!open}  name="" id="">
        <option value="">Vaccination</option>
        <option value="">Unvaccination</option>
      </select>
      <select disabled={!open} name="" id="">
        <option value="">Baby 1</option>
        <option value="">Baby 2</option>
      </select>
      <select disabled={!open}  name="" id="">
        <option value="">Mother</option>
        <option value="">Mother</option>
      </select>
      <div>
      <input type="text" disabled={!open}  defaultValue={"comment"}/>
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

export default Vaccination