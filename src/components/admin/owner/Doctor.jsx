import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'

const Doctor = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className='owner'>
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
    <div className="create">
        <div className='dv'>
        <input type="file" className='inp-d'  />
        <input type="text" className='inp'  placeholder='name' />
        </div>
        <input type="text"  className='inp' placeholder='Gender' />
        <div className='dv'>
        <PhoneInput country="US" id="number" placeholder="Enter phone number" />
        </div>
        <input type="text" className='inp' placeholder='example.@mail.ru'  />
        <input type='text' placeholder='hospital'/>
        <div className='dv'>
        <input type="date" className='inp' />
        <button>create</button>
        </div>
    </div>
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

export default Doctor