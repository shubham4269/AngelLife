import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./Academic.css";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const infoWeCollect = [
    {
      category: "Contact Information",
      details: "Name, phone number, email address, and city/state",
      icon: "📞"
    },
    {
      category: "Educational Details", 
      details: "Highest qualification, intended program, and professional background (for medical programs, your registration or license details)",
      icon: "🎓"
    },
    {
      category: "Usage Data",
      details: "IP address, device type, browser version, and pages visited",
      icon: "💻"
    },
    {
      category: "Communication Data",
      details: "Messages, chat records, or calls with our counsellors",
      icon: "💬"
    },
    {
      category: "Form Submissions",
      details: "Information provided via application forms, brochure downloads, or enquiry pop-ups",
      icon: "📝"
    }
  ];

  const howWeUseInfo = [
    "Respond to your enquiries and provide requested program information",
    "Process applications, verify eligibility, and issue confirmations", 
    "Share brochures, newsletters, and event announcements",
    "Provide counselling, scholarship, or admission-related assistance",
    "Improve our website experience, analytics, and lead management"
  ];

  const sharingReasons = [
    {
      party: "Internal teams",
      purpose: "admissions, counsellors, academic staff) to process your requests",
      icon: "👥"
    },
    {
      party: "Service providers", 
      purpose: "email delivery, hosting, analytics) who maintain confidentiality",
      icon: "🔧"
    },
    {
      party: "Regulatory or legal authorities",
      purpose: "when required by law or for legitimate interests",
      icon: "⚖️"
    }
  ];

  const securityMeasures = [
    {
      measure: "SSL encryption for data transmission",
      icon: "🔒"
    },
    {
      measure: "Restricted staff access via role-based controls",
      icon: "👤"
    },
    {
      measure: "Regular backups and encrypted storage",
      icon: "💾"
    }
  ];

  const yourRights = [
    "Request a copy or correction of your data",
    "Withdraw consent for communications", 
    "Ask for deletion of your personal data, subject to legal obligations"
  ];

  return (
    <Layout>
      <section className="academics-section">
        {/* Header Section */}
        <div className="section-block" style={{ 
          textAlign: 'center', 
          marginBottom: '50px',
          background: 'linear-gradient(135deg, #8b5e3c 0%, #a67658 100%)',
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
            Privacy Policy
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
            AngelLife International Institute ("AngelLife," "we," "us," or "our") values your privacy. 
            This policy explains how we collect, use, disclose, and protect your personal information when you interact with our website, 
            application forms, brochures, and digital communication channels.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '30px', 
          borderRadius: '15px',
          marginBottom: '40px',
          border: '2px solid #e9ecef'
        }}>
          <h3 style={{ 
            color: '#8b5e3c', 
            marginBottom: '20px',
            fontSize: '1.3rem',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            📋 Quick Navigation
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '15px'
          }}>
            {[
              "Information We Collect",
              "How We Use Your Information", 
              "Information Sharing",
              "Data Retention",
              "Data Security",
              "Cookies & Tracking",
              "Your Rights",
              "Third‑Party Links",
              "Policy Updates",
              "Contact Us"
            ].map((section, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                style={{
                  background: 'white',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  textDecoration: 'none',
                  color: '#8b5e3c',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#8b5e3c';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#8b5e3c';
                }}
              >
                {section}
              </a>
            ))}
          </div>
        </div>

        {/* 1. Information We Collect */}
        <div id="section-1" className="section-block" style={{ 
          background: '#f9f6f2', 
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
            1️⃣ Information We Collect
          </h2>
          <p style={{ 
            color: '#5c4a3d',
            fontSize: '1.1rem',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            We may collect the following categories of personal data:
          </p>
          <div style={{ 
            display: 'grid', 
            gap: '20px'
          }}>
            {infoWeCollect.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid #8b5e3c20',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px'
              }}>
                <div style={{
                  fontSize: '2rem',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{
                    color: '#8b5e3c',
                    marginBottom: '8px',
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}>
                    {item.category}
                  </h4>
                  <p style={{
                    color: '#5c4a3d',
                    fontSize: '1rem',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. How We Use Your Information */}
        <div id="section-2" className="section-block" style={{ 
          background: '#f9f6f2', 
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
            2️⃣ How We Use Your Information
          </h2>
          <p style={{ 
            color: '#5c4a3d',
            fontSize: '1.1rem',
            marginBottom: '25px',
            lineHeight: '1.6'
          }}>
            We process your data to:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0',
            margin: '0'
          }}>
            {howWeUseInfo.map((use, index) => (
              <li key={index} style={{ 
                marginBottom: '15px',
                color: '#5c4a3d',
                fontSize: '1.05rem',
                paddingLeft: '30px',
                position: 'relative',
                lineHeight: '1.6'
              }}>
                <span style={{
                  content: '✓',
                  color: '#28a745',
                  position: 'absolute',
                  left: '0',
                  fontSize: '1.3rem',
                  fontWeight: 'bold'
                }}>✓</span>
                {use}
              </li>
            ))}
          </ul>
          <div style={{
            background: '#8b5e3c',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #5c4a3d',
            marginTop: '25px'
          }}>
            <p style={{
              color: 'white',
              fontSize: '1.1rem',
              margin: '0',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              🔒 We do not sell or rent personal information to any third party.
            </p>
          </div>
        </div>

        {/* 3. Information Sharing & Disclosure */}
        <div id="section-3" className="section-block" style={{ 
          background: '#f9f6f2', 
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
            3️⃣ Information Sharing & Disclosure
          </h2>
          <p style={{ 
            color: '#5c4a3d',
            fontSize: '1.1rem',
            marginBottom: '25px',
            lineHeight: '1.6'
          }}>
            Your data may be shared only when necessary with:
          </p>
          <div style={{ 
            display: 'grid', 
            gap: '20px',
            marginBottom: '25px'
          }}>
            {sharingReasons.map((reason, index) => (
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
                  fontSize: '1.8rem',
                  flexShrink: 0
                }}>
                  {reason.icon}
                </div>
                <div>
                  <h4 style={{
                    color: '#8b5e3c',
                    marginBottom: '5px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {reason.party}
                  </h4>
                  <p style={{
                    color: '#5c4a3d',
                    fontSize: '0.95rem',
                    margin: '0',
                    lineHeight: '1.5'
                  }}>
                    ({reason.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            background: '#8b5e3c',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #5c4a3d'
          }}>
            <p style={{
              color: 'white',
              fontSize: '1rem',
              margin: '0',
              fontWeight: '500',
              textAlign: 'center'
            }}>
              🔐 All vendors and service partners are bound by data confidentiality agreements.
            </p>
          </div>
        </div>

        {/* 4. Data Retention */}
        <div id="section-4" className="section-block" style={{ 
          background: '#f9f6f2', 
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
            4️⃣ Data Retention
          </h2>
          <p style={{ 
            color: '#5c4a3d',
            fontSize: '1.1rem',
            marginBottom: '25px',
            lineHeight: '1.6'
          }}>
            We retain personal data only as long as necessary to:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '25px'
          }}>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #8b5e3c',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎯</div>
              <h4 style={{
                color: '#8b5e3c',
                marginBottom: '10px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Fulfil Purposes
              </h4>
              <p style={{
                color: '#5c4a3d',
                fontSize: '0.95rem',
                margin: '0',
                lineHeight: '1.4'
              }}>
                Admission or support purposes
              </p>
            </div>
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid #8b5e3c',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📋</div>
              <h4 style={{
                color: '#8b5e3c',
                marginBottom: '10px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Legal Obligations
              </h4>
              <p style={{
                color: '#5c4a3d',
                fontSize: '0.95rem',
                margin: '0',
                lineHeight: '1.4'
              }}>
                Legal, accounting, or reporting obligations
              </p>
            </div>
          </div>
          <div style={{
            background: '#8b5e3c',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #5c4a3d',
            textAlign: 'center'
          }}>
            <p style={{
              color: 'white',
              fontSize: '1.1rem',
              margin: '0',
              fontWeight: '500'
            }}>
              🗑️ Once data is no longer needed, it is securely deleted or anonymized.
            </p>
          </div>
        </div>

        {/* 5. Data Security */}
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
            5️⃣ Data Security
          </h2>
          <p style={{ 
            color: '#5c4a3d',
            fontSize: '1.1rem',
            marginBottom: '25px',
            lineHeight: '1.6'
          }}>
            We apply technical and organisational measures to protect your data:
          </p>
          <div style={{ 
            display: 'grid', 
            gap: '20px',
            marginBottom: '25px'
          }}>
            {securityMeasures.map((measure, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.8)',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  flexShrink: 0
                }}>
                  {measure.icon}
                </div>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '1.05rem',
                  margin: '0',
                  fontWeight: '500',
                  lineHeight: '1.5'
                }}>
                  {measure.measure}
                </p>
              </div>
            ))}
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #8b5e3c'
          }}>
            <p style={{
              color: '#8b5e3c',
              fontSize: '1rem',
              margin: '0',
              fontStyle: 'italic',
              textAlign: 'center'
            }}>
              ⚠️ However, no online transmission is 100% secure, and users share information at their discretion.
            </p>
          </div>
        </div>

        {/* 6. Cookies & Tracking */}
        <div id="section-6" className="section-block" style={{ 
          background: '#f9f6f2', 
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
            6️⃣ Cookies & Tracking
          </h2>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '12px',
            border: '2px solid #8b5e3c'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px'
            }}>
              <div style={{ fontSize: '3rem' }}>🍪</div>
              <div>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '1.1rem',
                  margin: '0',
                  lineHeight: '1.6'
                }}>
                  Our website may use cookies and analytics to improve functionality. 
                  You can disable cookies through your browser settings; some site functions may not work as intended if you do.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Your Rights */}
        <div id="section-7" className="section-block" style={{ 
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
            7️⃣ Your Rights
          </h2>
          <p style={{ 
            color: '#5c4a3d',
            fontSize: '1.1rem',
            marginBottom: '25px',
            lineHeight: '1.6'
          }}>
            You may:
          </p>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0',
            margin: '0',
            marginBottom: '25px'
          }}>
            {yourRights.map((right, index) => (
              <li key={index} style={{ 
                marginBottom: '15px',
                color: '#0d47a1',
                fontSize: '1.05rem',
                paddingLeft: '30px',
                position: 'relative',
                lineHeight: '1.6',
                background: 'rgba(255,255,255,0.7)',
                padding: '15px 15px 15px 45px',
                borderRadius: '8px'
              }}>
                <span style={{
                  content: '👤',
                  position: 'absolute',
                  left: '15px',
                  fontSize: '1.3rem'
                }}>👤</span>
                {right}
              </li>
            ))}
          </ul>
          <div style={{
            background: 'rgba(255,255,255,0.9)',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#0d47a1',
              fontSize: '1.1rem',
              margin: '0',
              fontWeight: '600'
            }}>
              📧 To exercise these rights, email <a href="mailto:care@angellife.in" style={{ color: '#2196f3', textDecoration: 'none' }}>care@angellife.in</a>
            </p>
          </div>
        </div>

        {/* 8. Third‑Party Links */}
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
            8️⃣ Third‑Party Links
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
              Our website may include links to external sites (partners, affiliates, or social platforms). 
              We are not responsible for their content or privacy practices.
            </p>
          </div>
        </div>

        {/* 9. Updates to This Policy */}
        <div id="section-9" className="section-block" style={{ 
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
            9️⃣ Updates to This Policy
          </h2>
          <div style={{
            background: '#e3f2fd',
            padding: '25px',
            borderRadius: '12px',
            border: '2px solid #bbdefb',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px'
          }}>
            <div style={{ fontSize: '3rem' }}>📝</div>
            <p style={{
              color: '#0d47a1',
              fontSize: '1.1rem',
              margin: '0',
              lineHeight: '1.6'
            }}>
              We may update this Privacy Policy periodically. The revised version will be posted with an updated "Last Updated" date. 
              Major changes will be communicated through the website or email.
            </p>
          </div>
        </div>

        {/* 10. Contact Us */}
        <div id="section-10" className="section-block" style={{ 
          background: 'linear-gradient(135deg, #8b5e3c 0%, #a67c5a 100%)', 
          color: 'white',
          padding: '50px', 
          borderRadius: '20px',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          <h2 style={{ 
            color: 'white', 
            marginBottom: '30px',
            fontSize: '2.2rem',
            fontWeight: '700'
          }}>
            🔟 Contact Us
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '1.2rem',
            marginBottom: '30px',
            lineHeight: '1.5'
          }}>
            If you have questions or concerns regarding this policy or your data, please contact:
          </p>
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
                  1703‑A, Himalayan Heights,<br />
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

        {/* Policy Notice */}
        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          borderRadius: '10px',
          border: '2px solid #e9ecef',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#6c757d',
            fontSize: '0.9rem',
            margin: '0',
            fontStyle: 'italic'
          }}>
            This Privacy Policy is an integral part of our Terms of Service. 
            By using our services, you acknowledge that you have read and understood this policy.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;