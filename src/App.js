import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Astra from "./assets/opelAstra.jpg";
import BmwX2 from "./assets/bmwX2.jpg";
import AudiA4 from "./assets/audia4.jpg";
import Scenic from "./assets/scenic.jpg";
import CLS350 from "./assets/mercedes.jpg";
import Golf7 from "./assets/golf.jpg";


import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
    //const rent_num=0;
    const[rent_num,setRentNum]=useState(0);
    const[rent_cars,setRentCars]=useState([]);
    
    const [cars, setCars] = useState(
      [
    {
      id: 1,
      name: "Opel Astra J",
      image: Astra,
      year: 2013,
      price: 50,
      rent: 0
  },
  {
      id: 2,
      name: "BMW X2 M",
      image: BmwX2,
      year: 2019,
      price: 140,
      rent: 0
  },
  {
      id: 3,
      name: "Audi A4",
      image: AudiA4,
      year: 2016,
      price: 120,
      rent: 0
  },
  {
      id: 4,
      name: "Renualt Scenic",
      image: Scenic,
      year: 2018,
      price: 80,
      rent: 0
  },
  {
      id: 5,
      name: "Mercedes Benz CLS 350",
      image: CLS350,
      year: 2018,
      price: 170,
      rent: 0
  },
  {
      id: 6,
      name: "Volkswagen Golf 7",
      image: Golf7,
      year: 2017,
      price: 85,
      rent: 0
  }
]);

function refreshRent(){
      let newCars= cars.filter((car)=>car.rent>0);
      setRentCars(newCars);
}

    function addCar(id){
        console.log("add Car");
        console.log(id);
        setRentNum(rent_num+1);
        cars.forEach((car)=>{
          if(car.id===id){
            car.rent=1;
            
          }
        });
        refreshRent();
        
    }
    function removeCar(id){
      console.log("remove Car");
      setRentNum(rent_num-1);
      cars.forEach((car)=>{
        if(car.id===id){
          car.rent=0;
        }
      });
      refreshRent();
    }

    


  return (
    <div className="App">
      <Router>
      <Navbar rent_num={rent_num}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars"  element={<Cars onAdd={addCar} onRemove={removeCar} carsList={cars}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact carsList={rent_cars}/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
