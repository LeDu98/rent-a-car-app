import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/carsWallper.jpg";
import "../styles/Home.css";

function Home() {
  return <div className='home'> 
    <div className='headerContainer' style={{backgroundImage: `url(${BannerImage})`}}> 
      <h1>Rent-a-Car MP</h1>
      <p>We have car for everyone!</p>
      <Link to="/cars">
        <button>RENT NOW</button>
      </Link>
    </div>
  </div>;
}

export default Home;
