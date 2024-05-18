import React, { useContext, useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom'
import { Context } from '../../../Context';

const Mothers = () => {
    const { open,setOpen,mothers,setFullName,setBlood,
        setIsPositive,setNumber,setPassword,email,phone_number,setEmail,
        Doctor_CreateMother,Doctor_DeleteMother,Doctor_GetAllMother,Doctor_UpdateMother
    } = useContext(Context);
  return (
    <div className='main'>
        <h1>Doctor / Dashboard</h1>
        <div className="crud"> 
    <h1>Mothers</h1>
    <ul className="table">
        <li>Name</li>
        <li>Blood</li>
        <li>Phone</li>
        <li>Created</li>
        <li>Email</li>
        <li>Password</li>
    </ul>
    <div className="create">
        <div className='dv'>
        <input type="text" className='inp' onChange={(e) => {setFullName(e.target.value)}}  placeholder='name' />
        </div>
        <input type="text"  className='inp' onChange={(e) => {setBlood(e.target.value)}} placeholder='blood' />
        <div className='dv'>
        <PhoneInput country="US" id="number" value={phone_number} onChange={(e) => {setNumber(e.target.value)}} placeholder="Enter phone number" />
        </div>
        <input type="text"  className='inp' onChange={(e) => {setIsPositive(e.target.value)}} placeholder='is positive' />
        <input type="email"  className='inp' onChange={(e) => {setEmail(e.target.value)}} placeholder='email' />
        <div className='dv'>
        <input type="password"  className='inp' onChange={(e) => {setPassword(e.target.value)}} placeholder='password' />
        <button onClick={[Doctor_CreateMother]}>create</button>
        </div>
    </div>
    {
        mothers.map((el) =>{
            return(
                <div className="hospital">
        <div>
        <input disabled={!open} type="text" defaultValue={el.name} />
        </div>
        <input type="text" disabled={!open}  defaultValue={el.blood_group}  />
        <input type="number" disabled={!open}   defaultValue={el.phone_number}/>
        <div>
        <input type="text" disabled={!open}  defaultValue={el.is_positive}  />
        <input type="email" disabled={!open} defaultValue={el.email} />
        <input type="password" disabled={!open}/>

        
            {
                !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) => {Doctor_UpdateMother(e,el.id)}} class="fa-solid fa-check"></i>
            }
            <Link><i class="fa-solid fa-eye"></i></Link>
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