import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import arrow_back_icon from '../../assets/back_arrow_icon.png';
import './Player.css';
const Player = () => {
  const {id} = useParams();
  const navigate =useNavigate();
  const [apiData,setApiData] = useState({
    name:'',
    key:'',
    published_at:'',
    type:'',
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmRkNjM3M2NiMGYzOTY1NzIyNmE3NGNkMTNkNGIzNSIsIm5iZiI6MTcyMjA3OTA5MC40ODAzNywic3ViIjoiNjZhNGQ1NThmMmY3NDY0NTk3MjI2NTAzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vXsf08ocXKqO6B0UQBnEA_Z9HCVMROyiWwlWq9TWIKM'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response =>setApiData(response.results[0]) )
    .catch(err => console.error(err));
  })
  
 
  return (
    <div className='player'>
      <img src={arrow_back_icon} alt="" onClick={()=>navigate(-2)} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title='video player' height='90%' width='90%' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player;