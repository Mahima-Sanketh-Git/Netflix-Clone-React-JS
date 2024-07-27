import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Login.css';
const Login = () => {
  const [signState,setSignState] =useState('Sign In');
  return (
    <div className='login'>
      <img className='login-logo' src={logo} alt="" />
      <div className="login-form">
        <h2>{signState}</h2>
        <form>
        {signState==="Sign Up"? <input type="text" placeholder='Your Name' />:<></>}
         
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password'/>
<button>{signState}</button>
<div className="form-help">
  <div className="remember">
    <input type="checkbox" />
    <label htmlFor="">Remember me</label>
  </div>
  <p>Need Help?</p>
</div>
        </form>
        
        <div className="from-switch">
        {
          signState==="Sign Up"? <p>Already have Account <span onClick={()=>{
            setSignState("Sign In")
          }}>Sign In Now</span></p>:<p>New to Netflix <span onClick={()=>{setSignState("Sign Up")}} >Sign Up Now</span></p>
        }
          
        </div>
      </div>
    </div>
  )
}

export default Login
