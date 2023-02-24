import React from "react";
import "./SellerCard.scss";
const SellerCard = (props) => {
  return (
    <div className="SellerCard">
      <img src={props.imgsrc} alt="" />
      <div className="Seller-info">
        <h4>Plant</h4>
        <div className="Seller-info-bottom">
          <h4>$65.00</h4>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
