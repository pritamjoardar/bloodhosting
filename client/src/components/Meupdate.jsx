import React from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState,useContext } from 'react'
import { UserContext } from '../App'
import { useNavigate } from 'react-router-dom'
const MeUpdate = () => {
  const history = useNavigate();
  const [Data,setData] = useState({name:"",Gmail:"",Phone:"",Blood:"",Pin:""});
  const [mark,setvalue] = useState("not doner");
  const [name,setName]  =useState();
    const [gmail,setGmail]  =useState();
    const [phone,setPhone]  =useState();
    const [blood,setBlood]  =useState();
    const [pin,setPin]  =useState();
    const [id,setId] = useState()
    const [ password,setPassword] = useState();
    const {state,dispatch} = useContext(UserContext);
    const redirect =()=>{
      history("/me")
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

    const callAboutPage =async ()=>{
        try {
          await axios.get(`/getUser`,{
            headers: {
              
              Accept:"appllication/json",
              'content-type':'application/json; charset=utf-8',
               },
               Credential :"include"
          }).then((res)=>{
                setId(res.data._id)
                setData({...Data,name:res.data.name,Gmail:res.data.gmail,Phone:res.data.mobile,Pin:res.data.pin,Blood:res.data.blood});
                setPassword(res.data.password)
                setName(res.data.name)
                setBlood(res.data.blood)
                setGmail(res.data.gmail)
                setPhone(res.data.mobile)
                setPin(res.data.pin)
                setvalue(res.data.mark)
          }).catch((err)=>{
            console.log(err);
          });
          
          
        } catch (error) {
          console.log(error);
          
        }
      }
      //for update data
      const UpdateData =async()=>{
        if(name.length===0 ||gmail.length===0 || phone.length===0 ||blood.length===0 || pin.length===0  || password.length===0){
          toast.warn("Undefined value")
        };
        try {
          await axios.put(`/me/update/${id}`,{name,gmail,mobile:phone,blood,pin,password,mark},{
            headers: {
              
              Accept:"appllication/json",
              'content-type':'application/json; charset=utf-8',
               },
               Credential :"include"
          }).then((res)=>{
            toast.success(res.data.message)
            history("/me")
          }).catch((err)=>{
            toast.error(err.data.message)
            
          });
          
          
        } catch (error) {
          console.log(error);

          
        }
      
      }
      const Mark =(e)=>{
        const Value = e.target.checked;
        if(Value){
          setvalue("doner")
        }else{
          setvalue("not doner")
        }
      }
      useEffect(()=>{
        UserVerify()
        callAboutPage();
      },[])
  return (
    <>
    <div className='form_con' style={{marginTop:"8%",width:"700px"}}>
    <div className="form-title">
              <h3>About Me</h3>
            </div>
            <form className="form-body">
              <h4 >Name : <span  style={{color:"#d93444"}}>
              <input value={name} type="text" onChange={(e)=>setName(e.target.value)} name="" id="" />
                
                </span></h4>
              <h4>Gmail : <span style={{color:"#d93444"}}>
              <input value={gmail} onChange={(e)=>setGmail(e.target.value)} type="email" name="" id="" />
                
                </span></h4>
              <h4>Phone No : <span style={{color:"#d93444"}}>
              <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" name="" id="" />
                
                </span></h4>
              <h4>Blood : <span style={{color:"#d93444"}}>
              <input value={blood} onChange={(e)=>setBlood(e.target.value)} type="text" name="" id="" />
                
                </span></h4>
              <h4>Pin : <span style={{color:"#d93444"}}>
              <input value={pin} onChange={(e)=>setPin(e.target.value)} type="number" name="" id="" />
                
                </span></h4>
                <h4 >Password : <span  style={{color:"#d93444"}}>
              <input value={password} type="text" onChange={(e)=>setPassword(e.target.value)} name="" id="" />
                </span></h4>
                <h4 >Mark as a doner : <span  style={{color:"#d93444"}}>
                <label className="switch">
                  <input checked={mark==="doner"?true:false} type="checkbox" onChange={Mark}/>
                  <span className="slider round"></span>
                  </label>
                </span></h4>
            </form>
            <button onClick={redirect}>Cancel</button><button onClick={UpdateData} style={{marginLeft:"10px"}}>Update</button>
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

export default MeUpdate
