import React,{useEffect, useState,useContext} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../App';
const Contact = () => {
    const {state,dispatch} = useContext(UserContext);
    const history = useNavigate()
    const [data,setData] = useState({});
    const inputMessage =(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setData({...data,[name]:value});
    }
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
    
   const SendMessage =async(e)=>{
    try {
      e.preventDefault();
      const {name,phone,email,message} =data;
        await axios.post(`/contact`,{name,phone,email,message},
        {
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              'content-type':'application/json; charset=utf-8'
            }
              }).then((res)=>{
                if(res.status===201){
               toast.success("Send message successfully");
                }else{
                  toast.warn("Something went wrong")
                }
              })
          .catch((err)=>{
            if(err.response.status === 401){
              toast.warn("You have to login frist")
              history("/login")
            }else{
              // console.log(err)
            toast.error(err.response.data.message)
            }          
        });    
    } catch (error) {
      toast.warn("You have to login frist")
      history("/login")
      console.log(error);
    }
}
useEffect(()=>{
  UserVerify()
 },[])

  return (
    <>
    <div className='form_con'>
    <div className="form-title">
              <h4>Quick Message</h4>
            </div>
            <form className="form-body">
              <input onChange={inputMessage} name='name'  type="text" placeholder="Enter Name" className="form-control" />
              <input onChange={inputMessage} name='phone'  type="number" placeholder="Enter Mobile no" className="form-control" />
              <input onChange={inputMessage} name="email"  type="email" placeholder="Enter Email Address" className="form-control" />
              <input onChange={inputMessage} name='message' type="text" placeholder="Your Message" className="form-control" />
              <button onClick={SendMessage} className="btn btn-sm btn-primary w-100">Send Request</button>
            
            </form>
            </div>
            <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default Contact
