// src/pages/Academics.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import "./Academic.css";

const Academics = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="academics-section">

        {/* Hero Section */}
        <div className="section-block" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#8b5e3c', marginBottom: '15px' }}>
            Your Journey From Learning to Leadership
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5c4a3d', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            AngelLife International Institute brings together expert faculty, guided admissions, and career pathways that help every student move confidently from the classroom to successful professional practice.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
            onClick={() => navigate("/apply")}
            style={{ 
              background: '#8b5e3c', 
              color: 'white', 
              border: 'none', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              Apply Now
            </button>
            <button  onClick={() => window.open(
              "https://wa.me/+919910478281?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20the%20course.",
                "_blank")}
             style={{ 
              background: 'transparent', 
              color: '#8b5e3c', 
              border: '2px solid #8b5e3c', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              Meet a Counsellor
            </button>
            <button onClick={() => navigate('/download-brochure')}
            style={{ 
              background: 'transparent', 
              color: '#8b5e3c', 
              border: '2px solid #8b5e3c', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              Download Brochure
            </button>
          </div>
        </div>

        {/* 1️⃣ Admissions Overview */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>1️⃣</span>
            Admissions Overview
          </h2>
          <h3 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Pathway to Joining AngelLife</h3>
          
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#8b5e3c', marginBottom: '15px' }}>Application Steps</h4>
            <ol className="admission-list">
              <li><strong>Submit Application:</strong> Fill out a simple form with your chosen program.</li>
              <li><strong>Counselling Session:</strong> Our counsellors connect to assess your goals and eligibility.</li>
              <li><strong>Document Verification:</strong> Submit required documents (ID proof, academic records, etc.).</li>
              <li><strong>Offer & Confirmation:</strong> Receive admission confirmation and payment guidance.</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Scholarships & Support</h4>
              <p>Merit-based (up to 20%) and need-based scholarships available. EMI and flexible payment options for eligible candidates.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Intake Sessions</h4>
              <p><strong>January | July | November</strong><br />Limited seats per batch to ensure personal attention.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Eligibility Snapshot</h4>
              <p>Degree & Diploma: Open to +2 and graduates from any stream. PG Diplomas & M.Sc (Medical): For graduates or medical professionals as specified.</p>
            </div>
          </div>

          <div style={{ background: '#8b5e3c', color: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h4 style={{ color: 'white', marginBottom: '10px' }}>Admissions Contact</h4>
            <p style={{ margin: '0', color: '#f9f6f2' }}>
              <strong>care@angellife.in</strong> | <strong>+91 9910478281</strong> | <strong>WhatsApp Live Chat</strong>
            </p>
          </div>
        </div>

        {/* 2️⃣ Faculty & Mentorship */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>2️⃣</span>
            Faculty & Mentorship
          </h2>
          <h3 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Learn From Industry‑Leading Experts</h3>

          {/* Academic Leadership */}
          <div style={{ background: '#f9f6f2', padding: '30px', borderRadius: '12px', marginBottom: '30px', textAlign: 'center' }}>
            <h4 style={{ color: '#8b5e3c', marginBottom: '15px' }}>Academic Leadership</h4>
            <div className="faculty-card" style={{ maxWidth: '500px', margin: '0 auto', background: 'white' }}>
              <h3 style={{ color: '#8b5e3c' }}>Dr. Shashank Kharabanda</h3>
              <p style={{ fontWeight: '600', color: '#8b5e3c', marginBottom: '10px' }}>Founder & Director</p>
              <p>Visionary leader with over 20 years in healthcare and aesthetics education; multiple international fellowships; keynote speaker & author.</p>
            </div>
          </div>

          {/* Core Faculty */}
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Core Faculty Highlights</h4>
           <div className="faculty-grid">
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
            <p style={{ fontStyle: 'italic', marginTop: '15px', textAlign: 'center' }}>
              Each mentor blends medical expertise with real‑world industry experience to ensure that learners receive up‑to‑date, evidence‑based knowledge with strong hands‑on mentoring.
            </p>
          </div>

          {/* Mentorship Model */}
          <div>
            <h4 style={{ color: '#8b5e3c', marginBottom: '15px' }}>Mentorship Model</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              <div style={{ padding: '15px', background: '#f9f6f2', borderRadius: '8px' }}>
                <p>✓ Small group mentoring for practical labs and project work.</p>
              </div>
              <div style={{ padding: '15px', background: '#f9f6f2', borderRadius: '8px' }}>
                <p>✓ Counsellor‑linked guidance from admission to placement.</p>
              </div>
              <div style={{ padding: '15px', background: '#f9f6f2', borderRadius: '8px' }}>
                <p>✓ Continuous academic tracking and feedback every term.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3️⃣ Placements & Career Outcomes */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>3️⃣</span>
            Placements & Career Outcomes
          </h2>
          <h3 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Turning Skills into Careers</h3>

          {/* Placement Assistance */}
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#8b5e3c', marginBottom: '15px' }}>Placement Assistance Highlights</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
                <h4 style={{ color: '#8b5e3c' }}>90% Success Rate</h4>
                <p>Successful placement support record with proven results.</p>
              </div>
              <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
                <h4 style={{ color: '#8b5e3c' }}>Industry Partnerships</h4>
                <p>Partnerships with clinics, hospitals, and wellness centers across India and abroad.</p>
              </div>
              <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
                <h4 style={{ color: '#8b5e3c' }}>Dedicated Support</h4>
                <p>Placement cell assisting with resume preparation, interview readiness, and client communication.</p>
              </div>
            </div>
          </div>

          {/* Internship & Practical */}
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ color: '#8b5e3c', marginBottom: '15px' }}>Internship & Practical Exposure</h4>
            <ul style={{ marginLeft: '20px' }}>
              <li>✓ Mandatory internship for Diploma & Degree students.</li>
              <li>✓ Exposure to clinical cases, beauty studios, and wellness retreats.</li>
              <li>✓ Hands‑on training ensures immediate employability.</li>
            </ul>
          </div>

          {/* Alumni Success */}
          <div style={{ background: '#f9f6f2', padding: '30px', borderRadius: '12px' }}>
            <h4 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Alumni Success Stories</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #8b5e3c' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
                  "AngelLife gave me real industry experience and confidence to start my own aesthetics clinic."
                </p>
                <p style={{ fontWeight: '600', color: '#8b5e3c' }}>— Dr. Swati, PG Diploma Alumna</p>
              </div>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #8b5e3c' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>
                  "From student to trainer — I found my path with AngelLife's mentorship."
                </p>
                <p style={{ fontWeight: '600', color: '#8b5e3c' }}>— Pragya, Diploma Graduate</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4️⃣ Academic Support & Learning Culture */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>4️⃣</span>
            Academic Support & Learning Culture
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c' }}>App-Based Learning</h4>
              <p>Access to course materials and announcements on the go.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c' }}>Online Resources</h4>
              <p>Notices, event updates, and webinar invitations published online.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c' }}>Cross-Center Learning</h4>
              <p>Students can attend workshops at any AngelLife center.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c' }}>Annual Academic Meet</h4>
              <p>Showcasing research, innovation, and student work.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="section-block" style={{ background: '#8b5e3c', color: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '15px' }}>Shape Your Future with AngelLife International Institute</h2>
          <p style={{ marginBottom: '25px', color: '#f9f6f2' }}>
            Join a community of passionate learners, expert trainers, and leading professionals driving Bharat's aesthetics revolution.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => navigate("/apply")}
             style={{ 
              background: 'white', 
              color: '#8b5e3c', 
              border: 'none', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontWeight: '600'
            }}>
              Apply Now
            </button>
            <button  onClick={() => window.open(
              "https://wa.me/+919910478281?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20the%20course.",
                "_blank")}
             style={{ 
              background: 'transparent', 
              color: 'white', 
              border: '2px solid white', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer'
            }}>
              Book Counselling
            </button>
            <button onClick={() => navigate("/courses")}
             style={{ 
              background: 'transparent', 
              color: 'white', 
              border: '2px solid white', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer'
            }}>
              View Courses
            </button>
          </div>
        </div>

      </section>
    </Layout>
  );
};

export default Academics;
