import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [changeNav, setChangeNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setChangeNav(true);
      } else {
        setChangeNav(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setChangeNav(true);
        } else {
          setChangeNav(false);
        }
      });
    };
  }, []);

  return (
    <div className={changeNav ? "navbar change-navbar" : "navbar"}>
      <div className="container">
        <div className="fiverr-logo">
          {/* <Link to="/"> */}
          <span className="fiverr-logo-text">fiverr</span>
          {/* </Link> */}
          <span className="fiverr-logo-dot">.</span>
        </div>
        <div className="fiverr-links">
          <span>Fiverr Pro</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a Seller</span>
          <span>Sign In</span>
          <button style={{backgroundColor:"#1dbf73", border:"1px solid #1dbf73"}} >Join</button>
        </div>
      </div>
      <hr />
      {changeNav && (
        <>
          <div className="nav-menu-items">
            <span>Graphics & Design</span>
            <span>Programming & Tech</span>
            <span>Digital Marketing</span>
            <span>Video & Animation</span>
            <span>Writing & Translation</span>
            <span>Music & Audio</span>
            <span>Business</span>
            <span>Consulting</span>
            <span>Data</span>
            <span>AI Service</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
