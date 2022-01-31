import React from 'react';

import CarItem from '../components/CarItem';
import '../styles/Cars.css';



function Cars(props) {
    
  return <div className='cars'>
      <h1 className='carsTitle'>Our Cars</h1>
      <div className='carsList' style={{display: "grid"}}>
          {props.carsList.map((carItem, key)=>{
              return (<CarItem   key={key} image={carItem.image} name={carItem.name} price={carItem.price} year={carItem.year} onAdd={props.onAdd} onRemove={props.onRemove} rent={carItem.rent} id={carItem.id} isRent={"false"}/>);
          })}
      </div>
  </div>
}

export default Cars;
