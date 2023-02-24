import React from "react";
import { MdOutlineLocalShipping } from "react-icons/all";
import Shipping from "../../assets/Images/Shipping.svg";
import Support from "../../assets/Images/Support.svg";
import Wallet from "../../assets/Images/Wallet.svg";
import "./Service.scss";
const Service = () => {
  return (
    <section className="Service">
      <ServiceSection
        imgsrc={Shipping}
        title={"FreeShipping"}
        description={"`No Charge of Delivery"}
      />
      <ServiceSection
        imgsrc={Wallet}
        title={"Quick Payment"}
        description={"100% Secure Payment"}
      />
      <ServiceSection
        imgsrc={Support}
        title={"24/7 Support"}
        description={"Quick Support"}
      />
    </section>
  );
};

const ServiceSection = (props) => {
  return (
    <div className="Service-section">
      <div className="Service-icon">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="Service-text">
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Service;
