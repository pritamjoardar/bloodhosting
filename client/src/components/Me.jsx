import React from 'react'
import axios from 'axios'
import { useEffect, useState,useContext } from 'react'
import { UserContext } from '../App'
import { Link } from 'react-router-dom'
import Spiner from "./spiner"
import "./me.scss"
const MeData = ({Data})=>{
  return(
    <>
     <h4 >Name : <span  style={{color:"#d93444"}}>{Data.name}</span></h4>
              <h4>Gmail : <span style={{color:"#d93444"}}>{Data.Gmail}</span></h4>
              <h4>Phone No : <span style={{color:"#d93444"}}>{Data.Phone}</span></h4>
              <h4>Blood : <span style={{color:"#d93444"}}>{Data.Blood}</span></h4>
              <h4>Pin : <span style={{color:"#d93444"}}>{Data.Pin}</span></h4>
    </>
  )
}
const Me = () => {
    const [Data,setData] = useState({name:"",Gmail:"",Phone:"",Blood:"",Pin:"",mark:""});
    const {state,dispatch} = useContext(UserContext);
    const [spiner,setSpiner] = useState(false);
    //for verify
    const UserVerify=async ()=>{
      try {
        await axios.get(`/userVerify`,{
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'content-type':'application/json; charset=utf-8'
          }
         }).then((res)=>{
          if(res.status===201){
            dispatch({type:"USER",payload:"user"});
          }
         }).catch((err)=>{
          console.log(err);
         })
      } catch (error) {
        console.log(error)
      }
       
     }

    const callAboutPage =async ()=>{
        try {
          setSpiner(true);
          await axios.get(`/getUser`,{
            headers: {
              
              Accept:"appllication/json",
              'content-type':'application/json; charset=utf-8',
               },
               Credential :"include"
          }).then((res)=>{
            setSpiner(false);
                setData({...Data,name:res.data.name,Gmail:res.data.gmail,Phone:res.data.mobile,Pin:res.data.pin,Blood:res.data.blood,mark:res.data.mark});
              
          }).catch((err)=>{
            console.log(err);
          });
          
          
        } catch (error) {
          console.log(error);
          
        }
      }
      useEffect(()=>{
        UserVerify()
        callAboutPage();
      },[])
      console.log(Data.mark)
  return (
    <>
    <div className='form_con'>
    <div className="form-title">
              <h3>About Me{Data.mark==='doner'?<div className='button'></div>:<div></div>}</h3><Link to={"/me/update"}><button style={{color:"white"}}>Update Profile</button></Link>
            </div>
            <form className="form-body">
              {spiner?<Spiner/>:<MeData Data={Data}/>}
            </form>
            </div>
    </>
  )
}

export default Me
