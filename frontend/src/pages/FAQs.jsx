import React, { useState, useEffect, useRef } from "react";
import Layout from "../layout/Layout";
import "./Academic.css";

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState("admissions");
  const [openAccordions, setOpenAccordions] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState([]);
  const searchInputRef = useRef(null);

  const categories = [
    { id: "admissions", label: "Admissions", icon: "📝" },
    { id: "eligibility", label: "Eligibility", icon: "✅" },
    { id: "programs", label: "Programs & Practicals", icon: "🔬" },
    { id: "exams", label: "Exams & Attendance", icon: "📚" },
    { id: "fees", label: "Fees & Scholarships", icon: "💰" },
    { id: "placements", label: "Placements & Careers", icon: "🎯" },
    { id: "centres", label: "Centres & Modes", icon: "🏢" },
    { id: "certificates", label: "Certificates & Policies", icon: "📜" },
    { id: "support", label: "Support", icon: "🤝" }
  ];

  const faqData = [
    // Admissions
    {
      id: "q1",
      category: "admissions",
      question: "How do I apply?",
      answer: "Fill the short application form, choose your program, and book a free counselling call. Our team will guide you through eligibility, documents, and batch start.",
      tags: ["apply", "application", "admission"]
    },
    {
      id: "q2", 
      category: "admissions",
      question: "What documents are needed?",
      answer: "ID proof, recent photo, academic transcripts/mark sheets, and any professional certificates (for medical tracks: valid registration/license).",
      tags: ["documents", "requirements", "papers"]
    },
    {
      id: "q3",
      category: "admissions", 
      question: "When are the intakes?",
      answer: "Regular intakes in January, July, and November. Limited seats per batch to ensure hands-on mentoring.",
      tags: ["intake", "admission", "dates", "batch"]
    },
    {
      id: "q4",
      category: "admissions",
      question: "Can I reserve a seat and submit documents later?",
      answer: "Yes. You may block a seat after counselling; document verification must be completed before batch commencement.",
      tags: ["reserve", "seat", "documents", "later"]
    },

    // Eligibility
    {
      id: "q5",
      category: "eligibility",
      question: "Who can join Degree and Diploma programs?",
      answer: "+2/12th pass and graduates from any stream can apply (program-wise prerequisites may vary).",
      tags: ["eligibility", "degree", "diploma", "12th", "graduate"]
    },
    {
      id: "q6",
      category: "eligibility", 
      question: "Who can join M.Sc (Facial Aesthetics & Cosmetology) or PGD (Medical)?",
      answer: "Medical professionals (e.g., MBBS/MD/BDS or as specified) with valid registration.",
      tags: ["msc", "pgd", "medical", "mbbs", "bds", "registration"]
    },
    {
      id: "q7",
      category: "eligibility",
      question: "I'm a working beautician. Which track suits me?",
      answer: "Diploma or advanced certifications are ideal for upskilling with job-ready practicals and internships.",
      tags: ["beautician", "working", "track", "diploma", "certification"]
    },

    // Programs & Practicals
    {
      id: "q8",
      category: "programs",
      question: "How much hands-on practice will I get?",
      answer: "All programs include structured lab hours, case documentation, and supervised floor practice. You'll work on live models where applicable.",
      tags: ["hands-on", "practice", "lab", "practical", "models"]
    },
    {
      id: "q9",
      category: "programs",
      question: "Which technologies/devices are used?",
      answer: "Exposure to US‑FDA approved devices and industry-grade tools. Exact devices may vary by centre and module availability.",
      tags: ["technology", "devices", "fda", "tools", "equipment"]
    },
    {
      id: "q10",
      category: "programs",
      question: "Do you provide study materials?",
      answer: "Yes—app-based notes, SOP sheets, demo videos, and parameter references are provided for all eligible programs.",
      tags: ["study", "materials", "app", "notes", "videos"]
    },
    {
      id: "q11",
      category: "programs",
      question: "Can I attend workshops across centres?",
      answer: "Subject to availability, students may access inter‑centre workshops, masterclasses, and guest sessions.",
      tags: ["workshops", "centres", "masterclass", "guest", "sessions"]
    },

    // Exams & Attendance
    {
      id: "q12",
      category: "exams",
      question: "How are assessments conducted?",
      answer: "Combination of OSCEs, viva, module tests, and case records/mini projects. Practical competency is weighted significantly.",
      tags: ["assessment", "exams", "osce", "viva", "tests"]
    },
    {
      id: "q13",
      category: "exams",
      question: "What is the attendance policy?",
      answer: "We expect high attendance to maintain hands-on proficiency. Minimum attendance thresholds are communicated per program.",
      tags: ["attendance", "policy", "minimum", "thresholds"]
    },
    {
      id: "q14",
      category: "exams",
      question: "Can I defer an exam?",
      answer: "Yes, on approved grounds with supporting documents. A reschedule window is provided per academic calendar.",
      tags: ["defer", "exam", "reschedule", "approved", "documents"]
    },

    // Fees & Scholarships
    {
      id: "q15",
      category: "fees",
      question: "Are scholarships available?",
      answer: "Yes. Merit-based and need-based scholarships (limited seats). Eligibility is confirmed during counselling.",
      tags: ["scholarship", "merit", "need-based", "eligibility"]
    },
    {
      id: "q16",
      category: "fees",
      question: "Do you offer EMI or flexible payments?",
      answer: "EMI/instalment plans are available for eligible students.",
      tags: ["emi", "payment", "instalment", "flexible"]
    },
    {
      id: "q17",
      category: "fees",
      question: "Are prices the same across centres?",
      answer: "Program structures are standardised, while centre-level operational costs may vary. Final inclusions are shared during counselling.",
      tags: ["prices", "centres", "costs", "standardised"]
    },

    // Placements & Careers
    {
      id: "q18",
      category: "placements",
      question: "Do you provide placements?",
      answer: "We offer placement assistance through our partner network of clinics, hospitals, wellness chains, and studios. Selection depends on candidate performance and employer interviews.",
      tags: ["placement", "assistance", "jobs", "clinics", "hospitals"]
    },
    {
      id: "q19",
      category: "placements",
      question: "Are internships included?",
      answer: "Diploma and Degree tracks generally include internships or mandatory practical exposure.",
      tags: ["internship", "diploma", "degree", "practical", "exposure"]
    },
    {
      id: "q20",
      category: "placements",
      question: "What roles do graduates get?",
      answer: "Aesthetic therapist, cosmetology executive, clinic coordinator, hair & makeup specialist, trainer/educator, or entrepreneurship pathways.",
      tags: ["roles", "jobs", "therapist", "executive", "coordinator", "specialist"]
    },

    // Centres & Modes
    {
      id: "q21",
      category: "centres",
      question: "Where are the centres located?",
      answer: "Mumbai (HO), Lucknow, Kolkata, Ranchi, Prayagraj, and international hubs like Nigeria and Tanzania. Centre availability is updated periodically.",
      tags: ["centres", "location", "mumbai", "lucknow", "kolkata", "international"]
    },
    {
      id: "q22",
      category: "centres",
      question: "Are classes online or offline?",
      answer: "Core practicals are in‑person. Theory support and resources are provided via the AngelLife learning app. Some guest sessions run online.",
      tags: ["online", "offline", "classes", "practical", "theory", "app"]
    },

    // Certificates & Policies
    {
      id: "q23",
      category: "certificates",
      question: "What certification will I receive?",
      answer: "Program-specific certificates/diplomas/degree credentials as applicable. Medical tracks note eligibility requirements on the certificate where relevant.",
      tags: ["certification", "certificate", "diploma", "degree", "credentials"]
    },
    {
      id: "q24",
      category: "certificates",
      question: "What is the refund or deferment policy?",
      answer: "Refunds/deferments follow Institute policy and statutory norms. Full details are shared at admission; approved cases require formal request and documentation.",
      tags: ["refund", "deferment", "policy", "statutory", "documentation"]
    },
    {
      id: "q25",
      category: "certificates",
      question: "Do you issue transcripts and experience letters?",
      answer: "Yes. On successful completion and clearance of dues, transcripts and training/experience letters are issued as applicable.",
      tags: ["transcripts", "experience", "letters", "completion", "dues"]
    },

    // Support
    {
      id: "q26",
      category: "support",
      question: "How can I talk to a counsellor?",
      answer: "Use Book Counselling, WhatsApp, or call us during working hours. Email: care@angellife.in.",
      tags: ["counsellor", "talk", "whatsapp", "call", "email"]
    },
    {
      id: "q27",
      category: "support",
      question: "Can international students apply?",
      answer: "Yes. Support with admission documentation is provided. Visa and travel arrangements are student‑led.",
      tags: ["international", "students", "visa", "travel", "documentation"]
    },
    {
      id: "q28",
      category: "support",
      question: "Accessibility & safety?",
      answer: "We follow hygiene, sterilization, and safety protocols; device use is supervised. Accessibility support varies by centre—please inform us of specific needs.",
      tags: ["accessibility", "safety", "hygiene", "sterilization", "protocols"]
    }
  ];

  // Filter FAQs based on search term and active category
  useEffect(() => {
    let filtered = faqData;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(faq => faq.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(searchLower) ||
        faq.answer.toLowerCase().includes(searchLower) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );

      // Fire search analytics event
      if (window.gtag) {
        window.gtag('event', 'faq_search_used', {
          search_term: searchTerm,
          results_count: filtered.length
        });
      }

      // Fire no results event
      if (filtered.length === 0 && window.gtag) {
        window.gtag('event', 'faq_no_results', {
          search_term: searchTerm
        });
      }
    }

    setFilteredFAQs(filtered);
  }, [activeCategory, searchTerm]);

  // Handle accordion toggle
  const toggleAccordion = (faqId) => {
    const newOpenAccordions = new Set(openAccordions);
    if (newOpenAccordions.has(faqId)) {
      newOpenAccordions.delete(faqId);
    } else {
      newOpenAccordions.add(faqId);
      
      // Fire analytics event
      if (window.gtag) {
        window.gtag('event', 'faq_opened', {
          faq_id: faqId,
          category: activeCategory
        });
      }
    }
    setOpenAccordions(newOpenAccordions);
  };

  // Handle deep linking
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && hash.startsWith('q')) {
      const faq = faqData.find(f => f.id === hash);
      if (faq) {
        setActiveCategory(faq.category);
        setOpenAccordions(new Set([hash]));
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            element.focus();
          }
        }, 100);
      }
    }
  }, []);

  // Keyboard navigation
  const handleKeyDown = (event, faqId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleAccordion(faqId);
    }
  };

  const CategoryTabs = () => (
    <div style={{
      background: '#f9f6f2',
      padding: '20px',
      borderRadius: '15px',
      marginBottom: '30px',
      border: '2px solid #f0f0f0'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center'
      }}>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setSearchTerm("");
              setOpenAccordions(new Set());
            }}
            style={{
              background: activeCategory === category.id ? '#8b5e3c' : 'white',
              color: activeCategory === category.id ? 'white' : '#5c4a3d',
              border: activeCategory === category.id ? '2px solid #8b5e3c' : '2px solid #e9ecef',
              padding: '12px 20px',
              borderRadius: '25px',
              fontSize: '0.9rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span>{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );

  const SearchBar = () => (
    <div style={{
      background: '#f9f6f2',
      padding: '30px',
      borderRadius: '15px',
      marginBottom: '30px',
      border: '2px solid #f0f0f0'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        position: 'relative'
      }}>
        <label htmlFor="faq-search" style={{
          display: 'block',
          marginBottom: '10px',
          color: '#8b5e3c',
          fontWeight: '600',
          fontSize: '1.1rem',
          textAlign: 'center'
        }}>
          🔍 Search FAQs
        </label>
        <input
          id="faq-search"
          ref={searchInputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type your question or keyword..."
          style={{
            width: '100%',
            padding: '15px 20px',
            borderRadius: '30px',
            border: '2px solid #e9ecef',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.3s ease'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#8b5e3c';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = '#e9ecef';
          }}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            style={{
              position: 'absolute',
              right: '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            ✕
          </button>
        )}
      </div>
      {searchTerm && (
        <p style={{
          textAlign: 'center',
          marginTop: '10px',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} found for "{searchTerm}"
        </p>
      )}
    </div>
  );

  const FAQAccordion = () => (
    <div style={{
      background: '#f9f6f2',
      borderRadius: '15px',
      overflow: 'hidden',
      border: '2px solid #f0f0f0'
    }}>
      {filteredFAQs.length === 0 ? (
        <div style={{
          padding: '60px 40px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤔</div>
          <h3 style={{
            color: '#5c4a3d',
            marginBottom: '15px',
            fontSize: '1.5rem'
          }}>
            No results found
          </h3>
          <p style={{
            color: '#666',
            fontSize: '1rem',
            marginBottom: '25px'
          }}>
            Try different keywords or browse by category
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("admissions");
            }}
            style={{
              background: '#8b5e3c',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '8px',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Clear Search
          </button>
        </div>
      ) : (
        filteredFAQs.map((faq, index) => (
          <div
            key={faq.id}
            id={faq.id}
            style={{
              borderBottom: index < filteredFAQs.length - 1 ? '1px solid #f0f0f0' : 'none'
            }}
          >
            <button
              onClick={() => toggleAccordion(faq.id)}
              onKeyDown={(e) => handleKeyDown(e, faq.id)}
              aria-expanded={openAccordions.has(faq.id)}
              aria-controls={`answer-${faq.id}`}
              style={{
                width: '100%',
                padding: '25px 30px',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <h3 style={{
                color: '#8b5e3c',
                margin: '0',
                fontSize: '1.1rem',
                fontWeight: '600',
                lineHeight: '1.4',
                flex: 1,
                paddingRight: '20px'
              }}>
                {faq.question}
              </h3>
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: openAccordions.has(faq.id) ? '#8b5e3c' : '#e9ecef',
                color: openAccordions.has(faq.id) ? 'white' : '#666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                fontWeight: '700',
                transition: 'all 0.3s ease',
                transform: openAccordions.has(faq.id) ? 'rotate(45deg)' : 'rotate(0deg)'
              }}>
                +
              </div>
            </button>
            
            {openAccordions.has(faq.id) && (
              <div
                id={`answer-${faq.id}`}
                role="region"
                aria-labelledby={faq.id}
                style={{
                  padding: '0 30px 25px',
                  background: 'white'
                }}
              >
                <p style={{
                  color: '#5c4a3d',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );

  const UsingThisPage = () => (
    <div style={{
      background: '#f9f6f2',
      padding: '30px',
      borderRadius: '15px',
      marginBottom: '30px',
      border: '2px solid #8b5e3c'
    }}>
      <h3 style={{
        color: '#8b5e3c',
        marginBottom: '15px',
        fontSize: '1.3rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>
        📖 Using this page
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px'
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.8)',
          padding: '15px',
          borderRadius: '8px'
        }}>
          <h4 style={{
            color: '#8b5e3c',
            margin: '0 0 8px 0',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            Browse by Category
          </h4>
          <p style={{
            color: '#5c4a3d',
            margin: '0',
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            Use the tabs above to filter questions by topic
          </p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.8)',
          padding: '15px',
          borderRadius: '8px'
        }}>
          <h4 style={{
            color: '#8b5e3c',
            margin: '0 0 8px 0',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            Search Questions
          </h4>
          <p style={{
            color: '#5c4a3d',
            margin: '0',
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            Type keywords to find specific answers quickly
          </p>
        </div>
        <div style={{
          background: 'rgba(255,255,255,0.8)',
          padding: '15px',
          borderRadius: '8px'
        }}>
          <h4 style={{
            color: '#8b5e3c',
            margin: '0 0 8px 0',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            Can't Find Your Question?
          </h4>
          <p style={{
            color: '#5c4a3d',
            margin: '0',
            fontSize: '0.9rem',
            lineHeight: '1.4'
          }}>
            Use "Ask a Counsellor" at the bottom for personalized help
          </p>
        </div>
      </div>
    </div>
  );

  const CantFindQuestion = () => (
    <div style={{
      background: 'linear-gradient(135deg, #8b5e3c 0%, #a67c5a 100%)',
      color: 'white',
      padding: '50px',
      borderRadius: '20px',
      textAlign: 'center',
      marginTop: '40px'
    }}>
      <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💬</div>
      <h2 style={{
        color: 'white',
        marginBottom: '15px',
        fontSize: '2rem',
        fontWeight: '700'
      }}>
        Can't find your question?
      </h2>
      <p style={{
        color: 'rgba(255,255,255,0.9)',
        fontSize: '1.2rem',
        marginBottom: '30px',
        lineHeight: '1.5'
      }}>
        Ask our team and get a personalised response within one working day.
      </p>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        flexWrap: 'wrap'
      }}>
        <button style={{
          background: 'rgba(255,255,255,0.2)',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '8px',
          border: '2px solid rgba(255,255,255,0.3)',
          fontWeight: '600',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease'
        }}>
          Ask a Counsellor
        </button>
        <button style={{
          background: 'white',
          color: '#8b5e3c',
          padding: '15px 30px',
          borderRadius: '8px',
          border: 'none',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Download Brochure
        </button>
        <button style={{
          background: 'rgba(255,255,255,0.2)',
          color: 'white',
          padding: '15px 30px',
          borderRadius: '8px',
          border: '2px solid rgba(255,255,255,0.3)',
          fontWeight: '600',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)'
        }}>
          Explore Courses
        </button>
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
            Frequently Asked Questions
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255,255,255,0.9)', 
            maxWidth: '900px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Quick answers to the most common questions about admissions, programs, practicals, 
            assessments, scholarships, and career support at AngelLife International Institute.
          </p>
        </div>

        {/* Using This Page */}
        <UsingThisPage />

        {/* Category Tabs */}
        <CategoryTabs />

        {/* Search Bar */}
        <SearchBar />

        {/* FAQ Accordion */}
        <FAQAccordion />

        {/* Can't Find Question */}
        <CantFindQuestion />
      </section>
    </Layout>
  );
};

export default FAQs;