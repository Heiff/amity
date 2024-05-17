import React from 'react'
import { Link } from 'react-router-dom';

const Doctors = () => {
  return (
    <div className="doctors">
        <h1>Doctors</h1>
        <ul className="table">
            <li>Name</li>
            <li>Type</li>
            <li>City</li>
            <li>Phone</li>
            <li>Created</li>
        </ul>
        <div className="users">
            <div>
            <img src="" alt="50" />
            <h4>Bohodir Ikromov</h4>
            </div>
            <p>stomotolog</p>
            <p>tashkent</p>
            <p>+998 90 900 65 65</p>
            <div>
            <p>01.03.2024</p>
                <Link><i class="fa-solid fa-eye"></i></Link>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className="users">
            <div>
            <img src="" alt="50" />
            <h4>Bohodir Ikromov</h4>
            </div>
            <p>stomotolog</p>
            <p>tashkent</p>
            <p>+998 90 900 65 65</p>
            <div>
            <p>01.03.2024</p>
                <Link><i class="fa-solid fa-eye"></i></Link>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <div className="users">
            <div>
            <img src="" alt="50" />
            <h4>Bohodir Ikromov</h4>
            </div>
            <p>stomotolog</p>
            <p>tashkent</p>
            <p>+998 90 900 65 65</p>
            <div>
            <p>01.03.2024</p>
                <Link><i class="fa-solid fa-eye"></i></Link>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    </div>
  )
}

export default Doctors;