import React from "react";
import "./CTAbtn.css";

const CTAStrip = () => (
  <div className="cta-fullwidth">
  <div className="cta-strip">
    <div className="cta-container">
      <div className="cta-text">Join 1000+ Certified Professionals</div>
      <div className="cta-buttons">
        <a className="cta-btn apply" href="/apply">Apply Now</a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/+919910478281?text=Hi, I want to know about courses"
          className="cta-btn whatsapp"
        >
          WhatsApp
        </a>
        <a href="/download-brochure" className="cta-btn download">
          Download Brochure
        </a>
      </div>
    </div>
  </div>
  </div>
);

export default CTAStrip;

