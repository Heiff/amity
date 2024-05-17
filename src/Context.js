import axios from "axios";
import React,{createContext, useState} from "react";
import { useNavigate } from "react-router-dom";


const Context = createContext();

const ContextProvider = ({children})=>{
   const [number,setNumber] = useState();
   const [password,setPassword] = useState();
   const [lastname,setlastName] = useState();
   const [firstname,setfirstName] = useState();
   const [gender,setGender] = useState();
   const [notinonality,setNotinonality] = useState();
   const [JSHSHR,setJshshr] = useState();
   const [sertificate,setSertificate] = useState();
   const [date,setDate] = useState();
   const [email,setEmail] = useState();
   const [address,setAddress] = useState();
   const navigate = useNavigate();
   const url = "http://192.168.137.172:8080"
    const Login = async(e) => {
        e.preventDefault()
        try {
            await axios.post(`${url}/api/signin`,{phone_number:number,password},{withCredentials:true,headers:{
                
            }}).then((res) =>{
                if (res.status === 200) {
                    console.log(res);
                    localStorage.setItem("token",res.data.token);
                   
                }
                console.log(res);
            })
        } catch (error) {
            console.log(error);
        }
    }

    const Register = async(e) => {
        try {
            await axios.post(`${url}/api/owner/signup`,{phone_number:number,password,lastname,firstname,notinonality,JSHSHR,sertificate,
            date,email,address
            }).then((res) =>{
                if (res.status === 201) {
                    navigate("/login")
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
            setNumber,setPassword,Login,number,password,Register,
            setlastName,setfirstName,
        setEmail,setGender,gender,setNotinonality,setJshshr,setSertificate,
        setDate,setAddress,LogOut
        }}>
            {children}
        </Context.Provider>
    )
}
export {Context,ContextProvider}