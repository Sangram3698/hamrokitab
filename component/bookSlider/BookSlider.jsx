import React, { useState } from 'react';
import "./bookslider.css";
import {FaChevronLeft} from "react-icons/fa";
import {FaChevronRight} from "react-icons/fa";
import {BsFillEyeFill} from "react-icons/bs";
import {BsCartPlusFill} from "react-icons/bs";
import Rating from './Rating';

const BookSlider = ({data}) => {
 const[slideIndex,setSlideIndex]= useState(0);

 const handleClick=(direction)=>{
  if(direction==="left"){
    setSlideIndex(slideIndex-1);
  }else{
    setSlideIndex(slideIndex+1);
  }
 }
  return (
    <div className='book-slider-container'>
       {slideIndex>=1 && <FaChevronLeft className='arrow-left' onClick={()=>handleClick("left")}/>}
       <div style={{transform:`translateX(${slideIndex*-340}px)`}} className="book-slider-wrapp">
        {data.map(item=><div key={item.id} className='book-slide-item'>
          <img src={`/books/physics.jpg`} alt={item.title} className='book-slide-item-image'/>
          <h className="book-slide-item-title">
            {item.title}
          </h>
          <Rating rating={item.rating} reviews={item.reviews}/>
          <div className="book-slide-item-price">
            Rs{item.price}
          </div>
          <div className="book-slider-icons-wrapper">
            <BsFillEyeFill className='wrap'/>
            <BsCartPlusFill className='wrap'/>
          </div>
        </div>)}
       </div>
       {slideIndex <= data.length-5 && <FaChevronRight className='arrow-right' onClick={()=>handleClick("right")}/>}
    </div>
  )
}

export default BookSlider; 