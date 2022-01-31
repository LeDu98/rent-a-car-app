import React from 'react';
import Logo from '../assets/carLogo.png';
import {Link} from "react-router-dom";
import '../styles/Navbar.css';
import CarRentalIcon from '@material-ui/icons/DriveEta';

function Navbar({rent_num}) {
  //const rent_num=0;
  return <div className='navbar'>
<div className='leftside'>
    <img src={Logo}/>
    <div className='rent-items'>
      
      
    </div>
    
</div>
<div className='rightside'>
<Link to="/">Home</Link>
<Link to="/cars">Cars</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<CarRentalIcon/>
<div className='rent-num'>{rent_num}</div>


</div>
  </div>;
}

export default Navbar;
