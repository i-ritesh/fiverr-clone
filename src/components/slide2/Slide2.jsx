import React from "react";
import Slider from "infinite-react-carousel";
import SlideCard2 from "./SlideCard2";
import { slideCardData } from "./data";
import './Slide2.css'

function Slide2() {
  return (
    <div className="slide">
      <div className="slide-container">
        <Slider slidesToShow={1} arrowsScroll={1}>
         {slideCardData.map(card=>(
            <SlideCard2 item={card} key={card.id}/>
         ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slide2;
