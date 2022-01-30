import React from 'react';
import { CarsList } from '../helpers/carsList';
import CarItem from '../components/CarItem';
import '../styles/Cars.css';

function Cars() {
  return <div className='cars'>
      <h1 className='carsTitle'>Our Cars</h1>
      <div className='carsList'>
          {CarsList.map((carItem, key)=>{
              return (<CarItem key={key} image={carItem.image} name={carItem.name} price={carItem.price} year={carItem.year}/>);
          })}
      </div>
  </div>
}

export default Cars;
