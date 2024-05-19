import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/dist'
import { Context } from '../../../Context';
import Navbar from '../../main/Navbar';
import Footer from '../../main/Footer';

const OneChild = () => {
    const { api,oneBaby,setOneBaby } = useContext(Context);
     const { id } = useParams();
     console.log(oneBaby);
     const token = localStorage.getItem("token")
     const GetData = async() => {
        try {
            await axios.get(`${api}/api/doctor/get/baby/${id}`,{headers:{token}}).then((res) => {
               
                setOneBaby([res.data])
            })
        } catch (error) {
            console.log(error);
        }
     }
     useEffect(() => {
        GetData()
     },[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="onecard">
                    {
                        oneBaby.map((el) => {
                            return(
                                <div className="card-d">
                                    <div className="table">
                                    <h4>Name</h4>
                                    <h3>Birth Date</h3>
                                    <h3>Birth Certificate</h3>
                                    <h3>Address</h3>
                                    <h3>Hospital</h3>
                                    <h3>Doctor</h3>
                                    <h3>Blood</h3>
                                    <h3>Is Positive</h3>
                                    <h3>Illness</h3>
                                    <h3>Illness Description</h3>
                                    <h3>Height</h3>
                                    <h3>Weight</h3>
                                    <h3>Comment</h3>
                                    <h3>Gender</h3>
                                </div>
                                <div className="table">
                                    <h4>{el.full_name}</h4>
                                    <h3>{el.birth_date.slice(0,10)}</h3>
                                    <h3>{el.birth_certificate_id}</h3>
                                    <h3>{el.address}</h3>
                                    <h3>{el.Hospital.name}</h3>
                                    <h3>{el.Doctor.full_name}</h3>
                                    <h3>{el.blood_group}</h3>
                                    <h3>{el.is_positive == true ? "true" : "false"}</h3>
                                    <h3>{el.illness == true ? "true" : "false"}</h3>
                                    <h3>{el.illness_desc}</h3>
                                    <h3>{el.height}</h3>
                                    <h3>{el.weight}</h3>
                                    <h3>{el.comment}</h3>
                                    <h3>{el.gender}</h3>
                                </div>
                                    </div>

                            )
                        })
                    }
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default OneChild