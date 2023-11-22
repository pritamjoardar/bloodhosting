import axios from "axios"
import { useContext } from "react";
import { UserContext } from "../../App";

 const AdminVerify =async()=>{
  const {state,dispatch} = useContext(UserContext);
  await axios.get(`/admin`,{
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'content-type':'application/json; charset=utf-8'
    }
   }).then((res)=>{
    if(res.status ===200){
      dispatch({type:"USER",payload:"admin"});
    }   
   }).catch(async(err)=>{
   if(err.response.status===403){
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
    };
   };
   })
}

export default AdminVerify