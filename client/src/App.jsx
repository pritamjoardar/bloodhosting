
import './App.scss';
import React, { createContext, useReducer} from 'react'
import {initialState,reducer} from "./reducer/UseReducer.js"
import Login from "./components/Login"
import Body from "./components/Body"
import Nav from "./components/Nav"
import Register from "./components/Register"
import Me from "./components/Me"
import Logout from "./components/Logout"
import Contact from "./components/Contact"
import UserData from "./components/UserData"
import MeUpdate from './components/Meupdate';
import Admin from './components/Admin/Admin';
import Error from "./components/error"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AllUser from './components/All User/AllUser';
export const UserContext = createContext();

function App() {
  const [ state,dispatch] = useReducer(reducer,initialState);
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
    <Routes>      
      <Route path='/' element={<><Nav/><Body/></>}/>
      <Route path='/login' element={<><Nav/><Login/></>}/>
      <Route path='/signup' element={<><Nav/><Register/></>}/>
      <Route path='/logout' element={<><Nav/><Logout/></>}/>
      <Route path='/contact' element={<><Nav/><Contact/></>}/>
      <Route path='/Me' element={<><Nav/><Me/></>}/>
      <Route path='/userdata' element={<><Nav/><UserData/></>}/>
      <Route path='/me/update' element={<><Nav/><MeUpdate/></>}/>
      <Route path='/admin' element={<Admin/>}/> 
      <Route path='/alluser' element={<AllUser/>}/> 
      <Route path='*' element={<Error/>}/> 


    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
