import React from "react";
import Commerce from "../assets/commerce 1.svg";
import Tableau from "../assets/Tableau 1.svg";
import Servicecloud from "../assets/service-cloud 1.svg";
import datacloud from "../assets/data-cloud 2.svg";
import market from "../assets/market-cloud.png";
import experience from "../assets/ROI-Growth.svg";
import platform from "../assets/platform-5.svg";

const Platform = () => {
  return (
    <section>
      <div className="container cmn-container">
        <div className="platform-head">
          <h1 className="text-h2 plat-h">Our Platform Expertise</h1>
        </div>
        <div className="row pt-5">
          {/* First Row */}
          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img
                src={experience}
                alt="Salesforce Tableau"
                className="img-fluid"
              />
              <p className="platform-p pt-2">Salesforce Tableau</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img
                src={Servicecloud}
                alt="Experience Cloud"
                className="img-fluid"
              />
              <p className="platform-p pt-2">Experience Cloud</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img src={market} alt="CPQ" className="img-fluid" />
              <p className="platform-p pt-2">Marketting cloud </p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img src={Commerce} alt="Data Cloud" className="img-fluid" />
              <p className="platform-p pt-2">Commerce cloud</p>
            </div>
          </div>

          {/* Second Row */}
          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img src={Tableau} alt="Pardot" className="img-fluid" />
              <p className="platform-p pt-2">Pardot</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img src={platform} alt="FSL" className="img-fluid" />
              <p className="platform-p pt-2 px-2">FSL</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img src={Commerce} alt="Nonprofit" className="img-fluid" />
              <p className="platform-p pt-2">Nonprofit</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img src={datacloud} alt="Data Cloud" className="img-fluid" />
              <p className="platform-p pt-2">Data Cloud</p>
            </div>
          </div>
          {/*third row */}
          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img src={Servicecloud} alt="Pardot" className="img-fluid" />
              <p className="platform-p pt-2">Pardot</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4 ">
            <div className="platform-card">
              <img src={Servicecloud} alt="FSL" className="img-fluid" />
              <p className="platform-p px-3 pt-2">FSL</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="platform-card">
              <img src={Servicecloud} alt="Nonprofit" className="img-fluid" />
              <p className="platform-p pt-2">Nonprofit</p>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 mb-4 ">
            <div className="platform-card">
              <img src={datacloud} alt="Data Cloud" className="img-fluid" />
              <p className="platform-p pt-2">Data Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
