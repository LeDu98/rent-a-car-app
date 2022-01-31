import React from 'react';
import '../styles/Cars.css';
import AddCircleIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import { useState } from 'react';


function CarItem(props) {

  const[stateAdd,setStateAdd]=useState("initial");
  const[stateRemove,setStateRemove]=useState("none");
  
  function setAdd(propsId){
    
    var btn=document.getElementById(propsId);
    btn.style.display=setStateAdd("none");
    var btn=document.getElementById(propsId+"REMOVE");
    btn.style.display=setStateRemove("initial");
  }

  function setRemove(propsId){
    var btn=document.getElementById(propsId+"REMOVE");
    btn.style.display=setStateRemove("none");
    var btn=document.getElementById(propsId);
    btn.style.display=setStateAdd("initial");
  }

  if(props.isRent==="false"){
    if(props.rent===0){
      return <div className='carsItem'>
      <div style={{backgroundImage: `url(${props.image})`}}></div>
    <h2>{props.name}</h2>
    <p>Year: {props.year}</p>
    <p>${props.price} per day</p>
    
      <button className='btn' style={{display:stateAdd}} id={props.name} onClick={()=>{props.onAdd(props.id); setAdd(props.id);}} ><AddCircleIcon/></button>
      <button className='btn' style={{display:stateRemove}} id={props.id+"REMOVE"} onClick={()=>{props.onRemove(props.id); setRemove(props.id);}} ><RemoveCircleOutline/></button>
     
  </div>;
    }else{
      return <div className='carsItem'>
      <div style={{backgroundImage: `url(${props.image})`}}></div>
    <h2>{props.name}</h2>
    <p>Year: {props.year}</p>
    <p>${props.price} per day</p>
    
      <button className='btn' style={{display:"none"}} id={props.name} onClick={()=>{props.onAdd(props.id); setAdd(props.name,props.id);}} ><AddCircleIcon/></button>
      <button className='btn' style={{display:"initial"}} id={props.name+"1"} onClick={()=>{props.onRemove(props.id); setRemove(props.name);}} ><RemoveCircleOutline/></button>
     
  </div>;
    }
    
  }else{
    return <div className='carsItem'>
      <div style={{backgroundImage: `url(${props.image})`}}></div>
    <h2>{props.name}</h2>
    <p>Year: {props.year}</p>
    <p>${props.price} per day</p>
    
      
     
  </div>;
  }
  
}

export default CarItem;
