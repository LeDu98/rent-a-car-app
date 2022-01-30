import React from 'react';
import LeftCar from '../assets/leftCar.jpg';
import '../styles/Contact.css';

function Contact() {
  return <div className='contact'>
      <div className='leftSide' style={{backgroundImage: `url(${LeftCar})`}}>
        
      </div>
      <div className='rightSide'>
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
