import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Context } from '../../../Context';

const Patient = () => {
    const { open,setOpen,setDate,setName,setComment,setImageEmb,setBabyStatus,setNextDate,setAttendence,Doctor_CreatePatient,
            motherId,Doctor_UpdatePatient,Doctor_DeletePatient,mothers,setMotherId,patient } = useContext(Context);

    const [view,setView] = useState(false);
  return (
    <div className='doctor_main'>
        <div className="cards">
            <Sidebar/>
        <div className='main'>
        <h1>Doctor / Patients</h1>
        <div className="crud"> 
    <h1>Patients</h1>
    <ul className="table">
        <li>Image</li>
        <li>Date</li>
        <li>Name</li>
        <li>Mother</li>
        <li>Baby Status</li>
        <li>Next Date</li>
        <li>Attendence</li>
        <li>Comment</li>
    </ul>
    <div className="create">
        <div className="dv">
        <input type="file" className='inp-d' onChange={(e) => {setImageEmb(e.target.files[0])}}/>
        </div>
        <div className="dv">
        <input type="date"  className='inp-d' placeholder='date' onChange={(e) => {setDate(e.target.value)}} />
        </div>
        <div className='dv'>
        <input type="text" className='inp'  placeholder='name' onChange={(e) => {setName(e.target.value)}} />
        </div>
        <select className='dv' onChange={(e) => {setMotherId(e.target.value)}}>
            <option value=""></option>
            {
                mothers.map((el) => {
                    return(
                        <option value={el.id}>{el.full_name}</option>
                    )
                })
            }
        </select>
        <select className='dv' onChange={(e) => {setBabyStatus(e.target.value)}}>
            <option value="born">born</option>
            <option value="notborn">notborn</option>
        </select>
        <div className="dv">
        <input type="date" className='inp' placeholder='next date' onChange={(e) => {setNextDate(e.target.value)}} />
        </div>
        <div className="dv">
        <input type="checkbox" disabled={true} className='inp-ch' onChange={(e) => {setAttendence(true)}} />
        </div>
        <div className='dv'>
        <input type="text" className='inp' placeholder='comment' onChange={(e) => {setComment(e.target.value)}} />
        <button onClick={Doctor_CreatePatient}>create</button>
        </div>
    </div>
    {
        patient.map((el) => {
            console.log(el);
            return(
        <div className="hospital">
            <div className="dv">
            {
                !open ? <img className='profile_img' src={`http://localhost:8080/${el.image}`} alt="" /> : <input type='file' className='inp-d' onChange={(e) => {setImageEmb(e.target.files[0])}}/>
            }
            </div>
        <div className='dv'>
        <input type="text" className='inp' disabled={!open}  defaultValue={el.date.slice(0,10)} onChange={(e) => {setDate(e.target.value)}} />
        </div>
        <input disabled={!open} className='inp' type="text" defaultValue={el.name} onChange={(e) => {setName(e.target.value)}} />
        <input disabled={open} className='inp' type="text" defaultValue={el.Mother.full_name} />
        <select className='dv' disabled={!open || el.baby_status === "born"} onChange={(e) => {setBabyStatus(e.target.value)}}>
            <option value={el.baby_status}>{el.baby_status}</option>
            <option value="born">born</option>
        </select>
        <input type="text" className='inp' disabled={!open}  defaultValue={el.next_date.slice(0,10)} onChange={(e) => {setNextDate(e.target.value)}} />
        <div className="dv">
        {
            open ? <input type="checkbox" className='inp-ch'  onChange={(e) => {setAttendence(true)}} /> : 
            <input type="checkbox" className='inp-ch' checked={el.next_date_attendance === true  ? true : false} disabled={!open} onChange={(e) => {setAttendence(true)}} />
        }
        </div>
        <div className='dv'>
        <input type="text" className='inp' disabled={!open}  defaultValue={el.comment} onChange={(e) => {setComment(e.target.value)}}/>
            {
                !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) =>{Doctor_UpdatePatient(e,el.id)}} class="fa-solid fa-check"></i>
            }
            <Link><i class="fa-solid fa-eye"></i></Link>
            <i onClick={Doctor_DeletePatient} class="fa-solid fa-trash"></i>
        </div>
    </div>
            )
        })
    }
   
              </div>
    </div>
        </div>
    </div>
  )
}

export default Patient