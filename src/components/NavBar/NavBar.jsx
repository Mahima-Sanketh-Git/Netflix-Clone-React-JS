import React, { useEffect, useRef } from 'react';
import bell_icon from '../../assets/bell_icon.svg';
import caret_icon from '../../assets/caret_icon.svg';
import logo from '../../assets/logo.png';
import profile_img from '../../assets/profile_img.png';
import search_icon from '../../assets/search_icon.svg';
import { logout } from '../../firebase';
import "./NavBar.css";
const NavBar = () => {
  
  const navRef = useRef(null);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');

      }else{
        navRef.current.classList.remove('nav-dark');
      }
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
      <img src={logo} alt="NetFlix Logo"/>
      <ul>
        <li>Home</li>
        <li>Tv show</li>
        <li>Movies</li>
        <li>New & Populer</li>
        <li>My List</li>
        <li>Browse by Languaging</li>
      </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt="search icon" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="bell icon" className='icons'/>
        <div className="navbar-profile">
        <img src={profile_img} alt="profile icon" className='profile'  />
        <img src={caret_icon} alt="caret icon"  />
       <div className="dropdown">
        <p onClick={logout}>Sign out Netflix</p>
       </div> 
        </div>
       
      </div>
    </div>
  )
}

export default NavBar