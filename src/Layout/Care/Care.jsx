import React from "react";
import Care_img from "../../assets/Images/Care.jpg";
import Fertilizer from "../../assets/Images/Fertilizer.svg";
import Plant from "../../assets/Images/Plant.svg";
import Sun from "../../assets/Images/Sun.svg";
import Water from "../../assets/Images/Water.svg";
import "./Care.scss";
const Care = () => {
  return (
    <section className="Care">
      <h2 className="Main-heading">How to care for plants</h2>
      <p className="Main-paragraph">Take care of plants with all your heart</p>
      <div className="Care-mainsection">
        <div className="Care-left">
          <CareItem
            imgsrc={Sun}
            title={"Adjust Lightning"}
            description={
              "When caring for indoor plants, make sure the room temperature is neither too cold nor too hot"
            }
          />
          <CareItem
            imgsrc={Water}
            title={"Adjust Lightning"}
            description={
              "When caring for indoor plants, make sure the room temperature is neither too cold nor too hot"
            }
          />
          <CareItem
            imgsrc={Plant}
            title={"Adjust Lightning"}
            description={
              "When caring for indoor plants, make sure the room temperature is neither too cold nor too hot"
            }
          />
          <CareItem
            imgsrc={Fertilizer}
            title={"Adjust Lightning"}
            description={
              "When caring for indoor plants, make sure the room temperature is neither too cold nor too hot"
            }
          />
        </div>
        <div className="Care-right">
          <img src={Care_img} alt="" />
        </div>
      </div>
    </section>
  );
};
const CareItem = (props) => {
  return (
    <>
      <div className="Care-left-item">
        <div className="Care-left-icon">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="Care-left-text">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Care;
