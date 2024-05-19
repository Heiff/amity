import React, { useContext, useState } from 'react'
import Navbar from '../../main/Navbar';
import Footer from '../../main/Footer';
import { Context } from '../../../Context';
import { Link } from 'react-router-dom/dist';

const Mother = () => {
    const [data,setData] = useState([]);
    const [table,setTable] = useState();
    const { open ,motherPatient,motherChildren,vaccination} = useContext(Context);
    
    const myFunc = (e) =>{
      if(e == "children"){
        setData(motherChildren)
        setTable("Children")
      }
      else if(e == "vaccination"){
        setData(vaccination);
        setTable("Vaccination")
      }
      else if(e == "patient"){
        setData(motherPatient)
        setTable("Patient")
      }
    }
    return (
      <div className='mother_main'>
        <Navbar/>   
        <div className="mother-cards">
            <div className='container'>
                <div className="about_cards">
                <div onClick={(e) => {myFunc("children")}} className='about'>
                <p>My Children</p>
                <h3>3</h3>
                </div>
                <div onClick={(e) => {myFunc("vaccination")}} className='about'>
                <p>Vaccination</p>
                <h3>3</h3>
                </div>
                <div onClick={(e) => {myFunc("patient")}} className='about'>
                <p>Patient</p>
                <h3>3</h3>
                </div>
                </div>

                <div className='for_phone'>
                  <select onChange={(e) => {myFunc(e.target.value)}}>
                    <option>none</option>
                    <option value="patient">Patient</option>
                    <option value="children">Children</option>
                    <option value="vaccination">Vaccination</option>
                  </select>
                </div>
            </div>

            {
              table == "Patient" ? 
              <div className='main-card'> 
                <div className="container">      
                <h1 className='param'>Patient</h1>
                <div className="mother_patient">
                  {
                    motherPatient.map((el) => {
                      return(
                        <Link to={`/mother/patient/${el.id}`}>
                        <div className='cards'>
                          <ul className='table'>
                          <p>Name</p>
                          <p>Image EMB</p>
                          <p>Date</p>
                          <p>Next Date</p>
                          <p>Attendence</p>
                          <p>Comment</p>
                          </ul>
                          <div className="table">
                          <p>{el.name}</p>
                          <Link> view image </Link>
                          <p>{el.date.slice(0,10)}</p>
                          <p>{el.next_date.slice(0,10)}</p>
                          <p>{el.next_date_attendance === true ? "true" : "false"}</p>
                          <p>{el.comment.slice(0,10)}....</p>
                          </div>
                        </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>        
            </div> :
            table == "Children" ? 
            <div className='main-card'> 
                <div className="container">      
                <h1 className='param'>Children</h1>
                <div className="mother_patient">
                  {
                    motherChildren.map((el) => {
                      return(
                        <Link to={`/mother/child/${el.id}`}>
                        <div className='cards'>
                          <ul className='table'>
                          <p>Name</p>
                          <p>Birth Date</p>
                          <p>Certificate</p>
                          <p>Illness</p>
                          <p>Gender</p>
                          <p>Blood</p>
                          </ul>
                          <div className="table">
                          <p>{el.full_name}</p>
                          <p>{el.birth_date.slice(0,10)}</p>
                          <p>{el.birth_certificate_id}</p>
                          <p>{el.illness == true ? "yes" : "no" }</p>
                          <p>{el.gender}</p>
                          <p>{el.blood_group}</p>
                          </div>
                        </div>
                        </Link>
                      )
                    })
                  }
                </div>
              </div>        
            </div> : 
           <div className='main-card'> 
           <div className="container">      
           <h1 className='param'>Vaccination</h1>
           <div className="mother_patient">
             {
               vaccination?.map((el) => {
                 return(
                   <Link to={`/mother/vaccination/${el.id}`}>
                   <div className='cards'>
                     <ul className='table'>
                     <p>Name</p>
                     <p>Date</p>
                     <p>Status</p>
                     <p>Comment</p>
                     </ul>
                     <div className="table">
                     <p>{el.name}</p>
                     <p>{el.date.slice(0,10)}</p>
                     <p>{el.status}</p>
                     <p>{el.comment.slice(0,10)}....</p>
                     </div>
                   </div>
                   </Link>
                 )
               })
             }
           </div>
         </div>        
       </div>
            }
        </div>
        <Footer/>
      </div>
    )
}

export default Mother