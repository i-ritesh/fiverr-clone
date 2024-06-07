import React from "react";
import Slider from "infinite-react-carousel";
import { slideCardData } from "./data";
import './Slide3.css'
import FiverrInspire from "./FiverrInspire";

function Slide3() {
  return (
    <div className="slide">
      <div className="slide-container">
        <h1>Inspiring work made on Fiverr</h1> <br />
        <Slider slidesToShow={4} arrowsScroll={4}>
         {slideCardData.map(card=>(
            <FiverrInspire item={card} key={card.id}/>
         ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slide3;
