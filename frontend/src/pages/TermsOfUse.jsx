import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./Academic.css";

const TermsOfUse = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const prohibitedConductItems = [
    "Attempt to interfere with the operation or security of the Services",
    "Upload malicious code, perform automated scraping, or engage in spam",
    "Misrepresent identity, qualifications, or authorisation when applying",
    "Use downloads (e.g., brochures) for resale, republication, or misleading advertising"
  ];

  const keyPoints = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description: "Comprehensive programs with hands-on training and industry exposure"
    },
    {
      icon: "📋",
      title: "Clear Policies",
      description: "Transparent admission, payment, and refund policies"
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "Safe and secure online services with data protection"
    },
    {
      icon: "🤝",
      title: "Support Services",
      description: "Dedicated counselling and placement assistance"
    }
  ];

  return (
    <Layout>
      <section className="academics-section">
        {/* Header Section */}
        <div className="section-block" style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          background: 'linear-gradient(135deg, #8b5e3c 0%, #a0704f 100%)',
          color: 'white',
          padding: '60px 40px',
          borderRadius: '20px'
        }}>
          <h1 style={{ 
            fontSize: '3rem', 
            color: 'white', 
            marginBottom: '15px',
            fontWeight: '700'
          }}>
            Terms of Use
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(255,255,255,0.9)', 
            marginBottom: '20px',
            fontWeight: '500'
          }}>
            Last updated: October 2025
          </p>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255,255,255,0.95)', 
            maxWidth: '900px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Welcome to AngelLife International Institute ("AngelLife," "we," "us," or "our"). 
            By accessing or using our website, forms, downloadable brochures, or any services provided through angellife.in 
            (collectively, the "Services"), you agree to these Terms of Use.
          </p>
        </div>

        {/* Key Points Overview */}
        <div className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '40px',
          border: '2px solid #8b5e3c'
        }}>
          <h3 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.5rem',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            📖 Agreement Overview
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px'
          }}>
            {keyPoints.map((point, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid #8b5e3c',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '15px'
                }}>
                  {point.icon}
                </div>
                <h4 style={{
                  color: '#8b5e3c',
                  marginBottom: '10px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {point.title}
                </h4>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '0.95rem',
                  margin: '0',
                  lineHeight: '1.4'
                }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: '25px',
            padding: '20px',
            background: 'white',
            borderRadius: '10px',
            border: '2px solid #8b5e3c',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#5c4a3d',
              fontSize: '1rem',
              margin: '0',
              fontWeight: '500'
            }}>
              ⚠️ If you do not agree to these terms, please do not use our Services.
            </p>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '30px', 
          borderRadius: '15px',
          marginBottom: '40px',
          border: '2px solid #8b5e3c'
        }}>
          <h3 style={{ 
            color: '#8b5e3c', 
            marginBottom: '20px',
            fontSize: '1.3rem',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            🧭 Quick Navigation
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '12px'
          }}>
            {[
              "Eligibility", "Academic Information", "Admissions & Payments", "Communication",
              "Intellectual Property", "Prohibited Conduct", "Third‑Party Services", "Placements",
              "Health & Safety", "Disclaimers", "Liability", "Indemnification",
              "Termination", "Governing Law", "Term Changes", "Contact"
            ].map((section, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: '1px solid #8b5e3c',
                  textDecoration: 'none',
                  color: '#8b5e3c',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#8b5e3c';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.8)';
                  e.target.style.color = '#8b5e3c';
                }}
              >
                {section}
              </a>
            ))}
          </div>
        </div>

        {/* 1. Eligibility & Acceptance */}
        <div id="section-1" className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #8b5e3c'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            1️⃣ Eligibility & Acceptance
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #8b5e3c',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>👤</div>
              <div>
                <h4 style={{
                  color: '#8b5e3c',
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  Age Requirement
                </h4>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '1rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  You affirm that you are at least 18 years old or using the Services with the consent and supervision of a parent/guardian.
                </p>
              </div>
            </div>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #8b5e3c',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>✍️</div>
              <div>
                <h4 style={{
                  color: '#8b5e3c',
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  Acceptance
                </h4>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '1rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  Your continued use of the Services constitutes acceptance of these Terms and our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Academic Information & Non‑Medical Advice */}
        <div id="section-2" className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #8b5e3c'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            2️⃣ Academic Information & Non‑Medical Advice
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #8b5e3c',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>📚</div>
              <div>
                <h4 style={{
                  color: '#8b5e3c',
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  Program Information
                </h4>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '1rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  Program information, course outlines, fees, scholarships, placements, and centre details are subject to periodic updates.
                </p>
              </div>
            </div>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #8b5e3c',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>⚕️</div>
              <div>
                <h4 style={{
                  color: '#8b5e3c',
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  Non-Medical Advice
                </h4>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '1rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  Content provided on the website/brochures is for informational purposes only and does not constitute medical advice. Medical programs require appropriate qualifications and registrations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Admissions, Payments & Scholarships */}
        <div id="section-3" className="section-block" style={{ 
          background: 'linear-gradient(135deg, #f9f6f2 0%, #e7dcd1 100%)', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '3px solid #8b5e3c'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            3️⃣ Admissions, Payments & Scholarships
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {[
              {
                icon: "✅",
                title: "Admission Decisions",
                text: "Admission decisions are based on eligibility, document verification, and seat availability."
              },
              {
                icon: "🎓",
                title: "Scholarships & EMI",
                text: "Scholarships/EMI options are limited and subject to eligibility criteria."
              },
              {
                icon: "💳",
                title: "Payment Policies",
                text: "Payments, refunds, and deferments are governed by the Institute's policies communicated at the time of admission."
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.8)',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px'
              }}>
                <div style={{ fontSize: '1.8rem' }}>{item.icon}</div>
                <div>
                  <h4 style={{
                    color: '#8b5e3c',
                    marginBottom: '8px',
                    fontSize: '1.05rem',
                    fontWeight: '600'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: '#5c4a3d',
                    fontSize: '0.95rem',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Accounts, Forms & Communication */}
        <div id="section-4" className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #8b5e3c'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            4️⃣ Accounts, Forms & Communication
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {[
              {
                icon: "📝",
                title: "Accurate Information",
                text: "You agree that information submitted via application/enquiry forms is accurate and up to date."
              },
              {
                icon: "📞",
                title: "Contact Authorization",
                text: "You authorise AngelLife to contact you via phone, email, or messaging apps for counselling and admission support."
              },
              {
                icon: "🔐",
                title: "Security Verification",
                text: "We may use OTP/CAPTCHA to verify submissions and prevent abuse."
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid #8b5e3c',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px'
              }}>
                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                <div>
                  <h4 style={{
                    color: '#8b5e3c',
                    marginBottom: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: '#5c4a3d',
                    fontSize: '1rem',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Intellectual Property */}
        <div id="section-5" className="section-block" style={{ 
          background: 'linear-gradient(135deg, #f9f6f2 0%, #e7dcd1 100%)', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '3px solid #8b5e3c'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            5️⃣ Intellectual Property
          </h2>
          <div style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '30px',
            borderRadius: '15px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div style={{ fontSize: '3rem' }}>©️</div>
              <div>
                <h4 style={{
                  color: '#8b5e3c',
                  marginBottom: '10px',
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}>
                  Protected Content
                </h4>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '1rem',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  All text, graphics, logos, photographs, videos, downloads, and other content on the Services are the intellectual property of AngelLife or its licensors.
                </p>
              </div>
            </div>
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              border: '2px solid #8b5e3c'
            }}>
              <p style={{
                color: '#8b5e3c',
                fontSize: '1rem',
                margin: '0',
                fontWeight: '500'
              }}>
                🚫 You may not copy, reproduce, modify, distribute, or create derivative works without prior written permission.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Permitted Use & Prohibited Conduct */}
        <div id="section-6" className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #8b5e3c'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            6️⃣ Permitted Use & Prohibited Conduct
          </h2>
          <p style={{ 
            color: '#5c4a3d',
            fontSize: '1.1rem',
            marginBottom: '25px',
            lineHeight: '1.6'
          }}>
            You agree not to:
          </p>
          <div style={{
            display: 'grid',
            gap: '15px'
          }}>
            {prohibitedConductItems.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                border: '2px solid #8b5e3c',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px'
              }}>
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#8b5e3c',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>
                  ✕
                </div>
                <p style={{
                  color: '#721c24',
                  fontSize: '1rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Third‑Party Services & Links */}
        <div id="section-7" className="section-block" style={{ 
          background: 'white', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #f0f0f0'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            7️⃣ Third‑Party Services & Links
          </h2>
          <div style={{
            background: '#fff3cd',
            padding: '25px',
            borderRadius: '12px',
            border: '2px solid #ffeaa7',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px'
          }}>
            <div style={{ fontSize: '3rem' }}>🔗</div>
            <p style={{
              color: '#856404',
              fontSize: '1.1rem',
              margin: '0',
              lineHeight: '1.6'
            }}>
              Our Services may include links to third‑party sites or tools (e.g., payment gateways, analytics, WhatsApp). 
              We are not responsible for their content or practices.
            </p>
          </div>
        </div>

        {/* 8. Placements, Certifications & Outcomes */}
        <div id="section-8" className="section-block" style={{ 
          background: 'white', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #f0f0f0'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            8️⃣ Placements, Certifications & Outcomes
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {[
              {
                icon: "🎯",
                title: "Placement Assistance",
                text: "We provide placement assistance, not job guarantees. Selection depends on employer criteria and your performance.",
                color: "#856404"
              },
              {
                icon: "🏆",
                title: "Certifications",
                text: "Certificates/diplomas/degrees are awarded upon successful completion of program requirements and clearance of dues.",
                color: "#155724"
              },
              {
                icon: "🔬",
                title: "Technology Exposure",
                text: "Device/technology exposure varies by centre and module availability.",
                color: "#0d47a1"
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: '#f8f9fa',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid #e9ecef',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px'
              }}>
                <div style={{ fontSize: '2rem' }}>{item.icon}</div>
                <div>
                  <h4 style={{
                    color: item.color,
                    marginBottom: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    color: '#5c4a3d',
                    fontSize: '1rem',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Health, Safety & Conduct */}
        <div id="section-9" className="section-block" style={{ 
          background: 'linear-gradient(135d, #d4edda 0%, #c3e6cb 100%)', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '3px solid #28a745'
        }}>
          <h2 style={{ 
            color: '#155724', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            9️⃣ Health, Safety & Conduct
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              padding: '25px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>🛡️</div>
              <div>
                <h4 style={{
                  color: '#155724',
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  Safety Protocols
                </h4>
                <p style={{
                  color: '#155724',
                  fontSize: '1rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  Practical labs involve hygiene and safety protocols. You agree to follow trainer instructions and centre policies.
                </p>
              </div>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              padding: '25px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>⚖️</div>
              <div>
                <h4 style={{
                  color: '#155724',
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  Access Restrictions
                </h4>
                <p style={{
                  color: '#155724',
                  fontSize: '1rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  AngelLife may restrict or remove access for safety violations, academic misconduct, or policy breaches.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 10. Disclaimers */}
        <div id="section-10" className="section-block" style={{ 
          background: '#fff3cd', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '30px',
          border: '3px solid #ffeaa7'
        }}>
          <h2 style={{ 
            color: '#856404', 
            marginBottom: '25px',
            fontSize: '1.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🔟 Disclaimers
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              padding: '25px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>⚠️</div>
              <p style={{
                color: '#856404',
                fontSize: '1.1rem',
                margin: '0',
                lineHeight: '1.6'
              }}>
                Services are provided on an "as is" and "as available" basis. We disclaim all warranties to the fullest extent permitted by law.
              </p>
            </div>
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              padding: '25px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px'
            }}>
              <div style={{ fontSize: '2rem' }}>🌐</div>
              <p style={{
                color: '#856404',
                fontSize: '1.1rem',
                margin: '0',
                lineHeight: '1.6'
              }}>
                We do not warrant uninterrupted, error‑free, or secure access at all times.
              </p>
            </div>
          </div>
        </div>

        {/* 11-16 Sections in Compact Format */}
        <div style={{ display: 'grid', gap: '30px' }}>
          {/* 11. Limitation of Liability */}
          <div id="section-11" className="section-block" style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            border: '2px solid #f0f0f0'
          }}>
            <h3 style={{ 
              color: '#8b5e3c', 
              marginBottom: '15px',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              1️⃣1️⃣ Limitation of Liability
            </h3>
            <p style={{
              color: '#5c4a3d',
              fontSize: '1rem',
              margin: '0',
              lineHeight: '1.6'
            }}>
              To the maximum extent permitted by law, AngelLife shall not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising from your use of the Services, even if advised of the possibility of such damages.
            </p>
          </div>

          {/* 12. Indemnification */}
          <div id="section-12" className="section-block" style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            border: '2px solid #f0f0f0'
          }}>
            <h3 style={{ 
              color: '#8b5e3c', 
              marginBottom: '15px',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              1️⃣2️⃣ Indemnification
            </h3>
            <p style={{
              color: '#5c4a3d',
              fontSize: '1rem',
              margin: '0',
              lineHeight: '1.6'
            }}>
              You agree to indemnify and hold harmless AngelLife, its officers, employees, and partners from any claims, damages, liabilities, and expenses arising out of your use of the Services or violation of these Terms.
            </p>
          </div>

          {/* 13. Suspension & Termination */}
          <div id="section-13" className="section-block" style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            border: '2px solid #f0f0f0'
          }}>
            <h3 style={{ 
              color: '#8b5e3c', 
              marginBottom: '15px',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              1️⃣3️⃣ Suspension & Termination
            </h3>
            <p style={{
              color: '#5c4a3d',
              fontSize: '1rem',
              margin: '0',
              lineHeight: '1.6'
            }}>
              We may suspend or terminate access to the Services, in whole or in part, at our discretion for policy breaches, security concerns, or operational reasons.
            </p>
          </div>

          {/* 14. Governing Law & Dispute Resolution */}
          <div id="section-14" className="section-block" style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            border: '2px solid #f0f0f0'
          }}>
            <h3 style={{ 
              color: '#8b5e3c', 
              marginBottom: '15px',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              1️⃣4️⃣ Governing Law & Dispute Resolution
            </h3>
            <ul style={{
              color: '#5c4a3d',
              fontSize: '1rem',
              lineHeight: '1.6',
              paddingLeft: '20px'
            }}>
              <li>These Terms are governed by the laws of India.</li>
              <li>Subject to applicable law, disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra, India.</li>
              <li>We encourage amicable resolution through written notice to care@angellife.in before initiating proceedings.</li>
            </ul>
          </div>

          {/* 15. Changes to the Terms */}
          <div id="section-15" className="section-block" style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px',
            border: '2px solid #f0f0f0'
          }}>
            <h3 style={{ 
              color: '#8b5e3c', 
              marginBottom: '15px',
              fontSize: '1.3rem',
              fontWeight: '600'
            }}>
              1️⃣5️⃣ Changes to the Terms
            </h3>
            <p style={{
              color: '#5c4a3d',
              fontSize: '1rem',
              margin: '0',
              lineHeight: '1.6'
            }}>
              We may update these Terms periodically. Continued use after changes constitutes acceptance of the revised Terms. The latest version will show the updated date at the top.
            </p>
          </div>
        </div>

        {/* 16. Contact Us */}
        <div id="section-16" className="section-block" style={{ 
          background: 'linear-gradient(135deg, #8b5e3c 0%, #a67c5a 100%)', 
          color: 'white',
          padding: '50px', 
          borderRadius: '20px',
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <h2 style={{ 
            color: 'white', 
            marginBottom: '30px',
            fontSize: '2.2rem',
            fontWeight: '700'
          }}>
            1️⃣6️⃣ Contact Us
          </h2>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              color: 'white',
              marginBottom: '20px',
              fontSize: '1.5rem'
            }}>
              AngelLife International Institute
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div>
                <h4 style={{ color: 'white', marginBottom: '10px' }}>📍 Address</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0', fontSize: '0.95rem' }}>
                  1703-A, Himalayan Heights,<br />
                  Bhakti Park, Mumbai, Bharat
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '10px' }}>📧 Email</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0', fontSize: '0.95rem' }}>
                  <a href="mailto:care@angellife.in" style={{ color: 'white', textDecoration: 'none' }}>
                    care@angellife.in
                  </a>
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '10px' }}>📞 Phone</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0', fontSize: '0.95rem' }}>
                  +91 9910478281<br />
                  +91 8881780809
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '10px',
          border: '2px solid #e9ecef',
          textAlign: 'center',
          marginTop: '30px'
        }}>
          <p style={{
            color: '#6c757d',
            fontSize: '0.9rem',
            margin: '0',
            fontStyle: 'italic'
          }}>
            These Terms of Use constitute a legally binding agreement between you and AngelLife International Institute. 
            Please read them carefully and contact us if you have any questions.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfUse;