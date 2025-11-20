import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";


const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedTrack, setSelectedTrack] = useState('All');

  const courses = [
    {
      id: 1,
      category: 'Degree',
       anchorId: "course-diploma-cosmetology",
      title: 'B.Sc – Cosmetology & Wellness',
      duration: '3 Years',
      fee: '₹1,20,000',
      tracks: ['Skin', 'Hair', 'Nutrition'],
      description: 'Comprehensive science-backed career path in cosmetology and wellness.',
      modules: [
        'Foundations: anatomy & physiology of skin and hair, hygiene & sterilization',
        'Cosmetic chemistry, product formulation basics & safe ingredient use',
        'Skin care protocols: assessment, facials, peels, acne & pigmentation management',
        'Hair care protocols: scalp analysis, treatments, styling & salon operations',
        'Wellness fundamentals: nutrition basics, body therapies, client consultation',
        'Professional practice: service workflow, documentation, quality & ethics'
      ],
      outcomes: [
        'Job-ready for roles in clinics, salons, wellness centers, hospitality & retail',
        'Portfolio of case records, treatment plans and service SOPs',
        'Placement assistance + optional internships with partner centers'
      ],
      idealFor: 'Students/startups seeking a comprehensive, science-backed career path.'
    },
    {
      id: 2,
      category: 'Degree',
      title: 'M.Sc – Cosmetology & Wellness',
      duration: '2 Years',
      fee: '₹2,50,000',
      tracks: ['Skin', 'Hair', 'Nutrition', 'Anti-Aging'],
      description: 'Advanced program for leadership and educator roles in the industry.',
      modules: [
        'Advanced cosmetic science & ingredient interactions',
        'Skin & hair disorder mapping; integrated service planning',
        'Device-based care fundamentals (non-invasive modalities)',
        'Wellness program design: stress, sleep, nutrition & habit-building',
        'Research methods, audit and evidence-based practice'
      ],
      outcomes: [
        'Senior roles in clinics and wellness chains; trainer/educator tracks',
        'Capability to design SOPs, audits and service menus for centers'
      ],
      idealFor: 'Graduates wanting leadership or educator roles in the industry.'
    },
    {
  id: 3,
  category: 'Degree',
  title: 'B.Voc – Nursing Care',
  duration: '3 Years',
  fee: '₹50,000',
  tracks: ['Clinical Practice', 'Patient Care', 'Community Health'],
  description: 'A hands-on vocational degree focused on nursing care, clinical practice, and holistic patient management.',
  modules: [
    'Foundations of Nursing: anatomy, physiology, microbiology & first aid',
    'Nursing Procedures: infection control, wound dressing, vital signs monitoring',
    'Medical-Surgical Nursing: pre- & post-operative care, emergency management',
    'Community Health Nursing: health education, immunization & public outreach',
    'Nutrition & Dietetics: therapeutic diets and patient meal planning',
    'Hospital Management: patient records, ethics, and communication in healthcare',
    'Internship & Practicum: hands-on training in hospitals and healthcare centers'
  ],
  outcomes: [
    'Work-ready for roles in hospitals, clinics, old-age homes, and community health centers',
    'Exposure to real-world patient care and hospital workflow',
    'Placement support and certification aligned with healthcare industry standards'
  ],
  idealFor: 'Students aspiring for a practical, skill-based healthcare career in nursing and patient care.'
},

    {
      id: 4,
      category: 'Degree',
      title: 'M.Sc – Facial Aesthetics & Cosmetology',
      duration: '2 Years',
      fee: '₹3,20,000',
      tracks: ['Lasers', 'Medi-Facials', 'Anti-Aging'],
      description: 'Specialized program for medical professionals expanding into aesthetics.',
      modules: [
        'Facial anatomy & aging; assessment frameworks; photography & documentation',
        'Evidence-based facial aesthetics: peel planning, micro-needling fundamentals',
        'Lasers & energy-based devices (indications, parameters, safety)',
        'Anti‑aging pathways; non-surgical rejuvenation fundamentals',
        'Complication prevention & management; medico-legal best practices'
      ],
      outcomes: [
        'Competency to integrate facial aesthetics within clinical practice',
        'Clinical protocols, consent kits & complication response checklists'
      ],
      idealFor: 'MBBS/MD/BDS & allied medical professionals expanding into aesthetics.'
    },
    {
      id: 5,
      category: 'PG Diploma',
      title: 'PG Diploma – Facial Aesthetics & Cosmetology',
      duration: '2 Years',
      fee: '₹1,60,000',
      tracks: ['Lasers', 'Medi-Facials', 'Anti-Aging'],
      description: 'Clinical approach to cosmetic concerns for medical professionals.',
      modules: [
        'Facial analysis, peel layering logic, advanced medi-facials',
        'Fundamentals of lasers & energy-based devices; safe parameterization',
        'Aesthetic photography, documentation & follow-up planning'
      ],
      outcomes: [
        'Structured clinical approach to cosmetic concerns with safety-first mindset'
      ],
      idealFor: 'Medical professionals adding aesthetic services to practice.'
    },
    {
      id: 6,
      category: 'PG Diploma',
      title: 'PG Diploma – Cosmetology & Wellness',
      duration: '2 Years',
      fee: '₹1,20,000',
      tracks: ['Skin', 'Hair', 'Nutrition'],
      description: 'Mastery program with strong client-handling skills.',
      modules: [
        'Advanced skincare & haircare protocols; treatment planning & service sequencing',
        'Client communication, expectation management & aftercare design',
        'Wellness integration: diet basics, stress management, lifestyle coaching'
      ],
      outcomes: [
        'End‑to‑end service capability with client outcomes tracking & reviews'
      ],
      idealFor: 'Graduates seeking mastery with strong client-handling skills.'
    },
    {
      id: 7,
      category: 'Diploma',
      title: 'Diploma – Cosmetology & Wellness',
      duration: '1 Year',
      fee: '₹70,000',
      tracks: ['Skin', 'Hair'],
      description: 'Job-ready execution skills with clinical standards.',
      modules: [
        'Core facials & medi-facials; peel basics; acne & pigmentation care',
        'Hair spa, scalp care, essential styling; salon-ready service standards',
        'Hygiene, sterilization & safe service execution; consultation frameworks'
      ],
      outcomes: [
        'Job-ready execution skills + internship support'
      ],
      idealFor: 'Freshers and working beauticians upgrading to clinical standards.'
    },
    {
      id: 8,
      category: 'Certification',
      title: 'Certification – Makeup Artistry (Basic)',
      duration: '1 Month',
      fee: '₹20,000',
      tracks: ['PMU'],
      description: 'Build a starter portfolio with freelance-ready essentials.',
      modules: [
        'Skin prep, base & blending, day/party looks, hygiene'
      ],
      outcomes: [
        'Build a starter portfolio; freelance-ready essentials'
      ],
      idealFor: 'Beginners starting their makeup artistry journey.'
    },
    {
      id: 9,
      category: 'Certification',
      title: 'Certification – Makeup Artistry (Advanced)',
      duration: '3 Months',
      fee: '₹60,000',
      tracks: ['PMU'],
      description: 'Professional portfolio with bridal/editorial assignments readiness.',
      modules: [
        'HD & bridal looks, editorial, lighting/readiness, client trials'
      ],
      outcomes: [
        'Professional portfolio; bridal/editorial assignments readiness'
      ],
      idealFor: 'Aspiring professional makeup artists.'
    },
    {
      id: 10,
      category: 'Certification',
      title: 'Certification – Hair Dressing (Basic)',
      duration: '1 Month',
      fee: '₹20,000',
      tracks: ['Hair'],
      description: 'Salon floor support with foundations for advanced styling.',
      modules: [
        'Shampooing, sectioning, blow-dry, basic cuts & finishing'
      ],
      outcomes: [
        'Salon floor support; foundations for advanced styling'
      ],
      idealFor: 'Beginners entering hair styling field.'
    },
    {
      id: 11,
      category: 'Certification',
      title: 'Certification – Hair Dressing (Advanced)',
      duration: '3 Months',
      fee: '₹60,000',
      tracks: ['Hair'],
      description: 'Independent stylist readiness with look-book creation.',
      modules: [
        'Advanced cuts, color theory & application, styling systems'
      ],
      outcomes: [
        'Independent stylist readiness with look-book creation'
      ],
      idealFor: 'Aspiring professional hair stylists.'
    },
    {
      id: 12,
      category: 'Certification',
      title: 'Certification – Permanent Makeup (PMU)',
      duration: '3 Months',
      fee: '₹20,000',
      tracks: ['PMU'],
      description: 'Service-ready with safety checklists & client documentation.',
      modules: [
        'Brow mapping, micro‑pigmentation basics, hygiene & aftercare'
      ],
      outcomes: [
        'Service-ready with safety checklists & client documentation'
      ],
      idealFor: 'Beauty professionals expanding into PMU services.'
    },
    {
      id: 13,
      category: 'Certification',
      title: 'Certification – Cosmetology (Advanced)',
      duration: '1 Year',
      fee: '₹45,000',
      tracks: ['Medi-Facials', 'Skin'],
      description: 'Clinical‑grade service competency & client progression mapping.',
      modules: [
        'Advanced medi‑facials, peel planning, treatment combining'
      ],
      outcomes: [
        'Clinical‑grade service competency & client progression mapping'
      ],
      idealFor: 'Professionals seeking advanced clinical skills.'
    }
  ];

  // Helper to extract numeric value from fee string
  function getFeeValue(fee) {
    return parseInt(fee.replace(/[^\d]/g, ""), 10);
  }

  // Custom sort: lowest to highest price, B.Voc last
  const sortedCourses = [
    ...courses.filter(c => c.title !== "B.Voc – Nursing Care").sort((a, b) => getFeeValue(a.fee) - getFeeValue(b.fee)),
    ...courses.filter(c => c.title === "B.Voc – Nursing Care")
  ];

  const filteredCourses = sortedCourses.filter(course => {
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    const durationMatch = selectedDuration === 'All' || course.duration.includes(selectedDuration);
    const trackMatch = selectedTrack === 'All' || course.tracks.includes(selectedTrack);
    return categoryMatch && durationMatch && trackMatch;
  });

  const navigate = useNavigate();

  return (
    <Layout>
      <section className="academics-section">
        {/* Hero Section */}
        <div className="section-block" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#8b5e3c', marginBottom: '15px' }}>
            Explore Professional Programs in Cosmetology, Facial Aesthetics & Wellness
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5c4a3d', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            From university degrees to focused certifications—discover programs designed to build real, industry-ready skills with structured practicals, case-based learning, and post-certification support.
          </p>
          <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginBottom: "20px",
    }}
  >
    <img
      src="/Images/ugc-logo.png"
      alt="UGC"
      style={{ height: "80px", objectFit: "contain" }}
    />
    <img
      src="/Images/msme-logo-removebg-preview.png"
      alt="MSME"
      style={{ height: "90px", objectFit: "contain" }}
    />
    <img
      src="/Images/iso-logo.png"
      alt="ISO Certified"
      style={{ height: "60px", objectFit: "contain", }}
    />
    <img
      src="/Images/dr.surs.png"
      alt="Government Recognized"
      style={{ height: "80px", objectFit: "contain" }}
    />
     <img
      src="/Images/skill-logo.png"
      alt="Government Recognized"
      style={{ height: "90px", objectFit: "contain" }}
    />
     <img
      src="/Images/sgsu-logo.png"
      alt="Government Recognized"
      style={{ height: "40px", objectFit: "contain" }}
    />
     </div>

          
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
  <button 
    onClick={() => navigate('/download-brochure')}
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
      Download Course Brochure
  </button>
            <button 
            onClick={() => window.open(
              "https://wa.me/+919910478281?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20the%20course.",
                "_blank")}
            style={{ 
              background: '#7B967A', 
              color: 'white', 
              border: 'none', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600'
            }}>
              Talk to a Counsellor
            </button>
          </div>
        </div>

        {/* Courses Intro Block - grid of boxes */}
        <div className="section-block" style={{ background: '#f9f6f2', padding: '30px', borderRadius: '12px', marginBottom: '40px' }}>
          <h2 style={{ color: '#8b5e3c', marginBottom: '15px' }}> Our Courses </h2>
          <div className="courses-grid courses-intro-grid" style={{ marginTop: '20px' }}>
            {sortedCourses.map(course => {
              const anchorId = course.anchorId ? course.anchorId : course.title.replace(/\s+/g, '-').toLowerCase();
              return (
                <div
                  key={course.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    const el = document.getElementById(anchorId);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      const el = document.getElementById(anchorId);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  style={{
                    padding: '20px',
                    background: '#fff',
                    borderRadius: '8px',
                    boxShadow: '0 6px 15px rgba(139, 94, 60, 0.08)',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <h4 style={{ color: '#8b5e3c', marginBottom: '8px' }}>{course.title}</h4>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                    <span style={{ background: '#7B967A', color: 'white', padding: '2px 10px', borderRadius: '14px', fontSize: '0.8rem' }}>{course.category}</span>
                    <span style={{ background: '#f9f6f2', color: '#8b5e3c', padding: '2px 10px', borderRadius: '14px', fontSize: '0.8rem' }}>{course.duration}</span>
                  </div>
                 
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Study at AngelLife */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2>Why Study at AngelLife</h2>
          <div className="courses-grid" style={{ marginTop: '20px' }}>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>5+ Years Excellence</h4>
              <p>Training excellence in aesthetics & wellness</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>1,000+ Learners</h4>
              <p>Strong placement assistance with partner clinics & studios</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>US-FDA Approved</h4>
              <p>Hands-on labs with industry-standard protocols</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Flexible Learning</h4>
              <p>Weekday/weekend batches + app-based learning resources</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="section-block" style={{ background: '#fff', padding: '30px', borderRadius: '12px', marginBottom: '40px' }}>
          <h3 style={{ marginBottom: '20px', color: '#8b5e3c' }}>Filter Courses</h3>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Category:</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ddd', minWidth: '120px' }}
              >
                <option value="All">All</option>
                <option value="Degree">Degree</option>
                <option value="PG Diploma">PG Diploma</option>
                <option value="Diploma">Diploma</option>
                <option value="Certification">Certification</option>
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Duration:</label>
              <select 
                value={selectedDuration} 
                onChange={(e) => setSelectedDuration(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ddd', minWidth: '120px' }}
              >
                <option value="All">All</option>
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Track:</label>
              <select 
                value={selectedTrack} 
                onChange={(e) => setSelectedTrack(e.target.value)}
                style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #ddd', minWidth: '120px' }}
              >
                <option value="All">All</option>
                <option value="Lasers">Lasers</option>
                <option value="Medi-Facials">Medi-Facials</option>
                <option value="Skin">Skin</option>
                <option value="Hair">Hair</option>
                <option value="PMU">PMU</option>
                <option value="Anti-Aging">Anti-Aging</option>
                <option value="Nutrition">Nutrition</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
  <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} id={course.anchorId ? course.anchorId : course.title.replace(/\s+/g, '-').toLowerCase()} className="faculty-card" style={{ textAlign: 'left', padding: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                  <span style={{ 
                    background: '#8b5e3c', 
                    color: 'white', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem',
                    marginRight: '10px'
                  }}>
                    {course.category}
                  </span>
                  <span style={{ 
                    background: '#f9f6f2', 
                    color: '#8b5e3c', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.8rem'
                  }}>
                    {course.duration}
                  </span>
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#8b5e3c' }}>
                  {course.fee}
                </div>
              </div>
              
              <h3 style={{ color: '#8b5e3c', marginBottom: '10px', fontSize: '1.4rem' }}>
                {course.title}
              </h3>
              
              <p style={{ marginBottom: '15px', fontStyle: 'italic' }}>
                {course.description}
              </p>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#8b5e3c', marginBottom: '8px' }}>Track Tags:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {course.tracks.map((track, idx) => (
                    <span key={idx} style={{ 
                      background: '#e7dcd1', 
                      color: '#8b5e3c', 
                      padding: '2px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem'
                    }}>
                      {track}
                    </span>
                  ))}
                </div>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#8b5e3c', marginBottom: '8px' }}>What you'll learn:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  {course.modules.slice(0, 3).map((module, idx) => (
                    <li key={idx} style={{ marginBottom: '5px', fontSize: '0.9rem' }}>{module}</li>
                  ))}
                  {course.modules.length > 3 && (
                    <li style={{ fontStyle: 'italic', color: '#666' }}>...and more</li>
                  )}
                </ul>
              </div>
              
              <div style={{ marginBottom: '15px' }}>
                <h4 style={{ color: '#8b5e3c', marginBottom: '8px' }}>Outcomes:</h4>
                <ul style={{ marginLeft: '20px' }}>
                  {course.outcomes.map((outcome, idx) => (
                    <li key={idx} style={{ marginBottom: '5px', fontSize: '0.9rem' }}>{outcome}</li>
                  ))}
                </ul>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#8b5e3c', marginBottom: '8px' }}>Ideal for:</h4>
                <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>{course.idealFor}</p>
              </div>
              
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button 
                onClick={() => navigate("/apply")}
                style={{ 
                  background: '#8b5e3c', 
                  color: 'white', 
                  border: 'none', 
                  padding: '10px 20px', 
                  borderRadius: '6px', 
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  Apply Now
                </button>
                <button
                onClick={() => {
                  if (course.category === 'Certification') {
                    navigate('/certifications');
                  } else if (course.category === 'Diploma' || course.category === 'PG Diploma') {
                    navigate('/diploma-programs');
                  } else if (course.category === 'Degree') {
                    navigate('/degree-masters');
                  }
                }}
                 style={{ 
                  background: 'transparent', 
                  color: '#8b5e3c', 
                  border: '1px solid #8b5e3c', 
                  padding: '10px 20px', 
                  borderRadius: '6px', 
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginTop: '50px' }}>
          <h2>Tools, Technologies & Learning Support</h2>
          <div className="courses-grid" style={{ marginTop: '20px' }}>
            <div>
              <h4 style={{ color: '#8b5e3c' }}>US-FDA Approved Devices</h4>
              <p>Exposure to industry-grade dermal tools</p>
            </div>
            <div>
              <h4 style={{ color: '#8b5e3c' }}>App-Based Learning</h4>
              <p>Video demos, SOP sheets, dosage/parameter references</p>
            </div>
            <div>
              <h4 style={{ color: '#8b5e3c' }}>Assessment System</h4>
              <p>OSCEs, case records, viva & capstone projects</p>
            </div>
            <div>
              <h4 style={{ color: '#8b5e3c' }}>Post-Certification Support</h4>
              <p>Alumni groups, job alerts, protocol updates for one year</p>
            </div>
          </div>
        </div>

        {/* Guidance Section */}
        <div className="section-block" style={{ background: '#f9f6f2', padding: '40px', borderRadius: '12px', textAlign: 'center' }}>
          <h2>Need Guidance?</h2>
          <p style={{ marginBottom: '25px' }}>
            Unsure which program aligns with your goals? Book a free counselling session and get a personalised roadmap.
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
              cursor: 'pointer'
            }}>
              Book Free Counselling
            </button>
            <button
              onClick={() => navigate("/apply")}
             style={{ 
              background: 'transparent', 
              color: '#8b5e3c', 
              border: '2px solid #8b5e3c', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer'
            }}>
              Apply Now
            </button>
            <button
             onClick={() => window.open(
              "https://wa.me/9910478281?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20the%20course.",
                "_blank")}
             style={{ 
              background: '#7B967A', 
              color: 'white', 
              border: 'none', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer'
            }}>
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Scholarship Section */}
        <div className="section-block" style={{ background: '#fff', padding: '30px', borderRadius: '12px', marginTop: '30px' }}>
          <h3 style={{ color: '#8b5e3c', marginBottom: '15px' }}>Scholarship & Support</h3>
          <p>Merit- and need-based scholarships available (limited seats). EMI options offered. Speak with admissions for eligibility.</p>
        </div>

        {/* Final CTA */}
        <div className="section-block" style={{ background: '#8b5e3c', color: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', marginTop: '30px' }}>
          <h2 style={{ color: 'white', marginBottom: '15px' }}>Ready to Begin Your Journey?</h2>
          <p style={{ marginBottom: '25px', color: '#f9f6f2' }}>
            Join AngelLife International Institute—Bharat's trusted & awarded institute for cosmetology, aesthetics & wellness.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate("/apply")}
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
            <button
             onClick={() => navigate('/download-brochure')}
             style={{ 
              background: 'transparent', 
              color: 'white', 
              border: '2px solid white', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer'
            }}>
              Download Brochure
            </button>
            <button 
            onClick={() => navigate("/contact")} 
            style={{ 
              background: 'transparent', 
              color: 'white', 
              border: '2px solid white', 
              padding: '12px 25px', 
              borderRadius: '8px', 
              cursor: 'pointer'
            }}>
              Find a Center
            </button>
          </div>
        </div>

      </section>
    </Layout>
  );
};

export default Courses;
