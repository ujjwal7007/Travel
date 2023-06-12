import React from "react";
import "./HeroStyle.css";
import { BiSearch } from "react-icons/bi";

import Video from "../../assets/maldivesVideo.mp4";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button>
              <BiSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
