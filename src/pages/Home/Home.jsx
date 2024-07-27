import React from 'react';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_caption from '../../assets/hero_title.png';
import info_icon from '../../assets/info_icon.png';
import play_icon from '../../assets/play_icon.png';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import TitleCard from '../../components/TitleCard/TitleCard';
import './Home.css';
const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_caption} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit ullam quos culpa, nemo neque nisi praesentium.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt=""  />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />Play</button>
          </div>
          <TitleCard title={"Popular on Netflix"} category={'popular'}/>

        </div>

      </div>
      <div className="more-card">
<TitleCard title={"Blockbuster Movies"} category={'top_rated'}/>
<TitleCard title={"only on Netflix"} category={'now_playing'}
/>
<TitleCard title={"Upcoming"} category={'upcoming'}/>
<TitleCard title={"Top pics for You"} category={'now_playing'}/>
</div>
<Footer/>
    </div>
  )
}

export default Home;
