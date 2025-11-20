import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Heroslider() {
  const navigate = useNavigate();
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  // Trigger animation on page load
  useEffect(() => {
    setAnimateNumbers(true);
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (!animateNumbers) return;

    const targets = [20, 90, 100];
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const target = targets[i];
          if (count < target) return count + Math.ceil(target / 20);
          return target;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [animateNumbers]);

  const handleMouseEnter = () => {
    setAnimateNumbers(true);
    setCounts([0, 0, 0]);
  };
  return (
    <section
      className="hero-premium"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3762660/pexels-photo-3762660.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 8%",
         paddingTop: "100px",
        position: "relative",
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="hero-container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
          color: "white",
        }}
      >
        {/* LEFT TEXT */}
        <div>
          <div
            style={{
              fontSize: ".95rem",
              letterSpacing: ".5px",
              textTransform: "uppercase",
              fontWeight: "600",
              color: "#e7dcd1",
              marginBottom: "10px",
            }}
          >
            Premium Aesthetics Education
          </div>

          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "2.4rem",
              lineHeight: "1.3",
              marginBottom: "14px",
            }}
          >
            Build Your Global Career in Aesthetics & Cosmetology
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "#f5f5f5",
              marginBottom: "20px",
              maxWidth: "500px",
            }}
          >
            UGC-Recognized Degrees • International Faculty • Advanced Clinics • 1000+
            Successful Students
          </p>

          {/* USP */}
          <div style={{ marginBottom: "25px" }}>
            {[
              "Internationally Awarded Institute",
              "Hands-on Training on US-FDA Approved Machines",
              "India + International Centers",
            ].map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
                  fontSize: ".9rem",
                  color: "#f9f6f2",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#8b5e3c",
                    borderRadius: "50%",
                  }}
                ></span>
                {t}
              </div>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
            <a
              href="/apply"
              style={{
                background: "#8b5e3c",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "8px",
                fontSize: ".9rem",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Apply Now
            </a>

            <a
              href="/download-brochure"
              style={{
                background: "transparent",
                color: "#e7dcd1",
                border: "1px solid #e7dcd1",
                padding: "12px 22px",
                borderRadius: "8px",
                fontSize: ".9rem",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Download Brochure
            </a>

            <button
              onClick={() =>
    window.open(
      "https://wa.me/919910478281?text=Hi%2C%20I%20want%20to%20know%20about%20courses%20and%20admissions.",
      "_blank"
    )
  }
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "12px 22px",
                borderRadius: "8px",
                fontSize: ".9rem",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              WhatsApp Counselling
            </button>
          </div>
        </div>

        {/* RIGHT HERO CARD */}
        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            padding: "30px",
            borderRadius: "18px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            AngelLife Clinics
          </div>

          <p
            style={{ fontSize: ".9rem", marginBottom: "20px", color: "#f5f5f5" }}
          >
            US-FDA Machines • Real Patients • International Mentors
          </p>

          {/* Counters */}
          <div
            style={{ display: "flex", gap: "20px", marginBottom: "20px" }}
            onMouseEnter={handleMouseEnter}
          >
            {[
              { count: 20, label: "Years of Leadership" },
              { count: 90, label: "Placement Success" },
              { count: 100, label: "International Awards" },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#e7dcd1",
                  }}
                >
                  {counts[i]}+
                </div>
                <div style={{ fontSize: ".75rem", opacity: 0.8 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <button
             onClick={() => navigate("/courses")}
            style={{
              background: "#8b5e3c",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
           Explore Courses
          </button>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>
        {`
          @media (max-width: 850px) {
            .hero-container {
              grid-template-columns: 1fr !important;
              text-align: center;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Heroslider;
