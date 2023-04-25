import React from 'react';
import "./service.css";
import {BsTruck} from "react-icons/bs";
import {BsGift} from "react-icons/bs";
import {BsArrowClockwise} from "react-icons/bs";
import {BsSend} from "react-icons/bs";


const Service = () => {
  return (
    <div className='services'>
      <div className="service-item">
        <BsTruck className='icon'/>
        <b>Free Delivery</b>
      </div>
      <div className="service-item">
        <BsGift className='icon'/>
        <b>Gift Card</b>
      </div>
      <div className="service-item">
        <BsArrowClockwise className='icon'/>
        <b>7 days return</b>
      </div>
      <div className="service-item">
        <BsSend className='icon'/>
        <b>Contact us</b>
      </div>
    </div>
  )
}

export default Service;