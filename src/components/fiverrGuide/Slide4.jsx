import React from "react";
import Slider from "infinite-react-carousel";
import { slideCardData } from "./data";
import './Slide4.css'
import FiverGuide from "./FiverrGuide";

function Slide3() {
  return (
    <div className="slide">
      <div className="slide-container">
        <h1>Guides to help you grow</h1> <br />
        <Slider slidesToShow={3} arrowsScroll={1}>
         {slideCardData.map(card=>(
            <FiverGuide item={card} key={card.id}/>
         ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slide3;
