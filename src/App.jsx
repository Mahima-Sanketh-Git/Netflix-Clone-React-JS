import { onAuthStateChanged } from 'firebase/auth/cordova';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
if(user){
console.log("Loged In")
navigate('/')

}else{
  console.log("Loged out")
  navigate('/login')
}
    })
  },[])
  return (
    <div>
    <ToastContainer theme='dark'/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/player/:id' element ={<Player/>}/>
    </Routes>
    </div>
  )
}

export default App