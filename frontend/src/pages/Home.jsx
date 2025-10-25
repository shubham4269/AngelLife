import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import HeroSlider from '../components/Heroslider/Heroslider';
import Hero from '../components/Hero/Hero';
import LeadForm from '../components/LeadForm/LeadForm';
import WhyChooseUs from "../components/WhychooseUs/WhychooseUs";
import './Home.css';
import './Academic.css';

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <section style={{ width: "100%", overflow: "hidden" }}>
        <HeroSlider />
      </section>

      <main>
        <Hero />
       <WhyChooseUs />
       
        {/* Core Faculty Highlights Section */}
        <section className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', margin: '50px 8%', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: '"Playfair Display", serif', fontSize: '1.9rem', color: '#8b5e3c', marginBottom: '12px' }}>
            Core Faculty Highlights
          </h2>
          <h3 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Learn From Industry‑Leading Experts</h3>

          {/* Academic Leadership */}
          <div style={{ background: '#f9f6f2', padding: '30px', borderRadius: '12px', marginBottom: '30px', textAlign: 'center' }}>
            <h4 style={{ color: '#8b5e3c', marginBottom: '15px' }}>Academic Leadership</h4>
            <div className="faculty-card" style={{ maxWidth: '500px', margin: '0 auto', background: 'white' }}>
              <h2 style={{ color: '#8b5e3c' }}>Dr. Shashank Kharabanda</h2>
              <p style={{ fontWeight: '600', color: '#8b5e3c', marginBottom: '10px' }}>Founder & Director</p>
              <p>With over 20 years in healthcare and aesthetic education, multiple international fellowships, and a proven presence as a keynote speaker and author, this visionary leader continues to influence the industry.</p>
            </div>
          </div>

          {/* Core Faculty */}
          <div style={{ marginBottom: '30px' }}>
            <div className="facultyWrapper">
              <div className="facultyTrack">
                {/* First set of faculty cards */}
                <div className="faculty-card">
                  <h3>Dr. Suman Saikia</h3>
                  <p>Consultant Dermatologist | Fillers Expert
                    MBBS, MD (Dermatology) | Lasers & Aesthetics Specialist</p>
                </div>
                <div className="faculty-card">
                  <h3>Dr. Pankaj Gupta</h3>
                  <p>Medical Director | Consultant Cardiologist
                      MD, D.Card (New Delhi)
                      Director – MayoCare</p>
                </div>
                <div className="faculty-card">
                  <h3>Dr. Mohd. Shaqib</h3>
                  <p>Consultant Surgeon | Hair Transplant & Rhinoplasty Specialist
                     BDS, MDS (Maxillofacial Surgery)
                  Fellowship in Onco Surgery</p>
                </div>
                <div className="faculty-card">
                  <h3>Dr. Swati Chaudhary</h3>
                  <p>Aesthetic Physician | Executive Director
                    BDS, M.Sc (Facial Aesthetics & Cosmetology)
                    MBA (Hospital Management)</p>
                </div>
                <div className="faculty-card">
                  <h3>Dr. Aditya Reddy Vitta</h3>
                  <p>Consultant Physician | Aesthetics Specialist
                    MD, FRACGP (Australia)
                    Diploma in Dermatology & Cosmetology (Australia)</p>
                </div>
                <div className="faculty-card">
                  <h3>MS. PRAGYA PARMITA</h3>
                  <p>Director – Business Development & Training
                    B.Com, MBA
                    Business Development Analyst & Specialist</p>
                </div>
                <div className="faculty-card">
                  <h3> DR. SHWETA SRIVASTAVA</h3>
                  <p>Director – HR & Administration | Cosmetologist | Trainer
                     B.Com, Ph.D
                    PGDCC (Cosmetology & Wellness)</p>
                </div>
                
                {/* Duplicate set for seamless infinite scroll */}
                <div className="faculty-card">
                  <h3>Dr. Suman Saikia</h3>
                  <p>Consultant Dermatologist | Fillers Expert
                    MBBS, MD (Dermatology) | Lasers & Aesthetics Specialist</p>
                </div>
                <div className="faculty-card">
                  <h3>Dr. Pankaj Gupta</h3>
                  <p>Medical Director | Consultant Cardiologist
                      MD, D.Card (New Delhi)
                      Director – MayoCare</p>
                </div>
                <div className="faculty-card">
                  <h3>Dr. Mohd. Shaqib</h3>
                  <p>Consultant Surgeon | Hair Transplant & Rhinoplasty Specialist
                     BDS, MDS (Maxillofacial Surgery)
                  Fellowship in Onco Surgery</p>
                </div>
                <div className="faculty-card">
                  <h3>Dr. Swati Chaudhary</h3>
                  <p>Aesthetic Physician | Executive Director
                    BDS, M.Sc (Facial Aesthetics & Cosmetology)
                    MBA (Hospital Management)</p>
                </div>
                <div className="faculty-card">
                  <h3>Dr. Aditya Reddy Vitta</h3>
                  <p>Consultant Physician | Aesthetics Specialist
                    MD, FRACGP (Australia)
                    Diploma in Dermatology & Cosmetology (Australia)</p>
                </div>
                <div className="faculty-card">
                  <h3>MS. PRAGYA PARMITA</h3>
                  <p>Director – Business Development & Training
                    B.Com, MBA
                    Business Development Analyst & Specialist</p>
                </div>
                <div className="faculty-card">
                  <h3> DR. SHWETA SRIVASTAVA</h3>
                  <p>Director – HR & Administration | Cosmetologist | Trainer
                     B.Com, Ph.D
                    PGDCC (Cosmetology & Wellness)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Popup Form */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="popup-close"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            <LeadForm />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;
