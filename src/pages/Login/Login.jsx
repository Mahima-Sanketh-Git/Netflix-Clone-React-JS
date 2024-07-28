import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import netflix_spin from "../../assets/netflix_spinner.gif";
import { login, signup } from '../../firebase';
import './Login.css';
const Login = () => {

  const [signState,setSignState] =useState('Sign In');
  const [name,setName,] = useState('');
  const [email,setEmail] =useState('');

  const [password,setPassword] = useState('');
  const [loading,setLoading] =useState(false);
  const signFunction =async (e)=>{
    setLoading(true);
    e.preventDefault();
    if(signState==="Sign In"){
    await login(email,password);
    }else{
    await signup(name,email,password);
    }
    setLoading(false);
  }
  return (
    loading? <div className="loading">
    <img src={netflix_spin} alt="" />

    </div>
    :
    <div className='login'>
      <img className='login-logo' src={logo} alt="" />
      <div className="login-form">
        <h2>{signState}</h2>
        <form>
        {signState==="Sign Up"? <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your Name' />:<></>}
         
          <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
          <input  value={[password]} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password'/>
<button onClick={signFunction} type='submit'>{signState}</button>
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
