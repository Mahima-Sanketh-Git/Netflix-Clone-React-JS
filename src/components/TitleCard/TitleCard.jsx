import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './TitleCard.css';
const TitleCard = ({title,category}) => {
  const cardRef = useRef();
  const [apiData,setApiData] =useState([]); 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmRkNjM3M2NiMGYzOTY1NzIyNmE3NGNkMTNkNGIzNSIsIm5iZiI6MTcyMjA3OTA5MC40ODAzNywic3ViIjoiNjZhNGQ1NThmMmY3NDY0NTk3MjI2NTAzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vXsf08ocXKqO6B0UQBnEA_Z9HCVMROyiWwlWq9TWIKM'
    }
  };  

//   const wheelFunction = (event)=>{
// event.preventDefault();
// cardRef.current.scrollLeft += event.deltaY;

//   }
 useEffect(()=>{
  //  cardRef.current.addEventListener('wheel',wheelFunction);
     
  fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response =>setApiData(response.results))
  .catch(err => console.error(err));
 },[]);

  return (
    <div className='title-card'>
<h2>{title?title:'Popular on Netflix'}</h2>
  <div className="card-list">
    {
      apiData.map((data,index)=>{
 return(
  <Link to={`player/${data.id}`} className="card" ref={cardRef} key={index}>
   <img src={`https://image.tmdb.org/t/p/w500`+data.poster_path} alt="" />
   <p>{data.original_title}</p>
  </Link>
 )
})
    }
  </div>
    </div>
  )
}

export default TitleCard;