import React from "react";
import Logo1 from "../assets/logo-1.svg";
import Logo2 from "../assets/logo-2.svg";
import Logo4 from "../assets/logo_4.svg";
import Logo5 from "../assets/logo_5.svg";
import Logo6 from "../assets/logo_6.svg";

const Organisation = () => {
  return (
    <section className="logo-slider">
      <div className="container cmn-container">
        <h1 className="text-h2 mb-4">
          Leading organisations grow with Salesforce platforms globally
        </h1>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={Logo1} alt="logo-1" />
            </div>
            <div className="slide">
              <img src={Logo2} alt="logo-2" />
            </div> -9
            <div className="slide">
              <img src={Logo4} alt="logo-3" />
            </div>
            <div className="slide">
              <img src={Logo4} alt="logo-4" />
            </div>
            <div className="slide">
              <img src={Logo5} alt="logo-5" />
            </div>
            <div className="slide">
              <img src={Logo6} alt="logo-6" />
            </div>

            <div className="slide">
              <img src={Logo1} alt="logo-1" />
            </div>
            <div className="slide">
              <img src={Logo2} alt="logo-2" />
            </div>
            <div className="slide">
              <img src={Logo3} alt="logo-3" />
            </div>
            <div className="slide">
              <img src={Logo4} alt="logo-4" />
            </div>
            <div className="slide">
              <img src={Logo5} alt="logo-5" />
            </div>
            <div className="slide">
              <img src={Logo6} alt="logo-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organisation;
