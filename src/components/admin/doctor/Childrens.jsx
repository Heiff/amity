import React, { useContext, useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';
import { Context } from '../../../Context';

const Childrens = () => {
  const [open,setOpen] = useState(false);
  const [O,setO] = useState(false);
  const [mother,setMother] = useState();

  const {  setBirthDate,setBirthCertificate,setIllness,setHeight,setWeight,setIllnesDesc,setFullName,setComment,
  setAddress,setBlood,setIsPositive,setGender,setMotherId,gender,mothers,motherId,setName,Doctor_CreateChildren,baby,
  Doctor_UpdateChildren,Doctor_DeleteChildren
  } = useContext(Context);

  const myFunc = (e,name,id) =>{
    setO(false);
    setMotherId(id);
    setMother(name)
  }
  return (
    <div className='doctor_main'>
      <div className="cards">
      <Sidebar/>
       <div className='main'>
        <h1>Doctor / Children</h1>   
        <div style={{padding:"0 100px 0 30px"}} className="crud"> 
        <h1 className='param'>Children</h1>
        <ul className='table-ch'>
        <li>Name</li>
        <li>Birth date</li>
        <li>Birth certificate</li>
        <li>Address</li>
        <li>Blood group</li>
        <li>Gender</li>
        <li>Mother</li>
        <li>Illnes</li>
        <li>Height</li>
        <li>Weight</li>
        <li>Comment</li>
        <li>Illness description</li>
        <li>Is positive</li>
        </ul>
        <div className="baby">

       
        <div className="inp">
        <input  type="text" placeholder='name' onChange={(e) => {setFullName(e.target.value)}}/>
        <input  type="date"  placeholder='' onChange={(e) => {setBirthDate(e.target.value)}} />
        <input  type="text"  placeholder='birth serticifat' onChange={(e) => {setBirthCertificate(e.target.value)}} />
        <input  type="text"  placeholder='address' onChange={(e) => {setAddress(e.target.value)}}/>
        <input  type="text"  placeholder='blood group' onChange={(e) => {setBlood(e.target.value)}}/>
        <input type="text" placeholder='gender' onChange={(e) => {setGender(e.target.value)}}/>
        <input  type="text" onClick={(e) => {setO(!O)}} value={mother?mother : "none"} placeholder='mother'/>
        {
          O ? <div className='select'>
            <input  type="text" placeholder='search by phone number' />
            {
              mothers.map((el) => {
                return(
                  <button onClick={(e) => {myFunc(el.phone_number,el.full_name,el.id)}}>{el.full_name}</button>
                )
              })
            }
          </div> : null
        }
        <input  type="text"  placeholder='illnes' onChange={(e) => {setIllness(e.target.value)}}/>
        <input  type="text"  placeholder='40sm' onChange={(e) => {setHeight(e.target.value)}}/>
        <input  type="text"  placeholder='15kg' onChange={(e) => {setWeight(e.target.value)}}/>
        <input  type="text" placeholder='comment' onChange={(e) => {setComment(e.target.value)}} />
        <input type="text" placeholder='illnes description' onChange={(e) => {setIllnesDesc(e.target.value)}} />
        <input type="text" placeholder='is positive' onChange={(e) => {setIsPositive(e.target.value)}} />
        <div className='create'>
          <button onClick={Doctor_CreateChildren}>Create</button>
        </div>
    </div> 
    </div>





        <div className='baby'>
        <div className="forchild">
        {
          baby.map((el) => {
            return(
         <div className="inp">
        <input disabled={!open} type="text" defaultValue={el.full_name} onChange={(e) => {setFullName(e.target.value)}} />
        <input type="text" disabled={!open}  defaultValue={el.birth_date} onChange={(e) => {setBirthDate(e.target.value)}} />
        <input type="text" disabled={!open}  defaultValue={el.birth_certificate_id} onChange={(e) => {setBirthCertificate(e.target.value)}} />
        <input type="text" disabled={!open}  defaultValue={el.address} onChange={(e) => {setAddress(e.target.value)}} />
        <input type="text" disabled={!open}  defaultValue={el.blood_group} onChange={(e) => {setBlood(e.target.value)}}/>
        <input type="text" disabled={!open}  defaultValue={el.gender} onChange={(e) => {setGender(e.target.value)}}/>
        <input type="text" disabled={true}   defaultValue={el.Mother.full_name}/>
        <input type="text" disabled={!open}  defaultValue={el.illness} onChange={(e) => {setIllness(e.target.value)}} />
        <input type="text" disabled={!open}  defaultValue={el.height} onChange={(e) => {setHeight(e.target.value)}} />
        <input type="text" disabled={!open}  defaultValue={el.weight} onChange={(e) => {setWeight(e.target.value)}} />
        <input  type="text" disabled={!open} defaultValue={el.comment} onChange={(e) => {setComment(e.target.value)}} />
        <input type="text" disabled={!open}  defaultValue={el.illness_desc} onChange={(e) => {setIllnesDesc(e.target.value)}} />
        <div className='btns'>
        <input type="text" disabled={!open}  defaultValue={el.is_positive} onChange={(e) => {setIsPositive(e.target.value)}}/>
            {
                !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) => {Doctor_UpdateChildren(e,el.id)}} class="fa-solid fa-check"></i>
            }
            <Link><i class="fa-solid fa-eye"></i></Link>
            <i onClick={(e) => {Doctor_DeleteChildren(e,el.id)}} class="fa-solid fa-trash"></i>
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
    </div>
  )
}

export default Childrens