import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import { Link, useSearchParams } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import { Context } from '../../../Context'

const Inspector = () => {
    
    const { open,setOpen,setFullName,setGender,setNumber,setEmail,setPassword,setImage,phone_number,gender,Owner_CreateInspector,inspectors } = useContext(Context);
    console.log(inspectors);
  return (
    <div className='owner'>
        <div className="cards">
            <Sidebar/>
            <div className="main">
            <h1>Admin / Inspector</h1>
            <div className="crud"> 
        <h1>Inspector</h1>
        <ul className="table">
            <li>Name</li>
            <li>Gender</li>
            <li>Phone</li>
            <li>Email</li>
            <li>Password</li>
        </ul>
        <div className="create">
            <div className='dv'>
            <input type="file" onChange={(e) => {setImage(e.target.files[0])}} className='inp-d'  />
            <input type="text" className='inp' onChange={(e) => {setFullName(e.target.value)}}  placeholder='name' />
            </div>
            <div className='gender'>
            <div>
            <label htmlFor="male">male</label>
            <input
        type="checkbox"
        id='male'
        checked={gender === "male"}
        onChange={() => setGender("male")}
      />
            </div>
            <div>
            <label htmlFor="female">female</label>
      <input
        type="checkbox"
        id='female'
        checked={gender === "female"}
        onChange={() => setGender("female")}
      />
            </div>
            </div>
            <div className='dv'>
            <PhoneInput country="US" id="number" value={phone_number} onChange={setNumber} placeholder="Enter phone number" />
            </div>
            <input type="text" className='inp' onChange={(e) => {setEmail(e.target.value)}} placeholder='example.@mail.ru'  />
            <div className='dv'>
            <input type="password"  onChange={(e) => {setPassword(e.target.value)}} placeholder='password' className='inp' />
            <button onClick={Owner_CreateInspector}>create</button>
            </div>
        </div>
        <div className="hospital">
            <div>
            <img src="" alt="50" />
            <input disabled={!open} type="text" defaultValue={"Bohodir IKromov"} />
            </div>
            <input type="text" disabled={!open}  defaultValue={"male"}  />
            <input type="number" disabled={!open}   defaultValue={"998909999999"}/>
            <input type="text" disabled={!open}  defaultValue={"mr.@mail.ru"} />
            <div>
            <input type="text" disabled={!open} defaultValue={"password"}/>
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

export default Inspector