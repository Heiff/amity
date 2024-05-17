import React, { useState } from 'react'
import Navbar from '../../main/Navbar';
import Footer from '../../main/Footer';

const Mother = () => {
    const [open,setOpen] = useState(false);
    const [O,setO] = useState(false);
    const [mother,setMother] = useState();
    const [data,setData] = useState()

  
    const myFunc = (e) =>{
      if(e == "children"){
        setData("Children")
      }
      else if(e == "vaccination"){
        setData("Vaccination");
      }
      else if(e == "patient"){
        setData("Patient")
      }
    }
    return (
      <div className='mother_main'>
        <Navbar/>   
        <div className="cards">
            <div className='container'>
                <div className="about_cards">
                <div className='about'>
                <p>My Children</p>
                <p>3</p>
                <button onClick={(e) => {myFunc("children")}} >View</button>
                </div>
                <div className='about'>
                <p>Vaccination</p>
                <p>3</p>
                <button onClick={(e) => {myFunc("vaccination")}}>View</button>
                </div>
                <div className='about'>
                <p>Patient</p>
                <p>3</p>
                <button disabled={!data} onClick={(e) => {myFunc("patient")}}>View</button>
                </div>
                </div>
            </div>
            {
                data ? 
                <div className='main'> 
                <div className="crud-mother"> 
                <h1 className='param'>{data}</h1>
                <ul className='table-m'>
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
            </div>
              </div>        
            </div> :  <div className='main'> 
                <div className="crud-mother"> 
                <h1 className='param'>Patient</h1>
                <ul className='table-m'>
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