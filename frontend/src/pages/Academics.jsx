// src/pages/Academics.jsx
import React from "react";
import Layout from "../layout/Layout";
import "./Academic.css";

const Academics = () => {
  return (
    <Layout>
      <section className="academics-section">

        {/* ===== Courses Table ===== */}
        <div className="section-block">
          <h2>Our Courses</h2>
          <p>Explore our range of internationally recognized programs designed to shape your career in cosmetology and wellness.</p>

          <table className="courses-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Certification in Cosmetology (Advanced)</td><td>3 Months</td><td>₹45,000</td></tr>
              <tr><td>Diploma in Cosmetology & Wellness</td><td>1 Year</td><td>₹70,000</td></tr>
              <tr><td>B.Sc - Cosmetology & Wellness</td><td>3 Years</td><td>₹1,20,000</td></tr>
              <tr><td>M.Sc - Cosmetology & Wellness</td><td>2 Years</td><td>₹2,50,000</td></tr>
              <tr><td>M.Sc - Facial Aesthetics & Cosmetology*</td><td>2 Years</td><td>₹3,20,000</td></tr>
              <tr><td>PG Diploma - Cosmetology & Wellness</td><td>2 Years</td><td>₹1,20,000</td></tr>
              <tr><td>PG Diploma - Facial Aesthetics & Cosmetology*</td><td>2 Years</td><td>₹1,60,000</td></tr>
              <tr><td>Certification in Permanent Makeup (PMU)</td><td>15 Days</td><td>₹20,000</td></tr>
              <tr><td>Certification in Makeup Artistry (Basic)</td><td>1 Month</td><td>₹20,000</td></tr>
              <tr><td>Certification in Makeup Artistry (Advanced)</td><td>1 Month</td><td>₹60,000</td></tr>
              <tr><td>Certification in Hair Dressing (Basic)</td><td>1 Month</td><td>₹20,000</td></tr>
              <tr><td>Certification in Hair Dressing (Advanced)</td><td>1 Month</td><td>₹60,000</td></tr>
            </tbody>
          </table>
        </div>

        {/* ===== Placements ===== */}
        <div className="section-block">
          <h2>Placements</h2>
          <p>With <strong>90% placement support</strong>, we help our students connect with leading aesthetic clinics, wellness brands, and global employers.</p>
          <ul>
            <li>✅ Career assistance and interview preparation</li>
            <li>🏆 Partnered with top dermatology and beauty institutions</li>
            <li>💼 Alumni network in 10+ countries</li>
          </ul>
        </div>

        {/* ===== Faculty ===== */}
        <div className="section-block">
          <h2>Our Faculty</h2>
          <p>Learn from a world-class team of industry experts, dermatologists, and cosmetology specialists.</p>
          <div className="faculty-grid">
            <div className="faculty-card">
              <h3>Dr.MOHD. SHAQIB</h3>
              <p>CONSULTANT SURGEON | HAIR TRANSPLANT AND RHINOPLASTY SPECIALIST</p>
            </div>
            <div className="faculty-card">
              <h3>DR. PANKAJ GUPTA</h3>
              <p>MEDICAL DIRECTOR | CONSULTANT CARDIOLOGIST</p>
            </div>
            <div className="faculty-card">
              <h3>DR. SHWETA SRIVASTAVA</h3>
              <p>DIRECTOR HR & ADMIN | COSMETOLOGIST | TRAINER</p>
            </div>
             <div className="faculty-card">
              <h3>DR.SWATI CHAUDHARY </h3>
              <p>AESTHETIC PHYSICIAN | EXEC DIRECTOR</p>
            </div>
             <div className="faculty-card">
              <h3>DR. SUMAN SAIKIA</h3>
              <p>CONSULTANT DERMATOLOGIST | FILLERS EXPERT</p>
            </div>
             <div className="faculty-card">
              <h3>MS. PRAGYA PARMITA</h3>
              <p>DIRECTOR - BUSINESS DEVELOPMENT & TRAINING</p>
            </div>
             <div className="faculty-card">
              <h3>DR.DR. ADITYA REDDY VITTA</h3>
              <p>CONSULTANT PHYSICIAN | AESTHETICS SPECIALIST</p>
            </div>
          </div>
        </div>

        {/* ===== Admission Process ===== */}
        <div className="section-block">
          <h2>Admission Process</h2>
          <ol className="admission-list">
            <li>📄 Fill out the online application form.</li>
            <li>🧾 Submit required academic and ID documents.</li>
            <li>🎓 Choose your course and preferred batch schedule.</li>
            <li>💳 Complete the fee payment or apply for EMI options.</li>
            <li>✅ Receive confirmation and start your learning journey!</li>
          </ol>
        </div>

      </section>
    </Layout>
  );
};

export default Academics;
