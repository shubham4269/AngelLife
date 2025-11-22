import React, { useState, useEffect, useRef } from "react";

const AdmissionSection = () => {
  const [animateSteps, setAnimateSteps] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateSteps(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const handleSectionMouseEnter = () => {
    setAnimateSteps(false);
    setTimeout(() => {
      setAnimateSteps(true);
    }, 50);
  };

  const steps = [
    {
      index: 1,
      title: "Submit Application",
      text: "Share your details and preferred course through our application form or counselling team.",
    },
    {
      index: 2,
      title: "Counselling Session",
      text: "Speak to our expert counsellors to understand course options, eligibility, fees and career outcomes.",
    },
    {
      index: 3,
      title: "Eligibility Review",
      text: "Academic documents & background evaluated based on course requirements (especially for medical/aesthetics programs).",
    },
    {
      index: 4,
      title: "Fee Submission",
      text: "Confirm your seat with fee payment or approved EMI plan, followed by documentation.",
    },
    {
      index: 5,
      title: "Start Training",
      text: "Receive your induction schedule, app access and welcome kit as you begin your AngelLife journey.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "60px 0",
        background: "#f9f6f2",
        borderRadius: "0",
        margin: "50px 0",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        borderTop: "1px solid #d4c4b0",
        borderBottom: "1px solid #d4c4b0",
      }}
      id="admission"
      onMouseEnter={handleSectionMouseEnter}
    >
      <div style={{ padding: "0 8%" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "2rem",
              color: "#8b5e3c",
              marginBottom: "10px",
            }}
          >
            Admission Process
          </h2>

          <p style={{ color: "#5c4a3d", maxWidth: "760px", margin: "0 auto" }}>
            Simple, guided steps from enquiry to your first day in the AngelLife classroom.
          </p>
        </div>

        {/* STEPS */}
        <div
          style={{
            display: "grid",
            gap: "22px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {steps.map((step) => (
            <div
              key={step.index}
              className="admission-step"
              style={{
                display: "flex",
                gap: "16px",
                background: "#fff",
                padding: "22px 26px",
                borderRadius: "14px",
                boxShadow: "0 4px 14px rgba(139,94,60,0.12)",
                alignItems: "flex-start",
                opacity: animateSteps ? 1 : 0,
                transform: animateSteps
                  ? "translateY(0) rotateZ(0deg)"
                  : "translateY(-60px) rotateZ(-8deg)",
                transition: `all 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                  (step.index - 1) * 1.1
                }s`,
              }}
            >
              <div
                className="admission-step-number"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "#8b5e3c",
                  color: "#fff",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                {step.index}
              </div>

              <div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#3e2b23",
                    marginBottom: "4px",
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "#5c4a3d",
                    lineHeight: "1.5",
                    fontSize: ".9rem",
                  }}
                >
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
            <a
              href="/apply"
              style={{
                background: "#8b5e3c",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "8px",
                fontSize: ".9rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Book Free Counselling
            </a>

            <a
              href="/download-brochure"
              style={{
                background: "#e7dcd1",
                color: "#8b5e3c",
                border: "1px solid #8b5e3c",
                padding: "12px 22px",
                borderRadius: "8px",
                fontSize: ".9rem",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Download Course Brochure
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE FIX CSS */}
      <style>
        {`
          @media (max-width: 480px) {
            .admission-step {
              padding: 18px 16px !important;
              gap: 12px !important;
              align-items: center !important;
            }
            .admission-step-number {
              width: 32px !important;
              height: 32px !important;
              font-size: 0.85rem !important;
              flex-shrink: 0 !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default AdmissionSection;

