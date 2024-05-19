import React, { useContext } from 'react'
import { Context } from '../../../Context'
import Navbar from '../../main/Navbar';
import Footer from '../../main/Footer';


const Queue = () => {
    const {  } = useContext(Context);
  return (
    <div className='queue'>
        <Navbar/>
        <div className="container">
            <div className="queue">
            <input type="date"  />
            </div>
        </div>
        
    </div>
  )
}

export default Queue