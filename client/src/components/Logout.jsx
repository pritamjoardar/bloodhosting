import axios from 'axios'
import React, { useEffect ,useContext} from 'react'
import { useNavigate} from 'react-router-dom'
import {UserContext} from "../App"

const Logout = () => {
    const {state,dispatch} = useContext(UserContext);

    const history = useNavigate();
    const Log = async()=>{
        await axios.get(`/logout`).then((res)=>{
            dispatch({type:"USER",payload:false});
            history("/login");
        }).catch((err)=>{
          console.log(err);
        })
    }
    useEffect(()=>{
        Log();
    })
  return (
    <> 
      <div>
      <p>Logout</p>
    </div>
    </>

  )
}

export default Logout