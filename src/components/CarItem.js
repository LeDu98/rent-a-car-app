import React from 'react';
import '../styles/Cars.css';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';


function CarItem(props) {
  function setAdd(propsName){
    var btn=document.getElementById(propsName);
    btn.style.display="none";
    var btn=document.getElementById(propsName+"1");
    btn.style.display="initial";
  }

  function setRemove(propsName){
    var btn=document.getElementById(propsName+"1");
    btn.style.display="none";
    var btn=document.getElementById(propsName);
    btn.style.display="initial";
  }

  
  return <div className='carsItem'>
      <div style={{backgroundImage: `url(${props.image})`}}></div>
    <h2>{props.name}</h2>
    <p>Year: {props.year}</p>
    <p>${props.price} per day</p>
    <button className='btn' id={props.name} onClick={()=>{props.onAdd(); setAdd(props.name);}} ><AddCircleIcon/></button>
    <button className='btn' style={{display:"none"}} id={props.name+"1"} onClick={()=>{props.onRemove(); setRemove(props.name);}} ><RemoveCircleOutline/></button>
  </div>;
}

export default CarItem;
