import React, { useContext } from 'react'
import { Context } from '../../Context'
import PhoneInput from 'react-phone-number-input';
import img from "../assets/login.png"

const Register = () => {
    const { setPassword,setNumber,Reg,phone_number,setFullName,
        setEmail,setGender,gender,setNotionality,setJshshr,setSertificate,
        setDate,setAddress,setPassport
        
    } = useContext(Context);
  return (
    <div className='auth'>
        <div className='container'>
          <div className="forlogin">

         
          <img className='img' src={img} alt="" />
            <div className="register">
            <h1>Welcome!</h1>
            <h3>Today will be great..</h3>
            <div className='inputs'>
            <label htmlFor="firstName"><i class="fa-solid fa-user"></i></label>
            <input type="text" id='firstName'  placeholder="Full Name" onChange={(e) => {setFullName(e.target.value)}} />
            </div>
              <PhoneInput country="US" id="number" placeholder="Enter phone number" value={phone_number} onChange={setNumber}/>
              <div className='inputs'>
            <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
            <input type="email" id='email'  placeholder="email" onChange={(e) => {setEmail(e.target.value)}} />
          
            </div>
            <div className='inputs'>
            <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
            <input type="password" id='email'  placeholder="password" onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div className='inputs'>
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
            <div className='inputs'>
            <label htmlFor="notinonality"><i class="fa-solid fa-globe"></i></label>
            <input type="notinonality" id='notinonality'  placeholder="notinonality" onChange={(e) => {setNotionality(e.target.value)}} />
            </div>
            <div className='inputs'>
            <label htmlFor="JSHSHR"><i class="fa-solid fa-lock"></i></label>
            <input type="text" id='JSHSHR'  placeholder="JSHSHR" onChange={(e) => {setJshshr(e.target.value)}} />
            </div>
            <div className='inputs'>
            <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
            <input type="text"  placeholder="passport" onChange={(e) => {setPassport(e.target.value)}} />
            </div>
            <div className='inputs'>
            <label htmlFor="sertificate"><i class="fa-solid fa-certificate"></i></label>
            <input type="text" id='sertificate'  placeholder="sertificate" onChange={(e) => {setSertificate(e.target.value)}} />
            </div>
            <div className='inputs'>
            <label htmlFor="address"><i class="fa-solid fa-location-dot"></i></label>
            <input type="text" id='address'  placeholder="addres" onChange={(e) => {setAddress(e.target.value)}} />
            </div>
            <div className='inputs'>
            <label htmlFor="firstName"><i class="fa-solid fa-cake-candles"></i></label>
            <input type="date" id='firstName'  placeholder="date" onChange={(e) => {setDate(e.target.value)}} />
            </div>
            
            <div className='btn'>
            <button onClick={Reg} type="submit"> Register</button>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Register