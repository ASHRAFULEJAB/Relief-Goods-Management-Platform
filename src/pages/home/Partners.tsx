import React from "react";
import unicefLogo from "../../assets/images/unicef.png";
import greenpeaceLogo from "../../assets/images/grece.png";
import oxfamLogo from "../../assets/images/ofx.png";
import healthPartnersLogo from "../../assets/images/health.png";
import redCrossLogo from "../../assets/images/redcross.png";
import "./Partners.css";

const Partners: React.FC = () => {
  return (
    <div className="partners my-5">
      <h2 className="text-sm uppercase">
        Fostering Unity and Collaboration with Our Dedicated Partners
      </h2>
      <div className="partnerslogos ">
        <div className="lg:flex justify-between w-full">
          {" "}
          <img src={unicefLogo} alt="UNICEF" />
          <img src={greenpeaceLogo} alt="Greenpeace" />
          <img src={oxfamLogo} alt="Oxfam" />
          <img src={healthPartnersLogo} alt="Health Partners" />
          <img src={redCrossLogo} alt="American Red Cross" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
