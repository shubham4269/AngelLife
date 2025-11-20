import React, { useState } from "react";
import Layout from "../layout/Layout";
import LeadForm from "../components/LeadForm/LeadForm";
import "./Academic.css";

const DownloadBrochure = () => {
  const [selectedBrochures, setSelectedBrochures] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [downloadLinks, setDownloadLinks] = useState([]);

  const brochureOptions = [
    {
      id: "angellife-brochure",
      title: "AngelLife Institute Brochure",
      subtitle: "Complete Institute Overview",
      category: "overview",
      fileSize: "5.2 MB",
      pages: "20 pages"
    },
    {
      id: "institute-overview",
      title: "Institute Overview",
      subtitle: "All Programs & Centers",
      category: "overview",
      fileSize: "8.2 MB",
      pages: "24 pages"
    },
    {
      id: "bsc-cosmetology",
      title: "B.Sc – Cosmetology & Wellness",
      subtitle: "3 Years Degree Program",
      category: "degree",
      fileSize: "5.4 MB",
      pages: "16 pages"
    },
    {
      id: "msc-cosmetology",
      title: "M.Sc – Cosmetology & Wellness",
      subtitle: "2 Years Master's Program",
      category: "degree",
      fileSize: "4.8 MB",
      pages: "14 pages"
    },
    {
      id: "msc-facial-aesthetics",
      title: "M.Sc – Facial Aesthetics & Cosmetology",
      subtitle: "2 Years Medical Program",
      category: "degree",
      fileSize: "6.1 MB",
      pages: "18 pages"
    },
    {
      id: "pgd-facial-aesthetics",
      title: "PG Diploma – Facial Aesthetics & Cosmetology",
      subtitle: "Medical Specialization",
      category: "pg-diploma",
      fileSize: "4.2 MB",
      pages: "12 pages"
    },
    {
      id: "pgd-cosmetology",
      title: "PG Diploma – Cosmetology & Wellness",
      subtitle: "Professional Development",
      category: "pg-diploma",
      fileSize: "3.9 MB",
      pages: "11 pages"
    },
    {
      id: "diploma-cosmetology",
      title: "Diploma – Cosmetology & Wellness",
      subtitle: "1 Year Professional Course",
      category: "diploma",
      fileSize: "3.5 MB",
      pages: "10 pages"
    },
    {
      id: "cert-makeup",
      title: "Certification – Makeup",
      subtitle: "Basic/Advanced Courses",
      category: "certification",
      fileSize: "2.8 MB",
      pages: "8 pages"
    },
    {
      id: "cert-hair",
      title: "Certification – Hair Dressing",
      subtitle: "Basic/Advanced Courses",
      category: "certification",
      fileSize: "2.6 MB",
      pages: "7 pages"
    },
    {
      id: "cert-pmu",
      title: "Certification – Permanent Makeup (PMU)",
      subtitle: "Specialized Training",
      category: "certification",
      fileSize: "3.1 MB",
      pages: "9 pages"
    },
    {
      id: "cert-advanced-cosmetology",
      title: "Certification – Cosmetology (Advanced)",
      subtitle: "Professional Enhancement",
      category: "certification",
      fileSize: "2.9 MB",
      pages: "8 pages"
    }
  ];

  const categoryColors = {
    overview: "#8b5e3c",
    degree: "#8b5e3c", 
    "pg-diploma": "#8b5e3c",
    diploma: "#8b5e3c",
    certification: "#8b5e3c"
  };

  const categoryIcons = {
    overview: "🏢",
    degree: "🎓",
    "pg-diploma": "📜",
    diploma: "📋", 
    certification: "⭐"
  };

  const handleBrochureSelection = (brochureId) => {
    setSelectedBrochures(prev => {
      if (prev.includes(brochureId)) {
        return prev.filter(id => id !== brochureId);
      } else {
        return [...prev, brochureId];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedBrochures.length === brochureOptions.length) {
      setSelectedBrochures([]);
    } else {
      setSelectedBrochures(brochureOptions.map(b => b.id));
    }
  };

  const handleFormSubmit = (formData) => {
    setContactData(formData);
    
    // Generate download links for selected brochures
    const links = selectedBrochures.map(brochureId => {
      const brochure = brochureOptions.find(b => b.id === brochureId);
      let url;
      
      // Check if it's the main AngelLife brochure from public folder
      if (brochureId === "angellife-brochure") {
        url = "/AngelLife-Brochure.pdf"; // Direct link to file in public folder
      } else {
        url = `/downloads/${brochureId}.pdf?token=${Date.now()}`; // Simulated signed URL for other brochures
      }
      
      return {
        id: brochureId,
        title: brochure.title,
        url: url,
        expires: new Date(Date.now() + 48 * 60 * 60 * 1000).toLocaleDateString()
      };
    });
    
    setDownloadLinks(links);
    setIsSubmitted(true);
    
    // Fire tracking event
    if (window.gtag) {
      window.gtag('event', 'brochure_download_requested', {
        brochures: selectedBrochures,
        count: selectedBrochures.length
      });
    }
  };

  const handleDownload = (link) => {
    // Fire download completion event
    if (window.gtag) {
      window.gtag('event', 'brochure_download_completed', {
        brochure_id: link.id,
        brochure_title: link.title
      });
    }
    
    // Open in new tab (simulated)
    window.open(link.url, '_blank');
  };

  const BrochurePicker = () => (
    <div className="section-block" style={{ 
      background: '#f9f6f2', 
      padding: '40px', 
      borderRadius: '15px',
      marginBottom: '30px',
      border: '2px solid #f0f0f0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h2 style={{ 
          color: '#8b5e3c', 
          fontSize: '1.8rem',
          fontWeight: '600',
          margin: '0'
        }}>
          1️⃣ Choose Your Brochures
        </h2>
        <button
          onClick={handleSelectAll}
          style={{
            background: selectedBrochures.length === brochureOptions.length ? '#dc3545' : '#8b5e3c',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '6px',
            border: 'none',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          {selectedBrochures.length === brochureOptions.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '20px'
      }}>
        {brochureOptions.map((brochure, index) => (
          <div
            key={brochure.id}
            onClick={() => handleBrochureSelection(brochure.id)}
            style={{
              background: selectedBrochures.includes(brochure.id) ? `${categoryColors[brochure.category]}15` : 'white',
              border: selectedBrochures.includes(brochure.id) 
                ? `3px solid ${categoryColors[brochure.category]}` 
                : '2px solid #e9ecef',
              borderRadius: '12px',
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
          >
            {/* Selection Indicator */}
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: selectedBrochures.includes(brochure.id) 
                ? categoryColors[brochure.category] 
                : '#e9ecef',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              fontWeight: '700'
            }}>
              {selectedBrochures.includes(brochure.id) ? '✓' : ''}
            </div>

            {/* Category Icon */}
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '15px'
            }}>
              {categoryIcons[brochure.category]}
            </div>

            {/* Title */}
            <h4 style={{
              color: categoryColors[brochure.category],
              marginBottom: '8px',
              fontSize: '1.2rem',
              fontWeight: '600',
              lineHeight: '1.3'
            }}>
              {brochure.title}
            </h4>

            {/* Subtitle */}
            <p style={{
              color: '#666',
              fontSize: '0.95rem',
              marginBottom: '15px',
              lineHeight: '1.4'
            }}>
              {brochure.subtitle}
            </p>

            {/* File Info */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.85rem',
              color: '#888'
            }}>
              <span>📄 {brochure.pages}</span>
              <span>💾 {brochure.fileSize}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Selection Summary */}
      {selectedBrochures.length > 0 && (
        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f9f6f2',
          borderRadius: '10px',
          border: '2px solid #8b5e3c'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <div>
              <h4 style={{
                color: '#8b5e3c',
                margin: '0 0 5px 0',
                fontSize: '1.1rem'
              }}>
                📋 {selectedBrochures.length} brochure{selectedBrochures.length !== 1 ? 's' : ''} selected
              </h4>
              <p style={{
                color: '#5c4a3d',
                margin: '0',
                fontSize: '0.9rem'
              }}>
                Total size: ~{selectedBrochures.reduce((total, id) => {
                  const brochure = brochureOptions.find(b => b.id === id);
                  return total + parseFloat(brochure.fileSize);
                }, 0).toFixed(1)} MB
              </p>
            </div>
          </div>
        </div>
      )}

      <div style={{
        marginTop: '20px',
        padding: '15px',
        background: '#f9f6f2',
        borderRadius: '8px',
        border: '1px solid #8b5e3c'
      }}>
        <p style={{
          color: '#8b5e3c',
          fontSize: '0.9rem',
          margin: '0',
          fontStyle: 'italic'
        }}>
          📅 <strong>Note:</strong> Updated versions may include intake calendars, lab highlights, and scholarship windows.
        </p>
      </div>
    </div>
  );

  const GatedForm = () => (
    <div className="section-block" style={{ 
      background: '#f9f6f2', 
      padding: '40px', 
      borderRadius: '15px',
      marginBottom: '30px',
      border: '2px solid #f0f0f0'
    }}>
      <h2 style={{ 
        color: '#8b5e3c', 
        marginBottom: '15px',
        fontSize: '1.8rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        2️⃣ Tell us where to reach you back
      </h2>
      <p style={{
        color: '#666',
        fontSize: '1.1rem',
        textAlign: 'center',
        marginBottom: '30px',
        lineHeight: '1.5'
      }}>
        Share your details to instantly access your selected brochures. 
        You'll also receive copies by email and WhatsApp.
      </p>

      <div style={{
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <LeadForm 
          onSubmit={handleFormSubmit} 
          isApplicationForm={true}
          buttonText="Get Brochures Now"
        />
      </div>

      {selectedBrochures.length === 0 && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: '#f8d7da',
          borderRadius: '8px',
          border: '1px solid #8b5e3c',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#8b5e3c',
            margin: '0',
            fontSize: '0.95rem'
          }}>
            ⚠️ Please select at least one brochure above to continue.
          </p>
        </div>
      )}
    </div>
  );

  const SuccessState = () => (
    <div className="section-block" style={{ 
      background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)', 
      padding: '50px', 
      borderRadius: '20px',
      textAlign: 'center',
      border: '3px solid #28a745',
      marginBottom: '30px'
    }}>
      <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📥</div>
      <h1 style={{ 
        color: '#155724', 
        marginBottom: '15px',
        fontSize: '2.5rem',
        fontWeight: '700'
      }}>
        Thank You! Your brochures are ready.
      </h1>
      <p style={{
        color: '#155724',
        fontSize: '1.2rem',
        marginBottom: '30px',
        opacity: 0.9
      }}>
        Click below to download your selected brochures. 
        Copies have also been sent to {contactData?.email}.
      </p>

      {/* Download Links */}
      <div style={{
        background: 'rgba(255,255,255,0.9)',
        padding: '30px',
        borderRadius: '15px',
        marginBottom: '30px'
      }}>
        <h3 style={{
          color: '#155724',
          marginBottom: '20px',
          fontSize: '1.3rem'
        }}>
          📎 Your Download Links
        </h3>
        <div style={{
          display: 'grid',
          gap: '12px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {downloadLinks.map((link, index) => (
            <div
              key={link.id}
              onClick={() => handleDownload(link)}
              style={{
                background: 'white',
                padding: '15px 20px',
                borderRadius: '8px',
                border: '2px solid #28a745',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <h4 style={{
                  color: '#155724',
                  margin: '0 0 4px 0',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}>
                  📄 {link.title}
                </h4>
                <p style={{
                  color: '#666',
                  margin: '0',
                  fontSize: '0.8rem'
                }}>
                  Expires: {link.expires}
                </p>
              </div>
              <div style={{
                background: '#28a745',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                Download
              </div>
            </div>
          ))}
        </div>
        
        {/* Download All ZIP */}
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={() => handleDownload({ 
              id: 'all', 
              title: 'All Selected Brochures (ZIP)', 
              url: '/downloads/all-brochures.zip' 
            })}
            style={{
              background: '#8b5e3c',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            📦 Download All as ZIP
          </button>
        </div>
      </div>

      {/* Next Actions */}
      <div>
        <h4 style={{
          color: '#155724',
          marginBottom: '20px',
          fontSize: '1.2rem'
        }}>
          Suggested Next Actions
        </h4>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: '#8b5e3c',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Book Free Counselling
          </button>
          <button style={{
            background: '#8b5e3c',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Apply Now
          </button>
          <button style={{
            background: '#8b5e3c',
            color: 'white',
            padding: '12px 25px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );

  const WhyDownload = () => (
    <div className="section-block" style={{ 
      background: '#f9f6f2', 
      padding: '40px', 
      borderRadius: '15px',
      marginBottom: '30px'
    }}>
      <h3 style={{ 
        color: '#8b5e3c', 
        marginBottom: '25px',
        fontSize: '1.5rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        4️⃣ Why Download Our Brochures?
      </h3>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px'
      }}>
        {[
          {
            icon: "📊",
            title: "Compare Programs",
            description: "Program structures, labs, and practicals"
          },
          {
            icon: "📅",
            title: "Intake Timelines", 
            description: "Understand eligibility and intake schedules"
          },
          {
            icon: "🎯",
            title: "Real Outcomes",
            description: "Placements, internships, alumni highlights"
          },
          {
            icon: "💰",
            title: "Financial Options",
            description: "Scholarship/EMI options and centre facilities"
          }
        ].map((item, index) => (
          <div key={index} style={{
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
            border: '2px solid #e9ecef',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '15px'
            }}>
              {item.icon}
            </div>
            <h4 style={{
              color: '#8b5e3c',
              marginBottom: '10px',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}>
              {item.title}
            </h4>
            <p style={{
              color: '#666',
              fontSize: '0.95rem',
              margin: '0',
              lineHeight: '1.4'
            }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const HelpSupport = () => (
    <div className="section-block" style={{ 
      background: 'linear-gradient(135deg, #f9f6f2 0%, #e7dcd1 100%)', 
      padding: '40px', 
      borderRadius: '15px',
      textAlign: 'center',
      border: '3px solid #8b5e3c'
    }}>
      <h3 style={{ 
        color: '#8b5e3c', 
        marginBottom: '15px',
        fontSize: '1.5rem',
        fontWeight: '600'
      }}>
        5️⃣ Need Help Choosing?
      </h3>
      <p style={{
        color: '#5c4a3d',
        fontSize: '1.1rem',
        marginBottom: '25px',
        lineHeight: '1.5'
      }}>
        Chat with our counsellors for a personalised roadmap.
      </p>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        <button style={{
          background: '#8b5e3c',
          color: 'white',
          padding: '12px 25px',
          borderRadius: '8px',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          📞 Book Counselling
        </button>
        <button style={{
          background: '#25d366',
          color: 'white',
          padding: '12px 25px',
          borderRadius: '8px',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          💬 Chat on WhatsApp
        </button>
        <button style={{
          background: '#ff5722',
          color: 'white',
          padding: '12px 25px',
          borderRadius: '8px',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          📱 Call Us
        </button>
      </div>
    </div>
  );

  const FooterLinks = () => (
    <div style={{
      background: '#f9f6f2',
      padding: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      marginTop: '30px'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {[
          { text: 'Privacy Policy', href: '/privacy-policy' },
          { text: 'Terms of Service', href: '/terms' },
          { text: 'Admissions', href: '/apply' },
          { text: 'Courses', href: '/courses' },
          { text: 'Contact', href: '/contact' }
        ].map((link, index) => (
          <a
            key={index}
            href={link.href}
            style={{
              color: '#8b5e3c',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <section className="academics-section">
        {/* Header */}
        <div className="section-block" style={{ 
          textAlign: 'center', 
          marginBottom: '40px',
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
            Download Brochure
          </h1>
          <p style={{ 
            fontSize: '1.3rem', 
            color: 'rgba(255,255,255,0.95)', 
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            Get the AngelLife Program Brochures
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(255,255,255,0.9)', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Choose your program(s), share your details, and instantly access the latest brochures. 
            You'll also receive a copy by email/WhatsApp for easy reference.
          </p>
        </div>

        {/* Main Content */}
        {!isSubmitted ? (
          <>
            <BrochurePicker />
            {selectedBrochures.length > 0 && <GatedForm />}
            <WhyDownload />
            <HelpSupport />
          </>
        ) : (
          <>
            <SuccessState />
            <WhyDownload />
            <HelpSupport />
          </>
        )}

        <FooterLinks />
      </section>
    </Layout>
  );
};

export default DownloadBrochure;