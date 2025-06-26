import React from "react";

const Bussiness = () => {
  return (
    <section>
      <div className="container cmn-container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-h2 pt-3 pb-5">
              Lorem ipsum dolor sit amet (Business Intro)
            </h1>
            <p className="text-p1 bus-p pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              optio obcaecati dicta amet consequuntur quae fuga nisi molestiae
              labore eveniet! Voluptatem repellendus ea, omnis consectetur
              consequatur sit debitis dicta iure quo error tempora! Earum,
              aperiam.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row pt-5">
          <div className="col-lg-4 col-md-6 stats-divider">
           <p className="text-h2 mb-1 stats-num">30+</p>
            <div className="number"></div>
            <p className="text-p1 stats-p pt-4">
              Successfully delivered Salesforce projects
            </p>
          </div>

          <div className="col-lg-4 col-md-6 stats-divider">
            <p className="text-h2  mb-1 stats-num">40+</p>
            <div className="number"></div>
            <p className="text-p1 stats-p pt-4">
              world-class Salesforce, Tableau Consultants
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <p className="text-h2 stats-num mb-1 stats-num">50+</p>
            <div className="number"></div>
            <p className="text-p1 stats-p pt-4">Salesforce Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bussiness;
