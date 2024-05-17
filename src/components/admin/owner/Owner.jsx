import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Doctors from './Doctors'

const Owner = () => {
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
                    <div className="info">
                        <div>
                            <p>clients</p>
                            <h4>511</h4>
                        </div>
                        <i class="fa-solid fa-users"></i>
                    </div>
                </div>
                <Doctors/>
            </div>
        </div>
    </div>
  )
}

export default Owner