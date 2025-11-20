import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      q: "Do I need a medical background to join all courses?",
      a: "No. Many programs are open to 12th pass and graduates from any stream. However, select advanced aesthetics programs (especially injectables) are for medical professionals only.",
    },
    {
      q: "Are scholarships and EMI options available?",
      a: "Yes. Up to 20% merit scholarships and flexible EMI plans through partner institutions.",
    },
    {
      q: "What kind of placement support will I receive?",
      a: "Interview preparation, portfolio building and placement tie-ups with clinics, salons & wellness centers.",
    },
    {
      q: "Do you support international students?",
      a: "Yes. We assist with documentation, hybrid learning and accommodation references.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="faq-section"
      style={{
        padding: "60px 8%",
        background: "#f9f6f2",
        borderRadius: "20px",
        
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div
          style={{
            fontSize: ".85rem",
            fontWeight: 600,
            color: "#8b5e3c",
            letterSpacing: ".5px",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Questions Answered
        </div>

        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            color: "#8b5e3c",
            fontSize: "2rem",
            marginBottom: "10px",
          }}
        >
          Frequently Asked Questions
        </h2>

        <p style={{ color: "#5c4a3d", maxWidth: "720px", margin: "0 auto" }}>
          Get clarity on courses, fees, scholarships, placements and support for
          international students.
        </p>
      </div>

      {/* GRID 50–50 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT – FAQ CATEGORY + BOOK */}
        <div>
          {/* CATEGORY CHIPS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {[
              "Courses",
              "Fees & Scholarships",
              "Placements",
              "International Students",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#e7dcd1",
                  color: "#8b5e3c",
                  padding: "7px 14px",
                  borderRadius: "20px",
                  fontSize: ".8rem",
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    background: "#8b5e3c",
                    borderRadius: "50%",
                  }}
                ></span>
                {item}
              </div>
            ))}
          </div>

          {/* BOOK CARD */}
          <div
            style={{
              background: "#fff",
              padding: "28px",
              borderRadius: "16px",
              boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <img
              src="/Images/book_front_cover.png"
              alt="Book"
              style={{
                width: "30%",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />

            <h3
              style={{
                color: "#8b5e3c",
                marginBottom: "10px",
                fontWeight: 600,
                fontSize: "1.1rem",
              }}
            >
              AngelLife’s Art & Anatomy of Aesthetics
            </h3>

            <p style={{ color: "#5c4a3d", fontSize: ".9rem", marginBottom: "18px" }}>
              A perfect blend of science, art, and clinical practice — ideal for
              doctors, cosmetologists and students.
            </p>

            <a
              href="https://amazon.in"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                background: "#8b5e3c",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: ".85rem",
                fontWeight: 600,
              }}
            >
              Buy on Amazon
            </a>
          </div>
        </div>

        {/* RIGHT – FAQ ACCORDION */}
        <div>
          {faqs.map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "16px",
                marginBottom: "15px",
                boxShadow: "0 4px 14px rgba(139,94,60,0.12)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => toggle(i)}
            >
              {/* HEADER */}
              <div
                style={{
                  padding: "18px 22px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: "600",
                  color: "#3e2b23",
                }}
              >
                {item.q}

                <span
                  style={{
                    fontSize: "20px",
                    color: "#8b5e3c",
                    transition: "transform 0.3s",
                    transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                  }}
                >
                  +
                </span>
              </div>

              {/* BODY */}
              <div
                style={{
                  maxHeight: openIndex === i ? "200px" : "0",
                  overflow: "hidden",
                  padding: openIndex === i ? "0 22px 18px" : "0 22px",
                  transition: "all 0.35s ease",
                  color: "#5c4a3d",
                  fontSize: ".9rem",
                }}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 850px) {
            .faq-section div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default FAQSection;
