import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';

const Childrens = () => {
  const [open,setOpen] = useState(false);
  const [O,setO] = useState(false);
  const [mother,setMother] = useState();

  const myFunc = (e) =>{
    setO(false);
    setMother(e)
  }
  return (
    <div className='doctor_main'>
      <div className="cards">
      <Sidebar/>
       <div className='main'>
        <h1>Doctor / Children</h1>   
        <div className="crud"> 
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
        </ul>
        <div className="create">
        <input  type="text" defaultValue={"Bohodir IKromov"} />
        <input type="text"  placeholder='01.03.2004'/>
        <input type="text"  placeholder='birth serticifat'/>
        <input type="text"  placeholder='address'/>
        <input type="text"  placeholder='blood group'/>
        <input type="text"  placeholder='male'/>
        <input type="text" onClick={(e) => {setO(!O)}} value={mother?mother : "father"} placeholder='mother'/>
        {
          O ? <div className='select'>
            <input type="text" />
            <button onClick={(e) => {myFunc("mother")}}>select</button>
          </div> : null
        }
        <input type="text"  placeholder='illnes'/>
        <input type="text"  placeholder='40sm'/>
        <input type="text"  placeholder='15kg'/>
        <input type="text" placeholder='comment' />
        <div className='create'>
        
          <button>Create</button>
        </div>
    </div> 
    <div className='baby'>
        <img src="" alt="50" />
        <div className="forchild">
        <div className="inp">
        <input disabled={!open} type="text" defaultValue={"Bohodir IKromov"} />
        <input type="text" disabled={!open}  defaultValue={"01.03.2004"}/>
        <input type="text" disabled={!open}  defaultValue={"birth serticifate"}/>
        <input type="text" disabled={!open}  defaultValue={"address"}/>
        <input type="text" disabled={!open}  defaultValue={"blood group"}/>
        <input type="text" disabled={!open}  defaultValue={"male"}/>
        <input type="text" disabled={!open}  defaultValue={"mother"}/>
        <input type="text" disabled={!open}  defaultValue={"illnes"}/>
        <input type="text" disabled={!open}  defaultValue={"40sm"}/>
        <input type="text" disabled={!open}  defaultValue={"20kg"}/>
        <input type="text" disabled={!open} placeholder='comment' />
    </div>
        </div>
        <div className='btns'>
            {
                !open ? <i onClick={(e) => {setOpen(true)}} class="fa-solid fa-pen"></i> : <i onClick={(e) => {setOpen(false)}} class="fa-solid fa-check"></i>
            }
            <Link><i class="fa-solid fa-eye"></i></Link>
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
  
      </div>
   

        
    </div>
      </div>
    </div>
  )
}

export default Childrens