import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import HeroSlider from '../components/Heroslider/Heroslider';
import Hero from '../components/Hero/Hero';
import LeadForm from '../components/LeadForm/LeadForm';
import WhyChooseUs from "../components/WhychooseUs/WhychooseUs";
import TrustTiles from '../components/TrustTiles/TrustTiles'; 
import PlacementsSection from "../components/PlacementsSection/PlacementsSection";
import IndustrySection from "../components/IndustrySection/IndustrySection";
import ScholarshipsSection from "../components/ScholarshipsSection/ScholarshipsSection";
import AdmissionSection from '../components/AdmissionSection/AdmissionSection';
import FAQSection from '../components/FAQSection/FAQSection';
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
       <div className="logo-strip-wrapper">
  <div className="logo-strip">
    {[
      "/Images/ugc-logo.png",
      "/Images/msme-logo-removebg-preview.png",
      "/Images/iso-logo.png",
      "/Images/dr.surs.png",
      "/Images/skill-logo.png",
      "/Images/sgsu-logo.png",
    ].map((src, i) => (
      <div className="logo-card" key={i}>
        <img src={src} alt="logo" />
      </div>
    ))}

    {/* Duplicate set for smooth infinite loop */}
    {[
      "/Images/ugc-logo.png",
      "/Images/msme-logo-removebg-preview.png",
      "/Images/iso-logo.png",
      "/Images/dr.surs.png",
      "/Images/skill-logo.png",
      "/Images/sgsu-logo.png",
    ].map((src, i) => (
      <div className="logo-card" key={i + 10}>
        <img src={src} alt="logo" />
      </div>
    ))}
  </div>
</div>


      </section>

      <main>
        <Hero />
       
        {/* === Courses Showcase Tabs (Category Wise) === */}
        {/* Purpose: Quick discovery of Degree / Diploma / Certification offerings */}
        {/** Uses lightweight subset of course data + modal for detail. Full details on Courses page. */}
        <div style={{ marginTop: '10px' }}>
          {require('../components/CoursesTabs/CoursesTabs').default()}
        </div>
       
        {/* Core Faculty Highlights Section */}
        <section className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: '"Playfair Display", serif', fontSize: '1.9rem', color: '#8b5e3c', marginBottom: '12px' }}>
            Core Faculty Highlights
          </h2>
          <h3 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Learn From Industry‑Leading Experts</h3>

          {/* Academic Leadership */}
          <div style={{ background: '#ffffffff', padding: '30px', borderRadius: '12px', marginBottom: '30px' }}>
            <h2 style={{ color: '#8b5e3c', marginBottom: '15px', textAlign: 'center' }}>Academic Leadership</h2>
            <div className="faculty-card" style={{ maxWidth: '700px', margin: '0 auto', background: 'white', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0 }}>
                <img 
                  src={require('../assets/DrShashank.jpg')} 
                  alt="Dr. Shashank Kharabanda" 
                  style={{ width: '150px', height: '180px', borderRadius: '8px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h2 style={{ color: '#8b5e3c', marginTop: 0 }}>Dr. Shashank Kharabanda</h2>
                <p style={{ fontWeight: '600', color: '#8b5e3c', marginBottom: '10px' }}>Founder & Director</p>
                <p>With over 20 years in healthcare and aesthetic education, multiple international fellowships, and a proven presence as a keynote speaker and author, this visionary leader continues to influence the industry.</p>
              </div>
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
           <IndustrySection />
           <PlacementsSection />
            <ScholarshipsSection />
            <AdmissionSection />
            <TrustTiles />

           <WhyChooseUs />

          <section/>
          <FAQSection />


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
