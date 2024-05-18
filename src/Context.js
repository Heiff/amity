import axios from "axios";
import React,{createContext, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const Context = createContext();

const ContextProvider = ({children})=>{
   const [phone_number,setNumber] = useState();
   const [password,setPassword] = useState();
   const [full_name,setFullName] = useState();
   const [gender,setGender] = useState();
   const [nationality,setNotionality] = useState();
   const [JSHSHR,setJshshr] = useState();
   const [sertificate,setSertificate] = useState();
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
   const [is_positive,setIsPositive] = useState();
   const [hospitals,setHospitals] = useState([]);
   const [doctors,setDoctors] = useState([]);
   const [inspectors,setInspectors] = useState([]);
   const [profile,setProfile] = useState([]);
   const [mothers,setMothers] = useState([]);
   const [comment,setComment] = useState();
   const [img_emb,setImageEmb] = useState(null)
   const [babyStatus,setBabyStatus] = useState();
   const [nextDate,setNextDate] = useState();
   
   const navigate = useNavigate();
   const api = "http://localhost:8080"
   const token = localStorage.getItem("token");
   
  

  


    console.log(hospitals);
    const Login = async(e) => {
        e.preventDefault()
        try {
            await axios.post(`${api}/api/signin`,{phone_number,password},{headers:{
                "Access-Control-Allow-Origin": "*"
            }}).then((res) =>{
                if (res.status === 200) {
                    localStorage.setItem("token",res.data.token);
                    navigate(`/${res.data.message}`)
                   
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
      Owner_GetAllDoctor()
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
                console.log(res.data);
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
            await axios.get(`${api}/api/inspectors`,{headers:{token}}).then((res) => {
                console.log(res);
                setInspectors(res.data)
            })
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
                setMothers(res.data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //   Owner_GetAllMother()
    // }, [])
    
   

    const Doctor_CreateMother = async(e) =>{
        e.preventDefault();
            try {
                await axios.post(`${api}/api/mother`,{full_name,blood_group,is_positive,phone_number,password,email},{headers:{token}}).then((res) => {
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
            await axios.put(`${api}/api/mother/${id}`,{full_name,blood_group,is_positive,phone_number,password,email},{headers:{token}}).then((res) =>{
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
        Doctor_CreateMother,Doctor_DeleteMother,Doctor_GetAllMother,Doctor_UpdateMother
        }}>
            {children}
        </Context.Provider>
    )
}
export {Context,ContextProvider}