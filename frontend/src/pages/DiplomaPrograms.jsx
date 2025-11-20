import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import "./Academic.css";

const DiplomaPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const navigate = useNavigate();

  const diplomaPrograms = [
    {
      id: 1,
      title: 'Diploma – Cosmetology & Wellness',
      duration: '1 Year',
      level: 'Professional',
      category: 'Cosmetology',
      overview: 'A practice-oriented program for individuals aiming to start or enhance their careers in cosmetology. The course blends classroom instruction with real-time practice, ensuring complete job readiness.',
      learningFocus: [
        'Skin analysis, facial & medi-facial techniques',
        'Hair and scalp care: spa, treatment & styling',
        'Basic and advanced beauty service protocols',
        'Client consultation & hygiene procedures',
        'Practical exposure with salon and clinic tools'
      ],
      learningOutcomes: [
        'Develop professional service execution and client-handling skills',
        'Learn essential diagnostic and documentation standards',
        'Become confident in both salon and clinical work environments'
      ],
      practicalTraining: [
        'Weekly lab sessions & mock service simulations',
        'Assessment through demonstrations and viva exams',
        'Supervised internship with AngelLife\'s partner centers'
      ],
      careerPathways: [
        'Salon professional', 
        'Spa therapist', 
        'Beauty consultant', 
        'Cosmetology assistant', 
        'Independent service provider'
      ],
      fee: '₹85,000'
    },
    {
      id: 2,
      title: 'Diploma – Facial Aesthetics & Cosmetology (Medical)',
      duration: '2 Years',
      level: 'Advanced Medical',
      category: 'Medical Cosmetology',
      overview: 'Tailored for graduates and medical professionals seeking to advance in facial aesthetic sciences and non-surgical cosmetology.',
      learningFocus: [
        'Facial analysis, anatomy & client assessment',
        'Advanced medi-facials and peel techniques',
        'Introduction to aesthetic devices and laser safety',
        'Case studies, complication handling & client records'
      ],
      learningOutcomes: [
        'Work confidently under clinical setups',
        'Manage procedures with precision and safety',
        'Gain exposure to medical-grade aesthetic procedures'
      ],
      practicalTraining: [
        'Clinical simulation labs with medical-grade equipment',
        'Case-based learning with real patient scenarios',
        'Mentorship under qualified medical practitioners'
      ],
      careerPathways: [
        'Aesthetic consultant',
        'Assistant to dermatologist',
        'Medical cosmetology practitioner',
        'Clinical trainer'
      ],
      fee: '₹1,75,000'
    }
  ];

  const academicSupport = [
    {
      title: 'Flexible Batch Options',
      description: 'Designed for working professionals with evening and weekend schedules',
      icon: '⏰'
    },
    {
      title: 'Digital Resources',
      description: 'Access to app-based resources & recorded sessions for continuous learning',
      icon: '📱'
    },
    {
      title: 'Career Assistance',
      description: 'One-year post-course career assistance & alumni networking support',
      icon: '🤝'
    }
  ];

  const handleApplyNow = () => {
    navigate('/apply');
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
            Diploma Programs
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5c4a3d', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Professional Diploma Courses in Cosmetology & Wellness. Get hands-on experience with advanced beauty and wellness techniques, guided by expert mentors and equipped with industry-standard tools.
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
            <button onClick={handleTalkToCounsellor} style={{ 
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
            <button onClick={handleDownloadBrochure}
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
            <span style={{ fontSize: '1.5rem' }}>📜</span>
            Diploma Programs Overview
          </h2>
          <h3 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Professional Skills Development</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Hands-On Training</h4>
              <p>Extensive practical sessions with industry-standard tools and techniques.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Expert Mentors</h4>
              <p>Guided by experienced professionals with real-world industry expertise.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Career Ready</h4>
              <p>Job-oriented curriculum designed for immediate employment opportunities.</p>
            </div>
          </div>
        </div>

        {/* Diploma Programs */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
            <span style={{ fontSize: '1.5rem' }}>📋</span>
            Available Diploma Programs
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px',
            marginBottom: '40px'
          }}>
            {diplomaPrograms.map(program => (
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

                {/* Learning Focus Preview */}
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#8b5e3c', marginBottom: '8px' }}>Learning Focus:</h4>
                  <ul style={{ marginLeft: '20px' }}>
                    {program.learningFocus.slice(0, 3).map((focus, idx) => (
                      <li key={idx} style={{ marginBottom: '5px', fontSize: '0.9rem' }}>{focus}</li>
                    ))}
                    {program.learningFocus.length > 3 && (
                      <li style={{ fontStyle: 'italic', color: '#666' }}>...and more</li>
                    )}
                  </ul>
                </div>
                
                <div style={{ marginBottom: '15px' }}>
                  <h4 style={{ color: '#8b5e3c', marginBottom: '8px' }}>Career Pathways:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {program.careerPathways.slice(0, 2).map((path, idx) => (
                      <span key={idx} style={{ 
                        background: '#e7dcd1', 
                        color: '#8b5e3c', 
                        padding: '2px 8px', 
                        borderRadius: '12px', 
                        fontSize: '0.8rem'
                      }}>
                        {path}
                      </span>
                    ))}
                    {program.careerPathways.length > 2 && (
                      <span style={{
                        background: '#e7dcd1',
                        color: '#666',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '0.8rem'
                      }}>
                        +{program.careerPathways.length - 2} more
                      </span>
                    )}
                  </div>
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
                    marginTop: '15px',
                    borderRadius: '8px'
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
                          Complete Learning Focus
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

                    {/* Practical Training */}
                    <div style={{ marginTop: '20px' }}>
                      <h4 style={{ 
                        color: '#8b5e3c', 
                        marginBottom: '12px',
                        fontSize: '1.1rem'
                      }}>
                        Practical Training
                      </h4>
                      <ul style={{ 
                        listStyle: 'none', 
                        padding: '0',
                        margin: '0'
                      }}>
                        {program.practicalTraining.map((training, index) => (
                          <li key={index} style={{ 
                            marginBottom: '8px',
                            color: '#5c4a3d',
                            fontSize: '0.9rem',
                            paddingLeft: '15px',
                            position: 'relative'
                          }}>
                            <span style={{
                              content: '🎯',
                              position: 'absolute',
                              left: '0'
                            }}>🎯</span>
                            {training}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career Pathways */}
                    <div style={{ marginTop: '20px' }}>
                      <h4 style={{ 
                        color: '#8b5e3c', 
                        marginBottom: '12px',
                        fontSize: '1.1rem'
                      }}>
                        All Career Pathways
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
            Common Benefits Across Diploma Programs
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px'
          }}>
            {academicSupport.map((benefit, index) => (
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
                  {benefit.icon}
                </div>
                <p style={{ 
                  color: '#5c4a3d',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  margin: '0'
                }}>
                  {benefit.description}
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
            Ready to Start Your Professional Journey?
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

export default DiplomaPrograms;