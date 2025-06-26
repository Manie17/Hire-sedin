import React from "react";
import Heroimg from "../assets/Hero-img.svg";
const Hero = () => {
  return (
    <section>
      <div className="container container-hero">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-7">
            <div className="hero-head">
              <div className="hero-text">
                <h1 className="text-h1 pb-5">
                  Hire a Salesforce expert for your crucial projects
                </h1>
              </div>
            </div>
            <p className="text-p1 hero-p pb-5">
              We help solve your most complex business problems at every level
              using Salesforce multi-cloud solutions to significantly improve
              your business.
            </p>
             <div className="pb-4">
            <button className="btn-hero text-white">
              Hire Salesforce Experts
            </button>
            </div>
            <div className="hero-footer d-flex gap-3 pt-4">
              <p className="">Trusted By 550+ Clients</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="12px"
                fill="grey"
              >
                <path d="M480-480Zm0 280q-116 0-198-82t-82-198q0-116 82-198t198-82q116 0 198 82t82 198q0 116-82 198t-198 82Zm0-80q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z" />
              </svg>
              <p className="">50+ SENIOR SALESFORCE EXPERTS</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-5 text-center">
            {<img src={Heroimg} alt="hero-png" className="img-fluid" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
