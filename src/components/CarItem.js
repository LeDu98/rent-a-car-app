import React from 'react';
import '../styles/Cars.css';

function CarItem(props) {
  return <div className='carsItem'>
      <div style={{backgroundImage: `url(${props.image})`}}></div>
    <h2>{props.name}</h2>
    <p>Year: {props.year}</p>
    <p>${props.price} per day</p>


  </div>;
}

export default CarItem;
