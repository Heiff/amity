import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import { Context } from '../../../Context'


const Hospital = () => {
    const [open,setOpen] = useState(false);
    const { Owner_CreateHospital,Owner_DeleteHospital,Owner_UpdateHospital,setHospitalAddress,setHospitalEmail,setHospitalName,setHospitalType,setNumber,phone_number,hospitals } = useContext(Context);
    console.log(hospitals);
  return (
        <div className="owner">
            <div className="cards">
                <Sidebar/>            
                <div className="main">
                <h1>Admin / Hospital</h1>
                <div className="crud"> 
        <h1>Hospital</h1>
        <ul className="table">
            <li>Name</li>
            <li>Type</li>
            <li>Address</li>
            <li>Email</li>
            <li>Phone</li>
        </ul>
        <div className="create">
            <div className='dv'>
            <input type="text" className='inp' onChange={(e) => {setHospitalName(e.target.value)}}  placeholder='name' />
            </div>
            <select className='inp' onChange={(e) => {setHospitalType(e.target.value)}} >
                <option value="public">public</option>
                <option value="private">private</option>
            </select>
            <input type="text"  onChange={(e) => {setHospitalAddress(e.target.value)}} className='inp' placeholder='address'  />
            <input type="email" className='inp' onChange={(e) => {setHospitalEmail(e.target.value)}} placeholder='email'  />
            <div className='dv'>
            <PhoneInput country="US" id="number" value={phone_number} onChange={setNumber} placeholder="Enter phone number" />
            <button onClick={Owner_CreateHospital}>create</button>
            </div>
        </div>
        {
          hospitals !== null ? hospitals.map((el) => {
                console.log(el);
                return(
                <div className="hospital">
            <div>
            <img src="" alt="50" />
            <input disabled={!open} type="text" defaultValue={el.name} onChange={(e) => {setHospitalName(e.target.value ? e.target.value : el.name)}} />
            </div>
            <select  onChange={(e) => {setHospitalType(e.target.value ? e.target.value : el.type)}}>
                <option value={"private"}>private</option>
                <option value="public">public</option>
            </select>
            <input type="text" disabled={!open}  defaultValue={el.address} onChange={(e) => {setHospitalAddress(e.target.value ? e.target.value : el.address)}} />
            <input type="email" disabled={!open}   defaultValue={el.email} onChange={(e) => {setHospitalEmail(e.target.value ? e.target.value : el.email)}}/>
            
            <div>   
            <input type="text" disabled={!open} defaultValue={el.phone_number} onChange={(e) => {setNumber(e.target.value ? e.target.value : el.phone_number)}}   />
             {
                    !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) => {Owner_UpdateHospital(e,el.id)}} class="fa-solid fa-check"></i>
                }
                <Link><i class="fa-solid fa-eye"></i></Link>
                <i onClick={(e) => {Owner_DeleteHospital(e,el.id)}} class="fa-solid fa-trash"></i>
            </div>
        </div>
                )
            }) :
            <div>empty</div>

            
        }
      
                  </div>
                  </div>
            </div>
        </div>
  )
}

export default Hospital