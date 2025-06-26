import React from "react";
import cert1 from "../assets/CE1.svg"; // Import your certificate images
import cert2 from "../assets/CE2.svg";
import cert3 from "../assets/CE3.svg";
import cert4 from "../assets/CE4.svg";
import cert5 from "../assets/CE5.svg";
import cert6 from "../assets/CE6.svg";
import cert7 from "../assets/CE7.svg";
import cert8 from "../assets/CE8.svg";
import cert9 from "../assets/CE9.svg";
import cert10 from "../assets/CE10.svg";
import cert11 from "../assets/CE11.svg";
import cert12 from "../assets/CE12.svg";
import cert13 from "../assets/CE13.svg";
import cert14 from "../assets/CE14.svg";
import cert15 from "../assets/CE15.svg";

const certificates = [
  { img: cert1, title: "Administrator" },
  { img: cert2, title: "Business Analyst" },
  { img: cert3, title: "Platform App Builder" },
  { img: cert4, title: "Platform Developer" },
  { img: cert5, title: "Sales Cloud Consultant" },
  { img: cert6, title: "Service Cloud Consultant" },
  { img: cert7, title: "Marketing Cloud Developer" },
  { img: cert8, title: "Marketing Cloud Consultant" },
  { img: cert9, title: "Marketing Cloud Administrator" },
  { img: cert10, title: "Marketing Cloud Email Specialist" },
  { img: cert11, title: "Nonprofit Cloud Consultant" },
  { img: cert12, title: "CPQ Specialist" },
  { img: cert13, title: "Data Cloud Consultant" },
  { img: cert14, title: "JavaScript Developer" },
  { img: cert15, title: "Conga" },
];

const CertificateSection = () => {
  return (
    <section className="blogs-bg-container">
      <div className="container cmn-container">
        <h1 className="text-white text-h2 certi-h">
          We're Certified Salesforce Partner
        </h1>
        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card text-white">
              <img src={cert.img} alt={cert.title} className="certi-img mb-3" />
              <p className="certi-p">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
