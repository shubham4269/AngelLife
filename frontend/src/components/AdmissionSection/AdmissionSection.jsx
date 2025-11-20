import React from "react";

const AdmissionSection = () => {
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
      style={{
        padding: "60px 8%",
        background: "#f9f6f2",
         borderRadius: "20px",
        margin: "50px 0",
      }}
      id="admission"
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "45px" }}>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#8b5e3c",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "6px",
            fontWeight: 600,
          }}
        >
         
        </div>

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

      {/* STEPPER */}
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
            style={{
              display: "flex",
              gap: "16px",
              background: "#fff",
              padding: "22px 26px",
              borderRadius: "14px",
              boxShadow: "0 4px 14px rgba(139,94,60,0.12)",
              alignItems: "flex-start",
            }}
          >
            {/* Step Number */}
            <div
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

            {/* Step Content */}
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

      {/* BUTTON ROW */}
<div style={{ marginTop: "25px", textAlign: "center" }}>
  <div style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
    
    {/* Redirect to Apply Page */}
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
        display: "inline-block",
        border: "none",
      }}
    >
      Book Free Counselling
    </a>

    {/* Redirect to Brochure Download Page */}
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
        display: "inline-block",
      }}
    >
      Download Course Brochure
    </a>

  </div>
</div>
    </section>
  );
};

export default AdmissionSection;
