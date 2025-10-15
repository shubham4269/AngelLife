import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import "./Academic.css";

const Certifications = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const navigate = useNavigate();

  const certificationPrograms = [
    {
      id: 1,
      title: 'Certification – Makeup Artistry (Basic)',
      duration: '1 Month',
      level: 'Basic',
      category: 'Makeup',
      overview: 'Learn essential makeup artistry foundations—skin preparation, base blending, and look creation. This program is ideal for beginners looking to enter the makeup industry with hands-on practice and guided mentorship.',
      learningFocus: [
        'Skin prep & product selection',
        'Foundation blending & correction',
        'Day, party & natural makeup looks',
        'Hygiene and client safety',
        'Brush techniques and product knowledge'
      ],
      learningOutcomes: [
        'Build a beginner\'s professional portfolio',
        'Develop salon & freelance readiness',
        'Understand lighting & basic photography angles',
        'Gain confidence to manage clients independently'
      ],
      careerPathways: ['Makeup artist', 'Beauty advisor', 'Freelance service provider'],
      fee: '₹15,000',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400'
    },
    {
      id: 2,
      title: 'Certification – Makeup Artistry (Advanced)',
      duration: '3 Months',
      level: 'Advanced',
      category: 'Makeup',
      overview: 'Master advanced makeup concepts, including HD, bridal, and editorial techniques, to craft signature looks for different events. This course provides both artistic development and technical expertise required in high-end salons and shoots.',
      learningFocus: [
        'Bridal & HD makeup',
        'Contouring, airbrushing & color correction',
        'Lighting & photography readiness',
        'Client consultation & trials',
        'Product customization for skin tones and occasions'
      ],
      learningOutcomes: [
        'Build a professional makeup portfolio',
        'Work confidently in bridal studios or fashion shoots',
        'Gain exposure to industry-grade products and tools'
      ],
      careerPathways: ['Bridal stylist', 'Makeup educator', 'Salon professional'],
      fee: '₹35,000',
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400'
    },
    {
      id: 3,
      title: 'Certification – Hair Dressing (Basic)',
      duration: '1 Month',
      level: 'Basic',
      category: 'Hair',
      overview: 'Get foundational training in salon-ready hair services and learn the essentials of client styling. Perfect for newcomers seeking an entry into the beauty and grooming industry.',
      learningFocus: [
        'Shampooing, sectioning & blow-drying',
        'Basic cutting & finishing',
        'Hair hygiene and product selection',
        'Essential styling tools & safety'
      ],
      learningOutcomes: [
        'Perform entry-level salon services',
        'Understand basic client management',
        'Build salon discipline and workflow understanding'
      ],
      careerPathways: ['Junior hairstylist', 'Salon assistant', 'Freelance hairdresser'],
      fee: '₹18,000',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400'
    },
    {
      id: 4,
      title: 'Certification – Hair Dressing (Advanced)',
      duration: '3 Months',
      level: 'Advanced',
      category: 'Hair',
      overview: 'Enhance your skill set with advanced haircutting, coloring, and styling techniques that meet global salon standards. This course is perfect for existing professionals looking to upgrade their craft.',
      learningFocus: [
        'Advanced haircutting techniques',
        'Hair coloring, highlights, and toning',
        'Styling for events and shoots',
        'Hair texture understanding & chemical treatments',
        'Finishing, polishing & client aftercare'
      ],
      learningOutcomes: [
        'Build a professional hair portfolio',
        'Develop confidence for independent practice',
        'Execute modern styling trends & manage premium clients'
      ],
      careerPathways: ['Senior hairstylist', 'Hair colorist', 'Salon trainer'],
      fee: '₹42,000',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400'
    },
    {
      id: 5,
      title: 'Certification – Permanent Makeup (PMU)',
      duration: '3 Months',
      level: 'Specialized',
      category: 'PMU',
      overview: 'A specialized program for those aspiring to become PMU professionals. This certification blends theory and practical training to master precision-based semi-permanent makeup artistry.',
      learningFocus: [
        'Brow mapping, micro‑pigmentation basics',
        'Machine handling & pigment selection',
        'Client safety, hygiene & aftercare',
        'Color theory & correction',
        'Handling client sensitivity & consultation'
      ],
      learningOutcomes: [
        'Execute safe & precise PMU procedures',
        'Maintain client confidence through post-care guidance',
        'Build a client portfolio & master consultation flow'
      ],
      careerPathways: ['PMU artist', 'Aesthetic assistant', 'Freelance micro‑pigmentation specialist'],
      fee: '₹55,000',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400'
    }
  ];

  const commonBenefits = [
    'Compact schedules with flexible timings',
    'Guided by experienced mentors and practitioners',
    'App-based access to lessons & updates',
    'Alumni networking and support for one year',
    'Access to exclusive workshops & webinars'
  ];

  const handleApplyNow = () => {
    navigate('/contact');
  };

  const handleTalkToCounsellor = () => {
    window.open('tel:+918123456789', '_self');
  };

  const handleDownloadBrochure = () => {
    navigate('/download-brochure');
  };

  return (
    <Layout>
      <section className="academics-section">
        {/* Hero Section */}
        <div className="section-block" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#8b5e3c', marginBottom: '15px' }}>
            Certification Programs
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5c4a3d', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Short-Term Certifications to Build Professional Skills Quickly. AngelLife's certification programs are designed for rapid, skill-based learning. Each course is compact, practical, and aligned with the latest beauty and wellness trends, preparing you for immediate professional opportunities.
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
            <button onClick={() => navigate("/apply")} style={{ 
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
            <button onClick={() => {
               const link = document.createElement("a");
                link.href = "/brochure.pdf";
                link.download = "AngelLife-Brochure.pdf";
                 link.click();
                 }}
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

        {/* Program Overview */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.5rem' }}>🎓</span>
            Certification Programs Overview
          </h2>
          <h3 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Professional Skills Development</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Quick Learning</h4>
              <p>Compact schedules with flexible timings designed for rapid skill acquisition.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Expert Mentors</h4>
              <p>Guided by experienced mentors and practitioners with industry expertise.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Digital Support</h4>
              <p>App-based access to lessons, updates, and alumni networking for one year.</p>
            </div>
          </div>
        </div>

        {/* Certification Programs */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
            <span style={{ fontSize: '1.5rem' }}>📋</span>
            Available Certification Programs
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px',
            marginBottom: '40px'
          }}>
            {certificationPrograms.map(program => (
              <div key={program.id} style={{ 
                background: '#fff',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid #f0f0f0',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = '#8b5e3c';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = '#f0f0f0';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                {/* Card Header */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <div>
                      <span style={{ 
                        background: '#8b5e3c', 
                        color: 'white', 
                        padding: '4px 12px', 
                        borderRadius: '20px', 
                        fontSize: '0.8rem',
                        marginRight: '10px'
                      }}>
                        {program.level}
                      </span>
                      <span style={{ 
                        background: '#f9f6f2', 
                        color: '#8b5e3c', 
                        padding: '4px 12px', 
                        borderRadius: '20px', 
                        fontSize: '0.8rem'
                      }}>
                        {program.duration}
                      </span>
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#8b5e3c' }}>
                      {program.fee}
                    </div>
                  </div>
                  
                  <h3 style={{ color: '#8b5e3c', marginBottom: '10px', fontSize: '1.4rem' }}>
                    {program.title}
                  </h3>
                  
                  <p style={{ marginBottom: '15px', fontStyle: 'italic' }}>
                    {program.overview}
                  </p>
                </div>

                {/* Action Buttons */}
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
                    onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                    style={{ 
                      background: 'transparent', 
                      color: '#8b5e3c', 
                      border: '1px solid #8b5e3c', 
                      padding: '10px 20px', 
                      borderRadius: '6px', 
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}>
                    {selectedProgram === program.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedProgram === program.id && (
                  <div style={{ 
                    background: '#f9f6f2', 
                    padding: '25px',
                    borderTop: '1px solid #e0e0e0'
                  }}>
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                      gap: '25px'
                    }}>
                      {/* Learning Focus */}
                      <div>
                        <h4 style={{ 
                          color: '#8b5e3c', 
                          marginBottom: '12px',
                          fontSize: '1.1rem'
                        }}>
                          Learning Focus
                        </h4>
                        <ul style={{ 
                          listStyle: 'none', 
                          padding: '0',
                          margin: '0'
                        }}>
                          {program.learningFocus.map((focus, index) => (
                            <li key={index} style={{ 
                              marginBottom: '8px',
                              color: '#5c4a3d',
                              fontSize: '0.9rem',
                              paddingLeft: '15px',
                              position: 'relative'
                            }}>
                              <span style={{
                                content: '•',
                                color: '#8b5e3c',
                                position: 'absolute',
                                left: '0'
                              }}>•</span>
                              {focus}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learning Outcomes */}
                      <div>
                        <h4 style={{ 
                          color: '#8b5e3c', 
                          marginBottom: '12px',
                          fontSize: '1.1rem'
                        }}>
                          Learning Outcomes
                        </h4>
                        <ul style={{ 
                          listStyle: 'none', 
                          padding: '0',
                          margin: '0'
                        }}>
                          {program.learningOutcomes.map((outcome, index) => (
                            <li key={index} style={{ 
                              marginBottom: '8px',
                              color: '#5c4a3d',
                              fontSize: '0.9rem',
                              paddingLeft: '15px',
                              position: 'relative'
                            }}>
                              <span style={{
                                content: '✓',
                                color: '#28a745',
                                position: 'absolute',
                                left: '0',
                                fontWeight: 'bold'
                              }}>✓</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Career Pathways */}
                    <div style={{ marginTop: '20px' }}>
                      <h4 style={{ 
                        color: '#8b5e3c', 
                        marginBottom: '12px',
                        fontSize: '1.1rem'
                      }}>
                        Career Pathways
                      </h4>
                      <div style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '10px'
                      }}>
                        {program.careerPathways.map((path, index) => (
                          <span key={index} style={{
                            background: '#8b5e3c',
                            color: 'white',
                            padding: '8px 15px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}>
                            {path}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Common Benefits Section */}
        <div className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '50px'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            textAlign: 'center', 
            marginBottom: '30px',
            fontSize: '2rem'
          }}>
            Common Benefits Across Certifications
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px'
          }}>
            {commonBenefits.map((benefit, index) => (
              <div key={index} style={{ 
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                border: '2px solid #8b5e3c20'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#8b5e3c',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  fontSize: '1.5rem'
                }}>
                  {index === 0 && '⏰'}
                  {index === 1 && '👨‍🏫'}
                  {index === 2 && '📱'}
                  {index === 3 && '🤝'}
                  {index === 4 && '🎯'}
                </div>
                <p style={{ 
                  color: '#5c4a3d',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  margin: '0'
                }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="section-block" style={{ 
          background: '#8b5e3c', 
          color: 'white', 
          padding: '50px', 
          borderRadius: '15px',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            color: 'white', 
            marginBottom: '20px',
            fontSize: '2.2rem'
          }}>
            Ready to Start Your Certification Journey?
          </h2>
          <p style={{ 
            color: '#f9f6f2', 
            fontSize: '1.1rem',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Take the first step towards advancing your career in beauty and wellness. Our expert counsellors are here to guide you.
          </p>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '20px',
            justifyContent: 'center'
          }}>
            <button 
              onClick={handleApplyNow}
              style={{
                background: 'white',
                color: '#8b5e3c',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#f0f0f0';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'white';
              }}
            >
              Apply Now
            </button>
            <button 
              onClick={handleTalkToCounsellor}
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#8b5e3c';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              Talk to Counsellor
            </button>
            <button 
              onClick={handleDownloadBrochure}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)',
                padding: '15px 30px',
                borderRadius: '25px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.2)';
              }}
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;