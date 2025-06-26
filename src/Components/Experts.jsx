import React from "react";
import step1 from "../assets/step-1.png";
import step2 from "../assets/step-2.png";
import step3 from "../assets/step-3.png";
import step4 from "../assets/step-4.png";

const Experts = () => {
  return (
    <section className="expert-container">
      <div className="container cmn-container">
        <div className="row">
          <h1 className="text-h2 expert-h text-white">
            Find your next Salesforce Experts
          </h1>
        </div>

        <div className="expert-body">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-3 col-md-12 pt-5">
              <h1 className="expert-t text-white pt-2">Custom Screening</h1>
              <p className="expert-p pb-5">
                We find the best people and pricing that is best for your
                project.
              </p>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3 col-md-12 pt-5">
              <h1 className="expert-t text-white pt-2">Custom Screening</h1>
              <p className="expert-p pb-5">
                We find the best people and pricing that is best for your
                project.
              </p>
            </div>
          </div>
        </div>

        <div className="position-relative py-5">
          {/* Horizontal Line Behind Icons */}
          <div
            id="line"
            className="position-absolute w-100 top-50 start-0 translate-middle-y"
          >
            <hr className="w-75 mx-auto border-2 border- border-white opacity-50" />
          </div>

          {/* Step Circles */}
          <div className="row pt-5 justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="progress-circle progress-20 ">
                <img src={step1} alt="step1" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="progress-circle progress-20">
                <img src={step2} alt="step2" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="progress-circle progress-20">
                <img src={step3} alt="step3" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
              <div className="progress-circle progress-20">
                <img src={step4} alt="step4" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="expert-body pt-5">
          <div className="row">
            <div className="col-lg-3 col-md-12 text-lg-start">
              <h1 className="expert-t text-white pt-5">Quick Analysis</h1>
              <p className="expert-p">
                We find the best people and pricing that is best for your
                project.
              </p>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3 col-md-12 text-lg-start">
              <h1 className="expert-t text-white pt-5">Custom Screening</h1>
              <p className="expert-p">
                We find the best people and pricing that is best for your
                project.
              </p>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
