import "./slider.css";
import React,{useState} from 'react'
import Entrance from "../../images/entrance.jpg";
import Physics from "../../images/physics.jpg";
import Medical from "../../images/medical.jpg";
import {BsChevronDoubleLeft} from 'react-icons/bs';
import {BsChevronDoubleRight} from 'react-icons/bs';

const Slider = () => {
  const[slideIndex,setSlideIndex]=useState(0);

  const handleClick=(direction)=>{
    if(direction==="left"){
      setSlideIndex(slideIndex-1);
    }else{
      setSlideIndex(slideIndex+1);
    }
  }
  return (
    <div className="slider-component">
      {slideIndex!==0 && <BsChevronDoubleRight className="arrow-right" onClick={()=>{handleClick("left")}}/>}
      <div style={{transform:`translateX(${slideIndex*-100}vw)`}} className="slider-wrapper">
        {/* first one */}
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={Entrance} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">
              Book store
            </h1>
            <p className="slide-info-descp">
              One place for your needs
            </p>
          </div>
        </div>
        {/* second */}
        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={Physics} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">
              Engineer portol
            </h1>
            <p className="slide-info-descp">
              Change the world
            </p>
          </div>
        </div>
{/* third one */}

<div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={Medical} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">
              Health matters
            </h1>
            <p className="slide-info-descp">
              Shine every day
            </p>
          </div>
        </div>

      </div>
     {slideIndex!==2 &&  <BsChevronDoubleLeft className="arrow-left" onClick={()=>handleClick("right")}/>}
    </div>
  )
}

export default Slider