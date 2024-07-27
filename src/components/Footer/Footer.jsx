import React from 'react'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-icon">
      <img src={facebook_icon} alt="" />
      <img src={instagram_icon} alt="" />

      <img src={twitter_icon} alt="" />

      <img src={youtube_icon} alt="" />


    </div>

    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Card</li>
      <li>Media Center</li>
      <li>Investor Relation</li>
      <li>Jobs</li>
      <li>Term of Use</li>
      <li>Privacy</li>
      <li>Leagle Notice</li>
      <li>Coockies and Preferences</li>
      <li>Coperate information</li>
      <li>Contact Us</li>
    </ul>
    <p className="copy-right">@ 1997 -2024 Netflix,inc</p>
    </div>
  )
}

export default Footer