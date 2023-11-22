import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const history = useNavigate()
    const [data,setData] = useState({});
    const inputData =(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setData({...data,[name]:value});
    }
  
   const sendReg =async(e)=>{
    try {
      e.preventDefault();
      const {name,gmail,mobile,blood,pin,password,cpassword} =data;
      
        await axios.post(`/register`,{name,gmail,mobile,blood,pin,password,cpassword},
        {
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              'content-type':'application/json; charset=utf-8',
            }
              }).then((res)=>{
                if(res.status===201){
                   toast.success("Register Successfully");
                   history("/login")
                }else{
                  // console.log(`res is ${res}`);
                  window.alert("Something wrong")
                }
              })
          .catch((err)=>{
          // console.log(err);
          // console.log(err.response.data.message);
          toast.error(err.response.data.message)
        });
      
        
    } catch (error) {
      console.log(error);
    }
  
   }
  return (
    <>
     <div className="login">
        <form >
            <input  className="form-control" onChange={inputData} placeholder='Enter your Name..' type="text" name="name" id="" />        
            <input  className="form-control" onChange={inputData} placeholder='Enter your gmail..' type="email" name="gmail" id="" />          
            <input  className="form-control" onChange={inputData} placeholder='Enter your phone no..' type="number" name="mobile" id="" />
            <input  className="form-control" onChange={inputData} placeholder='A+, A-, B+ , B-,O+, O-, AB+, AB-'  type="text" name="blood" id="" />          
            <input  className="form-control" onChange={inputData} placeholder='Enter your pin no' type="number" name="pin" id="" />        
            <input  className="form-control" onChange={inputData} placeholder='Enter your password' type="password" name="password" id="" />            
            <input  className="form-control" onChange={inputData} placeholder='Enter your cpassword..' type="password" name="cpassword" id="" />
            <button className="btn btn-sm btn-primary w-100" onClick={sendReg}>SignUp</button>
            <div>
            <p>or</p>
            <Link to={'/login'} >Login</Link>
            </div>
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

export default Register
