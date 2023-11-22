import React from 'react'
import Dashboard from "../Dashboard/Dashboard"
import SideNav from "./SideNav"
import './admin.scss'
const Admin = () => {
  
  return (
    <>
  <SideNav comp={<Dashboard/>}/>
  
    </>
  )
}

export default Admin
