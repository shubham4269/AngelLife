import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./Academic.css";

const RefundPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const refundTimeWindows = [
    {
      period: "≥ 21 days before start",
      refund: "80%",
      color: "#28a745",
      icon: "✅"
    },
    {
      period: "8–20 days before start", 
      refund: "50%",
      color: "#ffc107",
      icon: "⚠️"
    },
    {
      period: "1–7 days before start",
      refund: "25%",
      color: "#fd7e14",
      icon: "⏰"
    },
    {
      period: "On/after start date",
      refund: "0%",
      color: "#dc3545",
      icon: "❌"
    }
  ];

  const nonRefundableItems = [
    "Registration / application / counselling fees",
    "Government/University/Board charges, if already remitted",
    "Payment gateway / bank convenience fees and currency conversion charges",
    "Material kits, uniforms, ID cards, books, or consumables already issued/used"
  ];

  const specialCases = [
    {
      title: "Medical or Compassionate Grounds",
      description: "Considered case‑by‑case with valid documentation; deferment is usually recommended.",
      icon: "🏥"
    },
    {
      title: "Visa/Travel Issues (International Students)",
      description: "Deferment recommended; direct refunds follow the standard window.",
      icon: "✈️"
    },
    {
      title: "Program Cancellation by AngelLife",
      description: "Full refund of fees paid for the cancelled program, excluding third‑party expenses not received by us.",
      icon: "🏢"
    },
    {
      title: "Disciplinary Removal / Academic Misconduct",
      description: "No refund.",
      icon: "⚖️"
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
            Refund & Cancellation Policy
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
            This policy explains how refunds, cancellations, and batch deferments are handled for applications and program enrollments at AngelLife International Institute.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="section-block" style={{ 
          background: '#f9f6f2', 
          padding: '40px', 
          borderRadius: '15px',
          marginBottom: '40px',
          border: '3px solid #8b5e3c'
        }}>
          <h2 style={{ 
            color: '#8b5e3c', 
            marginBottom: '25px',
            fontSize: '2rem',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            📋 Quick Summary
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px'
          }}>
            {[
              "Registration/admission processing fees are non‑refundable",
              "Fee refunds are time‑bound and linked to the batch start date", 
              "Deferment to a future batch is often a better option than cancellation",
              "Refunds (if eligible) are processed back to the original payment method"
            ].map((point, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                border: '2px solid #8b5e3c',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#8b5e3c',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: '700'
                }}>
                  {index + 1}
                </div>
                <p style={{ 
                  color: '#5c4a3d',
                  fontSize: '0.95rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Definitions Section */}
        <div className="section-block" style={{ 
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
            1️⃣ Definitions
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px'
          }}>
            {[
              {
                term: "Registration / Application Fee",
                definition: "Charges for processing your application and counselling."
              },
              {
                term: "Admission / Program Fee",
                definition: "Tuition and academic charges for your selected program."
              },
              {
                term: "Batch Start Date",
                definition: "The officially announced date on which classes/practicals commence."
              },
              {
                term: "Deferment",
                definition: "Moving your confirmed seat to a later intake/batch."
              }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                border: '2px solid #8b5e3c'
              }}>
                <h4 style={{
                  color: '#8b5e3c',
                  marginBottom: '10px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {item.term}
                </h4>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '0.95rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* General Principles */}
        <div className="section-block" style={{ 
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
            2️⃣ General Principles
          </h2>
          <ul style={{ 
            listStyle: 'none', 
            padding: '0',
            margin: '0'
          }}>
            {[
              "Transparency, student‑first support, and compliance with applicable laws.",
              "All requests must be made in writing to care@angellife.in from your registered email/phone.",
              "We may request supporting documents (e.g., medical certificate) for certain cases."
            ].map((principle, index) => (
              <li key={index} style={{ 
                marginBottom: '15px',
                color: '#5c4a3d',
                fontSize: '1.1rem',
                paddingLeft: '30px',
                position: 'relative',
                lineHeight: '1.6'
              }}>
                <span style={{
                  content: '•',
                  color: '#8b5e3c',
                  position: 'absolute',
                  left: '0',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>•</span>
                {principle}
              </li>
            ))}
          </ul>
        </div>

        {/* Non-Refundable Charges */}
        <div className="section-block" style={{ 
          background: 'white', 
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
            3️⃣ Non‑Refundable Charges
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '15px'
          }}>
            {nonRefundableItems.map((item, index) => (
              <div key={index} style={{
                background: '#f9f6f2',
                padding: '15px',
                borderRadius: '8px',
                border: '2px solid #8b5e3c',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '1.2rem' }}>❌</span>
                <span style={{
                  color: '#5c4a3d',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Refund Window */}
        <div className="section-block" style={{ 
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
            4️⃣ Standard Refund Window
          </h2>
          <p style={{ 
            color: '#5c4a3d',
            fontSize: '1.1rem',
            marginBottom: '30px',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            Based on written request timestamp versus Batch Start Date:
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '20px',
            marginBottom: '30px'
          }}>
            {refundTimeWindows.map((window, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                border: `3px solid #8b5e3c`,
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '10px'
                }}>
                  {window.icon}
                </div>
                <h4 style={{
                  color: '#8b5e3c',
                  marginBottom: '10px',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {window.period}
                </h4>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#8b5e3c',
                  marginBottom: '5px'
                }}>
                  {window.refund}
                </div>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '0.9rem',
                  margin: '0'
                }}>
                  of Program Fee refundable
                </p>
              </div>
            ))}
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
              textAlign: 'center',
              fontWeight: '500'
            }}>
              <strong>Important:</strong> Registration/application fees are not refundable in any scenario. 
              Scholarship amounts are not encashable; refunds apply only on fees actually paid by you.
            </p>
          </div>
        </div>

        {/* Deferment Section */}
        <div className="section-block" style={{ 
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
            5️⃣ Deferment (Preferred Alternative)
          </h2>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            marginBottom: '20px'
          }}>
            <p style={{ 
              color: '#8b5e3c',
              fontSize: '1.1rem',
              marginBottom: '20px',
              fontWeight: '600'
            }}>
              If you cannot join the confirmed batch:
            </p>
            <ul style={{ 
              listStyle: 'none', 
              padding: '0',
              margin: '0'
            }}>
              {[
                "You may request one‑time deferment to the next available intake (seat availability applies).",
                "Deferment request must be made before batch start (or within 3 working days of start for genuine emergencies).",
                "A small admin fee may apply; previously paid fees are adjusted to the new batch.",
                "If you later cancel after deferring, refund eligibility is calculated against the new batch start date."
              ].map((point, index) => (
                <li key={index} style={{ 
                  marginBottom: '15px',
                  color: '#5c4a3d',
                  fontSize: '1rem',
                  paddingLeft: '25px',
                  position: 'relative',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    content: '✅',
                    position: 'absolute',
                    left: '0',
                    fontSize: '1.1rem'
                  }}>✅</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Special Cases */}
        <div className="section-block" style={{ 
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
            6️⃣ Special Cases
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '20px'
          }}>
            {specialCases.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                border: '2px solid #8b5e3c'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '15px'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <h4 style={{
                    color: '#8b5e3c',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    margin: '0'
                  }}>
                    {item.title}
                  </h4>
                </div>
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '0.95rem',
                  margin: '0',
                  lineHeight: '1.5'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Request */}
        <div className="section-block" style={{ 
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
            8️⃣ How to Request a Refund or Deferment
          </h2>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '15px',
            marginBottom: '20px'
          }}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {[
                {
                  step: 1,
                  title: "Send Email",
                  content: "Email care@angellife.in with subject: Refund/Deferment – [Your Name] – [Student ID]"
                },
                {
                  step: 2,
                  title: "Include Details",
                  content: "Include: registered mobile/email, receipt/invoice number(s), reason, and any supporting documents"
                },
                {
                  step: 3,
                  title: "Get Response",
                  content: "Our team will acknowledge within 2 working days and confirm next steps"
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#8b5e3c',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h4 style={{
                      color: '#8b5e3c',
                      marginBottom: '5px',
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
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.8)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <h4 style={{
              color: '#0d47a1',
              marginBottom: '10px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              Processing Timelines
            </h4>
            <p style={{
              color: '#5c4a3d',
              fontSize: '1rem',
              margin: '0',
              lineHeight: '1.5'
            }}>
              Approved refunds are initiated within 7–14 working days. Bank settlement times may vary. 
              Refunds are made only to the original payment method/account used.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="section-block" style={{ 
          background: 'linear-gradient(135deg, #8b5e3c 0%, #a67c5a 100%)', 
          color: 'white',
          padding: '50px', 
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            color: 'white', 
            marginBottom: '30px',
            fontSize: '2.2rem',
            fontWeight: '700'
          }}>
            11️⃣ Contact & Escalation
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
                  1703‑A, Himalayan Heights,<br />
                  Bhakti Park, Mumbai, Bharat
                </p>
              </div>
              <div>
                <h4 style={{ color: 'white', marginBottom: '10px' }}>📧 Email</h4>
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0', fontSize: '0.95rem' }}>
                  care@angellife.in
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
            <div style={{
              background: 'rgba(255,255,255,0.1)',
              padding: '20px',
              borderRadius: '10px'
            }}>
              <p style={{
                color: 'rgba(255,255,255,0.95)',
                fontSize: '1rem',
                margin: '0',
                lineHeight: '1.5'
              }}>
                If your concern remains unresolved, write to <strong>Director – Admissions & Student Affairs</strong> at the same address.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Updates Notice */}
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
            We may update this policy from time to time. The latest version with the updated date will be published on this page.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;