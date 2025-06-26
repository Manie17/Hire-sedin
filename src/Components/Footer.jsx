import React from "react";
import sedcloud from "../assets/SedcloudCrm.svg";
import clutchsaleforce from "../assets/salesforce-clutch-1.svg";
import linkedinlogo from "../assets/linkedin_logo.svg";
import partner1 from "../assets/PARTNER-1.SVG";
import partner2 from "../assets/partner-2.svg";
import partner3 from "../assets/partner-3.svg";

const Footer = () => {
  return (
    <div>
      <section class="revamped-footer  bg-[var(--Grays-Black, #18181A)]">
        <footer class="footer text-light">
          <div class="container">
            <div class="row footer-grid">
              {/* <!-- Left Section (Logo & Ratings) --> */}
              <div class="col-lg-3 col-md-6">
                {<img src={sedcloud} alt="sed-cloud" className="pb-4" />}
                {
                  <img
                    src={clutchsaleforce}
                    alt="sed-cloud"
                    className="pb-3 pt-2"
                  />
                }
                <div class="d-flex gap-3 pt-3">
                  {<img src={partner1} />}
                  {<img src={partner2} />}
                  {<img src={partner3} />}
                </div>
                <p class="pt-4">{<img src={linkedinlogo}></img>}</p>
              </div>

              {/* <!-- About --> */}
              <div class="col-lg-2 col-md-6 mb-4">
                <h5 class="r-footer-h5">About</h5>
                <ul class="list-unstyled">   
                  <li className="pb-3 footer-p">
                    <a
                      href="#"
                      className="revamped-footer-link text-decoration-none text-secondary pt-5"
                    >
                      Our Company
                    </a>
                  </li>
                  <li className="pb-3 footer-p">
                    <a
                      href="#"
                      className="revamped-footer-link text-decoration-none text-secondary"
                    >
                      Blogs
                    </a>
                  </li>
                  <li className="pb-3 footer-p">
                    <a
                      href="#"
                      className="revamped-footer-link text-decoration-none text-secondary"
                    >
                      Case Studies
                    </a>
                  </li>
                  <li className="pb-3 footer-p">
                    <a
                      href="#"
                      className="revamped-footer-link text-decoration-none text-secondary"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Services --> */}
              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="r-footer-h5">Services</h5>
                <ul class="list-unstyled">
                  <li className="pb-3 footer-p">
                    <a
                      target="_parent"
                      href="/services/salesforce-consulting-services.html"
                      className="revamped-footer-link text-decoration-none text-secondary"
                    >
                      Consulting
                    </a>
                  </li>
                  <li className="pb-3 footer-p">
                    <a
                      target="_parent"
                      href="/services/salesforce-implementation-services.html"
                      className="revamped-footer-link text-decoration-none text-secondary"
                    >
                      Salesforce Implementation
                    </a>
                  </li>
                  <li className="pb-3 footer-p">
                    <a
                      target="_parent"
                      href="/services/custom-salesforce-development-services.html"
                      class="revamped-footer-link text-decoration-none text-secondary"
                    >
                      Development & Customization
                    </a>
                  </li>
                  <li className="pb-3 footer-p">
                    <a
                      target="_parent"
                      href="/services/salesforce-support-and-maintenance-services.html"
                      class="revamped-footer-link text-decoration-none text-secondary"
                    >
                      Admin Support & Maintenance
                    </a>
                  </li>
                  <li className="pb-3 footer-p">
                    <a
                      target="_parent"
                      href="/services/salesforce-data-migration-services.html"
                      class="revamped-footer-link text-decoration-none text-secondary"
                    >
                      Lightning Migration
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <h5 class="r-footer-h5">Platform</h5>
                <div class="row">
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list-unstyled">
                      <li className="pb-3 footer-p">
                        <a
                          target="_parent"
                          href="/platform/salesforce-sales-cloud.html"
                          className="revamped-footer-link text-decoration-none text-secondary pb-3 "
                        >
                          Sales Cloud
                        </a>
                      </li>
                      <li className="pb-3 footer-p">
                        <a
                          target="_parent"
                          href="/platform/salesforce-service-cloud.html"
                          class="revamped-footer-link text-decoration-none text-secondary"
                        >
                          Services Cloud
                        </a>
                      </li>
                      <li className="pb-3 footer-p">
                        <a
                          target="_parent"
                          href="/platform/salesforce-marketing-cloud.html"
                          class="revamped-footer-link text-decoration-none text-secondary"
                        >
                          Marketing Cloud
                        </a>
                      </li>
                      <li className="pb-3 footer-p">
                        <a
                          target="_parent"
                          href="/platform/salesforce-pardot-cloud.html"
                          class="revamped-footer-link text-decoration-none text-secondary"
                        >
                          Pardot
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <ul class="list-unstyled pb-5">
                      <li className="pb-3 footer-p">
                        <a
                          target="_parent"
                          href="/platform/salesforce-financial-service-cloud.html"
                          class="revamped-footer-link text-decoration-none text-secondary"
                        >
                          Finance Cloud
                        </a>
                      </li>
                      <li className="pb-3 footer-p">
                        <a
                          target="_parent"
                          href="/platform/salesforce-pardot-cloud.html"
                          class="revamped-footer-link text-decoration-none text-secondary"
                        >
                          Data Cloud
                        </a>
                      </li>
                      <li className="pb-3 footer-p">
                        <a
                          target="_parent"
                          href="/platform/salesforce-pardot-cloud.html"
                          class="revamped-footer-link text-decoration-none text-secondary"
                        >
                          Commerce Cloud
                        </a>
                      </li>
                      <li className="pb-3 footer-p">
                        <a
                          target="_parent"
                          href="/platform/salesforce-pardot-cloud.html"
                          class="revamped-footer-link text-decoration-none text-secondary"
                        >
                          Integration Cloud
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Bottom Footer  */}
            <div className="footer">
              <hr class="border-light" />
              <div class="d-flex justify-content-between align-items-center flex-wrap r-footer-grid">
                <p class="r-footer-p1">
                  ©
                  <script type="text/javascript">
                    var year = new Date(); document.write(year.getFullYear());
                  </script>
                  <a
                    class="footer-web text-decoration-none text-white"
                    href="https://sedintechnologies.com/"
                  >
                    Sedin Technologies Inc
                  </a>
                </p>
                <p class="r-footer-p1">
                  <a href="#" class="text-light text-decoration-none">
                    Terms & Conditions
                  </a>{" "}
                  |
                  <a href="#" class="text-light text-decoration-none">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
