import React from "react";
import LeadForm from "../LeadForm/LeadForm";
import "./WhychooseUs.css";          

const WhyChooseUs = () => {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "100%",
        padding: 0,
        margin: 0,
      }}
    >
    <div className="section-container">
      {/* LEFT: Why Choose Us */}
      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          Our USP stands tall and makes us one of the most trusted, fastest-growing
          beauty and wellness brands in Bharat & Abroad.
        </p>

        <ul>
          <li>Top trainers from the industry and specialists from the field</li>
          <li>5+ Years of Aesthetics & Beauty Training Experience</li>
          <li>1000+ Delighted Students & 90% Successful Placements</li>
          <li>Industry-Specific Curriculum & Courses</li>
          <li>Hands-On Practice on US FDA Approved Technologies</li>
          <li>Flexible Classes & EMI Options for Fees</li>
          <li>1-Year Student Support</li>
          <li>Affordable, Accessible & Student-Centric Approach</li>
        </ul>
      </div>

      {/* RIGHT: your existing form */}
      <div className="lead-form">
        <LeadForm />
      </div>
    </div>
    </section>
  );
};

export default WhyChooseUs;
