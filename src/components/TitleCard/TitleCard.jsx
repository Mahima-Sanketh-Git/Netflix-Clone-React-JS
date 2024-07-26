import React, { useEffect, useRef } from 'react';
import card_data from '../../assets/cards/Cards_data';
import './TitleCard.css';
const TitleCard = ({title,category}) => {
  const cardRef = useRef();
  const wheelFunction = (event)=>{
event.preventDefault();
cardRef.current.scrollLeft += event.deltaY;

  }
 useEffect(()=>{
   cardRef.current.addEventListener('wheel',wheelFunction);
 });

  return (
    <div className='title-card'>
<h2>{title?title:'Popular on Netflix'}</h2>
  <div className="card-list">
    {
card_data.map((data,index)=>{
 return(
  <div className="card" ref={cardRef} key={index}>
   <img src={data.image} alt="" />
   <p>{data.name}</p>
  </div>
 )
})
    }
  </div>
    </div>
  )
}

export default TitleCard