import React from 'react';
import {BsFillStarFill} from "react-icons/bs";
import {FaStarHalf} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai"

const Rating = ({rating,reviews}) => {
  return (
    <div className='rating'>
      {
        rating >= 1 ?<BsFillStarFill/>
        :rating>=0.5?<FaStarHalf/>
        :<AiOutlineStar/>
      }
       {
        rating >= 2 ?<BsFillStarFill/>
        :rating>=1.5?<FaStarHalf/>
        :<AiOutlineStar/>
      }
       {
        rating >= 3 ?<BsFillStarFill/>
        :rating>=2.5?<FaStarHalf/>
        :<AiOutlineStar/>
      }
       {
        rating >= 4 ?<BsFillStarFill/>
        :rating>=3.5?<FaStarHalf/>
        :<AiOutlineStar/>
      }
       {
        rating >= 5 ?<BsFillStarFill/>
        :rating>=4.5?<FaStarHalf/>
        :<AiOutlineStar/>
      }
      <div className="indicator">
      <span>Rating</span>
      <span>({reviews} reviews)</span>
      </div>
    </div>
  )
}

export default Rating;