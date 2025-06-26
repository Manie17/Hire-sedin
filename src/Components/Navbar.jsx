// import React from "react";
// import social from "../assets/Social.svg";
// import navlogo from "../assets/sedcloudcrmlogo.svg";
// import Conimg from "../assets/contact-icon.svg";

// const Navbar = () => {
//   return (
//     <div>
//       <div>
//         <header class="header-navbar sticky-top">
//           <nav
//             class="navbar navbar-for-home navbar-expand-lg salesforce-header mt-0"
//             id="myHeader"
//           >
//             <div class="container">
//               <div class="sedin-salesforce-logo">
//                 <a href="https://sedcloudcrm.com/">{<img src={navlogo} />}</a>
//               </div>
//               <button
//                 class="navbar-toggler"
//                 type="button"
//                 data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation"
//               >
//                 <span class="navbar-toggler-icon"></span>
//               </button>
//               <div
//                 class="collapse navbar-collapse justify-content-end"
//                 id="navbarSupportedContent"
//               >
//                 <ul class="navbar-nav ml-auto">
//                   {/* <!-- <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="https://sedcloudcrm.com/">Home</a>
//                         </li> --> */}
//                   <li class="nav-item dropdown">
//                     <a
//                       class="nav-link dropdown-toggle"
//                       id="servicesDropdown"
//                       aria-expanded="false"
//                       data-bs-toggle="dropdown"
//                     >
//                       Services
//                     </a>
//                     <div class="dropdown-menu shadow border-0">
//                       <div class="row custom-row">
//                         <div class="col-md-6">
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} style={{ widht: 30 }} />}
//                             <div>
//                               <p class="nav-p1">Consulting & Strategy</p>
//                               <p class="dropdown-desc">
//                                 Connect to your warehouse
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} style={{ widht: 30 }} />}
//                             <div>
//                               <p class="nav-p1">Salesforce Implementation</p>
//                               <p class="dropdown-desc">
//                                 Optimize CRM for your business
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} style={{ widht: 30 }} />}
//                             <div>
//                               <p class="nav-p1">Data Migration & Management</p>
//                               <p class="dropdown-desc">
//                                 Seamless data transfer solutions
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} style={{ widht: 30 }} />}
//                             <div>
//                               <p class="nav-p1">Custom Development Services</p>
//                               <p class="dropdown-desc">
//                                 Tailor-made business solutions
//                               </p>
//                             </div>
//                           </a>
//                         </div>
//                         <div class="col-md-6">
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} style={{ widht: 30 }} />}
//                             <div>
//                               <p class="nav-p1">AI & Automation</p>
//                               <p class="dropdown-desc">
//                                 Enhance efficiency with AI tools
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} style={{ widht: 30 }} />}
//                             <div>
//                               <p class="nav-p1">Cloud Solutions</p>
//                               <p class="dropdown-desc">
//                                 Scalable and secure cloud systems
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} style={{ widht: 30 }} />}
//                             <div>
//                               <p class="nav-p1">Enterprise Integration</p>
//                               <p class="dropdown-desc">
//                                 Seamless app & system integration
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} style={{ widht: 30 }} />}
//                             <div>
//                               <p class="nav-p1">Cybersecurity</p>
//                               <p class="dropdown-desc">
//                                 Advanced protection for your data
//                               </p>
//                             </div>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="nav-item dropdown">
//                     <a
//                       class="nav-link dropdown-toggle"
//                       id="servicesDropdown"
//                       aria-expanded="false"
//                       data-bs-toggle="dropdown"
//                     >
//                       Platform
//                     </a>
//                     <div class="dropdown-menu shadow border-0">
//                       <div class="row custom-row">
//                         <div class="col-md-6">
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} />}
//                             <div>
//                               <p class="nav-p1">Consulting & Strategy</p>
//                               <p class="dropdown-desc">
//                                 Connect to your warehouse
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} />}
//                             <div>
//                               <p class="nav-p1">Salesforce Implementation</p>
//                               <p class="dropdown-desc">
//                                 Optimize CRM for your business
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} />}
//                             <div>
//                               <p class="nav-p1">Data Migration & Management</p>
//                               <p class="dropdown-desc">
//                                 Seamless data transfer solutions
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} />}
//                             <div>
//                               <p class="nav-p1">Custom Development Services</p>
//                               <p class="dropdown-desc">
//                                 Tailor-made business solutions
//                               </p>
//                             </div>
//                           </a>
//                         </div>
//                         <div class="col-md-6">
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} />}
//                             <div>
//                               <p class="nav-p1">AI & Automation</p>
//                               <p class="dropdown-desc">
//                                 Enhance efficiency with AI tools
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} />}
//                             <div>
//                               <p class="nav-p1">Cloud Solutions</p>
//                               <p class="dropdown-desc">
//                                 Scalable and secure cloud systems
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} />}
//                             <div>
//                               <p class="nav-p1">Enterprise Integration</p>
//                               <p class="dropdown-desc">
//                                 Seamless app & system integration
//                               </p>
//                             </div>
//                           </a>
//                           <a
//                             class="dropdown-item d-flex align-items-start"
//                             href="#"
//                           >
//                             {<img src={social} />}
//                             <div>
//                               <p class="nav-p1">Cybersecurity</p>
//                               <p class="dropdown-desc">
//                                 Advanced protection for your data
//                               </p>
//                             </div>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="about-us.html">
//                       Hiring
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="about-us.html">
//                       About us
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link" href="blog.html">
//                       Insights
//                     </a>
//                   </li>
//                   <li class="nav-item">
//                     <div className="contact-btn text-decoration-none">
//                       <img src={Conimg} className="text-decoration-none" />
//                       <a
//                         class="text-decoration-none text-white"
//                         href="contact-us.html"
//                       >
//                         Contact us
//                       </a>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </header>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import social from "../assets/Social.svg";
import navlogo from "../assets/sedcloudcrmlogo.svg";
import Conimg from "../assets/contact-icon.svg";

const Navbar = () => {
  return (
    <header className="header-navbar sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" id="myHeader">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="https://sedcloudcrm.com/">
            <img src={navlogo} alt="Logo" width="150" />
          </a>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {/* Services Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" data-bs-toggle="dropdown">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><img src={social} width="20" className="me-2"/> Consulting & Strategy</a></li>
                  <li><a className="dropdown-item" href="#"><img src={social} width="20" className="me-2"/> Salesforce Implementation</a></li>
                  <li><a className="dropdown-item" href="#"><img src={social} width="20" className="me-2"/> Data Migration & Management</a></li>
                  <li><a className="dropdown-item" href="#"><img src={social} width="20" className="me-2"/> Custom Development Services</a></li>
                </ul>
              </li>
              
              {/* Platform Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="platformDropdown" data-bs-toggle="dropdown">
                  Platform
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><img src={social} width="20" className="me-2"/> AI & Automation</a></li>
                  <li><a className="dropdown-item" href="#"><img src={social} width="20" className="me-2"/> Cloud Solutions</a></li>
                  <li><a className="dropdown-item" href="#"><img src={social} width="20" className="me-2"/> Enterprise Integration</a></li>
                  <li><a className="dropdown-item" href="#"><img src={social} width="20" className="me-2"/> Cybersecurity</a></li>
                </ul>
              </li>

              {/* Static Links */}
              <li className="nav-item"><a className="nav-link" href="about-us.html">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="hiring.html">Hiring</a></li>
              <li className="nav-item"><a className="nav-link" href="blog.html">Insights</a></li>
              
              {/* Contact Us Button */}
              <li className="nav-item">
                <a className="btn btn-primary text-white" href="contact-us.html">
                  <img src={Conimg} width="20" className="me-2"/> Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
