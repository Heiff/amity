import axios from "axios";
import React,{createContext, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom/dist";


const Context = createContext();

const ContextProvider = ({children})=>{
   const [phone_number,setNumber] = useState();
   const [password,setPassword] = useState();
   const [full_name,setFullName] = useState();
   const [gender,setGender] = useState();
   const [nationality,setNotionality] = useState();
   const [JSHSHR,setJshshr] = useState();
   const [sertificate,setSertificate] = useState();
   const [status,setStatus] = useState();
   const [baby_id,setBabyId] = useState();
   const [date,setDate] = useState();
   const [email,setEmail] = useState();
   const [address,setAddress] = useState();
   const [passport,setPassport] = useState();
   const [profession,setProfession] = useState();
   const [image,setImage] = useState(null);
   const [open,setOpen] = useState(false);
   const [hospitalName,setHospitalName] = useState();
   const [hospitalType,setHospitalType] = useState();
   const [blood_group,setBlood] = useState();
   const [hospitalAddres,setHospitalAddress] = useState();
   const [hospitalEmail,setHospitalEmail] = useState();
   const [name,setName] = useState();
   const [is_positive,setIsPositive] = useState();
   const [hospitals,setHospitals] = useState([]);
   const [doctors,setDoctors] = useState([]);
   const [inspectors,setInspectors] = useState([]);
   const [birth_certificate_id,setBirthCertificate] = useState();
   const [birth_date,setBirthDate] = useState();
   const [illness,setIllness] = useState();
   const [height,setHeight] = useState();
   const [weight,setWeight] = useState();
   const [illness_desc,setIllnesDesc] = useState();
   const [profile,setProfile] = useState([]);
   const [mothers,setMothers] = useState([]);
   const [comment,setComment] = useState();
   const [img_emb,setImageEmb] = useState(null)
   const [babyStatus,setBabyStatus] = useState();
   const [nextDate,setNextDate] = useState();
   const [motherId,setMotherId] = useState();
   const [attendence,setAttendence] = useState();
   const [vaccination,setVaccination] = useState();
   const [patient,setPatient] = useState([]);
   const [hospitalId,setHospitalId] = useState();
   const [message,setMessage] = useState()
   const [baby,setBaby] = useState([]);
   const [oneBaby,setOneBaby] = useState([]);
   const [motherPatient,setMotherPatient] = useState([]);
   const [motherChildren,setMotherChildren] = useState([]);
   const [allHospitals,setAllHospitals] = useState([])

   
   const navigate = useNavigate();
   const api = "http://localhost:8080"
   const token = localStorage.getItem("token");
   
  
    const who = localStorage.getItem("navigate");
  


    const Mother_GetAllHospitals = async() => {
        try {
           
                await axios.get(`${api}/api/hospitals`,{headers:{token}}).then((res) => {
                    setAllHospitals(res.data)
                })
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        Mother_GetAllHospitals()
    },[])
   
    const Login = async(e) => {
        e.preventDefault()
        try {
            await axios.post(`${api}/api/signin`,{phone_number,password},{headers:{
                "Access-Control-Allow-Origin": "*"
            }}).then((res) =>{
                if (res.status === 200) {
                    localStorage.setItem("token",res.data.token);
                    localStorage.setItem("navigate",res.data.message)
                    navigate(`/${res.data.message}`)
                    window.location.reload(true)
                }
                console.log(res);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const Owner_GetAllDoctor = async() => {
        try {
           
                await axios.get(`${api}/api/doctors`,{headers:{token}}).then((res) => {
                    setDoctors(res.data.Doctors)
                })
        
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      Owner_GetAllDoctor();
    }, [])

   
    const Profile = async() =>{
        try {
          
            await axios.get(`${api}/api/owner/profile`,{headers:{token}}).then(res => {
                setProfile(res.data)
            })
           
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        Profile();
    },[])


    const Owner_CreateDoctor = async(e) =>{
    e.preventDefault();
    const form = new FormData()
    form.append('image',image)
    form.append('full_name',full_name)
    form.append('gender',gender)
    form.append('phone_number',phone_number)
    form.append('email',email)
    form.append('password',password)
    form.append('profession',profession)
        try {
            await axios.post(`${api}/api/doctor`,form,{headers:{token}}).then((res) => {
                if (res.status === 201) {
                    setImage(null);
                    setFullName("");
                    setGender("");
                    setNumber("");
                    setPassword("");
                    setProfession("");
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const Owner_UpdateDoctor = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.put(`${api}/api/doctor/${id}`,{full_name, gender, phone_number, email, password, profession},{headers:{token}}).then((res) =>{
                console.log(res);
                if (res.status === 200) {
                    console.log(res)
                    setOpen(false);
                }
            })
        } catch (error) {
            
        }
    }

    const Owner_DeleteDoctor = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.delete(`${api}/api/doctor/${id}`,{headers:{token}}).then((res) =>{
                if (res.status === 204) {
                    window.location.reload(true )
                }
            })
        } catch (error) {
            
        }
    }



    const Owner_GetAllHospital = async() => {
        try {
            
                await axios.get(`${api}/api/hospital`,{headers:{token}}).then((res) => {
                    setHospitals(res.data)
                })
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      Owner_GetAllHospital()
    }, [])

   

    const Owner_CreateHospital = async(e) =>{
        e.preventDefault();
           try{
            await axios.post(`${api}/api/hospital`,{address:hospitalAddres,email:hospitalEmail,name:hospitalName,type:hospitalType,phone_number},{headers:{token}}).then((res) => {
                if (res.status === 201) {
                    window.location.reload(true)
                    
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const Owner_UpdateHospital = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.put(`${api}/api/hospital`,{address:hospitalAddres,email:hospitalEmail,name:hospitalName,type:hospitalType,phone_number},{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    console.log(res);
                    setOpen(false);
                    window.location.reload(true)
                }
            })
        } catch (error) {
            
        }
    }

    const Owner_DeleteHospital = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.delete(`${api}/api/hospital/${id}`,{headers:{token}}).then((res) =>{
                if (res.status === 204) {
                    window.location.reload(true)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }










    const Owner_GetAllInspector = async() => {
        try {
            if (who == "owner") {
                
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      Owner_GetAllInspector()
    }, [])

   

    const Owner_CreateInspector = async(e) =>{
        e.preventDefault();
        const form = new FormData()
        form.append('image',image)
        form.append('full_name',full_name)
        form.append('gender',gender)
        form.append('phone_number',phone_number)
        form.append('email',email)
        form.append('password',password)
            try {
                await axios.post(`${api}/api/owner/inspector`,form,{headers:{token}}).then((res) => {
                    if (res.status === 201) {
                        setImage(null);
                        setFullName("");
                        setGender("");
                        setNumber("");
                        setEmail("")
                        setPassword("");
                        window.location.reload(true)
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }

    const Owner_UpdateInspector = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.put(`${api}/api/inspector/${id}`,{full_name,gender,phone_number,email,password},{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    setOpen(false);
                    window.location.reload(true)
                }
            })
        } catch (error) {
            
        }
    }

    const Owner_DeleteInspector = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.delete(`${api}/api/inspector/${id}`,{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    window.location.reload();
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    

    





    const Doctor_GetAllMother = async() => {
        try {
           
                await axios.get(`${api}/api/mother`,{headers:{token}}).then((res) => {
                    console.log(res);
                    setMothers(res.data)
                })
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      Doctor_GetAllMother()
    }, [])
    
   

    const Doctor_CreateMother = async(e) =>{
        e.preventDefault();
        const form = new FormData()
        form.append('image',image)
        form.append('full_name',full_name)
        form.append('blood_group',blood_group)
        form.append('is_positive',is_positive)
        form.append('email',email)
        form.append('phone_number',phone_number)
        form.append('password',password)
            try {
                await axios.post(`${api}/api/mother`,form,{headers:{token}}).then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                        setMothers(res.data)
                        window.location.reload(true)
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }

    const Doctor_UpdateMother = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.put(`${api}/api/doctor/updateMother/${id}`,{full_name,blood_group,is_positive,phone_number,password,email,image},{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    console.log(res);
                    setOpen(false);
                    window.location.reload(true)
                }
            })
        } catch (error) {
            
        }
    }

    const Doctor_DeleteMother = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.delete(`${api}/api/mother/${id}`,{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    window.location.reload(true)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    

    
    const Doctor_GetAllPatient = async() => {
        try {
          
            await axios.get(`${api}/api/doctor/getAllControls`,{headers:{token}}).then((res) => {
                console.log(res);
                setPatient(res.data)
            })
          
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      Doctor_GetAllPatient()
    }, [])
    
   

    const Doctor_CreatePatient = async(e) =>{
        e.preventDefault();
        const form = new FormData()
        form.append('image_emb',img_emb)
        form.append('name',name)
        form.append('date',date)
        form.append('comment',comment)
        form.append('baby_status',babyStatus)
        form.append('next_date',nextDate)
        form.append('mother_id',motherId)
        form.append('next_date_attendance',false)
            try {
                await axios.post(`${api}/api/doctor/createControl`,form,{headers:{token}}).then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                        setMothers(res.data)
                        window.location.reload(true)
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }

    const Doctor_UpdatePatient = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.put(`${api}/api/doctor/updControlAttendance/${id}`,{},{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    console.log(res);
                    setOpen(false);
                    window.location.reload(true)
                }
            })
        } catch (error) {
            
        }
    }

    const Doctor_DeletePatient = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.delete(`${api}/api/mother/${id}`,{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    window.location.reload(true)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }


    const Doctor_GetAllChildren = async() => {
        try {
            
                await axios.get(`${api}/api/doctor/get/babies`,{headers:{token}}).then((res) => {
                    console.log(res);
                    setBaby(res.data)
                })
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      Doctor_GetAllChildren()
    }, [])
    
   

    const Doctor_CreateChildren = async(e) =>{
        e.preventDefault();
        const data = {full_name,
            birth_date,
            birth_certificate_id,
            address,
            blood_group,
            is_positive,
            illness,
            height,
            weight,
            illness_desc,
            comment,
            gender,
            mother_id:motherId}
            try {
                await axios.post(`${api}/api/doctor/create/baby`,data,{headers:{token}}).then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                        setMothers(res.data)
                        window.location.reload(true)
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }

    const Doctor_UpdateChildren = async(e,id) =>{
        e.preventDefault()
        const data = {
            full_name,
            birth_date,
            birth_certificate_id,
            address,
            blood_group,
            is_positive,
            illness,
            height,
            weight,
            illness_desc,
            comment,
            gender
        }
        try {
            await axios.put(`${api}/api/doctor/update/baby/${id}`,data,{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    console.log(res);
                    setOpen(false);
                    window.location.reload(true)
                }
            })
        } catch (error) {
            
        }
    }

    const Doctor_DeleteChildren = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.delete(`${api}/api/mother/${id}`,{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    window.location.reload(true)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }




    
    const Doctor_GetAllVaccination = async() => {
        try {
            
                await axios.get(`${api}/api/vaccinations`,{headers:{token}}).then((res) => {
                    setVaccination(res.data)
                }) 
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      Doctor_GetAllVaccination()
    }, [])
    
   

    const Doctor_CreateVaccination = async(e) =>{
        e.preventDefault();
        const data = { name, status, comment, date, baby_id, mother_id:motherId }
            try {
                await axios.post(`${api}/api/doctor/vaccination`,data,{headers:{token}}).then((res) => {
                    console.log(res);
                    if (res.status === 201) {
                        window.location.reload(true)
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }

    const Doctor_UpdateVaccination = async(e,id) =>{
        e.preventDefault()
        const data = {
            full_name,
            birth_date,
            birth_certificate_id,
            address,
            blood_group,
            is_positive,
            illness,
            height,
            weight,
            illness_desc,
            comment,
            gender
        }
        try {
            await axios.put(`${api}/api/doctor/update/baby/${id}`,data,{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    console.log(res);
                    setOpen(false);
                    window.location.reload(true)
                }
            })
        } catch (error) {
            
        }
    }

    const Doctor_DeleteVaccination = async(e,id) =>{
        e.preventDefault()
        try {
            await axios.delete(`${api}/api/doctor/vaccinations/delete/${id}`,{headers:{token}}).then((res) =>{
                if (res.status === 200) {
                    window.location.reload(true)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    
    
  

    
    const Mother_GetAllPatient = async() => {
        try {
            await axios.get(`${api}/api/mother/getControls`,{headers:{token}}).then((res) => {
                setMotherPatient(res.data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Mother_GetAllPatient()
    },[])


    const Mother_GetAllChildren = async() => {
        try {
           
                await axios.get(`${api}/api/mother/get/babies`,{headers:{token}}).then((res) => {
                    console.log(res);
                    setMotherChildren(res.data)
                })
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Mother_GetAllChildren()
    },[])
    

    const Mother_CreateMessage = async() => {
        try {
            await axios.post(`${api}`,{name,phone_number,email,message,hospitalId})
        } catch (error) {
            
        }
    }

    
   

    const Reg = async(e) => {
        try {
            await axios.post(`${api}/api/owner/signup`,{phone_number,password,full_name,nationality,JSHSHR,sertificate_id:sertificate,
            birth_date:date,email,address,passport_id:passport,gender,hospitals
            }).then((res) =>{
                if (res.status === 201) {
                    setNumber("");
                    setGender("")
                    navigate("/login");
                }
            })
        } catch (error) {
            console.log(error);
        }
    }


    const LogOut = () =>{
        localStorage.clear("token");
        navigate("/")
    }
    

    return(
        <Context.Provider value={{
        setNumber,setPassword,Login,password,Reg,
        setFullName,Owner_CreateDoctor,Owner_UpdateDoctor,Owner_DeleteDoctor,
        setEmail,setGender,gender,setNotionality,setJshshr,setSertificate,
        setDate,setAddress,LogOut,setPassport,setProfession,open,setOpen,phone_number,setImage,
        Owner_CreateHospital,Owner_DeleteHospital,Owner_UpdateHospital,setHospitalAddress,setHospitalEmail,
        setHospitalName,setHospitalType,hospitals,doctors,Owner_CreateInspector,inspectors,profile,setBlood,mothers,
        setName,setComment,setImageEmb,setBabyStatus,setNextDate,setAttendence,
        Doctor_CreateMother,Doctor_DeleteMother,Doctor_GetAllMother,Doctor_UpdateMother,setIsPositive,
        Doctor_CreatePatient,Doctor_DeletePatient,Doctor_UpdatePatient,setMotherId,motherId,patient,
        setBirthDate,setBirthCertificate,setIllness,setHeight,setWeight,setIllnesDesc,Doctor_CreateChildren,baby,
        Doctor_DeleteChildren,Doctor_UpdateChildren,setStatus,setBabyId,Doctor_CreateVaccination,Doctor_DeleteVaccination,Doctor_UpdateVaccination,
        motherPatient,motherChildren,vaccination,navigate,allHospitals,setMessage,setHospitalId,Mother_CreateMessage,api,oneBaby,setOneBaby
        }}>
            {children}
        </Context.Provider>
    )
}
export {Context,ContextProvider}