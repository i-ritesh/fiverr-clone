import React from "react";
import Slider from "infinite-react-carousel";
import SlideCard from "./SlideCard";
import { slideCardData } from "./data";
import './Slide.css'

function Slide() {
  return (
    <div className="slide">
      <div className="slide-container">
        <Slider slidesToShow={4} arrowsScroll={4}>
         {slideCardData.map(card=>(
            <SlideCard item={card} key={card.id}/>
         ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
