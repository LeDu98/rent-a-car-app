import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    //const rent_num=0;
    const[rent_num,setRentNum]=useState(0);
    
    function addCar(){
        console.log("add Car");
        setRentNum(rent_num+1);
    }
    function removeCar(){
      console.log("remove Car");
      setRentNum(rent_num-1);
    }
  return (
    <div className="App">
      <Router>
      <Navbar rent_num={rent_num}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cars" element={<Cars onAdd={addCar} onRemove={removeCar}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
