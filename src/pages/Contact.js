import React from 'react';
import LeftCar from '../assets/leftCar.jpg';
import '../styles/Contact.css';
import CarItem from '../components/CarItem';

function Contact(props) {
  return <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${LeftCar})`}}>
        
      </div>
      <div className='rightSide'>
<div>
      <h1 className='carsTitle'>Selected Cars</h1>
      <div className='carsList'>
          {props.carsList.map((carItem, key)=>{
            
              return (<CarItem   key={key} image={carItem.image} name={carItem.name} price={carItem.price} year={carItem.year} onAdd={props.onAdd} onRemove={props.onRemove} rent={carItem.rent} isRent={"true"}/>);

            
          })}
      </div>
      </div>
            <h1>Contact us</h1>
            <form id="contact-form">
              
                <label htmlFor='name'>Full Name</label>
                <input name="name" placeholder='Enter full name...' type="text"/>

                <label htmlFor='email'>Email</label>
                <input name="email" placeholder='Enter email...' type="email"/>

                <label htmlFor='message'>Request</label>
                <textarea rows="6" placeholder='Enter message...' name='message' required></textarea>

                

                <button type="submit">Send Request</button>

           
            </form>
        </div>
  </div>;
}

export default Contact;
