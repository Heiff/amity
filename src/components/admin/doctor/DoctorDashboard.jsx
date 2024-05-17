import React from 'react'
import Sidebar from './Sidebar'
import Mothers from './Mothers'

const DoctorDashboard = () => {
  return (
    <div className='doctor_main'>
        <div className="cards">
          <Sidebar/>
          <Mothers/>
        </div>
    </div>
  )
}

export default DoctorDashboard