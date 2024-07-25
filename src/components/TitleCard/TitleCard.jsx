import React from 'react';
import card_data from '../../assets/cards/Cards_data';
import './TitleCard.css';
const TitleCard = () => {
  return (
    <div className='titlecard'>
<h2>Popular on Netflix</h2>
  <div className="card-list">
    {
card_data.map((data,index)=>{
 return(
  <div className="card" key={index}>
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