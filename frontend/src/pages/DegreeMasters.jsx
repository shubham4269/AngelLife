import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import "./Academic.css";

const DegreeMasters = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const navigate = useNavigate();

  const degreePrograms = [
    {
      id: 1,
      title: 'B.Sc – Cosmetology & Wellness',
      duration: '3 Years',
      level: 'Undergraduate',
      category: 'Bachelor\'s Degree',
      type: 'Foundation',
      overview: 'A comprehensive degree covering the fundamentals of skin, hair, and wellness sciences. Students gain in-depth understanding of cosmetic chemistry, anatomy, and practical skills through extensive lab sessions and internships that bridge academic theory with real-world practice.',
      learningFocus: [
        'Anatomy and physiology of skin, hair, and body',
        'Cosmetic formulation & product science',
        'Skincare, haircare, and nailcare protocols',
        'Wellness therapies & nutrition',
        'Salon & spa management fundamentals',
        'Business communication and client handling',
        'Applied cosmetology project and case study presentations'
      ],
      learningOutcomes: [
        'Develop a scientific understanding of cosmetology and wellness principles',
        'Ability to design, conduct, and document complete beauty service cycles',
        'Build entrepreneurial and leadership skills for managing salons, spas, or clinics',
        'Solid foundation for postgraduate studies or independent professional practice'
      ],
      careerPathways: [
        'Clinical cosmetologist',
        'Skin & hair consultant',
        'Wellness manager',
        'Spa trainer',
        'Research & product development associate',
        'Salon entrepreneur'
      ],
      fee: '₹3,50,000'
    },
    {
      id: 2,
      title: 'M.Sc – Cosmetology & Wellness',
      duration: '2 Years',
      level: 'Postgraduate',
      category: 'Master\'s Degree',
      type: 'Advanced',
      overview: 'An advanced postgraduate program that integrates holistic wellness, applied cosmetology, and scientific research. Ideal for graduates who wish to advance into managerial, academic, or entrepreneurial roles within the beauty and wellness sector.',
      learningFocus: [
        'Advanced cosmetic science and formulation technology',
        'Clinical protocols for skin, hair, and body treatments',
        'Device-based services & technological innovations',
        'Client case mapping and documentation',
        'Research methodology & dissertation writing',
        'Business management, branding, and marketing strategies',
        'Emerging global practices in wellness science'
      ],
      learningOutcomes: [
        'Capability to plan advanced service programs and clinical mapping',
        'Competence in handling aesthetic devices and wellness diagnostics',
        'Enhanced ability to lead and train teams in professional setups',
        'Exposure to global best practices and research-backed aesthetic protocols'
      ],
      careerPathways: [
        'Senior cosmetologist',
        'Academic trainer',
        'Aesthetic consultant',
        'Wellness chain manager',
        'Research associate',
        'Institute faculty member'
      ],
      fee: '₹4,75,000'
    },
    {
      id: 3,
      title: 'M.Sc – Facial Aesthetics & Cosmetology (Medical)',
      duration: '2 Years',
      level: 'Medical Postgraduate',
      category: 'Medical Master\'s',
      type: 'Specialized',
      overview: 'An exclusive program designed for medical professionals seeking to integrate aesthetic medicine with modern cosmetology. The course provides an advanced understanding of facial analysis, injectables, laser science, and patient care—bridging the gap between medical science and aesthetic practice.',
      learningFocus: [
        'Facial anatomy, assessment, and documentation',
        'Evidence-based aesthetic procedures and safety',
        'Laser science, calibration & parameter settings',
        'Peels, injectables, and rejuvenation techniques',
        'Complication management and medico-legal compliance',
        'Case presentations & research paper preparation'
      ],
      learningOutcomes: [
        'Integration of facial aesthetics into existing medical or dental practice',
        'Competence in advanced patient consultation and procedural planning',
        'Proficiency in safe use of devices and chemical procedures',
        'Strong understanding of medico-legal and ethical standards in aesthetics'
      ],
      careerPathways: [
        'Aesthetic physician',
        'Medical cosmetologist',
        'Consultant dermatologist',
        'Clinical trainer',
        'Facial aesthetics practitioner',
        'Aesthetic medicine faculty'
      ],
      fee: '₹6,25,000'
    }
  ];

  const academicSupport = [
    {
      title: 'Expert Mentorship',
      description: 'Mentorship from leading medical and beauty professionals with industry experience',
      icon: '👨‍🏫'
    },
    {
      title: 'Digital Learning Platform',
      description: 'App-based course tracking, notes & assignment submission for seamless learning',
      icon: '📱'
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Access to fully equipped labs and training centers across multiple cities',
      icon: '🏥'
    },
    {
      title: 'Research Support',
      description: 'Research and project mentorship for postgraduate students with publication opportunities',
      icon: '🔬'
    },
    {
      title: 'Industry Placement',
      description: 'Placement and internship opportunities with AngelLife\'s partner institutions',
      icon: '🤝'
    },
    {
      title: 'Alumni Network',
      description: 'Lifetime access to alumni network and professional community events',
      icon: '🌐'
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
            Degree & Master's Programs
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#5c4a3d', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            Build a Strong Academic Foundation in Cosmetology, Aesthetics & Wellness. AngelLife's university-affiliated and postgraduate programs combine science, artistry, and clinical precision—preparing you for leadership roles in the beauty, wellness, and aesthetics industries.
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
            <span style={{ fontSize: '1.5rem' }}>🎓</span>
            Degree & Master's Programs Overview
          </h2>
          <h3 style={{ color: '#8b5e3c', marginBottom: '20px' }}>Academic Excellence in Beauty & Wellness</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>University Affiliated</h4>
              <p>Recognized degree programs with academic rigor and industry-relevant curriculum.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Research Focus</h4>
              <p>Research methodology and thesis projects with publication opportunities.</p>
            </div>
            <div style={{ padding: '20px', background: '#f9f6f2', borderRadius: '8px' }}>
              <h4 style={{ color: '#8b5e3c', marginBottom: '10px' }}>Clinical Training</h4>
              <p>Extensive hands-on experience in state-of-the-art facilities and partner clinics.</p>
            </div>
          </div>
        </div>

        {/* Degree Programs */}
        <div className="section-block" style={{ background: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '50px' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
            <span style={{ fontSize: '1.5rem' }}>📚</span>
            Available Degree & Master's Programs
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '30px',
            marginBottom: '40px'
          }}>
            {degreePrograms.map(program => (
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
            Common Benefits Across Degree Programs
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
            Ready to Start Your Academic Journey?
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

export default DegreeMasters;