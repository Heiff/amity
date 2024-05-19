import React, { useContext, useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom'
import { Context } from '../../../Context';

const Mothers = () => {
    const { open,setOpen,mothers,setFullName,setBlood,
        setIsPositive,setNumber,setPassword,email,phone_number,setEmail,
        Doctor_CreateMother,Doctor_DeleteMother,Doctor_GetAllMother,Doctor_UpdateMother,setImage
    } = useContext(Context);
    const [view,setView] = useState(false)
  return (
    <div className='main'>
        <h1>Doctor / Dashboard</h1>
        <div className="crud"> 
    <h1>Mothers</h1>
    <ul className="table">
        <li>Name</li>
        <li>Blood</li>
        <li>Phone</li>
        <li>Is Positive</li>
        <li>Email</li>
        <li>Password</li>
    </ul>
    <div className="create">
        <div className='dv'>
        <input type="file" className='inp-d' onChange={(e) => {setImage(e.target.files[0])}}/>
        <input type="text" className='inp' onChange={(e) => {setFullName(e.target.value)}}  placeholder='name' />
        </div>
        <input type="text"  className='inp' onChange={(e) => {setBlood(e.target.value)}} placeholder='blood' />
        <div className='dv'>
        <PhoneInput country="US" id="number" value={phone_number} onChange={setNumber} placeholder="Enter phone number" />
        </div>
        <input type="text"  className='inp' onChange={(e) => {setIsPositive(e.target.value)}} placeholder='is positive' />
        <input type="email"  className='inp' onChange={(e) => {setEmail(e.target.value)}} placeholder='email' />
        <div className='dv'>
        <input type="password"  className='inp' onChange={(e) => {setPassword(e.target.value)}} placeholder='password' />
        <button onClick={Doctor_CreateMother}>create</button>
        </div>
    </div>
    {
        mothers.map((el) =>{
            return(
                <div className="hospital">
        <div>
        {
            open ? <input type="file" className='inp-d' onChange={(e) => {setImage(e.target.files[0])}}/> :<img className='profile_img' src={`http://localhost:8080/5ddf4567-dde3-4f24-b28d-6ea427f03171.jpg`} alt="" />
        }
        <input disabled={!open} type="text" className='inp' defaultValue={el.full_name} onChange={(e) => {setFullName(e.target.value)}} />
        </div>
        <input type="text" className='inp' disabled={!open}  defaultValue={el.blood_group} onChange={(e) => {setBlood(e.target.value)}} />
        <input type="text" className='inp' disabled={!open}   defaultValue={el.phone_number} onChange={(e) => {setNumber(e.target.value)}}/>
        <input type="text" className='inp' disabled={!open}  defaultValue={el.is_positive} onChange={(e) => {setIsPositive(e.target.value)}} />
        <input type="email" className='inp' disabled={!open} defaultValue={el.email} onChange={(e) => {setEmail(e.target.value)}} />
        <div>
        
        <input type={view ? "text" : "password"} className='inp' disabled={!open} defaultValue={el.password} onChange={(e) => {setPassword(e.target.value)}} />
        
            {
                !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) => {Doctor_UpdateMother(e,el.id)}} class="fa-solid fa-check"></i>
            }
            <i onClick={(e) => {setView(!view)}} class="fa-solid fa-eye"></i>
            <i onClick={(e) =>{Doctor_DeleteMother(e,el.id)}} class="fa-solid fa-trash"></i>
        </div>
    </div>
            )
        })
    }
   
              </div>
    </div>
  )
}

export default Mothers