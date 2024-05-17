import React, { useContext  } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Context } from '../../Context'
import { Link } from 'react-router-dom'

const Login = () => {
    const { setPassword,setNumber,Login,number } = useContext(Context);
  return (
    <div className='auth'>
        <div className='container'>
            <div className="login">
            <h1>Welcome!</h1>
            <h3>Today will be great..</h3>
              <PhoneInput country="US" id="number" placeholder="Enter phone number" value={number} onChange={setNumber}/>
            <div className='inputs'>
            <label htmlFor="password"><i class="fa-solid fa-lock"></i></label>
            <input type="password" id='password'  placeholder="password" onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div className='checkbox'>
            <input type="checkbox" id='checkbox'/>
            <label htmlFor="checkbox">remember me</label>
            </div>
            <div className="route">
              <Link to="/register">Register</Link>
            </div>
            <div className="btn">
            <button onClick={Login} type='button'> Login</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login