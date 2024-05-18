import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import PhoneInput from 'react-phone-number-input'
import { useContext } from 'react'
import { Context } from '../../../Context'

const Owner = () => {
    const { open,setOpen,setFullName,setGender, setNumber, setEmail,
    setPassword, setProfession,setImage,gender,phone_number,Owner_CreateDoctor,
    Owner_UpdateDoctor,Owner_DeleteDoctor,doctors
} = useContext(Context)
  return (
    <div className='owner'>
        <div className="cards">
            <Sidebar/>
            <div className="dashboard">
                <h1>Admin / Dashboard</h1>
                <div className='information'>
                    <div className="info">
                        <div>
                            <p>clients</p>
                            <h4>511</h4>
                        </div>
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div className="info">
                        <div>
                            <p>clients</p>
                            <h4>511</h4>
                        </div>
                        <i class="fa-solid fa-users"></i>
                    </div>
                    <div className="info">
                        <div>
                            <p>clients</p>
                            <h4>511</h4>
                        </div>
                        <i class="fa-solid fa-users"></i>
                    </div>
                </div>
                <div className="main">
        <div className="crud"> 
    <h1>Doctors</h1>
    <ul className="table">
        <li>Name</li>
        <li>Gender</li>
        <li>Phone</li>
        <li>Email</li>
        <li>Password</li>
        <li>Profession</li>
    </ul>
    <div className="create">
        <div className='dv'>
        <input type="file" className='inp-d'  onChange={(e) => {setImage(e.target.files[0])}}/>
        <input type="text" className='inp'  placeholder='name' onChange={(e) => {setFullName(e.target.value)}} />
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
        <PhoneInput country="US" id="number" placeholder="Enter phone number" value={phone_number} onChange={setNumber} />
        </div>
        <input type="text" className='inp' placeholder='example.@mail.ru' onChange={(e) => {setEmail(e.target.value)} }  />
        <div className="dv">
        <input type="password" className='inp' placeholder='password' onChange={(e) => {setPassword(e.target.value)} }  />
        </div>
        <div className='dv'>
            <input type="text" className='inp' placeholder='profession' onChange={(e) => {setProfession(e.target.value)}} />
        <button onClick={Owner_CreateDoctor}>create</button>
        </div>
    </div>
    {
        doctors.map((el) => {
            return(
                <div className="doctor">
                <div>
                <img src={`http://localhost:8080/${el.image}`}   alt="" />
                <input disabled={!open} type="text" defaultValue={"Bohodir IKromov"} onChange={(e) => {setFullName(e.target.value)}} />
                </div>
                <input type="text" disabled={!open}  defaultValue={el.gender} onChange={(e) => {setGender(e.target.value)}} />
                <input type="textr" disabled={!open}   defaultValue={el.phone_number} onChange={(e) => {setNumber(e.target.value)} }/>
                <input type="text" disabled={!open}  defaultValue={el.email} onChange={(e) => {setEmail(e.target.value)}}/>
                <input type='password' disabled={!open} defaultValue={el.password} onChange={(e) => {setPassword(e.target.value)} }/>
                <div>
                <input type="text" disabled={!open}  defaultValue={el.profession} onChange={(e) => {setProfession(e.target.value)}} />
                    {
                        !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) => {Owner_UpdateDoctor(e,el.id)}} class="fa-solid fa-check"></i>
                    }
                    <Link><i class="fa-solid fa-eye"></i></Link>
                    <i onClick={(e) => {Owner_DeleteDoctor(e,el.id)}} class="fa-solid fa-trash"></i>
                </div>
            </div>
            )
        })
    }
   
   
              </div>
    </div>
            </div>
          
        </div>
    </div>
  )
}

export default Owner