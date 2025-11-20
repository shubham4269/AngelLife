import React, { useEffect, useRef, useState } from "react";

const ScholarshipsSection = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Trigger animation on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "70px 8%",
        background: "#f9f6f2",
        borderRadius: "20px",
        margin: "50px 0",
      }}
      id="scholarships"
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div
          style={{
            color: "#8b5e3c",
            fontSize: ".9rem",
            fontWeight: 600,
            letterSpacing: ".5px",
            marginBottom: "6px",
            opacity: animate ? 1 : 0,
            transition: "0.6s ease",
          }}
        >
         
        </div>

        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2rem",
            color: "#8b5e3c",
            marginBottom: "10px",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(20px)",
            transition: "0.8s ease",
          }}
        >
          Scholarships & Financial Aid
        </h2>

        <p
          style={{
            color: "#5c4a3d",
            maxWidth: "760px",
            margin: "0 auto",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(20px)",
            transition: "1s ease",
          }}
        >
          We support deserving students with scholarships, EMI options and early
          bird benefits to make your global career more accessible.
        </p>
      </div>

      {/* SCHOLARSHIP CARDS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
        }}
      >
        {[
          {
            title: "Up to 20% Merit Scholarship",
            tag: "Merit-Based",
            desc: "Based on academic performance, entrance score and counsellor evaluation.",
          },
          {
            title: "Flexible EMI Options",
            tag: "Finance-Friendly",
            desc: "Easy monthly payment options through partnered financial institutions (T&C apply).",
          },
          {
            title: "Early Bird Benefits",
            tag: "Limited Period",
            desc: "Special fee benefits and bonuses for early admissions before batch start dates.",
          },
          {
            title: "Special Packages for Medical Courses",
            tag: "Doctors",
            desc: "Tailored fee structures and bundled modules for medical professionals joining aesthetics programs.",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "#ffffff",
              padding: "25px 22px",
              borderRadius: "16px",
              boxShadow: "0 4px 14px rgba(139,94,60,0.15)",
              border: "1px solid #e7dcd1",
              transition: "transform .3s ease, box-shadow .3s ease",
              opacity: animate ? 1 : 0,
              transform: animate
                ? "translateY(0)"
                : "translateY(30px)",
              transitionDelay: `${0.3 + i * 0.2}s`,
            }}
            className="scholar-card"
          >
            <strong
              style={{
                color: "#8b5e3c",
                fontSize: "1rem",
                display: "block",
                marginBottom: "8px",
              }}
            >
              {item.title}
            </strong>

            <span
              style={{
                display: "inline-block",
                background: "#e7dcd1",
                color: "#8b5e3c",
                padding: "4px 10px",
                borderRadius: "12px",
                fontSize: ".75rem",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              {item.tag}
            </span>

            <p style={{ color: "#3e2b23", fontSize: ".9rem", lineHeight: "1.5" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scholar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 28px rgba(139,94,60,0.22);
        }
      `}</style>
    </section>
  );
};

export default ScholarshipsSection;
