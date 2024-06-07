import React from "react";
import './Featured.css'

function Featured() {
  return (
    <div className="fiverr-feature">
      <div className="fiverr-feature-container">
        <div className="left-feature">
          <h1>Find the right <em>freelance</em> <br /> service, right away</h1>
          <div className="fiverr-search">
            <div className="fiverr-search-input">
              <input type="text" placeholder="Search for any services..." />
            </div>
              <button>Search</button>
          </div>
          <div className="fiverr-popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right-feature">
            {/* <img src="./img/colin-2x-1.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Featured;
