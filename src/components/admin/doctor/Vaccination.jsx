import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import { Context } from '../../../Context';

const Vaccination = () => {
    const [open,setOpen] = useState(false);
    const { setName,setStatus,setComment,setDate,setBabyId,setMotherId,baby,mothers,Doctor_CreateVaccination,Doctor_DeleteVaccination,Doctor_UpdateVaccination,vaccination } = useContext(Context);
 
 
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
  <div className="create_vaccination">
      <input  type="text" placeholder='name' onChange={(e) => {setName(e.target.value)}} />
      <input type="date"  placeholder='date' onChange={(e) => {setDate(e.target.value)}}  />
      <select onChange={(e) => {setStatus(e.target.value)}}>
        <option value="">select</option>
        <option value="vaccinated">vaccinated</option>
        <option value="unvaccinated">Unvaccinated</option>
      </select>
      <select onChange={(e) => {setBabyId(e.target.value)}}>
        <option value="">none</option>
        {
          baby.map((el) => {
            return(
              <option value={el.id}>{el.full_name}</option>
            )
          })
        }
      </select>
      <select onChange={(e) => {setMotherId(e.target.value)}}>
        <option value="">none</option>
        {
          mothers.map((el) =>{
            return(
              <option value={el.id}>{el.full_name}</option>
            )
          })
        }
      </select>
      <div className='btns'>
      <input type="text" placeholder='comment' onChange={(e) => {setComment(e.target.value)}} />
          <button onClick={(e) => {Doctor_CreateVaccination(e)}}>Create</button>
      </div>
  </div>
        {
          vaccination.map((el) => {
            return(
              <div key={el.id} className="vaccination">
              <div>
              <input disabled={!open} type="text" defaultValue={el.name} />
              </div>
              <input type="text" disabled={!open}  defaultValue={el.date}  />
              <select disabled={!open} value={el.status} name="" id="">
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
              <div className='btns'>
              <input type="text" disabled={!open}  defaultValue={el.commment}/>
                  {
                      !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) => {setOpen(false)}} class="fa-solid fa-check"></i>
                  }
                  <Link><i class="fa-solid fa-eye"></i></Link>
                  <i onClick={Doctor_DeleteVaccination(el.id)} class="fa-solid fa-trash"></i>
              </div>
          </div>
            )
          })
        }
 
            </div>
  </div>
    </div>
  </div>
  )
}

export default Vaccination