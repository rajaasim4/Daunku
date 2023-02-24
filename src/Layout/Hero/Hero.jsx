import React from "react";
import { HiOutlineSearch } from "react-icons/all";
import "./Hero.scss";

import NavBar from "../../Components/NavBar/NavBar";
const Hero = () => {
  return (
    <>
      <section className="Hero">
        <NavBar />
        <div className="Hero-section">
          <h1>
            Bring Serenity to Your Place <br />
            With Interior Plants
          </h1>
          <p>
            find your dream plant for you home decoration <br /> with us, and we
            will make it happen.
          </p>
          <div className="SearchPlant">
            <input type="text" placeholder="Search Plants" />
            <button>
              <HiOutlineSearch />
            </button>
          </div>
        </div>
        <div className="Blur-Effect"></div>
      </section>
    </>
  );
};
export default Hero;
