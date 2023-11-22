import axios from 'axios';
import React, { useState } from 'react'
import Select from "react-select"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const history = useNavigate()
    const [data,setData] = useState("");
    const [value,setValue] = useState(null);
    // const [Data,setdata] = useState([]);
    const options = [
      {value:"A+",label:"A+"},
      {value:"A-",label:"A-"},
      {value:"B+",label:"B+"},
      {value:"B-",label:"B-"},
      {value:"O+",label:"O+"},
      {value:"O-",label:"O-"},
      {value:"AB+",label:"AB+"},
      {value:"AB-",label:"AB-"},
    ]
    
    const postData =async (e)=>{
        e.preventDefault();
        try {
          e.preventDefault();
          const pin = data;
          const blood = value.value
          
        await axios.post(`/search`,{pin,blood},
        {
            headers: {
              
              Accept:"appllication/json",
              'content-type':'application/json; charset=utf-8',
            }
              }).then((res)=>{
                if(res.status===202){ 
                  let Data = res.data;                 
                  toast.success("Data Found")              
                  history("/userdata",{state:{Data}});   
                }
              }).catch((err)=>{
                if(err.response.status===404){
                  toast.error("Data Not Found");
                  history("/");
                }else if(err.response.status === 401){
                  toast.warn("you have to login frist");;
                  history("/login")
                }
        });    
        } catch (error) {
          // console.log(error)
        }
        
    }

  return (
    <>
          <Select className='select' defaultValue={value} onChange={setValue} options={options} noOptionsMessage={()=>"Invalid Blood Group"} styles={{
            dropdownIndicator:(baseStyles)=>({...baseStyles,color:"#d93444"})
            }}/>
          <input className='search' onChange={(e)=>setData(e.target.value)} placeholder='Enter pin no' type="number" name="pin" id="" />
          <div className='searchIcon' onClick={postData}>
          <span class="material-symbols-outlined">search
          </span>
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

export default Search
