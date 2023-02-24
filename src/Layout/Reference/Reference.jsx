import React from "react";
import Reference_img1 from "../../assets/Images/Refernce_img1.jpg";
import Reference_img2 from "../../assets/Images/Refernce_img2.jpg";
import Reference_img3 from "../../assets/Images/Refernce_img3.jpg";
import "./Reference.scss";
const Reference = () => {
  return (
    <section className="Reference" id="Reference">
      <h2 className="Main-heading">Interior Plant Reference</h2>
      <p className="Main-paragraph">
        make your home so comfortable with refreshing plants
      </p>
      <div className="Reference-main">
        <div className="Reference-left">
          <img src={Reference_img3} alt="" />
          <img src={Reference_img2} alt="" />
        </div>
        <div className="Reference-right">
          <img src={Reference_img1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Reference;
