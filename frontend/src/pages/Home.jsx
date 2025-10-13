import React, { useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import HeroSlider from '../components/Heroslider/Heroslider';
import Hero from '../components/Hero/Hero';
import LeadForm from '../components/LeadForm/LeadForm';
import './Home.css';

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
        <LeadForm />
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
