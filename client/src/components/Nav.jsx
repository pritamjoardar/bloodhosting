import React,{useContext, useState} from 'react'
import logo from "./logo.jpg"
import { Link ,NavLink} from 'react-router-dom';
import Search from "./Search"
import { UserContext } from '../App';
import User from "./User"
import './nav.scss'
import { CgMenu,CgCloseO } from "react-icons/cg";
const Nav = () => {
  const {state,dispatch} = useContext(UserContext);
  const [isMobile,setMobile] = useState(false);

 if(state==='user'){
  return (
    <>
    <div id="menu-jk" className="header-bottom">
      <div className="header" >
        <section>
          <img src={logo} alt="" />
        </section>
          <nav >
          <Search/>
        </nav>
          <section className='default' onClick={()=>setMobile(false)} style={{display:isMobile?"flex":" "}}>
          <CgCloseO  className='cgclose'  style={{marginLeft:"40px",fontSize:"25px"}}/>
          <NavLink to="/">Home</NavLink>
          <a href={'/#about'}>About Us</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#process">Process</a>
          <NavLink to="/contact">contact Us</NavLink>
          <User/>
          <NavLink to="/logout"><button>Logout</button></NavLink>          
          {/* <a href=""><button>SignIn</button></a> */}
         
        </section>
        <CgMenu onClick={()=>setMobile(true)} className='cgmenu' style={{fontSize:"50px",color:"#d93444"}}/>
      </div>
    </div>
    </>
  )
 }else if(state==='admin'){
    return (
      <>
      <div id="menu-jk" className="header-bottom">
        <div className="header" >
          <section>
            <img src={logo} alt="" />
          </section>
            <nav >
            <Search/>
          </nav>
          <section onClick={()=>setMobile(false)} className='default' style={{display:isMobile?"flex":" "}}>
          <CgCloseO  className='cgclose'  style={{marginLeft:"40px",fontSize:"25px"}}/>
            <NavLink to="/">Home</NavLink>
            <a href={'/#about'}>About Us</a>
            <a href="/#gallery">Gallery</a>
            <a href="/#process">Process</a>
            <NavLink to="/contact">contact Us</NavLink>
            <NavLink to={'/admin'}>Admin</NavLink>
            <div>
            </div>
            <User/>
            <Link to="/logout"><button>Logout</button></Link>          
            {/* <a href=""><button>SignIn</button></a> */}
          </section>
          <CgMenu onClick={()=>setMobile(true)} className='cgmenu' style={{fontSize:"50px",color:"#d93444"}}/>
        </div>
      </div>
      </>
    )
   }
 else{
  return (
    <>
    <div id="menu-jk" className="header-bottom">
      <div className="header">
        <section>
          <img src={logo} alt="" />
        </section>
          <nav >
          <Search/>
        </nav>
        <section onClick={()=>setMobile(false)} className='default' style={{display:isMobile?"flex":" "}}>
          <CgCloseO className='cgclose'  style={{marginLeft:"40px",fontSize:"25px"}}/>
          <NavLink to="/">Home</NavLink>
          <a href={'/#about'}>About Us</a>
          <a href="/#gallery">Gallery</a>
          <a href="/#process">Process</a>
          <NavLink to="contact">contact Us</NavLink>
          <NavLink to="/login"><button>Login</button></NavLink>
          <NavLink to="/signup"><button>SignUp</button></NavLink>
        </section>
        <CgMenu onClick={()=>setMobile(true)} className='cgmenu' style={{fontSize:"50px",color:"#d93444"}}/>
      </div>
    </div>
    </>
  )
 }
  
}

export default Nav
