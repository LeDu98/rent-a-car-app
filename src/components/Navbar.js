import React from 'react';
import Logo from '../assets/carLogo.png';
import {Link} from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return <div className='navbar'>
<div className='leftside'>
    <img src={Logo}/>
</div>
<div className='rightside'>
<Link to="/">Home</Link>
<Link to="/cars">Cars</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>


</div>
  </div>;
}

export default Navbar;
