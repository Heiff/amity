import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom'

const Mothers = () => {
    const [open,setOpen] = useState(false);
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
    </ul>
    <div className="create">
        <div className='dv'>
        <input type="text" className='inp'  placeholder='name' />
        </div>
        <input type="text"  className='inp' placeholder='blood' />
        <div className='dv'>
        <PhoneInput country="US" id="number" placeholder="Enter phone number" />
        </div>
        <div className='dv'>
        <input type="date" className='inp' />
        <button>create</button>
        </div>
    </div>
    <div className="hospital">
        <div>
        <input disabled={!open} type="text" defaultValue={"Bohodir IKromov"} />
        </div>
        <input type="text" disabled={!open}  defaultValue={"Blood"}  />
        <input type="number" disabled={!open}   defaultValue={"998909999999"}/>
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
  )
}

export default Mothers